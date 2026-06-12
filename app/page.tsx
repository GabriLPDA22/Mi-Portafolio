import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import Preloader from "@/components/ui/Preloader";
import JsonLd from "@/components/JsonLd";
import {
  personData,
  organizationData,
  localBusinessData,
  pricingData,
  faqData,
  breadcrumbsData,
} from "@/lib/structured-data";

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
const ExperienceSection = dynamic(
  () => import("@/components/sections/ExperienceSection")
);
const ResultsSection = dynamic(
  () => import("@/components/sections/ResultsSection")
);
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection")
);
const LazyComments = dynamic(
  () => import("@/components/sections/LazyComments")
);
const Footer = dynamic(() => import("@/components/layout/Footer"));
const ScrollToTop = dynamic(() => import("@/components/ui/ScrollToTop"));

export default function Home() {
  const allStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      personData,
      organizationData,
      localBusinessData,
      pricingData,
      faqData,
      breadcrumbsData,
    ],
  };

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      <JsonLd data={allStructuredData} />

      <Preloader />
      <Header />
      <main className="w-full max-w-[100vw] overflow-x-hidden">
        {/* Hero + Tech Stack */}
        <HeroSection />
        <TechCarousel />

        {/* Services + Pricing + Projects */}
        <ServicesSection />
        <PricingSection />
        <FeaturedProjects />

        {/* About + Experience + Results */}
        <AboutSection />
        <ExperienceSection />
        <ResultsSection />

        {/* Pre-contact: FAQ */}
        <FAQSection />

        {/* Comments — carga diferida: el bundle de Supabase solo se descarga
            cuando el usuario se acerca a la sección */}
        <LazyComments />

        {/* Contact */}
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
