"use client";

import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { useLocale } from "@/contexts/LocaleContext";
import { SplitTitle } from "@/components/motion/Entry";
import ScriptQuote from "@/components/ui/ScriptQuote";
import { useScrollScrub } from "@/hooks/useScrollScrub";
import { usePinnedSectionExit } from "@/hooks/usePinnedSectionExit";

const techGroups = {
  es: [
    {
      id: "front",
      label: "Apps móviles",
      items: "React Native / Expo / Flutter / TypeScript",
      anim: "left" as const,
      gsap: "front-gsap",
    },
    {
      id: "styles",
      label: "Web",
      items: "Next.js / Vue / WordPress",
      anim: "right" as const,
      gsap: "styles-gsap",
    },
    {
      id: "back",
      label: "Backend",
      items: ".NET / PostgreSQL / SignalR / Symfony",
      anim: "left" as const,
      gsap: "back-gsap",
    },
    {
      id: "tools",
      label: "Despliegue e integraciones",
      items: "AWS / Expo EAS / Codemagic / Stripe",
      anim: "right" as const,
      gsap: "tools-gsap",
    },
  ],
  en: [
    {
      id: "front",
      label: "Mobile apps",
      items: "React Native / Expo / Flutter / TypeScript",
      anim: "left" as const,
      gsap: "front-gsap",
    },
    {
      id: "styles",
      label: "Web",
      items: "Next.js / Vue / WordPress",
      anim: "right" as const,
      gsap: "styles-gsap",
    },
    {
      id: "back",
      label: "Backend",
      items: ".NET / PostgreSQL / SignalR / Symfony",
      anim: "left" as const,
      gsap: "back-gsap",
    },
    {
      id: "tools",
      label: "Deployment & integrations",
      items: "AWS / Expo EAS / Codemagic / Stripe",
      anim: "right" as const,
      gsap: "tools-gsap",
    },
  ],
};

function TechCard({
  title,
  items,
  animation,
  className = "",
}: {
  title: string;
  items: string;
  animation: "left" | "right";
  className?: string;
}) {
  return (
    <div
      className={`group relative z-[1] overflow-hidden rounded-[2.5rem] border border-white/15 bg-noir-soft/80 p-6 xl:rounded-[3rem] xl:p-8 ${className}`}
    >
      <p className="relative z-10 text-xl font-medium text-ink/80 transition-colors duration-300 group-hover:text-noir xl:text-2xl">
        {title}
      </p>
      <p className="relative z-10 mt-3 font-code text-sm text-ink/50 transition-colors duration-300 group-hover:text-noir/70 xl:text-base">
        {items}
      </p>
      <div
        className={`absolute inset-0 -z-[1] scale-x-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 ${
          animation === "left" ? "origin-left" : "origin-right"
        }`}
      />
    </div>
  );
}

function GithubPair() {
  return (
    <a
      href="https://github.com/GabriLPDA22"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex cursor-pointer"
      aria-label="Ver perfil de GitHub"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-noir-soft transition-colors duration-300 group-hover:bg-ink group-hover:[&_svg]:text-noir xl:h-14 xl:w-14">
        <Github className="h-5 w-5 text-ink" strokeWidth={1.7} />
      </span>
      <span className="relative -left-3 flex h-12 w-12 -rotate-45 items-center justify-center rounded-full bg-ink text-noir transition-all duration-300 group-hover:left-2 group-hover:rotate-180 group-hover:bg-noir-soft group-hover:text-ink xl:-left-4 xl:h-14 xl:w-14">
        <ArrowUpRight className="h-5 w-5 xl:h-6 xl:w-6" strokeWidth={2.2} />
      </span>
    </a>
  );
}

export default function AboutSection() {
  const { t, locale } = useLocale();
  const groups = techGroups[locale] ?? techGroups.es;
  const byId = Object.fromEntries(groups.map((g) => [g.id, g]));
  const scopeRef = useScrollScrub({
    ".personal-image-gsap": { y: -50, x: 50, rotate: -5 },
    ".section-name-gsap": { x: -100, y: -100, mobileX: -40 },
    ".description-gsap": { x: 100, y: -100, mobileX: 40 },
    ".front-gsap": { scale: 0.9, rotate: 5, x: 100, mobileX: 40 },
    ".styles-gsap": { scale: 0.9, rotate: -5, x: -100, mobileX: -40 },
    ".back-gsap": { scale: 0.9, rotate: 5, x: 100, mobileX: 40 },
    ".tools-gsap": { scale: 0.9, rotate: -5, x: -100, mobileX: -40 },
    ".github-gsap": { rotate: 5, x: 100, mobileX: 30 },
    ".tools-text-gsap": { rotate: -5, x: -100, mobileX: -30 },
  });
  usePinnedSectionExit(scopeRef, "#servicios");

  return (
    <section
      ref={scopeRef}
      id="sobre-mi"
      className="relative z-0 scroll-mt-24 bg-noir py-28 will-change-transform xl:bg-transparent xl:py-40"
    >
      <div className="container-main flex flex-col gap-12 xl:gap-24">
        <div className="flex w-full flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-20 2xl:w-[85%]">
          <h2 className="section-name-gsap font-code text-3xl text-ink xl:text-5xl">
            ../
            <SplitTitle text={t.about.title.toLowerCase()} play="view" />
          </h2>
          <p className="description-gsap max-w-xl whitespace-pre-line text-base leading-relaxed text-ink/55 xl:text-xl">
            {t.about.subtitle}
          </p>
        </div>

        <div className="flex flex-col-reverse items-center gap-10 xl:flex-row xl:justify-between">
          <div className="flex w-full flex-col gap-6 xl:w-1/2 xl:gap-8">
            <div className="front-gsap">
              <TechCard
                title={byId.front.label}
                items={byId.front.items}
                animation="left"
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="styles-gsap w-1/2">
                <TechCard
                  title={byId.styles.label}
                  items={byId.styles.items}
                  animation="right"
                />
              </div>
              <div className="github-gsap flex w-1/2 justify-center">
                <GithubPair />
              </div>
            </div>

            <div className="flex items-end justify-between gap-4">
              <p className="tools-text-gsap w-[40%] text-sm leading-relaxed text-ink/50 xl:text-lg">
                {t.about.favorites}
              </p>
              <div className="back-gsap w-1/2">
                <TechCard
                  title={byId.back.label}
                  items={byId.back.items}
                  animation="left"
                />
              </div>
            </div>

            <div className="tools-gsap">
              <TechCard
                title={byId.tools.label}
                items={byId.tools.items}
                animation="right"
              />
            </div>
          </div>

          <div className="personal-image-gsap relative w-full max-w-sm xl:max-w-md">
            <div className="anime-panel relative mx-auto p-3 md:p-4">
              <div className="relative h-[24rem] w-full overflow-hidden rounded-[1.35rem] md:h-[30rem] xl:h-[34rem]">
                <Image
                  src="/img/Yo-480.webp"
                  alt="Gabriel Saiz — Desarrollador Full-Stack freelance especializado en React Native, Next.js y .NET"
                  fill
                  className="object-cover object-[center_12%] transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 90vw, 420px"
                  priority={false}
                />
              </div>
              <ScriptQuote size="sm" className="mt-4 px-1">
                {t.hero.vibeAlt}
              </ScriptQuote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
