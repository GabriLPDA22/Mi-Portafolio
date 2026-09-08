const siteUrl = "https://gabrielcodes.dev";

export const personData = {
  "@type": "Person",
  name: "Gabriel Saiz",
  jobTitle: "Full-Stack Developer",
  description:
    "Desarrollador Full-Stack con experiencia en React Native, Next.js y .NET. Apps en producción y abierto a oportunidades laborales.",
  url: siteUrl,
  image: `${siteUrl}/img/Yo-480.webp`,
  sameAs: [
    "https://www.linkedin.com/in/gabriel-saiz-de-la-maza-bajo-140370184/",
    "https://github.com/GabriLPDA22",
    "https://instagram.com/saiz_gabriel",
  ],
  email: "gsaiz.bajo@gmail.com",
  knowsAbout: [
    "React Native",
    "Next.js",
    "TypeScript",
    ".NET",
    "PostgreSQL",
    "Desarrollo móvil",
    "Desarrollo web",
    "Full Stack Development",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zaragoza",
    addressRegion: "Aragón",
    addressCountry: "ES",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Full-Stack Developer",
    occupationLocation: {
      "@type": "City",
      name: "Zaragoza",
    },
    skills: [
      "React Native",
      "Expo",
      "Next.js",
      "TypeScript",
      ".NET",
      "PostgreSQL",
      "AWS",
    ],
  },
};

export const websiteData = {
  "@type": "WebSite",
  name: "Gabriel Saiz — Portfolio",
  url: siteUrl,
  description:
    "Portfolio de Gabriel Saiz, desarrollador full-stack. Proyectos, trayectoria y contacto.",
  inLanguage: "es-ES",
  author: { "@type": "Person", name: "Gabriel Saiz" },
};

export const organizationData = {
  "@type": "Person",
  name: "Gabriel Saiz",
  description:
    "Portfolio de Gabriel Saiz, desarrollador full-stack. Experiencia en apps móviles, web y backend.",
  url: siteUrl,
  email: "gsaiz.bajo@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/gabriel-saiz-de-la-maza-bajo-140370184/",
    "https://github.com/GabriLPDA22",
  ],
};

export const breadcrumbsData = {
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Sobre mí", item: `${siteUrl}/#sobre-mi` },
    { "@type": "ListItem", position: 3, name: "Proyectos", item: `${siteUrl}/#proyectos` },
    { "@type": "ListItem", position: 4, name: "Trayectoria", item: `${siteUrl}/#trayectoria` },
    { "@type": "ListItem", position: 5, name: "Contacto", item: `${siteUrl}/#contacto` },
  ],
};
