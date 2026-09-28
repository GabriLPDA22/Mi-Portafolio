<?php
/**
 * Plantilla de configuración del ranking de BUG RUN.
 * Copiar a la carpeta de inicio de la cuenta de Hostinger (un nivel POR ENCIMA de public_html),
 * con el nombre arcade-config.php, y rellenar los datos. Nunca subirla al repositorio.
 */
return [
    'db_host' => 'localhost',
    'db_name' => 'u000000000_arcade',
    'db_user' => 'u000000000_arcade',
    'db_pass' => 'CAMBIAR',
    // Cadena aleatoria larga (p. ej. `openssl rand -hex 32`): se usa para anonimizar las IP
    'secret' => 'CAMBIAR',
    'origins' => ['https://gabrielcodes.dev', 'https://www.gabrielcodes.dev'],
];
