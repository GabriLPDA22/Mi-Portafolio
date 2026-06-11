"use client";

import { useLocale } from "@/contexts/LocaleContext";

export default function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative isolate flex min-h-svh w-full flex-col overflow-hidden">
      {/* Aurora background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="aurora aurora-animate left-[-15%] top-[-10%] h-[45vh] w-[70vw] bg-[#6d5dfc]/25 sm:h-[55vh] sm:w-[45vw]" />
        <div className="aurora aurora-animate-slow right-[-20%] top-[15%] h-[40vh] w-[70vw] bg-[#c026d3]/15 sm:w-[40vw]" />
        <div className="aurora aurora-animate bottom-[-15%] left-[20%] h-[35vh] w-[60vw] bg-acid/10 sm:w-[35vw]" />
      </div>

      {/* Bottom edge fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-noir to-transparent"
      />

      {/* Content */}
      <div className="container-main relative flex flex-1 flex-col items-center justify-center pb-24 pt-32 sm:pb-28">
        <div className="w-full max-w-4xl text-center">
          {/* Availability badge */}
          <div className="hero-fade-in" style={{ animationDelay: "0ms" }}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[12px] font-medium text-ink/70 backdrop-blur-sm sm:text-[13px]">
              <span className="pulse-dot h-2 w-2 rounded-full bg-acid" />
              {t.hero.badge}
            </span>
          </div>

          {/* Name */}
          <p
            className="hero-fade-in mt-10 font-display text-[13px] font-medium uppercase tracking-[0.35em] text-ink/50 sm:text-sm"
            style={{ animationDelay: "100ms" }}
          >
            {t.hero.name}
          </p>

          {/* Headline */}
          <h1
            className="hero-fade-in mt-4 font-display text-[clamp(2.6rem,11vw,6.5rem)] font-bold leading-[0.98] tracking-[-0.03em] text-ink"
            style={{ animationDelay: "180ms" }}
          >
            <span className="block">{t.hero.title}</span>
            <span className="text-gradient block italic">
              {t.hero.titleAccent}
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="hero-fade-in mx-auto mt-7 max-w-xl text-pretty text-[15px] leading-relaxed text-ink/60 sm:text-lg"
            style={{ animationDelay: "280ms" }}
          >
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div
            className="hero-fade-in mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href="#contacto"
              className="btn-shine group inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-acid px-8 text-[15px] font-bold text-noir transition-all duration-300 hover:bg-acid-light hover:shadow-[0_8px_40px_-8px_rgba(204,245,63,0.5)] sm:h-14 sm:w-auto sm:min-w-[200px]"
            >
              {t.hero.ctaPrimary}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#proyectos"
              className="inline-flex h-13 w-full items-center justify-center rounded-full border border-white/15 px-8 text-[15px] font-medium text-ink/80 backdrop-blur-sm transition-all duration-300 hover:border-acid/50 hover:text-acid sm:h-14 sm:w-auto sm:min-w-[200px]"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Proof line */}
          <p
            className="hero-fade-in mt-12 text-[12px] tracking-wide text-ink/45 sm:text-[13px]"
            style={{ animationDelay: "440ms" }}
          >
            {t.hero.proof}
          </p>
        </div>
      </div>
    </section>
  );
}
