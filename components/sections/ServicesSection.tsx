"use client";

import { m, type Variants } from "framer-motion";
import {
  Smartphone,
  Monitor,
  Server,
  Container,
  Gauge,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import ArcMarquee from "@/components/ui/ArcMarquee";
import { SplitTitle } from "@/components/motion/Entry";
import { useScrollScrub } from "@/hooks/useScrollScrub";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.07,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const serviceIcons: Record<string, LucideIcon> = {
  mobile: Smartphone,
  web: Monitor,
  backend: Server,
  devops: Container,
  performance: Gauge,
  maintenance: ShieldCheck,
};

const gsapCard = [
  "services-first-card-gsap",
  "services-second-card-gsap",
  "services-third-card-gsap",
] as const;

export default function ServicesSection() {
  const { t } = useLocale();
  const scopeRef = useScrollScrub({
    ".services-title-gsap": { y: -50, x: -50, rotate: -5 },
    ".services-description-gsap": { scale: 0.85 },
    ".services-first-card-gsap": { x: -50, rotate: -5 },
    ".services-second-card-gsap": { scale: 0.9 },
    ".services-third-card-gsap": { x: 50, rotate: 5 },
  });

  return (
    <section
      ref={scopeRef}
      id="servicios"
      className="relative z-10 scroll-mt-24 bg-noir py-20 xl:bg-transparent xl:py-32"
    >
      <div className="container-main flex flex-col gap-12 xl:gap-20">
        <ArcMarquee text={t.services.ribbon} />

        <div className="text-center">
          <h2 className="services-title-gsap font-code text-[clamp(2.4rem,8vw,5.5rem)] font-bold uppercase tracking-tight text-ink">
            <SplitTitle text={t.services.title} play="view" />
          </h2>
          <p className="services-description-gsap mx-auto mt-5 max-w-[34rem] text-[15px] leading-relaxed text-ink/55 xl:text-xl">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          {t.services.items.map((service, i) => {
            const Icon = serviceIcons[service.id] ?? Monitor;
            const col = i % 3;
            const tilt =
              col === 0 ? "xl:-rotate-2" : col === 2 ? "xl:rotate-2" : "xl:z-[1]";
            const drop = i % 2 === 0 ? "2xl:mt-4" : "";
            const fan =
              col === 0
                ? "xl:translate-x-2"
                : col === 2
                  ? "xl:-translate-x-2"
                  : "xl:scale-[1.02]";

            return (
              <m.article
                key={service.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className={`${gsapCard[col]} ${tilt} ${drop} ${fan} group flex h-full flex-col justify-between rounded-[3rem] border border-white/15 bg-noir-soft p-7 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.8)] transition-transform duration-300 xl:p-8 xl:hover:-translate-y-6`}
              >
                <div>
                  <div className="mb-4 flex items-start justify-between">
                    <span className="font-code text-base text-ink/45 xl:text-xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ink/70">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                  </div>
                  <h3 className="mb-3 font-code text-2xl tracking-wide text-ink xl:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-ink/55 xl:text-lg">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 border-t border-white/10 pt-6">
                  {service.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs italic text-ink/55 xl:text-sm"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </m.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
