"use client";

import { m, type Variants } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import SectionHeading from "@/components/ui/SectionHeading";

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
const projectImages: Record<
  string,
  { src: string; alt: string; type: "mockup" | "photo" }
> = {
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

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ============================================
   PROJECT CARD — imagen y texto alternados en lg
   ============================================ */
function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <m.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="card-acid group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02]"
    >
      <div
        className={`grid lg:grid-cols-2 ${
          reversed ? "lg:[direction:rtl]" : ""
        }`}
      >
        {/* ── Imagen ── */}
        <div className="relative h-64 overflow-hidden border-b border-white/[0.06] sm:h-80 lg:h-auto lg:min-h-[420px] lg:border-b-0 lg:[direction:ltr]">
          {project.image.type === "mockup" ? (
            <>
              <div
                aria-hidden="true"
                className="aurora left-1/2 top-1/2 h-56 w-44 -translate-x-1/2 -translate-y-1/2 bg-acid/15"
              />
              <div className="absolute inset-0 flex items-end justify-center">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={200}
                  height={409}
                  priority={index === 0}
                  className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:-translate-y-2"
                  style={{ maxHeight: "92%", width: "auto" }}
                  sizes="(max-width: 1024px) 60vw, 30vw"
                />
              </div>
            </>
          ) : (
            <>
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                className="object-cover brightness-[0.85] transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent" />
            </>
          )}

          {/* Status badge */}
          <div className="absolute left-4 top-4 z-10">
            <span className="glass inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-[11px] font-semibold text-ink">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-acid" />
              En producción
            </span>
          </div>
        </div>

        {/* ── Contenido ── */}
        <div className="relative flex flex-col p-6 sm:p-8 lg:p-10 lg:[direction:ltr]">
          {/* Número fantasma */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-4 right-2 font-display text-[7rem] font-bold leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-acid/[0.06]"
          >
            0{index + 1}
          </span>

          <h3 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-2 text-[15px] font-medium text-acid/90">
            {project.subtitle}
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-ink/55">
            {project.description}
          </p>

          {/* Bullets */}
          <ul className="mt-6 space-y-2.5">
            {project.bullets.slice(0, 4).map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 text-[13.5px] text-ink/60"
              >
                <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-acid" />
                {bullet}
              </li>
            ))}
          </ul>

          {/* Chips */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.chips.slice(0, 6).map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-ink/55"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={project.cta.href}
              target={project.cta.external ? "_blank" : undefined}
              rel={project.cta.external ? "noopener noreferrer" : undefined}
              className="btn-shine group/btn inline-flex h-12 items-center justify-center gap-2 rounded-full bg-acid px-7 text-[14px] font-bold text-noir transition-all duration-300 hover:bg-acid-light hover:shadow-[0_8px_30px_-6px_rgba(204,245,63,0.5)]"
            >
              {project.cta.label}
              {project.cta.external && (
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  strokeWidth={2.2}
                />
              )}
            </a>
            {project.secondaryCta && (
              <a
                href={project.secondaryCta.href}
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/[0.12] px-7 text-[14px] font-medium text-ink/70 transition-all duration-300 hover:border-acid/50 hover:text-acid"
              >
                {project.secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </m.article>
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
    const hasSecondaryCta = "secondaryCta" in item && item.secondaryCta;
    const secondaryCtaHref = hasSecondaryCta
      ? projectCtaHrefs[item.id]?.[item.secondaryCta as string] || "#contacto"
      : undefined;

    return {
      id: item.id,
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
      bullets: [...item.bullets],
      chips: [...item.chips],
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
    <section id="proyectos" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="container-main">
        <SectionHeading
          index="03"
          tag={t.projects.title}
          headline={t.projects.headline}
          subtitle={t.projects.subtitle}
        />

        <div className="flex flex-col gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
