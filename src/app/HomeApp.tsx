import Providers from "./Providers";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import Preloader from "@/components/ui/Preloader";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ResultsSection from "@/components/sections/ResultsSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollToTop from "@/components/ui/ScrollToTop";
// Tarifas / FAQ freelance — checkpoint f9d8404; descomentar si se recupera
// import PricingSection from "@/components/sections/PricingSection";
// import FAQSection from "@/components/sections/FAQSection";

/** Portada completa: se renderiza en build (HTML estático) y se hidrata en el navegador. */
export default function HomeApp() {
  return (
    <Providers>
      <div className="w-full max-w-[100vw]">
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
    </Providers>
  );
}
