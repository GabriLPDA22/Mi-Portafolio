"use client";

import { m, type Variants } from "framer-motion";
import { Linkedin, Github, Instagram, Mail, Check } from "lucide-react";
import Image from "next/image";
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

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gabriel-saiz-de-la-maza-bajo-140370184/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/GabriLPDA22",
    icon: Github,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/saiz_gabriel",
    icon: Instagram,
  },
];

export default function AboutSection() {
  const { t } = useLocale();

  return (
    <section id="sobre-mi" className="relative scroll-mt-24 py-20 sm:py-28">
      {/* Background glow */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora aurora-animate left-[-15%] top-[20%] h-[35vh] w-[50vw] bg-[#c026d3]/10" />
      </div>

      <div className="container-main">
        <SectionHeading tag={t.about.title} headline={t.about.headline} />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ── Foto ── */}
          <m.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative mx-auto w-full max-w-sm"
          >
            {/* Marco con gradiente */}
            <div className="group relative rounded-[2rem] bg-gradient-to-br from-acid/40 via-white/10 to-[#6d5dfc]/40 p-[1.5px] transition-shadow duration-500 hover:shadow-[0_0_60px_-15px_rgba(204,245,63,0.3)]">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[calc(2rem-1.5px)] bg-noir-soft">
                <Image
                  src="/img/Yo.webp"
                  alt="Gabriel Saiz — Desarrollador Full-Stack freelance especializado en React Native, Next.js y .NET"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 400px"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Sticker badge */}
            <div className="absolute -right-3 -top-3 rotate-6 rounded-full bg-acid px-4 py-2 font-display text-[12px] font-bold text-noir shadow-[0_8px_30px_-6px_rgba(204,245,63,0.5)] sm:-right-5">
              End-to-End ✦
            </div>
          </m.div>

          {/* ── Texto ── */}
          <m.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <h3 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Gabriel Saiz
            </h3>
            <p className="mt-2 text-[15px] font-medium text-acid">
              {t.about.role}
            </p>

            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/60 sm:text-base">
              {t.about.subtitle}
            </p>

            {/* Bullets */}
            <ul className="mt-7 space-y-3">
              {t.about.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-3 text-[14.5px] text-ink/75"
                >
                  <span className="flex h-5.5 w-5.5 flex-shrink-0 items-center justify-center rounded-full bg-acid/15">
                    <Check className="h-3 w-3 text-acid" strokeWidth={3} />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>

            {/* CTA + socials */}
            <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row">
              <a
                href="#contacto"
                className="btn-shine inline-flex h-12 items-center justify-center gap-2 rounded-full bg-acid px-7 text-[14px] font-bold text-noir transition-all duration-300 hover:bg-acid-light hover:shadow-[0_8px_30px_-6px_rgba(204,245,63,0.5)]"
              >
                <Mail className="h-4 w-4" strokeWidth={2.2} />
                {t.about.cta}
              </a>

              <div className="flex items-center gap-2.5">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.03] text-ink/60 transition-all duration-300 hover:border-acid/50 hover:bg-acid/10 hover:text-acid"
                      aria-label={link.name}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.7} />
                    </a>
                  );
                })}
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
