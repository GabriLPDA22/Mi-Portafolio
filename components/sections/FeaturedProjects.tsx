"use client";

import { m, type Variants } from "framer-motion";
import Image from "next/image";
import { useLocale } from "@/contexts/LocaleContext";

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

// Image configuration (static, not translated)
const projectImages: Record<string, { src: string; alt: string; type: "mockup" | "photo" }> = {
  arch: {
    src: "/img/mock_arch_iphone_15.webp",
    alt: "ARCH App iOS - Aplicación móvil para comunidad de Oxford University desarrollada con React Native y Expo",
    type: "mockup",
  },
  huvegrym: {
    src: "/img/Huvegrym.webp",
    alt: "Huvegrym - Sitio web de escuela de danza desarrollado con Next.js, optimizado para SEO y rendimiento",
    type: "photo",
  },
  "tarot-divinidad": {
    src: "/img/divinidad000.png",
    alt: "Tarot Divinidad 000 - Web con sistema de reservas vía Calendly y WhatsApp desarrollada con Astro",
    type: "photo",
  },
};

// CTA href mapping (static URLs)
const projectCtaHrefs: Record<string, Record<string, string>> = {
  arch: {
    "Descargar en App Store": "https://apps.apple.com/us/app/the-arch/id6753820007",
    "Download on App Store": "https://apps.apple.com/us/app/the-arch/id6753820007",
    "Solicitar detalles": "#contacto",
    "Request details": "#contacto",
  },
  huvegrym: {
    "Ver sitio web": "https://huvegrym.es",
    "View website": "https://huvegrym.es",
  },
  "tarot-divinidad": {
    "Ver sitio web": "https://divinidad000.com",
    "View website": "https://divinidad000.com",
  },
};

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
   PROJECT CONTENT (desktop vertical layout)
   ============================================ */
function ProjectContent({ project }: { project: Project }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-lg hover:shadow-[#8b5cf6]/10">

      {/* ── Image area — height fija para que ambas columnas arranquen igual ── */}
      <div className="relative h-[240px] flex-shrink-0 overflow-hidden border-b border-white/[0.06] bg-white/[0.015]">
        {project.image.type === "mockup" ? (
          <>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-[240px] w-[180px] rounded-full bg-[#8b5cf6]/10 blur-[70px]" />
            </div>
            <div className="absolute inset-0 flex items-end justify-center">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={160}
                height={327}
                className="drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ maxHeight: "230px", width: "auto", objectFit: "contain" }}
                sizes="50vw"
              />
            </div>
          </>
        ) : (
          <>
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              className="object-cover brightness-[0.85] transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 z-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
                En producción · {project.cta.href.replace(/^https?:\/\//, "")}
              </span>
            </div>
          </>
        )}
      </div>

      {/* ── Content ── */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        {/* Badge + title */}
        <div className="mb-4">
          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            En producción
          </span>
          <h3 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
            {project.title}
          </h3>
        </div>

        <p className="mb-1 text-[15px] text-white/60">{project.subtitle}</p>
        <p className="mb-5 text-[13px] text-white/40">{project.description}</p>

        {/* Bullets */}
        <ul className="mb-6 space-y-2">
          {project.bullets.slice(0, 4).map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5 text-[13px] text-white/50">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#8b5cf6]/60" />
              {bullet}
            </li>
          ))}
        </ul>

        {/* Chips + CTAs — pegados al fondo */}
        <div className="mt-auto">
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.chips.slice(0, 6).map((chip) => (
              <span
                key={chip}
                className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-white/60"
              >
                {chip}
              </span>
            ))}
          </div>

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
   MOBILE CARD
   ============================================ */
function MobileProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] sm:backdrop-blur-xl">
      {/* Image area — altura fija y compacta */}
      <div className="relative h-52 w-full overflow-hidden border-b border-white/[0.06] bg-white/[0.015]">
        {project.image.type === "mockup" ? (
          <>
            <div className="pointer-events-none absolute inset-0 hidden items-center justify-center sm:flex">
              <div className="h-[220px] w-[160px] rounded-full bg-[#8b5cf6]/10 blur-[50px]" />
            </div>
            <div className="absolute inset-0 flex items-end justify-center pb-0">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={130}
                height={266}
                priority={priority}
                className="object-contain drop-shadow-2xl"
                style={{ maxHeight: "210px", width: "auto" }}
              />
            </div>
          </>
        ) : (
          <>
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              className="object-cover brightness-[0.85]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute bottom-3 left-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
                En producción · {project.cta.href.replace(/^https?:\/\//, "")}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          En producción
        </span>

        {/* Title */}
        <h3 className="mt-2 mb-0.5 font-display text-[22px] font-semibold text-white">
          {project.title}
        </h3>
        <p className="mb-0.5 text-[14px] text-white/60">{project.subtitle}</p>
        <p className="mb-4 text-[12px] leading-relaxed text-white/40">{project.description}</p>

        {/* Bullets */}
        <ul className="mb-4 space-y-2">
          {project.bullets.slice(0, 4).map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5 text-[13px] text-white/50">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#8b5cf6]/60" />
              {bullet}
            </li>
          ))}
        </ul>

        {/* Chips */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.chips.slice(0, 6).map((chip) => (
            <span
              key={chip}
              className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-white/60"
            >
              {chip}
            </span>
          ))}
        </div>

        {/* CTAs — full width en móvil */}
        <div className="flex flex-col gap-2.5">
          <a
            href={project.cta.href}
            target={project.cta.external ? "_blank" : undefined}
            rel={project.cta.external ? "noopener noreferrer" : undefined}
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#8b5cf6] text-[14px] font-semibold text-white transition-all hover:bg-[#7c4fe4] hover:shadow-lg hover:shadow-[#8b5cf6]/25"
          >
            {project.cta.label}
            {project.cta.external && (
              <ExternalLinkIcon className="h-3.5 w-3.5" />
            )}
          </a>
          {project.secondaryCta && (
            <a
              href={project.secondaryCta.href}
              className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-white/[0.1] text-[14px] font-medium text-white/70 transition-all hover:border-white/[0.2] hover:bg-white/[0.03] hover:text-white"
            >
              {project.secondaryCta.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================
   MOBILE STACK
   ============================================ */
function MobileStack({ projects }: { projects: Project[] }) {
  return (
    <div className="space-y-5 lg:hidden">
      {projects.map((project, index) => (
        <m.div
          key={project.id}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <MobileProjectCard project={project} priority={index === 0} />
        </m.div>
      ))}
    </div>
  );
}

/* ============================================
   DESKTOP GRID (2 COLUMNS)
   ============================================ */
function DesktopGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6">
      {projects.map((project, index) => (
        <m.div
          key={project.id}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          <ProjectContent project={project} />
        </m.div>
      ))}
    </div>
  );
}

/* ============================================
   MAIN SECTION
   ============================================ */
export default function FeaturedProjects() {
  const { t } = useLocale();

  // Build projects from translations
  const projects: Project[] = t.projects.items.map((item) => {
    const image = projectImages[item.id];
    const ctaHref = projectCtaHrefs[item.id]?.[item.cta] || "#";
    const hasSecondaryCta = 'secondaryCta' in item && item.secondaryCta;
    const secondaryCtaHref = hasSecondaryCta ? projectCtaHrefs[item.id]?.[item.secondaryCta as string] || "#contacto" : undefined;

    return {
      id: item.id,
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
      bullets: [...item.bullets], // Convert readonly array to mutable
      chips: [...item.chips], // Convert readonly array to mutable
      image,
      cta: {
        label: item.cta,
        href: ctaHref,
        external: ctaHref.startsWith("http"),
      },
      secondaryCta: hasSecondaryCta
        ? {
            label: item.secondaryCta as string,
            href: secondaryCtaHref || "#contacto",
          }
        : undefined,
    };
  });

  return (
    <section id="proyectos" className="relative py-24 sm:py-32">
      <div className="container-main">
        {/* Header */}
        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center lg:mb-16"
        >
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-[#8b5cf6]">
            {t.projects.title}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t.projects.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
            {t.projects.subtitle}
          </p>
        </m.div>

        {/* Mobile Stack */}
        <MobileStack projects={projects} />

        {/* Desktop Grid */}
        <DesktopGrid projects={projects} />
      </div>
    </section>
  );
}
