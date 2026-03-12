"use client";

import { Github, Linkedin, Instagram } from "lucide-react";
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
    <footer className="border-t border-white/[0.06] py-8">
      <div className="container-main">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Copyright */}
          <div className="flex flex-col gap-2">
            <p className="text-[13px] text-white/55">
              © {new Date().getFullYear()} Gabriel Saiz. {t.footer.copyright}
            </p>
            <div className="flex gap-4 text-[12px] text-white/50">
              <Link href="/privacidad" className="hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/aviso-legal" className="hover:text-white transition-colors">
                Aviso Legal
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-white/50 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:text-white"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
