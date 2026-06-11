"use client";

import { m, type Variants } from "framer-motion";
import { Clock, CheckCircle, Sparkles } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import ContactInfoPanel from "./contact/ContactInfoPanel";
import ContactForm from "./contact/ContactForm";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactSection() {
  const { t } = useLocale();

  return (
    <section id="contacto" className="relative scroll-mt-24 py-20 sm:py-28">
      {/* Aurora background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora aurora-animate bottom-[-10%] left-1/2 h-[45vh] w-[90vw] -translate-x-1/2 bg-acid/[0.07]" />
        <div className="aurora aurora-animate-slow right-[-10%] top-[10%] h-[30vh] w-[40vw] bg-[#6d5dfc]/15" />
      </div>

      <div className="container-main relative">
        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center lg:mb-16"
        >
          <p className="mb-4 flex items-center justify-center gap-3 font-display text-[13px] font-bold uppercase tracking-[0.3em] text-acid sm:text-[14px]">
            {t.contact.title}
          </p>
          <h2 className="font-display text-[clamp(2.6rem,9vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.03em] text-ink">
            {t.contact.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-ink/60 sm:text-lg">
            {t.contact.subtitle}
          </p>

          {/* Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: Clock, label: t.contact.badges.response },
              { icon: CheckCircle, label: t.contact.badges.free },
              { icon: Sparkles, label: t.contact.badges.noCommitment },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-[12px] font-medium text-ink/65"
              >
                <Icon className="h-3.5 w-3.5 text-acid" strokeWidth={2} />
                {label}
              </span>
            ))}
          </div>
        </m.div>

        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-5 lg:gap-14">
          <ContactInfoPanel />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
