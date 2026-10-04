/**
 * Analítica con Umami (cloud.umami.is): sin cookies, sin datos personales y sin aviso de
 * consentimiento. Para activarla, pega aquí el "Website ID" que da Umami al añadir la web
 * (formato 1a2b3c4d-...). Vacío = desactivada: no se carga ningún script y la política de
 * privacidad deja de mencionarla (PrivacyContent.astro).
 *
 * Eventos que se cuentan (atributos data-umami-event en los enlaces y botones):
 * descargar-cv, linkedin, github, email, app-store, ver-web, jugar-bug-run, contacto-enviado.
 */
export const UMAMI_WEBSITE_ID = 'f5e64686-39b5-4eab-b081-a3c40d3f242c';

/** Solo cuenta visitas en el dominio real (no en localhost ni en previsualizaciones). */
export const UMAMI_DOMAINS = 'gabrielcodes.dev,www.gabrielcodes.dev';
