"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import { useProjectsStack } from "@/hooks/useProjectsStack";
import { SplitTitle } from "@/components/motion/Entry";

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

const projectImages: Record<
  string,
  { src: string; alt: string; type: "mockup" | "photo" }
> = {
  arch: {
    src: "/img/Arch.webp",
    alt: "ARCH App iOS - Aplicación móvil para comunidad de Oxford University desarrollada con React Native y Expo",
    type: "mockup",
  },
  huvegrym: {
    src: "/img/Huvegrym.webp",
    alt: "Huvegrym - Sitio web de escuela de danza desarrollado con Next.js, optimizado para SEO y rendimiento",
    type: "photo",
  },
  "tarot-divinidad": {
    src: "/img/divinidad-hero.webp",
    alt: "Tarot Divinidad — web de consultas de tarot con reservas y WhatsApp",
    type: "photo",
  },
};

const projectCtaHrefs: Record<string, Record<string, string>> = {
  arch: {
    "Descargar en App Store":
      "https://apps.apple.com/us/app/the-arch/id6753820007",
    "Download on App Store":
      "https://apps.apple.com/us/app/the-arch/id6753820007",
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

function ProjectVisual({
  project,
}: {
  project: Project;
}) {
  if (project.image.type === "mockup") {
    return (
      <div className="relative flex h-[38%] w-full items-center justify-center xl:h-[70%] xl:w-[55%]">
        <div className="relative aspect-[9/19] h-full min-w-[12rem]">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            className="rounded-[1.6rem] object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
            sizes="(max-width: 1280px) 55vw, 32vw"
          />
        </div>
      </div>
    );
  }

  // Hero wide (Tarot): contenedor más ancho y ratio paisaje para no aplastar
  if (project.id === "tarot-divinidad") {
    return (
      <div className="relative w-full overflow-hidden rounded-2xl border border-white/12 xl:w-[62%]">
        <div className="relative aspect-[2/1] w-full sm:aspect-[21/10]">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            sizes="(max-width: 1280px) 100vw, 62vw"
          />
        </div>
      </div>
    );
  }

  const objectPos =
    project.id === "huvegrym" ? "object-[center_30%]" : "object-center";

  return (
    <div className="relative h-[36%] w-full overflow-hidden rounded-2xl border border-white/12 xl:h-[72%] xl:w-[55%]">
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        className={`object-cover transition-transform duration-700 hover:scale-105 ${objectPos}`}
        sizes="(max-width: 1280px) 100vw, 55vw"
      />
    </div>
  );
}

function ProjectPanel({
  project,
  index,
  isLast,
}: {
  project: Project;
  index: number;
  isLast: boolean;
}) {
  const odd = index % 2 === 1;

  return (
    <div
      className="project-card relative flex h-svh items-center overflow-hidden bg-noir pt-4 xl:h-[calc(100svh-5.25rem)] xl:pt-0"
      style={{ zIndex: index + 1 }}
    >
      {index > 0 && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-[-3.5rem] z-20 h-16 w-full bg-gradient-to-t from-noir via-noir to-transparent xl:top-[-1.5rem] xl:h-8"
        />
      )}

      <article
        className={`project-card-content mx-auto flex h-full w-full max-w-[var(--container-max)] flex-col-reverse items-start justify-end gap-6 px-5 will-change-transform sm:px-6 xl:flex-row xl:items-center xl:gap-16 xl:px-8 ${
          odd ? "xl:flex-row-reverse" : ""
        } ${isLast ? "pb-10 pt-8" : "py-8"}`}
      >
        <div className="flex w-full flex-col justify-center gap-4 xl:w-[45%] xl:gap-7">
          <div className="flex flex-col gap-4 xl:gap-6">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink xl:text-4xl">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 xl:gap-3">
              {project.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/15 bg-noir px-3 py-1 text-[11px] text-ink/70 xl:text-sm"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <p className="max-w-xl text-[14px] leading-relaxed text-ink/60 xl:text-lg">
            <span className="font-medium text-ink/85">{project.subtitle}. </span>
            {project.description}
          </p>

          <ul className="hidden space-y-2 xl:block">
            {project.bullets.slice(0, 4).map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 text-[13px] text-ink/50 xl:text-[15px]"
              >
                <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-acid" />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-1 flex flex-wrap items-center gap-3">
            <a
              href={project.cta.href}
              target={project.cta.external ? "_blank" : undefined}
              rel={project.cta.external ? "noopener noreferrer" : undefined}
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/20 py-1.5 pl-5 pr-1.5 text-[14px] font-medium text-ink transition-colors hover:border-acid hover:text-acid xl:text-base"
            >
              {project.cta.label}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-noir transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
              </span>
            </a>
            {project.secondaryCta && (
              <a
                href={project.secondaryCta.href}
                className="text-[13px] text-ink/45 underline-offset-4 transition-colors hover:text-acid hover:underline"
              >
                {project.secondaryCta.label}
              </a>
            )}
          </div>
        </div>

        <ProjectVisual project={project} />
      </article>
    </div>
  );
}

export default function FeaturedProjects() {
  const { t } = useLocale();
  const stackRef = useRef<HTMLDivElement>(null);
  useProjectsStack(stackRef);

  const projects: Project[] = t.projects.items.map((item) => {
    const image = projectImages[item.id];
    const ctaHref = projectCtaHrefs[item.id]?.[item.cta] || "#";
    const hasSecondary = "secondaryCta" in item && item.secondaryCta;
    const secondaryHref = hasSecondary
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
      secondaryCta: hasSecondary
        ? {
            label: item.secondaryCta as string,
            href: secondaryHref || "#contacto",
          }
        : undefined,
    };
  });

  return (
    <section id="proyectos" className="relative scroll-mt-24 pt-16 xl:pt-10">
      <div className="container-main">
        <div className="mb-4 flex xl:mb-2 xl:gap-20">
          <div className="hidden xl:block xl:w-[60%]" />
          <h2 className="font-code text-3xl tracking-tight text-ink xl:w-full xl:text-5xl">
            ../
            <SplitTitle text={t.projects.title.toLowerCase()} play="view" />
          </h2>
        </div>
      </div>

      <div ref={stackRef} className="projects-stack">
        {projects.map((project, index) => (
          <ProjectPanel
            key={project.id}
            project={project}
            index={index}
            isLast={index === projects.length - 1}
          />
        ))}
      </div>

      <div aria-hidden="true" className="relative z-[20] h-16 bg-noir xl:h-24" />
    </section>
  );
}
