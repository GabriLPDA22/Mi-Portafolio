/**
 * Formulario de contacto: endpoint propio (public/api/contact.php) protegido con Cloudflare Turnstile.
 *
 * La site key de Turnstile es PÚBLICA (va en el HTML); la secreta solo vive en el servidor
 * (arcade-config.php, fuera de public_html). Se puede sobrescribir con PUBLIC_TURNSTILE_SITE_KEY en .env.
 * En desarrollo se usa la clave de pruebas de Cloudflare; el servidor de producción (con la secreta real)
 * rechazaría esos tokens, así que el formulario nunca queda abierto.
 */
const TEST_SITE_KEY = '1x00000000000000000000AA';
const SITE_KEY = '0x4AAAAAAGHI8-8p9qKR33QE'; // widget "gabrielcodes.dev - contacto" (hostname gabrielcodes.dev)

// En `npm run dev` (localhost) se usa la de pruebas: la real solo vale en el dominio
export const TURNSTILE_SITE_KEY: string =
  import.meta.env.PUBLIC_TURNSTILE_SITE_KEY || (import.meta.env.DEV ? TEST_SITE_KEY : SITE_KEY);
export const CONTACT_ENDPOINT = '/api/contact.php';
export const CONTACT_PROJECTS = ['mobile', 'web', 'ecommerce', 'saas', 'consulting'] as const;
