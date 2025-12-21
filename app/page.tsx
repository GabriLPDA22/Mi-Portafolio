import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TechCarousel from "@/components/ui/TechCarousel";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import AboutSection from "@/components/sections/AboutSection";
import ResultsSection from "@/components/sections/ResultsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

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
      "Servicios de desarrollo de software: aplicaciones móviles iOS/Android, aplicaciones web, dashboards y sistemas full-stack.",
    url: "https://gabrielcodes.dev",
    email: "gsaiz.bajo@gmail.com",
    areaServed: {
      "@type": "Country",
      name: "España",
    },
    serviceType: [
      "Desarrollo de aplicaciones móviles",
      "Desarrollo web",
      "Desarrollo full-stack",
      "Consultoría técnica",
    ],
  };

  return (
    <>
      {/* Structured Data para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />

      <Header />
      <main>
        {/* Hero + Tech Stack */}
        <HeroSection />
        <TechCarousel />

        {/* Services + Projects */}
        <ServicesSection />
        <FeaturedProjects />

        {/* About + Results */}
        <AboutSection />
        <ResultsSection />

        {/* Pre-contact: FAQ */}
        <FAQSection />

        {/* Contact */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
