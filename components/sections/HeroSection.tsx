"use client";

import { Variant, Variants, motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }) as unknown as Variant,
};

export default function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Content */}
      <div className="container-main relative flex min-h-screen flex-col items-center justify-center pb-16 pt-[calc(72px+2rem)]">
        <div className="w-full max-w-3xl text-center">
          {/* Badge */}
          <motion.div
            variants={fadeInUp as unknown as Variants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[13px] text-white/70 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              {t.hero.badge}
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeInUp as unknown as Variants}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="mt-8 font-display text-[clamp(2.5rem,8vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-white"
          >
            {t.hero.title}{" "}
            <span className="text-gradient">{t.hero.titleAccent}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp as unknown as Variants}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/55 sm:text-lg sm:leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp as unknown as Variants}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
          >
            <a
              href="#contacto"
              className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-full bg-[#8b5cf6] px-8 text-[15px] font-semibold text-white shadow-[0_0_0_1px_rgba(139,92,246,0.5)] transition-all duration-300 hover:bg-[#7c4fe4] hover:shadow-[0_4px_24px_rgba(139,92,246,0.35)]"
            >
              {t.hero.ctaPrimary}
            </a>

            <a
              href="#proyectos"
              className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-full border border-white/15 px-8 text-[15px] font-medium text-white/80 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.04] hover:text-white"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          {/* Proof line */}
          <motion.p
            variants={fadeInUp as unknown as Variants}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="mt-14 text-[13px] tracking-wide text-white/35"
          >
            {t.hero.proof}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
