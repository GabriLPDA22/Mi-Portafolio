"use client";

import { useLocale } from "@/contexts/LocaleContext";

export default function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative isolate min-h-screen overflow-hidden w-full max-w-[100vw]">
      {/* Mosaic / checkerboard background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "repeating-conic-gradient(rgba(255,255,255,0.015) 0% 25%, transparent 0% 50%)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Subtle center glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 45%, rgba(139,92,246,0.07) 0%, transparent 70%)",
        }}
      />
      {/* Edge fade */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, #0a0a0b 0%, transparent 28%, transparent 68%, #0a0a0b 100%), linear-gradient(to right, #0a0a0b 0%, transparent 15%, transparent 85%, #0a0a0b 100%)",
        }}
      />

      {/* Content */}
      <div className="container-main relative flex min-h-screen flex-col items-center justify-center pb-16 pt-[calc(72px+2rem)]">
        <div className="w-full max-w-3xl text-center">
          {/* Badge */}
          <div className="hero-fade-in" style={{ animationDelay: "0ms" }}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-1.5 py-1 text-[12px] text-white/65 backdrop-blur-sm sm:text-[13px]">
              <span className="rounded-full bg-[#8b5cf6] px-2.5 py-0.5 text-[11px] font-semibold text-white shadow-[0_0_10px_rgba(139,92,246,0.5)] sm:text-[12px]">
                Nuevo
              </span>
              <span className="pr-1">{t.hero.badge}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1 opacity-60"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>

          {/* H1 */}
          <h1
            className="hero-fade-in mt-8 font-display text-[clamp(2.5rem,8vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-white"
            style={{ animationDelay: "100ms" }}
          >
            {t.hero.title}{" "}
            <span className="text-gradient">{t.hero.titleAccent}</span>
          </h1>

          {/* Subheadline */}
          <p
            className="hero-fade-in mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/55 sm:text-lg sm:leading-relaxed"
            style={{ animationDelay: "200ms" }}
          >
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div
            className="hero-fade-in mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="#contacto"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#8b5cf6] px-6 text-[14px] font-semibold text-white shadow-[0_0_0_1px_rgba(139,92,246,0.5)] transition-all duration-300 hover:bg-[#7c4fe4] hover:shadow-[0_4px_24px_rgba(139,92,246,0.35)] sm:w-auto sm:min-w-[180px] sm:px-8 sm:text-[15px]"
            >
              {t.hero.ctaPrimary}
            </a>

            <a
              href="#proyectos"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/15 px-6 text-[14px] font-medium text-white/80 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.04] hover:text-white sm:w-auto sm:min-w-[180px] sm:px-8 sm:text-[15px]"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Proof line */}
          <p
            className="hero-fade-in mt-14 text-[13px] tracking-wide text-white/35"
            style={{ animationDelay: "400ms" }}
          >
            {t.hero.proof}
          </p>
        </div>
      </div>
    </section>
  );
}
