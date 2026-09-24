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
  // Nunito y Caveat autoalojadas (antes via next/font/google), mismas variables CSS.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Nunito',
      cssVariable: '--font-nunito',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [{ src: ['./src/assets/fonts/nunito-latin-wght-normal.woff2'], weight: '200 1000', style: 'normal' }],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Caveat',
      cssVariable: '--font-caveat',
      fallbacks: ['cursive'],
      options: {
        // Instancia estática del peso 600 (el único que se usa), subset latino.
        variants: [{ src: ['./src/assets/fonts/caveat-latin-600.woff2'], weight: '600', style: 'normal' }],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
