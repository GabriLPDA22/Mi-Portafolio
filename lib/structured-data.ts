const siteUrl = "https://gabrielcodes.dev";

export const personData = {
  "@type": "Person",
  name: "Gabriel Saiz",
  jobTitle: "Full-Stack Developer",
  description:
    "Desarrollador Full-Stack freelance especializado en React Native, Next.js y .NET. Desarrollo de aplicaciones móviles, web apps y dashboards.",
  url: siteUrl,
  sameAs: [
    "https://www.linkedin.com/in/gabriel-saiz-de-la-maza-bajo-140370184/",
    "https://github.com/GabriLPDA22",
    "https://instagram.com/saiz_gabriel",
  ],
  email: "gsaiz.bajo@gmail.com",
  knowsAbout: [
    "React Native", "Next.js", "TypeScript", ".NET", "PostgreSQL",
    "Desarrollo móvil", "Desarrollo web", "Full Stack Development",
  ],
  offers: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      serviceType: "Desarrollo de software",
      areaServed: "ES",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `${siteUrl}/#contacto`,
      },
    },
  },
};

export const organizationData = {
  "@type": "ProfessionalService",
  name: "Gabriel Saiz — Full-Stack Developer",
  description:
    "Servicios de desarrollo de software: aplicaciones móviles iOS/Android, aplicaciones web, dashboards y sistemas full-stack. Presupuesto sin compromiso.",
  url: siteUrl,
  email: "gsaiz.bajo@gmail.com",
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Transferencia bancaria, PayPal",
  areaServed: [
    { "@type": "Country", name: "España" },
    { "@type": "Country", name: "Latinoamérica" },
  ],
  serviceType: [
    "Desarrollo de aplicaciones móviles",
    "Desarrollo web",
    "Desarrollo full-stack",
    "Consultoría técnica",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de desarrollo freelance",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Desarrollo de app móvil iOS/Android",
          description: "Aplicaciones móviles nativas con React Native y Expo para iOS y Android.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Desarrollo web con Next.js",
          description: "Aplicaciones web modernas, rápidas y optimizadas con Next.js y TypeScript.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Backend y APIs con .NET",
          description: "APIs REST y sistemas backend robustos con .NET y PostgreSQL.",
        },
      },
    ],
  },
};

export const localBusinessData = {
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Gabriel Saiz — Desarrollador Freelance",
  description:
    "Desarrollador Full-Stack freelance en Zaragoza. Especializado en apps móviles iOS/Android con React Native, webs con Next.js y backends con .NET.",
  url: siteUrl,
  telephone: null,
  email: "gsaiz.bajo@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zaragoza",
    addressRegion: "Aragón",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.6488,
    longitude: -0.8891,
  },
  areaServed: [
    { "@type": "City", name: "Zaragoza" },
    { "@type": "Country", name: "España" },
    { "@type": "AdministrativeArea", name: "Europa" },
  ],
  priceRange: "€€",
  openingHours: "Mo-Fr 09:00-18:00",
  sameAs: [
    "https://www.linkedin.com/in/gabriel-saiz-de-la-maza-bajo-140370184/",
    "https://github.com/GabriLPDA22",
  ],
  founder: { "@type": "Person", name: "Gabriel Saiz" },
};

export const pricingData = {
  "@type": "ItemList",
  name: "Tarifas de desarrollador freelance full-stack",
  description: "Precios orientativos de Gabriel Saiz como desarrollador freelance full-stack",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Desarrollo Web y Landing Pages con Next.js",
        description: "Web corporativa o landing page optimizada para SEO y mobile-first.",
        offers: { "@type": "Offer", priceCurrency: "EUR", price: "1500",
          priceSpecification: { "@type": "UnitPriceSpecification", priceType: "MinimumAdvertisedPrice" } },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Dashboard / Panel de Administración con Next.js",
        description: "Panel de administración a medida con autenticación, roles y gestión de contenido.",
        offers: { "@type": "Offer", priceCurrency: "EUR", price: "3000",
          priceSpecification: { "@type": "UnitPriceSpecification", priceType: "MinimumAdvertisedPrice" } },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Desarrollo de App Móvil iOS/Android",
        description: "Aplicación iOS y Android con React Native.",
        offers: { "@type": "Offer", priceCurrency: "EUR", price: "5500",
          priceSpecification: { "@type": "UnitPriceSpecification", priceType: "MinimumAdvertisedPrice" } },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Proyecto Full-Stack Completo",
        description: "App móvil + dashboard + backend + API.",
        offers: { "@type": "Offer", priceCurrency: "EUR", price: "9500",
          priceSpecification: { "@type": "UnitPriceSpecification", priceType: "MinimumAdvertisedPrice" } },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Mantenimiento y Soporte Mensual",
        description: "Mantenimiento continuo con bolsa de 6 horas/mes, actualizaciones y soporte prioritario.",
        offers: { "@type": "Offer", priceCurrency: "EUR", price: "450",
          priceSpecification: { "@type": "UnitPriceSpecification", priceType: "MinimumAdvertisedPrice", unitCode: "MON" } },
      },
    },
  ],
};

export const faqData = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto tardas en entregar una primera versión?",
      acceptedAnswer: { "@type": "Answer", text: "Normalmente entre 2-4 semanas para una primera versión funcional. Trabajo por iteraciones semanales." },
    },
    {
      "@type": "Question",
      name: "¿Trabajas con presupuestos cerrados o por iteraciones?",
      acceptedAnswer: { "@type": "Answer", text: "Ambos. Para proyectos con alcance claro, presupuesto cerrado. Para proyectos que evolucionan, por iteraciones semanales." },
    },
    {
      "@type": "Question",
      name: "¿Incluyes diseño UI/UX?",
      acceptedAnswer: { "@type": "Answer", text: "Sí, diseño y desarrollo van de la mano." },
    },
    {
      "@type": "Question",
      name: "¿Puedes mantener y escalar el proyecto?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutamente. Ofrezco mantenimiento continuo, mejoras y nuevas features." },
    },
    {
      "@type": "Question",
      name: "¿Qué stack usas normalmente?",
      acceptedAnswer: { "@type": "Answer", text: "React Native para apps móviles, Next.js para web, .NET para backend, PostgreSQL para base de datos." },
    },
    {
      "@type": "Question",
      name: "¿Cómo es el proceso de trabajo?",
      acceptedAnswer: { "@type": "Answer", text: "Llamada inicial → propuesta → iteraciones semanales → entrega. Comunicación constante." },
    },
  ],
};

export const breadcrumbsData = {
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Servicios", item: `${siteUrl}/#servicios` },
    { "@type": "ListItem", position: 3, name: "Proyectos", item: `${siteUrl}/#proyectos` },
    { "@type": "ListItem", position: 4, name: "Contacto", item: `${siteUrl}/#contacto` },
  ],
};
