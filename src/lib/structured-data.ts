const siteUrl = "https://gabrielcodes.dev";

export const personData = {
  "@type": "Person",
  name: "Gabriel Saiz",
  jobTitle: "Full-Stack Developer",
  description:
    "Desarrollador Full-Stack con experiencia en .NET, Vue, Astro y React Native. Apps en producción y abierto a oportunidades laborales.",
  url: siteUrl,
  image: `${siteUrl}/img/Yo-480.webp`,
  sameAs: [
    "https://www.linkedin.com/in/gabriel-saiz-de-la-maza-bajo-140370184/",
    "https://github.com/GabriLPDA22",
    "https://instagram.com/saiz_gabriel",
  ],
  email: "gsaiz.bajo@gmail.com",
  // CV público
  subjectOf: {
    "@type": "DigitalDocument",
    name: "CV Gabriel Saiz",
    encodingFormat: "application/pdf",
    url: `${siteUrl}/cv/Gabriel-Saiz-CV.pdf`,
  },
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

/** Datos del sitio en el idioma de la página (la web es bilingüe: /, /en). */
export const websiteData = (locale: "es" | "en") => ({
  "@type": "WebSite",
  name: "Gabriel Saiz — Portfolio",
  url: siteUrl,
  description:
    locale === "es"
      ? "Portfolio de Gabriel Saiz, desarrollador full-stack. Proyectos, trayectoria y contacto."
      : "Portfolio of Gabriel Saiz, full-stack developer. Projects, experience and contact.",
  inLanguage: locale === "es" ? "es-ES" : "en-GB",
  author: { "@type": "Person", name: "Gabriel Saiz" },
});

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

export const breadcrumbsData = (locale: "es" | "en") => {
  const home = locale === "es" ? siteUrl : `${siteUrl}/en`;
  const names =
    locale === "es"
      ? ["Inicio", "Sobre mí", "Proyectos", "Experiencia", "Contacto"]
      : ["Home", "About", "Projects", "Experience", "Contact"];
  const items = [home, `${home}#sobre-mi`, `${home}#proyectos`, `${home}#experiencia`, `${home}#contacto`];
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: names[i], item })),
  };
};
