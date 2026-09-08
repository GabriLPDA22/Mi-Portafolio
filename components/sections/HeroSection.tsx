"use client";

import { ArrowRight, ArrowUpRight, FileDown } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import { EntryFade } from "@/components/motion/Entry";
import SocialPills from "@/components/ui/SocialPills";
import ScriptQuote from "@/components/ui/ScriptQuote";
import { useScrollScrub } from "@/hooks/useScrollScrub";

export default function HeroSection() {
  const { t } = useLocale();
  const scopeRef = useScrollScrub({
    ".hero-name-gsap": { y: -40, scale: 0.96 },
    ".hero-headline-gsap": { y: -28, x: -30, mobileX: -12 },
    ".hero-copy-gsap": { y: 24, opacity: 0 },
    ".hero-meta-gsap": { y: 18, opacity: 0 },
  });

  const [firstName, lastName] = t.hero.name.split(" ");

  return (
    <section
      ref={scopeRef}
      className="relative isolate flex min-h-svh w-full flex-col overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,42rem)] opacity-70 sm:opacity-90"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(255,178,70,0.2),transparent_62%)]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0 18px, rgba(255,196,90,0.045) 18px 22px)",
            maskImage:
              "linear-gradient(90deg, transparent 0%, black 35%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, black 35%, black 100%)",
          }}
        />
      </div>

      <div className="container-main relative flex flex-1 flex-col justify-center pb-16 pt-28 sm:pb-20 sm:pt-32">
        <h1 className="sr-only">
          {t.hero.name}. {t.hero.title}. {t.hero.subtitle}
        </h1>

        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 xl:gap-20">
          <div className="flex flex-col gap-8 sm:gap-10">
            <EntryFade order={0}>
              <div className="hero-meta-gsap flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-acid/25 bg-acid/[0.08] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-acid">
                  <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-acid" />
                  {t.hero.availability}
                </span>
                <span className="font-script text-xl text-ink/55 sm:text-2xl">
                  Zaragoza · Remoto
                </span>
              </div>
            </EntryFade>

            <div className="hero-name-gsap">
              <EntryFade order={0.4}>
                <p className="font-display text-[clamp(3.4rem,14vw,8.5rem)] font-bold leading-[0.86] tracking-[-0.055em] text-ink">
                  {firstName}
                </p>
              </EntryFade>
              <EntryFade order={0.7}>
                <p className="mt-1 font-display text-[clamp(3.4rem,14vw,8.5rem)] font-bold leading-[0.86] tracking-[-0.055em] text-ink/35 sm:text-ink/40">
                  {lastName}
                </p>
              </EntryFade>
            </div>

            <EntryFade order={0.95} className="hero-headline-gsap">
              <ScriptQuote size="lg">{t.hero.vibeQuote}</ScriptQuote>
            </EntryFade>
          </div>

          <div className="flex flex-col gap-8 lg:pb-3">
            <EntryFade order={1.2} className="hero-copy-gsap">
              <p className="max-w-md text-pretty text-[15px] leading-relaxed text-ink/60 sm:text-base xl:text-lg">
                {t.hero.subtitle}
              </p>
            </EntryFade>

            <EntryFade
              order={1.5}
              className="hero-meta-gsap flex flex-wrap items-center gap-3"
            >
              <a
                href="#contacto"
                className="btn-shine group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-acid px-6 text-[14px] font-bold text-noir transition-all duration-300 hover:bg-acid-light"
              >
                {t.hero.ctaPrimary}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </a>
              <a
                href="/cv/Gabriel-Saiz-CV.pdf"
                download="Gabriel-Saiz-CV.pdf"
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-acid/35 bg-acid/[0.08] px-5 text-[14px] font-semibold text-acid transition-colors hover:border-acid hover:bg-acid/15"
              >
                <FileDown className="h-4 w-4" strokeWidth={2.2} />
                {t.hero.ctaCv}
              </a>
              <a
                href="#proyectos"
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-5 text-[14px] font-medium text-ink/80 transition-colors hover:border-acid hover:text-acid"
              >
                {t.hero.ctaSecondary}
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45"
                  strokeWidth={2.2}
                />
              </a>
            </EntryFade>

            <EntryFade order={1.8} className="hero-meta-gsap">
              <p className="text-[12px] tracking-wide text-ink/45">{t.hero.proof}</p>
            </EntryFade>

            <div className="hero-meta-gsap pt-2">
              <SocialPills />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
