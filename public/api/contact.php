<?php
/**
 * Formulario de contacto de gabrielcodes.dev (sustituye al POST directo a Formspree, cuyo endpoint
 * público lo tenían los bots).
 *
 *   POST /api/contact.php { name, email, message, project?, locale?, website (honeypot), token (Turnstile) }
 *     → 200 { ok: true }
 *     → 4xx/5xx { error: "invalid" | "too_many_links" | "captcha" | "rate_limited" | ... }
 *
 * Filtros, en orden (lo barato primero, lo que cuesta red o base de datos al final):
 *  1. Solo POST, solo desde la propia web (Origin) y cuerpo pequeño.
 *  2. Honeypot: si el campo oculto "website" llega relleno es un bot → se responde "ok" y se descarta
 *     (no se le da pista de que le hemos pillado).
 *  3. Validación estricta de campos y filtro de mensajes con muchos enlaces (el spam típico).
 *  4. Cloudflare Turnstile verificado EN EL SERVIDOR (token de un solo uso, acción y dominio).
 *     Sin un token válido no hay envío, aunque alguien conozca este endpoint.
 *  5. Límites por IP (hora y día) y global por día, con la IP solo como hash HMAC (se borra a las 24 h).
 *
 * Entrega: por Formspree desde el servidor (endpoint privado en la configuración, nunca en el HTML)
 * o, si no está configurado, con mail() de PHP.
 *
 * Configuración: la misma ~/arcade-config.php del ranking (fuera de public_html), con las claves
 * de contacto (ver scripts/arcade-config.example.php).
 */
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

const MAX_BODY = 16384;          // bytes de JSON como máximo
const NAME_MAX = 100;
const MESSAGE_MIN = 10;
const MESSAGE_MAX = 5000;
const MAX_LINKS = 2;             // más enlaces que esto = spam casi seguro
const PER_IP_HOUR = 3;           // mensajes por IP y hora
const PER_IP_DAY = 6;            // mensajes por IP y día
const GLOBAL_PER_DAY = 40;       // freno total por si rotan IP
const PROJECTS = [
    'mobile' => ['es' => 'App móvil', 'en' => 'Mobile app'],
    'web' => ['es' => 'Web', 'en' => 'Website'],
    'ecommerce' => ['es' => 'E-commerce', 'en' => 'E-commerce'],
    'saas' => ['es' => 'SaaS', 'en' => 'SaaS'],
    'consulting' => ['es' => 'Consultoría', 'en' => 'Consulting'],
];

function out(int $code, array $body): void
{
    http_response_code($code);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

/** Texto de una línea: sin caracteres de control (evita inyección de cabeceras) y espacios normalizados. */
function oneLine(string $s): string
{
    return trim((string) preg_replace('/\s+/u', ' ', (string) preg_replace('/[\x00-\x1F\x7F]/u', ' ', $s)));
}

/** Texto multilínea: conserva saltos de línea, quita el resto de caracteres de control. */
function multiLine(string $s): string
{
    $s = str_replace(["\r\n", "\r"], "\n", $s);
    $s = (string) preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $s);
    return trim((string) preg_replace("/\n{4,}/", "\n\n\n", $s));
}

/** POST de formulario o JSON con cURL. Devuelve [código HTTP, cuerpo] o null si no hay conexión. */
function httpPost(string $url, array $fields, bool $json = false): ?array
{
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $json ? json_encode($fields, JSON_UNESCAPED_UNICODE) : http_build_query($fields),
        CURLOPT_HTTPHEADER => $json ? ['Content-Type: application/json', 'Accept: application/json'] : ['Accept: application/json'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_TIMEOUT => 10,
    ]);
    $body = curl_exec($ch);
    $status = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    $failed = $body === false;
    if ($failed) {
        error_log('contact http: ' . curl_error($ch));
    }
    curl_close($ch);
    return $failed ? null : [$status, (string) $body];
}

// ---------------------------------------------------------------------------------------------
// Configuración
// ---------------------------------------------------------------------------------------------
$cfgFile = getenv('ARCADE_CONFIG') ?: dirname(__DIR__, 2) . '/arcade-config.php';
if (!is_file($cfgFile)) {
    out(503, ['error' => 'not_configured']);
}
$cfg = require $cfgFile;
if (empty($cfg['turnstile_secret']) || (empty($cfg['contact_formspree']) && empty($cfg['contact_to']))) {
    out(503, ['error' => 'not_configured']);
}

// ---------------------------------------------------------------------------------------------
// 1. Método, origen y tamaño
// ---------------------------------------------------------------------------------------------
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    header('Allow: POST');
    out(405, ['error' => 'method_not_allowed']);
}
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (!in_array($origin, $cfg['origins'], true)) {
    out(403, ['error' => 'forbidden_origin']);
}
$raw = (string) file_get_contents('php://input', false, null, 0, MAX_BODY + 1);
if (strlen($raw) > MAX_BODY) {
    out(413, ['error' => 'too_large']);
}
$input = json_decode($raw, true);
if (!is_array($input)) {
    out(400, ['error' => 'bad_json']);
}

// ---------------------------------------------------------------------------------------------
// 2. Honeypot: respuesta de éxito falsa, sin enviar nada
// ---------------------------------------------------------------------------------------------
if (trim((string) ($input['website'] ?? '')) !== '') {
    out(200, ['ok' => true]);
}

// ---------------------------------------------------------------------------------------------
// 3. Validación
// ---------------------------------------------------------------------------------------------
$name = oneLine((string) ($input['name'] ?? ''));
$email = oneLine((string) ($input['email'] ?? ''));
$message = multiLine((string) ($input['message'] ?? ''));
$project = (string) ($input['project'] ?? '');
$locale = ($input['locale'] ?? 'es') === 'en' ? 'en' : 'es';
$token = (string) ($input['token'] ?? '');

$nameLen = mb_strlen($name, 'UTF-8');
$messageLen = mb_strlen($message, 'UTF-8');
if (
    $nameLen < 2 || $nameLen > NAME_MAX
    || preg_match('~https?://|www\.|\.(?:com|net|org|ru|xyz|io|top|info)\b~i', $name) // nombres con enlaces = spam
    || strlen($email) > 254 || filter_var($email, FILTER_VALIDATE_EMAIL) === false
    || $messageLen < MESSAGE_MIN || $messageLen > MESSAGE_MAX
    || ($project !== '' && !isset(PROJECTS[$project]))
) {
    out(422, ['error' => 'invalid']);
}
if (preg_match_all('~https?://|www\.~i', $message) > MAX_LINKS) {
    out(422, ['error' => 'too_many_links']);
}
if ($token === '' || strlen($token) > 2048) {
    out(403, ['error' => 'captcha']);
}

// ---------------------------------------------------------------------------------------------
// 4. Cloudflare Turnstile (verificación en servidor; el token solo vale una vez)
// ---------------------------------------------------------------------------------------------
$ipRaw = $_SERVER['REMOTE_ADDR'] ?? '';
$verify = httpPost(getenv('TURNSTILE_VERIFY_URL') ?: 'https://challenges.cloudflare.com/turnstile/v0/siteverify', [ // la variable solo se usa en pruebas locales
    'secret' => $cfg['turnstile_secret'],
    'response' => $token,
    'remoteip' => $ipRaw,
    'idempotency_key' => bin2hex(random_bytes(16)),
]);
if ($verify === null) {
    out(503, ['error' => 'captcha_unavailable']);
}
$result = json_decode($verify[1], true);
$hosts = array_map(static fn (string $o): string => (string) parse_url($o, PHP_URL_HOST), $cfg['origins']);
$testing = str_starts_with((string) $cfg['turnstile_secret'], '1x0000000000000000000000000000000'); // claves de prueba de Cloudflare
if (
    !is_array($result) || ($result['success'] ?? false) !== true
    || (!$testing && (($result['action'] ?? '') !== 'contact' || !in_array($result['hostname'] ?? '', $hosts, true)))
) {
    error_log('contact turnstile: ' . implode(',', (array) ($result['error-codes'] ?? ['bad_response'])));
    out(403, ['error' => 'captcha']);
}

// ---------------------------------------------------------------------------------------------
// 5. Límites por IP y globales (si la base de datos falla, se sigue: Turnstile ya ha filtrado)
// ---------------------------------------------------------------------------------------------
$now = time();
$ip = hash_hmac('sha256', $ipRaw, (string) $cfg['secret']);
$db = null;
try {
    $db = new PDO(
        "mysql:host={$cfg['db_host']};dbname={$cfg['db_name']};charset=utf8mb4",
        $cfg['db_user'],
        $cfg['db_pass'],
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES => false, PDO::ATTR_TIMEOUT => 3],
    );
    $db->exec('CREATE TABLE IF NOT EXISTS contact_log (
        id         INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
        ip_hash    CHAR(64)     NOT NULL,
        created_at INT UNSIGNED NOT NULL,
        KEY idx_ip_time (ip_hash, created_at),
        KEY idx_time (created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4');
    // Un envío a la vez por IP: contar y luego insertar no se puede saltar con peticiones simultáneas
    if ((int) $db->query("SELECT GET_LOCK('contact_" . substr($ip, 0, 48) . "', 5)")->fetchColumn() !== 1) {
        out(503, ['error' => 'busy']);
    }
    $db->prepare('DELETE FROM contact_log WHERE created_at < ?')->execute([$now - 86400]);
    $count = static function (string $sql, array $args) use ($db): int {
        $q = $db->prepare($sql);
        $q->execute($args);
        return (int) $q->fetchColumn();
    };
    if (
        $count('SELECT COUNT(*) FROM contact_log WHERE ip_hash = ? AND created_at > ?', [$ip, $now - 3600]) >= PER_IP_HOUR
        || $count('SELECT COUNT(*) FROM contact_log WHERE ip_hash = ?', [$ip]) >= PER_IP_DAY
        || $count('SELECT COUNT(*) FROM contact_log', []) >= GLOBAL_PER_DAY
    ) {
        out(429, ['error' => 'rate_limited']);
    }
} catch (PDOException $e) {
    error_log('contact db: ' . $e->getMessage());
    $db = null;
}

// ---------------------------------------------------------------------------------------------
// Envío
// ---------------------------------------------------------------------------------------------
$projectLabel = $project !== '' ? PROJECTS[$project][$locale] : '';
$subject = 'Portfolio: ' . $name . ($projectLabel !== '' ? " · $projectLabel" : '');

if (!empty($cfg['contact_formspree'])) {
    // Formspree desde el servidor: su endpoint solo está en la configuración, los bots no lo conocen
    $res = httpPost((string) $cfg['contact_formspree'], [
        'name' => $name,
        'email' => $email,
        'project' => $projectLabel,
        'locale' => $locale,
        'message' => $message,
        '_subject' => $subject,
        '_replyto' => $email,
    ], true);
    $sent = $res !== null && $res[0] >= 200 && $res[0] < 300;
    if (!$sent) {
        error_log('contact formspree: ' . ($res === null ? 'no_connection' : $res[0] . ' ' . substr($res[1], 0, 300)));
    }
} else {
    // mail() de PHP. "From" debe ser un buzón del propio dominio (SPF); la respuesta va a quien escribe.
    $from = (string) ($cfg['contact_from'] ?? 'no-reply@' . $hosts[0]);
    if (filter_var($from, FILTER_VALIDATE_EMAIL) === false) {
        out(503, ['error' => 'not_configured']);
    }
    $body = "Nombre: $name\nEmail: $email\n"
        . ($projectLabel !== '' ? "Proyecto: $projectLabel\n" : '')
        . 'Idioma: ' . strtoupper($locale) . "\n\n$message\n\n-- \nEnviado desde el formulario de " . $hosts[0] . "\n";
    $headers = [
        'From' => 'Portfolio <' . $from . '>',
        'Reply-To' => $email, // validado con FILTER_VALIDATE_EMAIL: sin saltos de línea
        'MIME-Version' => '1.0',
        'Content-Type' => 'text/plain; charset=UTF-8',
        'Content-Transfer-Encoding' => '8bit',
    ];
    $sent = mail(
        (string) $cfg['contact_to'],
        mb_encode_mimeheader($subject, 'UTF-8', 'Q'),
        $body,
        $headers,
        '-f' . $from,
    );
    if (!$sent) {
        error_log('contact mail(): failed');
    }
}

if (!$sent) {
    out(502, ['error' => 'send_failed']);
}

if ($db !== null) {
    try {
        $db->prepare('INSERT INTO contact_log (ip_hash, created_at) VALUES (?, ?)')->execute([$ip, $now]);
    } catch (PDOException $e) {
        error_log('contact log: ' . $e->getMessage());
    }
}
out(200, ['ok' => true]);
