"use client";

import { useState, useRef, useCallback } from "react";
import { motion, type Variants } from "framer-motion";
import { Linkedin, Github, Instagram, Mail, Check, Sparkles } from "lucide-react";
import Image from "next/image";
import { useLocale } from "@/contexts/LocaleContext";

/* ============================================
   ANIMATIONS
   ============================================ */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
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

/* ============================================
   PHOTO WITH OVERLAY - DESKTOP
   ============================================ */
function PhotoWithOverlayDesktop() {
  const { t } = useLocale();
  const [isHovered, setIsHovered] = useState(false);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const photoRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!photoRef.current) return;
      const rect = photoRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setGlowPosition({ x, y });
    },
    []
  );

  return (
    <div
      ref={photoRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative cursor-pointer"
    >
        {/* Photo Container */}
        <div className="relative mx-auto max-w-sm overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.02] p-1 shadow-lg transition-all duration-300 group-hover:border-white/[0.12] group-hover:shadow-xl group-hover:shadow-[#8b5cf6]/10">
          {/* Glow effect - follows cursor */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle 200px at ${glowPosition.x}% ${glowPosition.y}%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)`,
            }}
          />

          {/* Photo */}
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[24px]">
          <Image
            src="/img/Yo.webp"
            alt="Gabriel Saiz — Desarrollador Full-Stack freelance especializado en React Native, Next.js y .NET"
            fill
            className="object-cover transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:rotate-[0.5deg]"
            sizes="(max-width: 1024px) 100vw, 400px"
            loading="lazy"
          />

          {/* Overlay - appears on hover */}
          <div
            className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 backdrop-blur-sm transition-all duration-300 ease-out ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Bullets */}
            <ul className="mb-4 space-y-2">
              {t.about.bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    x: isHovered ? 0 : -10,
                  }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  className="flex items-center gap-2.5 text-[14px] text-white"
                >
                  <Check className="h-3.5 w-3.5 flex-shrink-0 text-[#8b5cf6]" />
                  {bullet}
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.a
              href="#contacto"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 10,
              }}
              transition={{ delay: 0.15, duration: 0.25 }}
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#8b5cf6] px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#7c4fe4] hover:shadow-lg hover:shadow-[#8b5cf6]/25"
            >
              <Mail className="h-3.5 w-3.5" />
              {t.about.cta}
            </motion.a>
          </div>
        </div>
      </div>

      {/* Subtle indicator - sparkle icon */}
      <div className="pointer-events-none absolute -right-2 -top-2 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/[0.1] bg-black/60 backdrop-blur-sm">
          <Sparkles className="h-3 w-3 animate-pulse text-[#8b5cf6]" />
        </div>
      </div>
    </div>
  );
}

/* ============================================
   PHOTO WITH OVERLAY - MOBILE
   ============================================ */
function PhotoWithOverlayMobile() {
  const { t } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const photoRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={photoRef} className="relative">
      {/* Photo Container */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="group relative cursor-pointer overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.02] p-1 shadow-lg transition-all duration-300 active:scale-[0.98]"
      >
        {/* Photo */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[24px]">
          <Image
            src="/img/Yo.webp"
            alt="Gabriel Saiz — Desarrollador Full-Stack freelance especializado en React Native, Next.js y .NET"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />

          {/* Overlay - appears on tap */}
          <div
            className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/80 to-transparent p-6 backdrop-blur-sm transition-all duration-300 ease-out ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Bullets */}
            <ul className="mb-4 space-y-2">
              {t.about.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2.5 text-[14px] text-white"
                >
                  <Check className="h-3.5 w-3.5 flex-shrink-0 text-[#8b5cf6]" />
                  {bullet}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contacto"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#8b5cf6] px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 active:bg-[#7c4fe4]"
            >
              <Mail className="h-3.5 w-3.5" />
              {t.about.cta}
            </a>
          </div>
        </div>
      </div>

      {/* Subtle indicator - handle at bottom */}
      <div className="pointer-events-none absolute -bottom-1 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-1">
          <div className="h-1 w-8 rounded-full bg-white/[0.15] backdrop-blur-sm" />
          <Sparkles className="h-3 w-3 animate-pulse text-[#8b5cf6]/60" />
        </div>
      </div>
    </div>
  );
}

/* ============================================
   MAIN SECTION
   ============================================ */
export default function AboutSection() {
  const { t } = useLocale();

  return (
    <section id="sobre-mi" className="relative py-24 sm:py-32">
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
            {t.about.title}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t.about.headline}
          </h2>
        </motion.div>

        {/* Content - 2 columns desktop, centered mobile */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Photo - Desktop */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="hidden lg:block"
          >
            <PhotoWithOverlayDesktop />
          </motion.div>

          {/* Photo - Mobile */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto w-full max-w-sm lg:hidden"
          >
            <PhotoWithOverlayMobile />
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Name & Role */}
            <div className="mb-4">
              <h3 className="mb-2 font-display text-2xl font-semibold text-white sm:text-3xl">
                Gabriel Saiz
              </h3>
              <p className="text-[15px] text-white/60 sm:text-base">
                {t.about.headline}
              </p>
            </div>

            {/* Subcopy */}
            <p className="mb-8 max-w-md text-[15px] leading-relaxed text-white/70 sm:text-base">
              {t.about.subtitle}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.03] text-white/60 transition-all duration-300 hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/10 hover:text-[#8b5cf6]"
                    aria-label={link.name}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
