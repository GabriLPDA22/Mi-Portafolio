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
  fonts: [
    {
      // Archivo variable (OFL-1.1, subset latino): ejes de peso 100-900 y anchura 62-125 %.
      // La anchura es parte del diseño: el nombre del hero pasa de condensado a expandido.
      provider: fontProviders.local(),
      name: 'Archivo',
      cssVariable: '--font-archivo',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/archivo-latin-wdth-wght.woff2'], weight: '100 900', stretch: '62% 125%', style: 'normal' },
        ],
      },
    },
    {
      // Fuente pixel para los textos tipo HUD (Tiny5, OFL-1.1, 9 KB): C y O bien distintas.
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
