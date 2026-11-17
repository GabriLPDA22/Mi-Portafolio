// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gabrielcodes.dev',
  // Igual que el export estático de Next: /aviso-legal.html servido como /aviso-legal (ver public/.htaccess).
  trailingSlash: 'never',
  build: {
    format: 'file',
    // CSS inline en el HTML: sin petición bloqueante antes del primer pintado.
    inlineStylesheets: 'always',
  },
  // Fuentes autoalojadas: Geist (texto y titulares, variable) + Instrument Serif cursiva (acentos).
  // Tiny5 solo la usa el minijuego oculto: se declara pero no se precarga.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Geist',
      cssVariable: '--font-geist',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [{ src: ['./src/assets/fonts/geist-latin-wght-normal.woff2'], weight: '100 900', style: 'normal' }],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Instrument Serif',
      cssVariable: '--font-instrument',
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [{ src: ['./src/assets/fonts/instrument-serif-latin-400-italic.woff2'], weight: '400', style: 'italic' }],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Tiny5',
      cssVariable: '--font-tiny',
      fallbacks: ['ui-monospace', 'monospace'],
      options: {
        variants: [{ src: ['./src/assets/fonts/tiny5-latin-400-normal.woff2'], weight: '400', style: 'normal' }],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
