"use client";

import { Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";

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

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] pt-14">
      <div className="container-main">
        {/* CTA + socials */}
        <div className="flex flex-col items-start justify-between gap-8 pb-14 sm:flex-row sm:items-center">
          <a
            href="/#contacto"
            className="group flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-ink transition-colors hover:text-acid sm:text-3xl"
          >
            {t.contact.headline}
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] transition-all duration-300 group-hover:border-acid group-hover:bg-acid group-hover:text-noir sm:h-12 sm:w-12">
              <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
            </span>
          </a>

          <div className="flex items-center gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-ink/55 transition-all duration-300 hover:border-acid/50 hover:bg-acid/10 hover:text-acid"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" strokeWidth={1.7} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-6 sm:flex-row">
          <p className="text-[12.5px] text-ink/45">
            © {new Date().getFullYear()} Gabriel Saiz. {t.footer.copyright}
          </p>
          <div className="flex gap-5 text-[12px] text-ink/45">
            <Link
              href="/privacidad"
              className="transition-colors hover:text-acid"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/aviso-legal"
              className="transition-colors hover:text-acid"
            >
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
