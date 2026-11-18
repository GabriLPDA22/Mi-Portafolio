<?php
/**
 * Plantilla de configuración del servidor: ranking de BUG RUN (api/scores.php) y formulario de
 * contacto (api/contact.php).
 * Las tablas se crean y actualizan solas (migraciones en public/api/scores.php): solo hace falta la base de datos vacía.
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

    // --- Formulario de contacto (api/contact.php) ---
    // Clave SECRETA de Cloudflare Turnstile (dash.cloudflare.com → Turnstile → tu widget).
    // La site key (pública) va en src/data/contact.ts.
    'turnstile_secret' => 'CAMBIAR',
    // Entrega recomendada: un formulario NUEVO de Formspree cuyo endpoint solo esté aquí (nunca en el
    // HTML). En sus ajustes, desactiva reCAPTCHA (lo sustituye Turnstile). Borra el formulario antiguo.
    'contact_formspree' => 'https://formspree.io/f/CAMBIAR',
    // Alternativa sin Formspree (deja contact_formspree vacío): mail() de PHP.
    // contact_from debe ser un buzón de tu dominio creado en Hostinger (si no, acaba en spam).
    'contact_to' => '',
    'contact_from' => '',
];
