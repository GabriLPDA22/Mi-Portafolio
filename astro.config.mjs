// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Rutas que existen pero no deben posicionar (páginas de sistema y legales).
const NOINDEX_PATHS = ['/gracias', '/politica-privacidad', '/politica-cookies', '/404'];

export default defineConfig({
  site: 'https://gabrielcodes.dev',
  // `file` + `never`: /contacto.html se sirve como /contacto (reescritura en public/.htaccess),
  // así la URL canónica, el sitemap y los enlaces internos coinciden sin redirecciones.
  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'always',
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-inter',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/inter-latin-wght.woff2'],
            weight: '100 900',
            style: 'normal',
          },
        ],
      },
    },
    {
      // Titulares (OFL-1.1, subset latin de Fontsource).
      provider: fontProviders.local(),
      name: 'Bricolage Grotesque',
      cssVariable: '--font-bricolage',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/bricolage-latin-wght.woff2'],
            weight: '200 800',
            style: 'normal',
          },
        ],
      },
    },
    {
      // Cursiva editorial para palabras destacadas (OFL-1.1).
      provider: fontProviders.local(),
      name: 'Instrument Serif',
      cssVariable: '--font-instrument',
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/instrument-serif-latin-italic.woff2'],
            weight: '400',
            style: 'italic',
          },
        ],
      },
    },
  ],
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '') || '/';
        return !NOINDEX_PATHS.includes(path);
      },
      changefreq: 'monthly',
      serialize(item) {
        item.priority = new URL(item.url).pathname === '/' ? 1.0 : 0.5;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
