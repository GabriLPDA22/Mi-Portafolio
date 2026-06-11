"use client";

import { m, type Variants } from "framer-motion";
import { Check, Mail, Linkedin, Github, Instagram } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriel-saiz-de-la-maza-bajo-140370184/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/GabriLPDA22",
    icon: Github,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/saiz_gabriel",
    icon: Instagram,
  },
];

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
      <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
        {t.contact.form.title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink/60">
        {t.contact.form.description}
      </p>

      <div className="mt-7 space-y-5">
        {/* Qué incluye */}
        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-6">
          <p className="font-display text-[13px] font-semibold text-ink">
            {t.contact.form.includes}
          </p>
          <ul className="mt-4 space-y-2.5">
            {t.contact.form.includesItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-[13.5px] text-ink/65"
              >
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-acid/15">
                  <Check className="h-3 w-3 text-acid" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Email directo */}
        <div className="pt-2">
          <p className="mb-2 text-[12px] uppercase tracking-[0.15em] text-ink/40">
            {t.contact.form.directEmail}
          </p>
          <a
            href="mailto:gsaiz.bajo@gmail.com"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-acid transition-colors hover:text-acid-light"
          >
            <Mail className="h-4 w-4" strokeWidth={2} />
            gsaiz.bajo@gmail.com
          </a>
        </div>

        {/* Redes */}
        <div className="pt-3">
          <p className="mb-3 text-[12px] uppercase tracking-[0.15em] text-ink/40">
            {t.contact.form.social}
          </p>
          <div className="flex items-center gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.03] text-ink/60 transition-all duration-300 hover:border-acid/50 hover:bg-acid/10 hover:text-acid"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" strokeWidth={1.7} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </m.div>
  );
}
