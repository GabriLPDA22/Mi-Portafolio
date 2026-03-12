"use client";

import { m, type Variants } from "framer-motion";
import { CheckCircle, Mail, Linkedin, Github, Instagram } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function ContactInfoPanel() {
  const { t } = useLocale();

  return (
    <m.div
      variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="lg:col-span-2"
    >
      <h3 className="mb-4 text-xl font-semibold text-white">
        {t.contact.form.title}
      </h3>
      <p className="mb-6 text-[15px] leading-relaxed text-white/65">
        {t.contact.form.description}
      </p>

      <div className="space-y-4">
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
          <p className="text-[13px] font-medium text-white">
            {t.contact.form.includes}
          </p>
          <ul className="mt-3 space-y-2">
            {t.contact.form.includesItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[13px] text-white/65"
              >
                <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4">
          <p className="mb-2 text-[12px] text-white/40">
            {t.contact.form.directEmail}
          </p>
          <a
            href="mailto:gsaiz.bajo@gmail.com"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#8b5cf6] transition-colors hover:text-[#a78bfa]"
          >
            <Mail className="h-4 w-4" />
            gsaiz.bajo@gmail.com
          </a>
        </div>

        <div className="pt-6">
          <p className="mb-3 text-[12px] text-white/40">{t.contact.form.social}</p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/gabriel-saiz-de-la-maza-bajo-140370184/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-white/60 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com/GabriLPDA22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-white/60 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="https://instagram.com/saiz_gabriel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-white/60 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:text-white"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </m.div>
  );
}
