# GabrielCodes — Diseño web en Zaragoza

Web comercial de **GabrielCodes** ([gabrielcodes.dev](https://gabrielcodes.dev)): estudio de diseño y desarrollo web para negocios en Zaragoza. Orientada a captación de clientes y posicionamiento orgánico (SEO local + motores generativos).

## Stack

- **Astro 7**: salida 100 % estática, sin JS por defecto (~2,5 KB de JS en total)
- **Tailwind CSS 4** con design tokens en `@theme` (`src/styles/global.css`)
- **astro:assets**: imágenes AVIF/WebP responsive y API de fuentes (Inter autoalojada con fallback métrico, CLS 0)
- **Hostinger** (LiteSpeed/Apache): hosting estático; `public/.htaccess` gestiona URLs limpias, redirecciones 301, HTTPS, caché y cabeceras de seguridad
- **Web3Forms**: envío del formulario de presupuesto por email, sin backend

## Arquitectura de URLs

| Ruta | Intención de búsqueda |
| --- | --- |
| `/` | diseño web Zaragoza, páginas web para negocios |
| `/servicios` | comparativa y precios |
| `/servicios/diseno-web` | crear página web para empresa |
| `/diseno-web-zaragoza` | diseño web en Zaragoza (SEO local) |
| `/servicios/landing-pages` | landing pages profesionales |
| `/servicios/web-con-reservas` | webs con reservas online |
| `/mantenimiento-web` | mantenimiento web |
| `/proyectos` | casos y portfolio |
| `/contacto` | presupuesto |

`/diseño-web-zaragoza` redirige con 301 a `/diseno-web-zaragoza` (slug ASCII: evita URLs codificadas `%C3%B1` al compartir). Las URLs del portfolio anterior (`/proyecto/*`, `/privacy-policy`, `/dashboard`…) también redirigen con 301 (`public/.htaccess`).

## SEO implementado

- `<title>`, meta description, canonical, Open Graph y Twitter Card únicos por página (`src/layouts/BaseLayout.astro`)
- Un único `<h1>` por página; H2/H3 organizados por subintención de búsqueda
- JSON-LD en `@graph` con `@id` estables: `ProfessionalService`/`LocalBusiness`, `WebSite`, `Person`, `Service` + `Offer` con rango de precios, `FAQPage`, `BreadcrumbList` e `ItemList` (`src/lib/schema.ts`)
- `sitemap-index.xml` automático (excluye páginas legales y de sistema), `robots.txt` con bots de IA permitidos y `/llms.txt` generado desde los mismos datos que la web
- **Auditoría en cada build** (`scripts/audit-seo.mjs`): el build falla si hay más de un H1, un canonical incorrecto, títulos o descripciones duplicados, JSON-LD inválido, imágenes sin `alt` o enlaces internos rotos

Lighthouse (móvil, build de producción): 100 / 100 / 100 / 100 en las páginas principales, LCP ≈ 1,5 s y CLS 0.

## Contenido y datos

Todo el contenido comercial está centralizado:

- `src/config/site.ts`: datos NAP (nombre, teléfono, email, zona), horario, GA4 y datos legales
- `src/data/services.ts`: servicios, precios, plazos y opciones del formulario
- `src/data/faqs.ts`: FAQs (se pintan en HTML y en `FAQPage` con el mismo texto)
- `src/data/projects.ts`: proyectos

Google Analytics solo se carga cuando el usuario acepta las cookies (RGPD), y así no penaliza la primera carga.

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # build + auditoría SEO
npm run preview
npm run check     # comprobación de tipos (astro check)
npm run assets    # regenera favicons e imágenes OG (requiere Chromium: CHROMIUM_PATH=/ruta/a/chrome)
```

## Despliegue en Hostinger

1. `npm run build`
2. Sube **el contenido** de `dist/` (no la carpeta) a `public_html/` con el Administrador de archivos o por FTP, incluidos los archivos ocultos `.htaccess` y `_astro/.htaccess`.
3. En hPanel activa el SSL del dominio.

## Pendiente antes de publicar

- [ ] Revisar el precio del mantenimiento (25 €/mes) y la mención “sin IVA”.
- [ ] Crear la clave de Web3Forms en [web3forms.com](https://web3forms.com) con el email donde quieres recibir las solicitudes y pegarla en `site.forms.web3formsKey` (`src/config/site.ts`). Sin ella el build avisa y los envíos no llegan.
- [ ] Crear o actualizar Google Business Profile con los mismos datos que `site.ts` y enviar el sitemap en Search Console.
