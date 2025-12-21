"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLocale } from "@/contexts/LocaleContext";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function Header() {
  const { t } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const NAV_ITEMS = [
    { label: t.nav.services, href: "#servicios" },
    { label: t.nav.projects, href: "#proyectos" },
    { label: t.nav.about, href: "#sobre-mi" },
    { label: t.nav.contact, href: "#contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full max-w-full overflow-x-hidden transition-all duration-500 ${
          hasScrolled
            ? "border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-3 sm:container-main sm:px-0">
          <div className="flex h-[72px] items-center justify-between gap-1.5 sm:gap-4">
            {/* Logo */}
            <a
              href="/"
              className="group relative flex items-center flex-shrink-0"
              aria-label="Gabriel Saiz - Desarrollador Full-Stack, Inicio"
              title="Gabriel Saiz — Full-Stack Developer"
            >
              <Image
                src="/img/logo_gabriel_saiz_violet.png"
                alt="Gabriel Saiz — Desarrollador Full-Stack freelance especializado en React Native y Next.js"
                width={40}
                height={40}
                className="transition-all duration-300 group-hover:scale-105 sm:w-11 sm:h-11"
                priority
              />
            </a>

            {/* Desktop Nav - Right aligned */}
            <nav className="hidden items-center gap-4 md:flex" aria-label="Navegación principal">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[13px] font-medium text-[var(--text-tertiary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
                  aria-label={`Ir a sección ${item.label}`}
                >
                  {item.label}
                </a>
              ))}
              <LanguageToggle />
            </nav>

            {/* Mobile: Menu Button */}
            <div className="flex items-center gap-1 md:hidden flex-shrink-0">
              <LanguageToggle />
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-[var(--border-visible)] bg-[var(--bg-card)] transition-all duration-200 hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)]"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isMenuOpen}
              >
                <div className="flex w-5 flex-col items-center gap-[5px]">
                  <span
                    className={`h-[1.5px] w-full origin-center rounded-full bg-[var(--text-primary)] transition-all duration-300 ${
                      isMenuOpen ? "translate-y-[6.5px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`h-[1.5px] w-full rounded-full bg-[var(--text-primary)] transition-all duration-300 ${
                      isMenuOpen ? "scale-0 opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`h-[1.5px] w-full origin-center rounded-full bg-[var(--text-primary)] transition-all duration-300 ${
                      isMenuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Fullscreen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[var(--bg-primary)] md:hidden pt-[90px]"
          >
            {/* Nav links - el botón X ya está en el header principal */}
            <nav className="container-main mt-8">
              <motion.ul
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.04, staggerDirection: -1 },
                  },
                }}
                className="flex flex-col items-end gap-3"
              >
                {NAV_ITEMS.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: 30 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="block font-display text-4xl font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
