// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gabrielcodes.dev',
  // Igual que el export estático de Next: /aviso-legal.html servido como /aviso-legal (ver public/.htaccess).
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [react()],
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
        variants: [{ src: ['./src/assets/fonts/caveat-latin-wght-normal.woff2'], weight: '400 700', style: 'normal' }],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
