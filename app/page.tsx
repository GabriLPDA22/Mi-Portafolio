import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import Preloader from "@/components/ui/Preloader";
import JsonLd from "@/components/JsonLd";
import {
  personData,
  organizationData,
  websiteData,
  breadcrumbsData,
} from "@/lib/structured-data";

const ServicesSection = dynamic(
  () => import("@/components/sections/ServicesSection")
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
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection")
);
// Tarifas / FAQ freelance — checkpoint f9d8404; descomentar si se recupera
// const PricingSection = dynamic(() => import("@/components/sections/PricingSection"));
// const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));
const ScrollToTop = dynamic(() => import("@/components/ui/ScrollToTop"));

export default function Home() {
  const allStructuredData = {
    "@context": "https://schema.org",
    "@graph": [personData, websiteData, organizationData, breadcrumbsData],
  };

  return (
    <div className="w-full max-w-[100vw]">
      <JsonLd data={allStructuredData} />

      <Preloader />
      <Header />
      <main className="w-full max-w-[100vw]">
        <HeroSection />

        <div className="relative isolate">
          <AboutSection />
          <ServicesSection />
        </div>

        <FeaturedProjects />
        <ExperienceSection />
        <ResultsSection />

        {/* Freelance funnel oculto — ver commit checkpoint freelance
        <PricingSection />
        <FAQSection />
        */}

        <ContactSection />
      </main>
      <ScrollToTop />
    </div>
  );
}
