/**
 * Formulario de contacto: endpoint propio (public/api/contact.php) protegido con Cloudflare Turnstile.
 *
 * La site key de Turnstile es PÚBLICA (va en el HTML); la secreta solo vive en el servidor
 * (arcade-config.php, fuera de public_html). Se puede sobrescribir con PUBLIC_TURNSTILE_SITE_KEY en .env.
 * Si no hay ninguna, se usa la clave de pruebas de Cloudflare: el formulario funciona en local, pero en
 * producción el servidor (con la secreta real) rechaza esos tokens, así que nunca queda abierto.
 */
const TEST_SITE_KEY = '1x00000000000000000000AA';
const SITE_KEY = '';

export const TURNSTILE_SITE_KEY: string = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY || SITE_KEY || TEST_SITE_KEY;
export const CONTACT_ENDPOINT = '/api/contact.php';
export const CONTACT_PROJECTS = ['mobile', 'web', 'ecommerce', 'saas', 'consulting'] as const;
