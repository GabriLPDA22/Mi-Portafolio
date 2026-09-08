"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import SocialPills from "@/components/ui/SocialPills";
import { useScrollScrub } from "@/hooks/useScrollScrub";

export default function Footer({ overlay = false }: { overlay?: boolean }) {
  const { t } = useLocale();
  const scopeRef = useScrollScrub({
    ".footer-watermark-gsap": { y: 20, scale: 1.03 },
  });

  const routes = [
    { href: "/", label: "Inicio" },
    { href: "/#sobre-mi", label: t.nav.about },
    { href: "/#servicios", label: t.nav.services },
    { href: "/#proyectos", label: t.nav.projects },
    { href: "/#tarifas", label: t.nav.pricing },
    { href: "/#contacto", label: t.nav.contact },
  ];

  const links = (
    <>
      <nav className="flex max-w-xs flex-wrap justify-center gap-x-8 gap-y-3 sm:max-w-none">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="text-base text-ink/55 transition-colors hover:text-ink xl:text-lg"
          >
            {route.label}
          </Link>
        ))}
      </nav>

      <SocialPills compact />

      <div className="flex flex-col items-center gap-4 text-[12.5px] text-ink/40 sm:flex-row sm:gap-8">
        <p>
          © {new Date().getFullYear()} Gabriel Saiz. {t.footer.copyright}
        </p>
        <div className="flex gap-5">
          <Link href="/privacidad" className="hover:text-acid">
            Política de Privacidad
          </Link>
          <Link href="/aviso-legal" className="hover:text-acid">
            Aviso Legal
          </Link>
        </div>
      </div>
    </>
  );

  if (overlay) {
    return (
      <footer
        ref={scopeRef}
        className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
      >
        {/* Hueco superior: el form se ve detrás del corte */}
        <div
          aria-hidden="true"
          className="min-h-[36svh] flex-1 sm:min-h-[42svh]"
        />

        {/* Móvil: panel sólido con diagonal; desktop: degradado suave */}
        <div
          className="relative z-10 pb-14 pt-14 sm:bg-gradient-to-t sm:from-noir sm:via-noir/92 sm:to-transparent sm:pb-20 sm:pt-28 xl:pt-36 max-sm:bg-noir max-sm:pt-20 max-sm:[clip-path:polygon(0_2.5rem,100%_0,100%_100%,0_100%)]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-ink/[0.06] max-sm:[clip-path:polygon(0_100%,100%_0,100%_12%,0_100%)] sm:hidden"
          />

          <div className="container-main relative z-10 flex flex-col items-center gap-7 sm:gap-8 xl:gap-12">
            {links}
          </div>

          <p
            aria-hidden="true"
            className="footer-watermark-gsap pointer-events-none relative z-0 -mb-6 mt-8 bg-gradient-to-t from-noir from-20% to-transparent text-center font-code text-[clamp(4rem,16vw,14rem)] font-extrabold leading-none text-ink/[0.08] sm:mt-10 xl:-mb-10"
          >
            Developer
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer
      ref={scopeRef}
      className="relative overflow-hidden border-t border-white/[0.06] pt-16 xl:pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-ink/[0.05] [clip-path:polygon(0_72%,100%_0,100%_4%,0_82%)] xl:h-28"
      />

      <div className="container-main relative z-10 flex flex-col items-center gap-8 pb-14 xl:gap-12 xl:pb-20">
        {links}
      </div>

      <p
        aria-hidden="true"
        className="footer-watermark-gsap pointer-events-none relative z-0 -mb-6 bg-gradient-to-t from-noir from-15% to-transparent text-center font-code text-[clamp(4rem,14vw,14rem)] font-extrabold leading-none text-ink/[0.06] xl:-mb-10"
      >
        Developer
      </p>
    </footer>
  );
}
