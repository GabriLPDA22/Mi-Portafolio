"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLocale } from "@/contexts/LocaleContext";
import LegalSidebar from "./LegalSidebar";

export interface LegalSectionLink {
  id: string;
  title: string;
}

interface LegalPageShellProps {
  title: string;
  lastUpdatedLabel: string;
  sections: LegalSectionLink[];
  children: React.ReactNode;
}

function formatLegalDate(locale: "es" | "en") {
  return new Date().toLocaleDateString(locale === "es" ? "es-ES" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function LegalPageShell({
  title,
  lastUpdatedLabel,
  sections,
  children,
}: LegalPageShellProps) {
  const { locale } = useLocale();

  return (
    <>
      <Header />
      <main
        id="main-content"
        className="min-h-screen pb-24 pt-20 sm:pb-28 sm:pt-24"
      >
        <div className="container-main max-w-6xl">
          <div className="lg:grid lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-x-14 xl:grid-cols-[minmax(0,18rem)_minmax(0,42rem)] xl:gap-x-16">
            <LegalSidebar sections={sections} />

            <article className="min-w-0 lg:border-l lg:border-white/[0.06] lg:pl-14 xl:pl-16">
              <header className="mb-8 sm:mb-10">
                <h1 className="font-display text-[clamp(1.625rem,5.5vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-acid">
                  {title}
                </h1>
                <div className="mt-5 border-t border-white/[0.07] pt-5">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink/40">
                    {lastUpdatedLabel}
                  </p>
                  <p className="mt-1 text-[15px] text-ink/75">
                    {formatLegalDate(locale)}
                  </p>
                </div>
              </header>

              <div className="legal-prose">{children}</div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
