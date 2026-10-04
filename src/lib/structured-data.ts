const siteUrl = "https://gabrielcodes.dev";

export const personData = {
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Gabriel Saiz",
  jobTitle: "Full-Stack Developer",
  description:
    "Desarrollador Full-Stack con experiencia en C# / .NET, Vue, Astro y React Native. Apps en producción y abierto a oportunidades laborales.",
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
  knowsLanguage: [
    { "@type": "Language", name: "Spanish", alternateName: "es" },
    { "@type": "Language", name: "English", alternateName: "en" },
  ],
  knowsAbout: [
    "C#",
    ".NET",
    "Vue.js",
    "Astro",
    "React Native",
    "TypeScript",
    "Tailwind CSS",
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
    skills: ["C#", ".NET", "Vue.js", "Astro", "React Native", "Expo", "TypeScript", "Tailwind CSS", "PostgreSQL", "AWS"],
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

/** Página de perfil (Google la usa para perfiles de personas): apunta a personData. */
export const profilePageData = (locale: "es" | "en") => ({
  "@type": "ProfilePage",
  url: locale === "es" ? siteUrl : `${siteUrl}/en`,
  inLanguage: locale === "es" ? "es-ES" : "en-GB",
  dateModified: new Date().toISOString().slice(0, 10),
  mainEntity: { "@id": `${siteUrl}/#person` },
});
