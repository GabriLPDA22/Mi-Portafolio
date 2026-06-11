"use client";

import { m, type Variants } from "framer-motion";
import {
  Smartphone,
  Monitor,
  Server,
  Container,
  Gauge,
  ShieldCheck,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import SectionHeading from "@/components/ui/SectionHeading";

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

export default function ServicesSection() {
  const { t } = useLocale();

  return (
    <section id="servicios" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="container-main">
        <SectionHeading
          index="01"
          tag={t.services.title}
          headline={t.services.headline}
          subtitle={t.services.subtitle}
        />

        {/* Bento grid: la primera card ocupa 2 columnas en lg */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {t.services.items.map((service, i) => {
            const Icon = serviceIcons[service.id] ?? Monitor;
            const isFeature = i === 0;

            return (
              <m.article
                key={service.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className={`card-acid group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-7 ${
                  isFeature ? "sm:col-span-2" : ""
                }`}
              >
                {/* Glow de fondo en la card destacada */}
                {isFeature && (
                  <div
                    aria-hidden="true"
                    className="aurora right-[-10%] top-[-30%] h-48 w-48 bg-acid/15"
                  />
                )}

                {/* Icon + index */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-ink/70 transition-all duration-300 group-hover:border-acid/40 group-hover:text-acid">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <span className="font-display text-sm font-semibold text-ink/25 transition-colors duration-300 group-hover:text-acid/60">
                    0{i + 1}
                  </span>
                </div>

                {/* Title + description */}
                <h3 className="mb-2.5 font-display text-xl font-semibold tracking-tight text-ink sm:text-[22px]">
                  {service.title}
                </h3>
                <p className="mb-5 text-[14px] leading-relaxed text-ink/55">
                  {service.description}
                </p>

                {/* Bullets (solo en la destacada para mantener el bento compacto) */}
                {isFeature && (
                  <ul className="mb-5 grid gap-2 sm:grid-cols-2">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-2.5 text-[13px] text-ink/60"
                      >
                        <span className="h-1 w-1 flex-shrink-0 rounded-full bg-acid" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Chips + CTA */}
                <div className="mt-auto flex items-end justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {service.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-ink/55"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contacto"
                    aria-label={`${service.cta} — ${service.title}`}
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/[0.1] text-ink/50 transition-all duration-300 group-hover:border-acid group-hover:bg-acid group-hover:text-noir"
                  >
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </a>
                </div>
              </m.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
