<?php
/**
 * Ranking global de BUG RUN (PHP + MySQL en el propio Hostinger).
 *
 *   GET  /api/scores.php                         → { scores: [{ name, score }] }  (top 10)
 *   POST /api/scores.php { action: "start" }     → { token }                      (al empezar partida)
 *   POST /api/scores.php { action: "submit", token, name, score } → { ok, rank, scores }
 *
 * Antitrampas (razonable, no perfecto: el juego corre en el navegador):
 *  - cada partida necesita un token de un solo uso, ligado a la IP que lo pidió;
 *  - la puntuación no puede superar lo físicamente posible en el tiempo transcurrido;
 *  - límite de partidas por IP y hora;
 *  - nombres de 3 letras A-Z (sin texto libre).
 * La IP nunca se guarda en claro: HMAC-SHA256 con un secreto, y se borra a las 24 h.
 *
 * Credenciales fuera de public_html: ~/arcade-config.php (ver scripts/arcade-config.example.php).
 */
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

const TOP = 10;
const RUNS_PER_HOUR = 60;
const TOKEN_TTL = 1800; // s: una partida más larga que esto no es realista

function out(int $code, array $body): void
{
    http_response_code($code);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

/** Máxima puntuación alcanzable en $t segundos (misma física que src/scripts/arcade.ts). */
function maxScore(float $t): int
{
    // velocidad = min(420, 150 + 9t) px/s; puntos = distancia / 8
    $dist = $t <= 30 ? 150 * $t + 4.5 * $t * $t : 8550 + 420 * ($t - 30);
    return (int) ceil($dist / 8 * 1.05) + 10;
}

$cfgFile = getenv('ARCADE_CONFIG') ?: dirname(__DIR__, 2) . '/arcade-config.php';
if (!is_file($cfgFile)) {
    out(503, ['error' => 'not_configured']);
}
$cfg = require $cfgFile;

try {
    $db = new PDO(
        $cfg['dsn'] ?? "mysql:host={$cfg['db_host']};dbname={$cfg['db_name']};charset=utf8mb4",
        $cfg['db_user'] ?? null,
        $cfg['db_pass'] ?? null,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES => false],
    );
} catch (Throwable $e) {
    out(503, ['error' => 'db_unavailable']);
}

$top = static function () use ($db): array {
    $rows = $db->query('SELECT name, score FROM arcade_scores ORDER BY score DESC, created_at ASC LIMIT ' . TOP)->fetchAll(PDO::FETCH_ASSOC);
    return array_map(static fn($r) => ['name' => $r['name'], 'score' => (int) $r['score']], $rows);
};

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($method === 'GET') {
    out(200, ['scores' => $top()]);
}
if ($method !== 'POST') {
    out(405, ['error' => 'method_not_allowed']);
}

// Solo peticiones desde la propia web (los navegadores siempre mandan Origin en POST con fetch)
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (!in_array($origin, $cfg['origins'], true)) {
    out(403, ['error' => 'forbidden_origin']);
}

$input = json_decode((string) file_get_contents('php://input', false, null, 0, 2048), true);
if (!is_array($input)) {
    out(400, ['error' => 'bad_json']);
}

$now = time();
$ip = hash_hmac('sha256', $_SERVER['REMOTE_ADDR'] ?? '', $cfg['secret']);

try {
    if (($input['action'] ?? '') === 'start') {
        $db->prepare('DELETE FROM arcade_runs WHERE started_at < ?')->execute([$now - 86400]);
        $q = $db->prepare('SELECT COUNT(*) FROM arcade_runs WHERE ip_hash = ? AND started_at > ?');
        $q->execute([$ip, $now - 3600]);
        if ((int) $q->fetchColumn() >= RUNS_PER_HOUR) {
            out(429, ['error' => 'too_many_runs']);
        }
        $token = bin2hex(random_bytes(16));
        $db->prepare('INSERT INTO arcade_runs (token, ip_hash, started_at) VALUES (?, ?, ?)')->execute([$token, $ip, $now]);
        out(200, ['token' => $token]);
    }

    if (($input['action'] ?? '') === 'submit') {
        $token = (string) ($input['token'] ?? '');
        $name = strtoupper((string) ($input['name'] ?? ''));
        $score = $input['score'] ?? null;
        if (!preg_match('/^[a-f0-9]{32}$/', $token) || !preg_match('/^[A-Z]{3}$/', $name) || !is_int($score) || $score < 1 || $score > 1000000) {
            out(400, ['error' => 'invalid']);
        }

        $q = $db->prepare('SELECT started_at FROM arcade_runs WHERE token = ? AND ip_hash = ? AND used = 0');
        $q->execute([$token, $ip]);
        $started = $q->fetchColumn();
        if ($started === false) {
            out(403, ['error' => 'invalid_token']);
        }
        $elapsed = $now - (int) $started;
        if ($elapsed > TOKEN_TTL || $score > maxScore($elapsed + 2)) {
            out(422, ['error' => 'implausible']);
        }

        // Marcar el token como usado de forma atómica (evita enviar dos veces la misma partida)
        $u = $db->prepare('UPDATE arcade_runs SET used = 1 WHERE token = ? AND used = 0');
        $u->execute([$token]);
        if ($u->rowCount() !== 1) {
            out(403, ['error' => 'invalid_token']);
        }

        $db->prepare('INSERT INTO arcade_scores (name, score, created_at) VALUES (?, ?, ?)')->execute([$name, $score, $now]);
        $r = $db->prepare('SELECT COUNT(*) FROM arcade_scores WHERE score > ?');
        $r->execute([$score]);
        out(200, ['ok' => true, 'rank' => (int) $r->fetchColumn() + 1, 'scores' => $top()]);
    }
} catch (Throwable $e) {
    out(500, ['error' => 'server']);
}

out(400, ['error' => 'unknown_action']);
