"use client";

import { useState, useEffect, type HTMLAttributes } from "react";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import LanguageToggle from "@/components/ui/LanguageToggle";
import BrandMark from "@/components/ui/BrandMark";

export default function Header() {
  const { t } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const NAV_ITEMS = [
    { label: t.nav.about, href: "/#sobre-mi" },
    { label: t.nav.projects, href: "/#proyectos" },
    { label: t.nav.services, href: "/#servicios" },
    { label: t.nav.process, href: "/#resultados" },
  ];

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setHasScrolled(window.scrollY > 20);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // El scroll vive en <html> (tiene overflow-x: hidden en globals.css),
    // así que bloquear solo <body> no impide el scroll de la página.
    const root = document.documentElement;
    if (isMenuOpen) {
      root.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      root.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      root.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full">
        <div className="container-main">
          <div
            className={`mt-3 flex items-center justify-between gap-2 rounded-full border px-4 py-2.5 transition-all duration-500 sm:mt-4 sm:px-5 ${
              hasScrolled
                ? "glass border-white/10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.7)]"
                : "border-transparent bg-transparent"
            }`}
          >
            {/* Wordmark */}
            <Link
              href="/"
              onClick={closeMenu}
              className="group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-ink"
              aria-label="Gabriel Saiz - Desarrollador Full-Stack, Inicio"
              title="Gabriel Saiz — Full-Stack Developer"
            >
              <BrandMark className="h-7 w-7 shrink-0 text-ink transition-transform duration-300 group-hover:scale-105" />
              <span>
                gabriel
                <span className="text-acid">.</span>
                <span className="text-ink/50">codes</span>
              </span>
            </Link>

            {/* Desktop nav — solo en lg+: en tablet no cabe sin romperse */}
            <nav
              className="hidden items-center gap-1 lg:flex"
              aria-label="Navegación principal"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-ink/60 transition-all duration-200 hover:bg-white/[0.06] hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
              <div className="mx-2 h-4 w-px bg-white/10" />
              <LanguageToggle />
              <a
                href="/#contacto"
                className="btn-arrow ml-2 h-9 px-4 text-[13px]"
              >
                {t.nav.contact}
              </a>
            </nav>

            {/* Mobile/tablet controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageToggle />
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-50 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-colors duration-200 hover:border-acid/40"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isMenuOpen}
              >
                <div className="flex w-4 flex-col items-center gap-[5px]">
                  <span
                    className={`h-[1.5px] w-full origin-center rounded-full bg-ink transition-all duration-300 ${
                      isMenuOpen ? "translate-y-[6.5px] rotate-45 bg-acid" : ""
                    }`}
                  />
                  <span
                    className={`h-[1.5px] w-full rounded-full bg-ink transition-all duration-300 ${
                      isMenuOpen ? "scale-0 opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`h-[1.5px] w-full origin-center rounded-full bg-ink transition-all duration-300 ${
                      isMenuOpen ? "-translate-y-[6.5px] -rotate-45 bg-acid" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile/tablet fullscreen menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-noir/[0.98] pt-28 backdrop-blur-xl transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
        {...(!isMenuOpen ? ({ inert: true } as HTMLAttributes<HTMLDivElement>) : {})}
      >
        <nav className="container-main flex-1" aria-label="Menú móvil">
          <ul className="flex flex-col gap-1">
            {[...NAV_ITEMS, { label: t.nav.contact, href: "/#contacto" }].map(
              (item, i) => (
                <li
                  key={item.href}
                  className={`border-b border-white/[0.06] transition-all duration-500 ${
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${i * 60 + 100}ms` : "0ms",
                  }}
                >
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    tabIndex={isMenuOpen ? 0 : -1}
                    className="group flex items-baseline justify-between py-4"
                  >
                    <span className="font-display text-4xl font-semibold tracking-tight text-ink transition-colors group-hover:text-acid">
                      {item.label}
                    </span>
                    <span className="font-display text-sm text-acid/70">
                      0{i + 1}
                    </span>
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        <div
          className={`container-main pb-10 transition-all duration-500 ${
            isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: isMenuOpen ? "500ms" : "0ms" }}
        >
          <a
            href="mailto:gsaiz.bajo@gmail.com"
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
            className="inline-flex items-center gap-2 text-[13px] tracking-[0.08em] text-ink/60 transition-colors hover:text-acid"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-ink/50">
              Email
            </span>
            gsaiz.bajo@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
