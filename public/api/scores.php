<?php
/**
 * Ranking global de BUG RUN (PHP + MySQL en el propio Hostinger).
 *
 *   GET  /api/scores.php?page=N                  → { scores: [{ rank, name, score }], page, pages, total }
 *   POST /api/scores.php { action: "start" }     → { token }                      (al empezar partida)
 *   POST /api/scores.php { action: "submit", token, name, score } → { ok, rank, name, ...página donde ha quedado }
 *
 * Antitrampas (razonable, no perfecto: el juego corre en el navegador):
 *  - cada partida necesita un token de un solo uso, ligado a la IP que lo pidió;
 *  - la puntuación no puede superar lo físicamente posible en el tiempo transcurrido;
 *  - límite de partidas por IP y hora (y global), y de puntuaciones guardadas por IP y día;
 *  - una sola fila por nombre (su mejor marca) y tope de MAX_ROWS filas en total;
 *  - nombres de 3-12 letras/números (sin espacios ni símbolos) y filtro de insultos.
 * La IP nunca se guarda en claro: HMAC-SHA256 con un secreto, y se borra a las 24 h.
 *
 * Credenciales fuera de public_html: ~/arcade-config.php (ver scripts/arcade-config.example.php).
 * Las tablas se crean y actualizan solas (ver MIGRATIONS): basta con crear la base de datos vacía.
 */
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

const PER_PAGE = 10;
const RUNS_PER_HOUR = 60;          // partidas que puede empezar una IP por hora
const GLOBAL_RUNS_PER_HOUR = 3000; // partidas por hora entre todas las IP
const SAVES_PER_DAY = 5;           // puntuaciones que puede guardar una IP cada 24 h
const MAX_ROWS = 1000;             // tamaño máximo del ranking (se conservan los mejores)
const MIN_SCORE = 10;              // por debajo no se guarda (evita partidas de 1 segundo)
const TOKEN_TTL = 1800; // s: una partida más larga que esto no es realista

function out(int $code, array $body): void
{
    http_response_code($code);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

/**
 * Migraciones automáticas del esquema. Cada paso numerado se aplica UNA sola vez, en orden, y la
 * versión aplicada se guarda en arcade_meta. Para cambiar las tablas: añade un paso nuevo al final
 * (nunca edites ni borres uno ya publicado). Se ejecutan solas en la primera petición tras subir el PHP.
 */
const MIGRATIONS = [
    1 => [
        'CREATE TABLE IF NOT EXISTS arcade_runs (
            token      CHAR(32)     NOT NULL PRIMARY KEY,
            ip_hash    CHAR(64)     NOT NULL,
            started_at INT UNSIGNED NOT NULL,
            used       TINYINT(1)   NOT NULL DEFAULT 0,
            KEY idx_ip_time (ip_hash, started_at),
            KEY idx_started (started_at)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4',
        'CREATE TABLE IF NOT EXISTS arcade_scores (
            id         INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
            name       CHAR(3)      NOT NULL,
            score      INT UNSIGNED NOT NULL,
            created_at INT UNSIGNED NOT NULL,
            KEY idx_score (score)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4',
    ],
    // Nombres de 3-12 caracteres en lugar de 3 iniciales
    2 => ['ALTER TABLE arcade_scores MODIFY name VARCHAR(12) NOT NULL'],
    // Ranking paginado: orden estable por puntos y llegada
    3 => ['ALTER TABLE arcade_scores DROP INDEX idx_score, ADD INDEX idx_rank (score DESC, id)'],
    // Una fila por nombre (su mejor marca): se eliminan duplicados y se impone un índice único
    4 => [
        'DELETE s1 FROM arcade_scores s1 JOIN arcade_scores s2
           ON s1.name = s2.name AND (s1.score < s2.score OR (s1.score = s2.score AND s1.id > s2.id))',
        'ALTER TABLE arcade_scores ADD UNIQUE KEY uq_name (name)',
    ],
];

function migrate(PDO $db): void
{
    $latest = max(array_keys(MIGRATIONS));
    $version = static function () use ($db): int {
        try {
            return (int) $db->query("SELECT v FROM arcade_meta WHERE k = 'schema'")->fetchColumn();
        } catch (PDOException $e) {
            return -1; // aún no existe arcade_meta
        }
    };
    if ($version() >= $latest) {
        return; // caso normal: una sola consulta rápida por petición
    }
    // Evita que dos peticiones simultáneas migren a la vez
    if ((int) $db->query("SELECT GET_LOCK('arcade_migrate', 10)")->fetchColumn() !== 1) {
        throw new RuntimeException('migration_lock');
    }
    try {
        $db->exec('CREATE TABLE IF NOT EXISTS arcade_meta (k VARCHAR(32) NOT NULL PRIMARY KEY, v VARCHAR(64) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4');
        $current = max(0, $version());
        foreach (MIGRATIONS as $n => $steps) {
            if ($n <= $current) {
                continue;
            }
            foreach ($steps as $sql) {
                $db->exec($sql); // en MySQL cada ALTER/CREATE confirma solo: por eso se guarda la versión paso a paso
            }
            $db->prepare("REPLACE INTO arcade_meta (k, v) VALUES ('schema', ?)")->execute([(string) $n]);
        }
    } finally {
        $db->query("SELECT RELEASE_LOCK('arcade_migrate')");
    }
}

/** Deja el nombre en su forma "básica" para compararlo: minúsculas, sin tildes, leetspeak → letras, sin repeticiones. */
function normalizeName(string $s): string
{
    $s = mb_strtolower($s, 'UTF-8');
    $s = strtr($s, ['á' => 'a', 'à' => 'a', 'ä' => 'a', 'â' => 'a', 'é' => 'e', 'è' => 'e', 'ë' => 'e', 'ê' => 'e', 'í' => 'i', 'ì' => 'i', 'ï' => 'i', 'î' => 'i', 'ó' => 'o', 'ò' => 'o', 'ö' => 'o', 'ô' => 'o', 'ú' => 'u', 'ù' => 'u', 'ü' => 'u', 'û' => 'u', 'ñ' => 'n', 'ç' => 'c']);
    $s = strtr($s, ['0' => 'o', '1' => 'i', '3' => 'e', '4' => 'a', '5' => 's', '7' => 't', '8' => 'b', '@' => 'a', '$' => 's', '_' => '', '-' => '']);
    return (string) preg_replace('/(.)\1+/', '$1', $s); // "puuuta" → "puta"
}

/** Censura básica de insultos y palabrotas (ES/EN). Se comparan formas normalizadas por subcadena. */
function isRude(string $name): bool
{
    static $words = [
        // español
        'puta', 'puto', 'mierda', 'polla', 'coño', 'joder', 'jodete', 'cabron', 'maricon', 'marica', 'gilipollas',
        'subnormal', 'imbecil', 'idiota', 'zorra', 'folla', 'verga', 'chupala', 'chupamela', 'hijoputa',
        'mamon', 'pajero', 'cerdo', 'retrasado', 'tonto', 'estupido', 'guarra', 'perra', 'malparido', 'pendejo', 'culero',
        // inglés
        'fuck', 'shit', 'cunt', 'nigg', 'niga', 'fag', 'dick', 'cock', 'pussy', 'whore', 'bitch', 'slut', 'retard',
        'porn', 'penis', 'vagina', 'asshole', 'bastard', 'wank',
        // odio
        'nazi', 'hitler', 'kkk', 'heil',
    ];
    $n = normalizeName($name);
    foreach ($words as $w) {
        if (str_contains($n, normalizeName($w))) {
            return true;
        }
    }
    return false;
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
        "mysql:host={$cfg['db_host']};dbname={$cfg['db_name']};charset=utf8mb4",
        $cfg['db_user'],
        $cfg['db_pass'],
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES => false],
    );
} catch (Throwable $e) {
    out(503, ['error' => 'db_unavailable']);
}
try {
    migrate($db);
} catch (Throwable $e) {
    error_log('arcade migrate: ' . $e->getMessage());
    out(503, ['error' => 'db_migration']);
}

/** Una página del ranking. Orden estable: más puntos primero y, a igualdad, quien llegó antes. */
$page = static function (int $n) use ($db): array {
    $total = (int) $db->query('SELECT COUNT(*) FROM arcade_scores')->fetchColumn();
    $pages = max(1, (int) ceil($total / PER_PAGE));
    $n = min(max(1, $n), $pages);
    $offset = ($n - 1) * PER_PAGE;
    $rows = $db->query('SELECT name, score FROM arcade_scores ORDER BY score DESC, id ASC LIMIT ' . PER_PAGE . ' OFFSET ' . $offset)->fetchAll(PDO::FETCH_ASSOC);
    $scores = [];
    foreach ($rows as $i => $r) {
        $scores[] = ['rank' => $offset + $i + 1, 'name' => $r['name'], 'score' => (int) $r['score']];
    }
    return ['scores' => $scores, 'page' => $n, 'pages' => $pages, 'total' => $total];
};

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($method === 'GET') {
    out(200, $page((int) ($_GET['page'] ?? 1)));
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
        // Freno global por si alguien rota IPs (VPN, proxies): acota también el tamaño de arcade_runs
        $q = $db->prepare('SELECT COUNT(*) FROM arcade_runs WHERE started_at > ?');
        $q->execute([$now - 3600]);
        if ((int) $q->fetchColumn() >= GLOBAL_RUNS_PER_HOUR) {
            out(429, ['error' => 'too_many_runs']);
        }
        $token = bin2hex(random_bytes(16));
        $db->prepare('INSERT INTO arcade_runs (token, ip_hash, started_at) VALUES (?, ?, ?)')->execute([$token, $ip, $now]);
        out(200, ['token' => $token]);
    }

    if (($input['action'] ?? '') === 'submit') {
        $token = (string) ($input['token'] ?? '');
        $name = mb_strtoupper(trim((string) ($input['name'] ?? '')), 'UTF-8');
        $score = $input['score'] ?? null;
        if (!preg_match('/^[a-f0-9]{32}$/', $token) || !preg_match('/^[\p{L}\p{N}_-]{3,12}$/u', $name) || !is_int($score) || $score < MIN_SCORE || $score > 1000000) {
            out(400, ['error' => 'invalid']);
        }
        if (isRude($name)) {
            out(422, ['error' => 'rude_name']); // el token no se gasta: puede corregir el nombre
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
        // Límite diario de puntuaciones guardadas por IP (el token no se gasta: puede seguir jugando)
        $q = $db->prepare('SELECT COUNT(*) FROM arcade_runs WHERE ip_hash = ? AND used = 1 AND started_at > ?');
        $q->execute([$ip, $now - 86400]);
        if ((int) $q->fetchColumn() >= SAVES_PER_DAY) {
            out(429, ['error' => 'daily_limit']);
        }

        $u = $db->prepare('UPDATE arcade_runs SET used = 1 WHERE token = ? AND used = 0');
        $u->execute([$token]);
        if ($u->rowCount() !== 1) {
            out(403, ['error' => 'invalid_token']);
        }

        // Una sola fila por nombre: se guarda su mejor marca (repetir partidas no llena la tabla)
        $q = $db->prepare('SELECT score FROM arcade_scores WHERE name = ?');
        $q->execute([$name]);
        $previous = $q->fetchColumn();
        $improved = $previous === false || $score > (int) $previous;
        // Atómico frente a dos envíos simultáneos con el mismo nombre (índice único uq_name)
        $db->prepare(
            'INSERT INTO arcade_scores (name, score, created_at) VALUES (?, ?, ?)
             ON DUPLICATE KEY UPDATE created_at = IF(VALUES(score) > score, VALUES(created_at), created_at),
                                     score = GREATEST(score, VALUES(score))',
        )->execute([$name, $score, $now]);

        // Tope de filas: por debajo del puesto MAX_ROWS no se guarda nada (la tabla nunca crece sin límite)
        $db->exec('DELETE FROM arcade_scores WHERE id NOT IN (SELECT id FROM (SELECT id FROM arcade_scores ORDER BY score DESC, id ASC LIMIT ' . MAX_ROWS . ') keep)');

        $q = $db->prepare('SELECT id, score FROM arcade_scores WHERE name = ?');
        $q->execute([$name]);
        $row = $q->fetch(PDO::FETCH_ASSOC);
        if ($row === false) {
            out(200, ['ok' => true, 'rank' => 0, 'name' => $name, 'best' => $score, 'improved' => $improved] + $page(1));
        }
        $r = $db->prepare('SELECT COUNT(*) FROM arcade_scores WHERE score > ? OR (score = ? AND id < ?)');
        $r->execute([$row['score'], $row['score'], $row['id']]);
        $rank = (int) $r->fetchColumn() + 1;
        // Devuelve directamente la página donde ha quedado el nombre
        out(200, ['ok' => true, 'rank' => $rank, 'name' => $name, 'best' => (int) $row['score'], 'improved' => $improved] + $page((int) ceil($rank / PER_PAGE)));
    }
} catch (Throwable $e) {
    out(500, ['error' => 'server']);
}

out(400, ['error' => 'unknown_action']);
