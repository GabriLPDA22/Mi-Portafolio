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
  return (
    <>
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
