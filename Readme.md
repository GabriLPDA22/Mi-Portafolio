# Gabriel Saiz — Portfolio

Portfolio personal de **Gabriel Saiz**, desarrollador Full-Stack (.NET · Vue 3 · React Native) en Zaragoza: [gabrielcodes.dev](https://gabrielcodes.dev).

## Stack

- **Astro 7**: salida estática, JavaScript mínimo (menú móvil, scroll-spy, formulario y cookies)
- **Tailwind CSS 4** con design tokens en `@theme` (`src/styles/global.css`)
- **astro:assets**: imágenes AVIF/WebP responsive e Inter autoalojada con fallback métrico (CLS 0)
- **Hostinger** (LiteSpeed/Apache): `public/.htaccess` con URLs limpias, redirecciones 301, HTTPS, caché y cabeceras de seguridad
- **Web3Forms**: formulario de contacto por email, sin backend

Lighthouse (móvil): 98 / 100 / 100 / 100 en la portada.

## Contenido

Todo el contenido está en datos, no en la maquetación:

| Archivo | Qué contiene |
| --- | --- |
| `src/config/site.ts` | Nombre, puesto, contacto, redes, CV, disponibilidad |
| `src/data/profile.ts` | Experiencia, formación, premios, stack y cifras |
| `src/data/projects.ts` | Proyectos |
| `public/cv/Gabriel-Saiz-CV.pdf` | CV descargable |
| `public/documents/carta-recomendacion-golive.pdf` | Carta de recomendación |

Al actualizar el CV, sustituye el PDF manteniendo el nombre y revisa que `profile.ts` coincida.

## SEO

- Title, description, canonical, Open Graph (`og:type=profile`) y Twitter Card
- JSON-LD: `Person` (puesto, habilidades, formación, premios, perfiles), `ProfilePage`, `WebSite` e `ItemList` de proyectos
- Sitemap automático, `robots.txt` con bots de IA permitidos y `/llms.txt` con el perfil completo
- Auditoría en cada build (`scripts/audit-seo.mjs`)

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # build + auditoría SEO
npm run preview
npm run check     # tipos
npm run assets    # favicons e imagen OG (CHROMIUM_PATH=/ruta/a/chrome)
```

## Despliegue en Hostinger

1. `npm run build`
2. Sube **el contenido** de `dist/` a `public_html/`, incluidos los ocultos `.htaccess` y `_astro/.htaccess`.
