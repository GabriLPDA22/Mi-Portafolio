"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, type Variants } from "framer-motion";
import { Quote } from "lucide-react";

/* ============================================
   DATA
   ============================================ */
interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "La velocidad de ejecución fue impresionante. En semanas teníamos un MVP funcional que superó nuestras expectativas.",
    author: "Cliente (Zaragoza)",
  },
  {
    id: "2",
    quote:
      "Comunicación clara, entregas puntuales y código impecable. Entiende el negocio, no solo la tecnología.",
    author: "Equipo (Consultora)",
  },
  {
    id: "3",
    quote:
      "El rendimiento de la aplicación es excepcional. Core Web Vitals perfectos y una experiencia de usuario fluida.",
    author: "Colaboración freelance",
  },
  {
    id: "4",
    quote:
      "Trabajar con él fue un placer. Responsive, profesional y con una visión de producto que añade valor real.",
    author: "Cliente (Zaragoza)",
  },
];

/* ============================================
   ANIMATIONS
   ============================================ */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/* ============================================
   TESTIMONIAL CARD
   ============================================ */
function TestimonialCard({
  testimonial,
  isMobile = false,
}: {
  testimonial: Testimonial;
  isMobile?: boolean;
}) {
  const content = (
    <div className="group relative flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-lg hover:shadow-[#8b5cf6]/5 sm:p-8">
      {/* Quote icon */}
      <div className="mb-5">
        <Quote className="h-8 w-8 text-[#8b5cf6]/30" strokeWidth={1} />
      </div>

      {/* Quote text */}
      <blockquote className="mb-6 flex-1 text-[15px] leading-relaxed text-white/70 sm:text-base">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="text-[13px] font-medium text-white/50">
        — {testimonial.author}
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div
        className="flex-shrink-0 snap-start"
        style={{ minWidth: "85%", maxWidth: "340px" }}
      >
        {content}
      </div>
    );
  }

  return <motion.div variants={fadeInUp}>{content}</motion.div>;
}

/* ============================================
   MOBILE CAROUSEL
   ============================================ */
function MobileCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    if (scrollRef.current.scrollLeft > 10) {
      setHasScrolled(true);
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative lg:hidden">
      {/* Hint - desaparece al hacer scroll */}
      {!hasScrolled && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: hasScrolled ? 0 : 1 }}
          className="mb-4 flex items-center gap-2 px-5 text-[12px] text-white/60"
        >
          <span>Desliza →</span>
        </motion.div>
      )}

      {/* Carousel */}
      <div className="relative">
        {/* Fade derecho */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0a0a0b] to-transparent" />

        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth px-5 pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isMobile
            />
          ))}
          <div className="w-1 flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}

/* ============================================
   DESKTOP GRID
   ============================================ */
function DesktopGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="hidden gap-5 lg:grid lg:grid-cols-2"
    >
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </motion.div>
  );
}

/* ============================================
   MAIN SECTION
   ============================================ */
export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="relative py-24 sm:py-32">
      <div className="container-main">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center lg:mb-16"
        >
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-[#8b5cf6]">
            Testimonios
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Lo que me han dicho
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
            Feedback de clientes y colaboraciones reales.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <MobileCarousel />

        {/* Desktop Grid */}
        <DesktopGrid />
      </div>
    </section>
  );
}

