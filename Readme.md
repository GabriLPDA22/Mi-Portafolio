# 🚀 Gabriel Saiz — Portfolio

<div align="center">

**Portfolio profesional de desarrollador Full-Stack freelance**

[![Astro](https://img.shields.io/badge/Astro-7-BC52EE?style=for-the-badge&logo=astro)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[🌐 Sitio Web](https://gabrielcodes.dev) • [📧 Contacto](mailto:gsaiz.bajo@gmail.com) • [💼 LinkedIn](https://www.linkedin.com/in/gabriel-saiz-de-la-maza-bajo-140370184/)

</div>

---

## ✨ Características

### 🎨 Diseño Premium
- **Dark-first design** con estética minimalista y elegante
- **Glassmorphism** sutil en cards y componentes
- **Gradientes** y efectos visuales premium
- **Tipografía moderna** (Outfit + Inter) con jerarquía clara
- **Responsive design** perfecto en todos los dispositivos

### ⚡ Performance & SEO
- **Optimizado para Core Web Vitals** (LCP, FID, CLS)
- **SEO completo**: Metadata, Open Graph, Twitter Cards
- **Structured Data (JSON-LD)** para mejor indexación
- **Sitemap.xml** y robots.txt configurados
- **Lazy loading** de imágenes y componentes

### 🎭 Animaciones & Interacciones
- **Animaciones con CSS + IntersectionObserver** (sin librerías): ~3 KB de JS comprimido en total
- **Custom cursor** con efectos de spotlight
- **Hover states** elegantes en cards y botones
- **Scroll animations** con Intersection Observer
- **Micro-interacciones** en iconos y elementos UI

### 📱 Secciones
- **Hero** con mensaje directo y CTAs claros
- **Tech Stack** con carrusel infinito de tecnologías
- **Servicios** en grid responsive con spotlight effects
- **Proyectos destacados** con imágenes y detalles técnicos
- **Sobre mí** con foto interactiva y overlay
- **Resultados reales** con métricas y proof points
- **FAQ** con acordeones animados
- **Contacto** con formulario integrado (Formspree)

---

## 🛠️ Stack Tecnológico

### Core
- **[Astro 7](https://astro.build/)** - HTML estático, sin framework en el cliente
- **[TypeScript 5.9.3](https://www.typescriptlang.org/)** - Tipado estático
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS

### Animaciones & UI
- **[Lucide](https://lucide.dev/)** - Iconos renderizados a SVG en build
- **CSS Variables** - Sistema de diseño personalizado

### Formularios
- **[Formspree](https://formspree.io/)** - Backend-less form handling

### Optimización
- **Font Optimization** - Google Fonts con `display: swap`
- **Code Splitting** - Carga diferida de componentes

---

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/mi-portafolio.git

# Entrar al directorio
cd mi-portafolio

# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:4321
```

### Build para Producción

```bash
# Crear build estático en dist/
npm run build

# Previsualizar el build
npm run preview

# Despliegue en Hostinger: subir el CONTENIDO de dist/ a public_html/
# (incluye .htaccess y _astro/.htaccess)
```

---

## 📁 Estructura del Proyecto

```
mi-portafolio/
├── src/
│   ├── pages/               # Rutas Astro (index, privacidad, aviso-legal, 404)
│   ├── layouts/             # BaseLayout.astro: metadata SEO, fuentes, JSON-LD
│   ├── components/          # Componentes .astro (secciones, cabecera, pie, legales)
│   ├── scripts/             # JS del cliente: animaciones (motion.ts) e interfaz (ui.ts)
│   ├── i18n.ts              # Idiomas por ruta: / (es) y /en (en)
│   ├── styles/globals.css   # Estilos globales y variables CSS
│   └── assets/              # Fuentes e imágenes (optimizadas a AVIF/WebP en build)
│
├── public/                  # Ficheros tal cual: .htaccess, CV, favicons, robots, sitemap
└── brand/                   # Logos originales (no se publican)
```

---

## 🎨 Sistema de Diseño

### Colores
```css
/* Backgrounds */
--bg-primary: #0a0a0b
--bg-secondary: #111113
--bg-card: rgba(255, 255, 255, 0.025)

/* Text */
--text-primary: #fafafa
--text-secondary: rgba(255, 255, 255, 0.75)

/* Accent */
--accent: #8b5cf6 (Violeta tecnológico)
--accent-light: #a78bfa
```

### Tipografía
- **Display**: Outfit (Headings)
- **Body**: Inter (Texto, UI)

### Espaciado
- Sistema de espaciado consistente con Tailwind
- `container-main` para máximo ancho y padding lateral

---

## 🔍 SEO & Optimización

### Implementado
- ✅ Metadata completo (title, description, keywords)
- ✅ Open Graph tags para redes sociales
- ✅ Twitter Cards
- ✅ Structured Data (JSON-LD) - Person & ProfessionalService
- ✅ Sitemap.xml estático
- ✅ Robots.txt optimizado
- ✅ Canonical URLs
- ✅ Alt text descriptivo en todas las imágenes
- ✅ Semantic HTML (header, main, nav, section, footer)

### Próximos Pasos
Ver `SEO-RECOMMENDATIONS.md` para guía completa de optimización SEO.

---

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly**: Áreas de toque adecuadas en móvil
- **Carousels**: Scroll horizontal con snap en móvil

---

## 🎯 Características Destacadas

### Custom Cursor
Cursor personalizado con halo difuso y efectos de spotlight en cards.

### Tech Carousel
Carrusel infinito horizontal con auto-scroll suave y pausa en hover.

### Spotlight Effects
Efectos de spotlight radial que siguen el cursor dentro de las cards.

### Formulario de Contacto
Integración con Formspree para envío de emails sin backend.

---

## 📝 Scripts Disponibles

```bash
npm run dev      # Desarrollo (localhost:4321)
npm run build    # Build estático en dist/
npm run preview  # Previsualizar el build
npm run check    # Comprobación de tipos (astro check)
```

---

## 🔗 Links Importantes

- **Sitio Web**: [gabrielcodes.dev](https://gabrielcodes.dev)
- **LinkedIn**: [Gabriel Saiz](https://www.linkedin.com/in/gabriel-saiz-de-la-maza-bajo-140370184/)
- **GitHub**: [@GabriLPDA22](https://github.com/GabriLPDA22)
- **Instagram**: [@saiz_gabriel](https://instagram.com/saiz_gabriel)
- **Email**: gsaiz.bajo@gmail.com

---

## 📄 Licencia

Este proyecto es privado y propiedad de Gabriel Saiz.

---

## 🙏 Agradecimientos

- Diseño inspirado en portfolios premium de [Framer](https://display.framer.website/), [HolyGrid](https://holygrid.studio/) y [Owen Hudock](https://www.owenhudock.design/)
- Iconos de [Lucide](https://lucide.dev/)
- Fuentes de [Google Fonts](https://fonts.google.com/)

---

<div align="center">

**Desarrollado con ❤️ por [Gabriel Saiz](https://gabrielcodes.dev)**

[⬆ Volver arriba](#-gabriel-saiz--portfolio)

</div>
