"use client";

import { m, type Variants } from "framer-motion";
import { Clock, CheckCircle, Mail } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import ContactInfoPanel from "./contact/ContactInfoPanel";
import ContactForm from "./contact/ContactForm";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function ContactSection() {
  const { t } = useLocale();

  return (
    <section id="contacto" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#8b5cf6]/5 blur-[120px]" />
      </div>

      <div className="container-main relative">
        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center lg:mb-16"
        >
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-[#8b5cf6]">
            {t.contact.title}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t.contact.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            {t.contact.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-[13px] text-white/40">
              <Clock className="h-4 w-4 text-[#8b5cf6]" />
              <span>{t.contact.badges.response}</span>
            </div>
            <div className="flex items-center gap-2 text-[13px] text-white/40">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
              <span>{t.contact.badges.free}</span>
            </div>
            <div className="flex items-center gap-2 text-[13px] text-white/40">
              <Mail className="h-4 w-4 text-[#8b5cf6]" />
              <span>{t.contact.badges.noCommitment}</span>
            </div>
          </div>
        </m.div>

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5 lg:gap-16">
          <ContactInfoPanel />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
