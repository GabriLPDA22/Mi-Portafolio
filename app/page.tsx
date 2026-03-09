import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";

// Secciones bajo el fold — cargadas en chunks separados para reducir TBT móvil
const TechCarousel = dynamic(() => import("@/components/ui/TechCarousel"));
const ServicesSection = dynamic(
  () => import("@/components/sections/ServicesSection")
);
const PricingSection = dynamic(
  () => import("@/components/sections/PricingSection")
);
const FeaturedProjects = dynamic(
  () => import("@/components/sections/FeaturedProjects")
);
const AboutSection = dynamic(
  () => import("@/components/sections/AboutSection")
);
const ResultsSection = dynamic(
  () => import("@/components/sections/ResultsSection")
);
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection")
);
const Comments = dynamic(() => import("@/components/sections/Comments"));
const Footer = dynamic(() => import("@/components/layout/Footer"));
const ScrollToTop = dynamic(() => import("@/components/ui/ScrollToTop"));

export default function Home() {
  // Structured Data (JSON-LD) para SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gabriel Saiz",
    jobTitle: "Full-Stack Developer",
    description:
      "Desarrollador Full-Stack freelance especializado en React Native, Next.js y .NET. Desarrollo de aplicaciones móviles, web apps y dashboards.",
    url: "https://gabrielcodes.dev",
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
    offers: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        serviceType: "Desarrollo de software",
        areaServed: "ES",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://gabrielcodes.dev/#contacto",
        },
      },
    },
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Gabriel Saiz — Full-Stack Developer",
    description:
      "Servicios de desarrollo de software: aplicaciones móviles iOS/Android, aplicaciones web, dashboards y sistemas full-stack. Presupuesto sin compromiso.",
    url: "https://gabrielcodes.dev",
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

  // LocalBusiness schema (posicionamiento local Zaragoza/España)
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://gabrielcodes.dev/#business",
    name: "Gabriel Saiz — Desarrollador Freelance",
    description:
      "Desarrollador Full-Stack freelance en Zaragoza. Especializado en apps móviles iOS/Android con React Native, webs con Next.js y backends con .NET.",
    url: "https://gabrielcodes.dev",
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
    founder: {
      "@type": "Person",
      name: "Gabriel Saiz",
    },
  };

  // Pricing structured data
  const pricingData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tarifas de desarrollador freelance full-stack",
    description: "Precios orientativos de Gabriel Saiz como desarrollador freelance full-stack",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Desarrollo de App Móvil iOS/Android",
          description: "Aplicación iOS y Android con React Native. Incluye diseño, desarrollo y publicación en stores.",
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: "2500",
            priceSpecification: { "@type": "UnitPriceSpecification", priceType: "MinimumAdvertisedPrice" },
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Desarrollo Web y Dashboards con Next.js",
          description: "Web corporativa, landing page o panel de administración. Rápida, optimizada para SEO y mobile-first.",
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: "1500",
            priceSpecification: { "@type": "UnitPriceSpecification", priceType: "MinimumAdvertisedPrice" },
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Proyecto Full-Stack Completo",
          description: "App móvil + web + backend + API. Todo desarrollado por un solo profesional.",
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: "4500",
            priceSpecification: { "@type": "UnitPriceSpecification", priceType: "MinimumAdvertisedPrice" },
          },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Mantenimiento y Soporte Mensual",
          description: "Mantenimiento continuo, actualizaciones y soporte prioritario mensual.",
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: "300",
            priceSpecification: { "@type": "UnitPriceSpecification", priceType: "MinimumAdvertisedPrice", unitCode: "MON" },
          },
        },
      },
    ],
  };

  // FAQ structured data (rich results en Google)
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto tardas en entregar una primera versión?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del alcance, pero normalmente entre 2-4 semanas para una primera versión funcional. Trabajo por iteraciones semanales, así que verás progreso constante desde el día uno.",
        },
      },
      {
        "@type": "Question",
        name: "¿Trabajas con presupuestos cerrados o por iteraciones?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ambos. Para proyectos con alcance claro, presupuesto cerrado. Para proyectos que evolucionan, trabajo por iteraciones semanales con un presupuesto mensual. Siempre transparente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Incluyes diseño UI/UX?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, diseño y desarrollo van de la mano. Si ya tienes diseño, lo implemento. Si no, diseño interfaces modernas y funcionales basadas en buenas prácticas y tu marca.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedes mantener y escalar el proyecto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutamente. El código que escribo está pensado para escalar. Ofrezco mantenimiento continuo, mejoras y nuevas features según tus necesidades.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué stack usas normalmente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "React Native para apps móviles, Next.js para web, .NET para backend, PostgreSQL para base de datos. Me adapto a lo que necesites. Lo importante es elegir la herramienta correcta para cada problema.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo es el proceso de trabajo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Empezamos con una llamada para entender tu proyecto. Te envío una propuesta clara con alcance, tiempos y presupuesto. Si encaja, empezamos con iteraciones semanales. Comunicación constante y entregas regulares.",
        },
      },
    ],
  };

  // Breadcrumbs structured data
  const breadcrumbsData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://gabrielcodes.dev",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Servicios",
        item: "https://gabrielcodes.dev/#servicios",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Proyectos",
        item: "https://gabrielcodes.dev/#proyectos",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contacto",
        item: "https://gabrielcodes.dev/#contacto",
      },
    ],
  };

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      {/* Structured Data para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsData) }}
      />

      <Header />
      <main className="w-full max-w-[100vw] overflow-x-hidden">
        {/* Hero + Tech Stack */}
        <HeroSection />
        <TechCarousel />

        {/* Services + Pricing + Projects */}
        <ServicesSection />
        <PricingSection />
        <FeaturedProjects />

        {/* About + Results */}
        <AboutSection />
        <ResultsSection />

        {/* Pre-contact: FAQ */}
        <FAQSection />

        {/* Comments */}
        <Comments />

        {/* Contact */}
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
