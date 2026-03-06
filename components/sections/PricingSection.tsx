"use client";

import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};


export default function PricingSection() {
  const { t } = useLocale();

  return (
    <section id="tarifas" className="relative py-24 sm:py-32">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(139,92,246,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container-main">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center lg:mb-16"
        >
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-[#8b5cf6]">
            {t.pricing.title}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t.pricing.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.pricing.items.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.08 }}
              className={[
                "relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300",
                item.highlight
                  ? "border-[#8b5cf6]/40 bg-[#8b5cf6]/[0.06] hover:border-[#8b5cf6]/60 hover:shadow-[0_20px_50px_-12px_rgba(139,92,246,0.2)]"
                  : "border-white/[0.08] bg-white/[0.025] hover:border-white/[0.14] hover:shadow-[0_20px_50px_-12px_rgba(139,92,246,0.08)]",
              ].join(" ")}
            >
              {/* Badge */}
              {item.badge && (
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-[#8b5cf6] px-2.5 py-0.5 text-[11px] font-semibold text-white shadow-[0_0_10px_rgba(139,92,246,0.4)]">
                    {item.badge}
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                {/* Name */}
                <p className="text-[12px] font-semibold uppercase tracking-widest text-white/40">
                  {item.name}
                </p>

                {/* Price */}
                <div className="mt-3 mb-4">
                  <span className="font-display text-3xl font-semibold text-white">
                    {item.price}
                  </span>
                  <span className="ml-1.5 text-[13px] text-white/35">
                    / {item.period}
                  </span>
                </div>

                {/* Description */}
                <p className="mb-5 text-[13px] leading-relaxed text-white/60 border-b border-white/[0.06] pb-5">
                  {item.description}
                </p>

                {/* Features */}
                <ul className="flex-1 space-y-2.5">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#8b5cf6]"
                        strokeWidth={2.5}
                      />
                      <span className="text-[13px] leading-snug text-white/55">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contacto"
                  className={[
                    "mt-6 inline-flex h-10 items-center justify-center rounded-xl text-[13px] font-medium transition-all duration-300",
                    item.highlight
                      ? "bg-[#8b5cf6] text-white hover:bg-[#7c4fe4] shadow-[0_4px_20px_rgba(139,92,246,0.3)]"
                      : "border border-white/[0.10] bg-white/[0.04] text-white/70 hover:border-white/[0.20] hover:bg-white/[0.08] hover:text-white",
                  ].join(" ")}
                >
                  {t.pricing.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-8 text-center text-[12px] text-white/30"
        >
          {t.pricing.note}
        </motion.p>
      </div>
    </section>
  );
}
