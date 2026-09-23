/**
 * Normaliza el pathname de Astro al formato de URL pública del sitio
 * (`build.format: 'file'` + `trailingSlash: 'never'`):
 *   /index.html → /   ·   /servicios.html → /servicios   ·   /contacto/ → /contacto
 */
export const normalizePath = (pathname: string): string =>
  pathname
    .replace(/\.html$/, '')
    .replace(/(^|\/)index$/, '')
    .replace(/\/+$/, '') || '/';
