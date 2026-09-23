# 🚀 Gabriel Saiz — Portfolio

<div align="center">

**Portfolio profesional de desarrollador Full-Stack freelance**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.9-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
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
- **Framer Motion** para animaciones suaves
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
- **[Next.js 15.5.9](https://nextjs.org/)** - Framework React con App Router
- **[React 19.2.3](https://react.dev/)** - Biblioteca UI
- **[TypeScript 5.9.3](https://www.typescriptlang.org/)** - Tipado estático
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS

### Animaciones & UI
- **[Framer Motion 12.23.26](https://www.framer.com/motion/)** - Animaciones fluidas
- **[Lucide React](https://lucide.dev/)** - Iconos minimalistas
- **CSS Variables** - Sistema de diseño personalizado

### Formularios
- **[Formspree](https://formspree.io/)** - Backend-less form handling

### Optimización
- **Next.js Image** - Optimización automática de imágenes
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
# http://localhost:3000
```

### Build para Producción

```bash
# Crear build optimizado
npm run build

# Iniciar servidor de producción
npm start
```

---

## 📁 Estructura del Proyecto

```
mi-portafolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Layout principal con metadata SEO
│   ├── page.tsx             # Página principal
│   ├── globals.css           # Estilos globales y variables CSS
│   ├── robots.ts            # Configuración robots.txt
│   └── sitemap.xml/         # Sitemap dinámico
│
├── components/
│   ├── layout/              # Componentes de layout
│   │   ├── Header.tsx       # Navbar con menú móvil
│   │   └── Footer.tsx       # Footer con links sociales
│   │
│   ├── sections/            # Secciones de la landing
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ResultsSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── ContactSection.tsx
│   │
│   └── ui/                  # Componentes reutilizables
│       ├── CustomCursor.tsx
│       ├── TechCarousel.tsx
│       └── ProjectCard.tsx
│
├── data/                    # Datos estáticos
│   └── projects.ts          # Información de proyectos
│
├── public/                  # Archivos estáticos
│   ├── img/                 # Imágenes optimizadas
│   └── sitemap.xml          # Sitemap estático
│
├── hooks/                   # Custom hooks
│   └── useSpotlight.ts      # Hook para efectos spotlight
│
└── lib/                     # Utilidades
    └── utils.ts             # Funciones helper
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
npm run dev      # Desarrollo (localhost:3000)
npm run build    # Build de producción
npm start        # Servidor de producción
npm run lint     # Linter de código
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
