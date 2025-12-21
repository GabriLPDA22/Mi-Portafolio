"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Variants, motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import {
  Smartphone,
  Globe,
  Server,
  Container,
  Gauge,
  Wrench,
} from "lucide-react";

/* ============================================
   DATA - 6 SERVICIOS
   ============================================ */
interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  bullets: string[];
  chips: string[];
  cta: { label: string; href: string };
  featured?: boolean;
}

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  mobile: Smartphone,
  web: Globe,
  backend: Server,
  devops: Container,
  performance: Gauge,
  maintenance: Wrench,
};

// CTA href mapping
const ctaHrefMap: Record<string, string> = {
  "Cómo trabajo": "#proceso",
  "How I work": "#proceso",
  "Ver ejemplos": "#proyectos",
  "See examples": "#proyectos",
  "Solicitar info": "#contacto",
  "Request info": "#contacto",
  "Hablemos": "#contacto",
  "Let's talk": "#contacto",
  "Ver proceso": "#proceso",
  "See process": "#proceso",
  "Ver planes": "#contacto",
  "See plans": "#contacto",
};

/* ============================================
   ANIMATIONS
   ============================================ */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

/* ============================================
   SERVICE CARD
   ============================================ */
function ServiceCard({
  service,
  index,
  isMobile = false,
}: {
  service: Service;
  index: number;
  isMobile?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (isMobile) return;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty("--spotlight-x", `${x}px`);
        cardRef.current.style.setProperty("--spotlight-y", `${y}px`);
      });
    },
    [isMobile]
  );

  const handlePointerLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    // No resetear la posición, solo dejar que el spotlight desaparezca suavemente
    // El opacity ya se maneja con CSS (group-hover:opacity-100)
  }, []);

  const Icon = service.icon;

  const cardContent = (
    <>
      {/* Spotlight overlay - solo desktop */}
      {!isMobile && (
        <div className="service-card-spotlight pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      )}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Icon */}
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#8b5cf6]/10 transition-all duration-300 group-hover:bg-[#8b5cf6]/20 lg:h-12 lg:w-12">
          <Icon
            className="h-5 w-5 text-[#8b5cf6] transition-transform duration-300 group-hover:rotate-[-6deg] lg:h-6 lg:w-6"
            strokeWidth={1.5}
          />
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-white mb-2 text-xl">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-white/50 leading-relaxed mb-5 text-[14px]">
          {service.description}
        </p>

        {/* Bullets */}
        <ul className="mb-6 space-y-2 flex-1">
          {service.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-center gap-2.5 text-[13px] text-white/40"
            >
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-[#8b5cf6]/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {bullet}
            </li>
          ))}
        </ul>

        {/* Footer: Chips + CTA */}
        <div className="mt-auto">
          {/* Chips */}
          <div className="mb-4 flex flex-wrap gap-1.5">
            {service.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-white/50"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href={service.cta.href}
            className="group/cta inline-flex items-center gap-1.5 text-[13px] font-medium text-[#8b5cf6] transition-colors hover:text-[#a78bfa]"
          >
            {service.cta.label}
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );

  // Mobile card (no animation wrapper)
  if (isMobile) {
    return (
      <div
        ref={cardRef}
        className="service-card group relative flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl transition-all active:scale-[0.98]"
        style={{ minWidth: "85%", maxWidth: "340px" }}
      >
        {cardContent}
      </div>
    );
  }

  // Desktop card (with motion)
  return (
    <motion.div
      ref={cardRef}
      variants={fadeInUp as unknown as Variants }
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={index * 0.08}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="service-card group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.05] hover:shadow-[0_20px_50px_-12px_rgba(139,92,246,0.15)] lg:p-8"
    >
      {cardContent}
    </motion.div>
  );
}

/* ============================================
   MOBILE CAROUSEL
   ============================================ */
function MobileCarousel({ services }: { services: Service[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;

    requestAnimationFrame(() => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current!;
      const maxScroll = scrollWidth - clientWidth;
      const currentProgress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setProgress(currentProgress);
    });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative lg:hidden">
      {/* Hint */}
      <div className="mb-4 flex items-center gap-2 px-5 text-[12px] text-white/40">
        <span>Desliza para ver más</span>
        <svg
          className="h-4 w-4 animate-pulse"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>

      {/* Carousel container */}
      <div className="relative">
        {/* Fade left */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#0a0a0b] to-transparent" />

        {/* Fade right */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#0a0a0b] to-transparent" />

        {/* Scrollable area */}
        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth px-5 pb-2 snap-x snap-mandatory"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isMobile
            />
          ))}
          {/* Spacer for last card */}
          <div className="flex-shrink-0 w-1" />
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-5 px-5">
        <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/[0.08]">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-[#8b5cf6] transition-all duration-150 ease-out"
            style={{
              width: `${Math.max(20, (1 / services.length) * 100)}%`,
              transform: `translateX(${
                progress * (services.length - 1) * 100
              }%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* ============================================
   DESKTOP GRID (2 COLUMNS)
   ============================================ */
function DesktopGrid({ services }: { services: Service[] }) {
  return (
    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6">
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </div>
  );
}

/* ============================================
   MAIN SECTION
   ============================================ */
export default function ServicesSection() {
  const { t } = useLocale();

  // Build services from translations
  const services: Service[] = t.services.items.map((item) => ({
    id: item.id,
    icon: iconMap[item.id],
    title: item.title,
    description: item.description,
    bullets: item.bullets,
    chips: item.chips,
    cta: {
      label: item.cta,
      href: ctaHrefMap[item.cta] || "#contacto",
    },
    featured: item.id === "mobile",
  }));

  return (
    <section id="servicios" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container-main">
        {/* Header */}
        <motion.div
          variants={fadeInUp as unknown as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          className="mb-12 max-w-2xl px-5 lg:mb-16 lg:px-0"
        >
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-[#8b5cf6]">
            {t.services.title}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t.services.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/50 sm:text-lg">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Mobile: Carousel */}
        <MobileCarousel services={services} />

        {/* Desktop: Grid */}
        <DesktopGrid services={services} />
      </div>
    </section>
  );
}
