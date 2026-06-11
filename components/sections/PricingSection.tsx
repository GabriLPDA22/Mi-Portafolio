"use client";

import { m, type Variants } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import SectionHeading from "@/components/ui/SectionHeading";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PricingSection() {
  const { t } = useLocale();

  return (
    <section id="tarifas" className="relative scroll-mt-24 py-20 sm:py-28">
      {/* Background glow */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora aurora-animate-slow bottom-[-20%] left-1/2 h-[40vh] w-[80vw] -translate-x-1/2 bg-[#6d5dfc]/10" />
      </div>

      <div className="container-main">
        <SectionHeading
          tag={t.pricing.title}
          headline={t.pricing.headline}
          subtitle={t.pricing.subtitle}
        />

        {/* Cards — 5 planes sin huecos:
            móvil 1 col · tablet 2 cols (mantenimiento ancho) · desktop 3 cols (full-stack ancho) */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {t.pricing.items.map((item, index) => (
            <m.div
              key={item.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.08 }}
              className={[
                "card-acid relative flex flex-col overflow-hidden rounded-3xl border",
                item.id === "fullstack" ? "lg:col-span-2" : "",
                item.id === "maintenance" ? "sm:col-span-2 lg:col-span-1" : "",
                item.highlight
                  ? "border-acid/40 bg-acid/[0.05]"
                  : "border-white/[0.08] bg-white/[0.025]",
              ].join(" ")}
            >
              {/* Nombre + badge + precio */}
              <div className="px-6 pb-0 pt-7">
                <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5">
                  <p className="font-display text-[12px] font-semibold uppercase tracking-[0.2em] text-ink/55">
                    {item.name}
                  </p>
                  {item.badge && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-acid px-2.5 py-0.5 text-[10px] font-bold text-noir shadow-[0_0_18px_rgba(204,245,63,0.35)]">
                      <Sparkles className="h-3 w-3" />
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="mb-5 mt-3">
                  <span
                    className={`font-display text-[2rem] font-bold tracking-tight ${
                      item.highlight ? "text-acid" : "text-ink"
                    }`}
                  >
                    {item.price}
                  </span>
                  {(item.period === "mes" || item.period === "month") && (
                    <span className="ml-1.5 text-[13px] text-ink/50">
                      / {item.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Descripción */}
              <div className="px-6">
                <p className="border-b border-white/[0.07] pb-5 text-[13px] leading-relaxed text-ink/60">
                  {item.description}
                </p>
              </div>

              {/* Features — en cards anchas, dos columnas */}
              <ul
                className={[
                  "space-y-2.5 px-6 pt-5",
                  item.id === "fullstack"
                    ? "lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-2.5 lg:space-y-0"
                    : "",
                  item.id === "maintenance"
                    ? "sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-2.5 sm:space-y-0 lg:block lg:space-y-2.5"
                    : "",
                ].join(" ")}
              >
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-acid"
                      strokeWidth={2.5}
                    />
                    <span className="text-[13px] leading-snug text-ink/60">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto px-6 pb-7 pt-6">
                <a
                  href="#contacto"
                  className={[
                    "btn-shine inline-flex h-11 w-full items-center justify-center rounded-full text-[13px] font-semibold transition-all duration-300",
                    item.highlight
                      ? "bg-acid text-noir hover:bg-acid-light hover:shadow-[0_8px_30px_-6px_rgba(204,245,63,0.5)]"
                      : "border border-white/[0.12] bg-white/[0.04] text-ink/75 hover:border-acid/50 hover:text-acid",
                  ].join(" ")}
                >
                  {t.pricing.cta}
                </a>
              </div>
            </m.div>
          ))}
        </div>

        {/* Note */}
        <m.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-8 text-center text-[12px] text-ink/35"
        >
          {t.pricing.note}
        </m.p>
      </div>
    </section>
  );
}
