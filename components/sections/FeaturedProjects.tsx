"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";

/* ============================================
   DATA
   ============================================ */
interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  chips: string[];
  image: {
    src: string;
    alt: string;
    type: "mockup" | "photo";
  };
  cta: {
    label: string;
    href: string;
    external?: boolean;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

const projects: Project[] = [
  {
    id: "arch",
    title: "ARCH",
    subtitle: "Plataforma de comunidad para Oxford University",
    description:
      "App iOS completa con backend escalable y panel de administración.",
    bullets: [
      "App iOS con React Native + Expo",
      "Tickets digitales con Apple Wallet",
      "Chat en tiempo real (SignalR)",
      "Pagos y suscripciones (Stripe)",
      "Panel admin y moderación cloud",
    ],
    chips: [".NET 9", "PostgreSQL", "AWS", "Stripe", "React Native", "Expo"],
    image: {
      src: "/img/mock_arch_iphone_15.png",
      alt: "ARCH App - Vista de eventos",
      type: "mockup",
    },
    cta: {
      label: "Solicitar detalles",
      href: "#contacto",
    },
    secondaryCta: {
      label: "Ver arquitectura",
      href: "#contacto",
    },
  },
  {
    id: "huvegrym",
    title: "Huvegrym",
    subtitle: "Web para escuela de danza",
    description: "Optimizada para SEO y rendimiento (Core Web Vitals).",
    bullets: [
      "Diseño y desarrollo web moderno",
      "Mobile-first y responsive",
      "Core Web Vitals optimizados",
      "SEO técnico avanzado",
      "Formularios de contacto",
    ],
    chips: ["Next.js", "Tailwind", "SEO", "Performance", "UI/UX"],
    image: {
      src: "/img/Huvegrym.webp",
      alt: "Huvegrym - Escuela de danza",
      type: "photo",
    },
    cta: {
      label: "Ver sitio web",
      href: "https://huvegrym.es/",
      external: true,
    },
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

/* ============================================
   EXTERNAL LINK ICON
   ============================================ */
function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

/* ============================================
   PROJECT CONTENT
   ============================================ */
function ProjectContent({
  project,
  isMobile = false,
}: {
  project: Project;
  isMobile?: boolean;
}) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-lg hover:shadow-[#8b5cf6]/10">
      <div className="relative z-10 flex h-full flex-col lg:flex-row">
        {/* Image Section */}
        <div
          className={`relative flex items-center justify-center ${
            project.image.type === "mockup"
              ? "p-6 sm:p-8 lg:w-[42%] lg:p-10"
              : "lg:w-[42%]"
          }`}
        >
          {project.image.type === "mockup" ? (
            <>
              {/* Glow behind mockup */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="h-[280px] w-[180px] rounded-full bg-[#8b5cf6]/10 blur-[60px]" />
              </div>
              {/* Mockup */}
              <div className="relative z-10 w-[180px] sm:w-[200px] lg:w-[220px]">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={220}
                  height={450}
                  className="drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 200px, 220px"
                />
              </div>
            </>
          ) : (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl lg:absolute lg:inset-0 lg:aspect-auto lg:rounded-l-2xl lg:rounded-tr-none">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                className="object-cover brightness-[0.92] transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              {/* Badge on photo */}
              <div className="absolute bottom-4 left-4 z-20">
                <span className="inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
                  En producción · huvegrym.es
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 lg:p-10">
          {/* Header */}
          <div className="mb-1 flex flex-wrap items-center gap-3">
            <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              {project.title}
            </h3>
            <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-400">
              En producción
            </span>
          </div>

          <p className="mb-1 text-[15px] text-white/60">{project.subtitle}</p>
          <p className="mb-5 text-[13px] text-white/40">
            {project.description}
          </p>

          {/* Bullets - máximo 4-5 */}
          <ul className="mb-6 flex-1 space-y-2">
            {project.bullets.slice(0, 4).map((bullet, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-[13px] text-white/50"
              >
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#8b5cf6]/60" />
                {bullet}
              </li>
            ))}
          </ul>

          {/* Chips */}
          <div className="mb-6 flex flex-wrap gap-1.5">
            {project.chips.slice(0, 6).map((chip) => (
              <span
                key={chip}
                className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-white/45"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.cta.href}
              target={project.cta.external ? "_blank" : undefined}
              rel={project.cta.external ? "noopener noreferrer" : undefined}
              className="group/btn inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-[#8b5cf6] px-5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#7c4fe4] hover:shadow-lg hover:shadow-[#8b5cf6]/25"
            >
              {project.cta.label}
              {project.cta.external && (
                <ExternalLinkIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              )}
            </a>
            {project.secondaryCta && (
              <a
                href={project.secondaryCta.href}
                className="inline-flex h-10 items-center justify-center rounded-lg border border-white/[0.1] px-5 text-[13px] font-medium text-white/70 transition-all duration-300 hover:border-white/[0.2] hover:bg-white/[0.03] hover:text-white"
              >
                {project.secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   MOBILE STACK
   ============================================ */
function MobileStack() {
  return (
    <div className="space-y-6 lg:hidden">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <ProjectContent project={project} isMobile />
        </motion.div>
      ))}
    </div>
  );
}

/* ============================================
   DESKTOP TABS
   ============================================ */
function DesktopTabs() {
  const [activeTab, setActiveTab] = useState(projects[0].id);

  const activeProject = projects.find((p) => p.id === activeTab) || projects[0];

  return (
    <div className="hidden lg:block">
      {/* Tabs */}
      <div className="mb-6 flex gap-2">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setActiveTab(project.id)}
            className={`rounded-lg border px-4 py-2 text-[13px] font-medium transition-all ${
              activeTab === project.id
                ? "border-[#8b5cf6]/50 bg-[#8b5cf6]/10 text-white"
                : "border-white/[0.08] bg-white/[0.02] text-white/60 hover:border-white/[0.12] hover:text-white"
            }`}
          >
            {project.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ProjectContent project={activeProject} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ============================================
   MAIN SECTION
   ============================================ */
export default function FeaturedProjects() {
  return (
    <section id="proyectos" className="relative py-24 sm:py-32">
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
            Proyectos
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Proyectos destacados
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
            Aplicaciones reales en producción. Diseño, desarrollo y despliegue.
          </p>
        </motion.div>

        {/* Mobile Stack */}
        <MobileStack />

        {/* Desktop Tabs */}
        <DesktopTabs />
      </div>
    </section>
  );
}
