"use client";

import { m, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import SectionHeading from "@/components/ui/SectionHeading";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ExperienceSection() {
  const { t } = useLocale();

  return (
    <section id="trayectoria" className="relative scroll-mt-24 py-20 sm:py-28">
      {/* Background glow */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora aurora-animate-slow right-[-10%] top-[10%] h-[35vh] w-[50vw] bg-[#6d5dfc]/10" />
      </div>

      <div className="container-main">
        <SectionHeading
          tag={t.experience.title}
          headline={t.experience.headline}
          subtitle={t.experience.subtitle}
        />

        <div className="mx-auto max-w-3xl">
          <ol className="relative space-y-12 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-gradient-to-b before:from-acid/50 before:via-white/10 before:to-transparent">
            {t.experience.items.map((item, index) => (
              <m.li
                key={item.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.06 }}
                className="relative pl-10 sm:pl-12"
              >
                <span className="absolute left-0 top-[5px] flex h-[15px] w-[15px] items-center justify-center rounded-full border border-acid/40 bg-noir">
                  <span className="h-[5px] w-[5px] rounded-full bg-acid" />
                </span>

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                    {item.role}
                  </h3>
                  {"url" in item && item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/company inline-flex items-center gap-1 text-[14px] font-semibold text-acid transition-colors hover:text-acid-light"
                    >
                      {item.company}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover/company:translate-x-0.5 group-hover/company:-translate-y-0.5"
                        strokeWidth={2.2}
                      />
                    </a>
                  ) : (
                    <span className="text-[14px] font-semibold text-acid">
                      {item.company}
                    </span>
                  )}
                </div>

                <p className="mt-1.5 text-[11.5px] font-medium uppercase tracking-[0.18em] text-ink/40">
                  {item.period} · {item.location}
                </p>

                <p className="mt-3.5 max-w-xl text-[14px] leading-relaxed text-ink/55">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-[13.5px] leading-relaxed text-ink/60"
                    >
                      <span className="mt-[8px] h-1 w-1 flex-shrink-0 rounded-full bg-acid" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-ink/55"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </m.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
