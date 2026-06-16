"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/contexts/LocaleContext";
import type { LegalSectionLink } from "./LegalPageShell";

const LEGAL_PAGES = [
  { href: "/privacidad", key: "privacy" as const },
  { href: "/aviso-legal", key: "legalNotice" as const },
];

function stripSectionNumber(title: string) {
  return title.replace(/^\d+(\.\d+)?\.\s*/, "");
}

function SectionLinks({
  sections,
  label,
  className,
}: {
  sections: LegalSectionLink[];
  label: string;
  className?: string;
}) {
  return (
    <nav aria-label={label} className={className}>
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-acid/70">
        {label}
      </p>
      <ul className="space-y-0.5">
        {sections.map(({ id, title }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="block rounded-md py-2 pr-2 text-[13px] leading-snug text-ink/55 transition-colors hover:text-acid"
            >
              {stripSectionNumber(title)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function LegalSidebar({
  sections,
}: {
  sections: LegalSectionLink[];
}) {
  const pathname = usePathname();
  const { t } = useLocale();
  const hub = t.legalHub;

  return (
    <aside className="min-w-0">
      <div className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-4">
        <div className="mb-8 border-b border-white/[0.07] pb-6 lg:mb-10">
          <h2 className="font-display text-xl font-bold tracking-[-0.02em] text-acid sm:text-2xl">
            {hub.title}
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-ink/50">
            {hub.description}
          </p>
        </div>

        {/* Mobile: doc switcher */}
        <nav
          aria-label={hub.documents}
          className="mb-6 flex gap-2 lg:hidden"
        >
          {LEGAL_PAGES.map(({ href, key }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-11 flex-1 items-center justify-center rounded-lg border px-3 py-2.5 text-center text-[12px] font-medium leading-tight transition-colors sm:text-[13px] ${
                  active
                    ? "border-acid/30 bg-acid/[0.08] text-acid"
                    : "border-white/[0.08] bg-white/[0.02] text-ink/55 hover:border-white/[0.14] hover:text-ink"
                }`}
              >
                {hub[key]}
              </Link>
            );
          })}
        </nav>

        {/* Desktop: doc list */}
        <nav aria-label={hub.documents} className="mb-8 hidden lg:block">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-acid/70">
            {hub.documents}
          </p>
          <ul className="space-y-1">
            {LEGAL_PAGES.map(({ href, key }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-lg px-3 py-2.5 text-[14px] transition-colors ${
                      active
                        ? "bg-acid/[0.06] font-medium text-acid"
                        : "text-ink/55 hover:bg-white/[0.03] hover:text-acid"
                    }`}
                  >
                    {hub[key]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile: in-page TOC */}
        <details className="mb-6 rounded-lg border border-white/[0.08] bg-white/[0.02] lg:hidden">
          <summary className="cursor-pointer list-none px-4 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-acid/70 [&::-webkit-details-marker]:hidden">
            {hub.onThisPage}
          </summary>
          <div className="border-t border-white/[0.06] px-3 pb-3 pt-2">
            <SectionLinks sections={sections} label={hub.onThisPage} />
          </div>
        </details>

        {/* Desktop: in-page TOC */}
        <SectionLinks
          sections={sections}
          label={hub.onThisPage}
          className="hidden lg:block"
        />
      </div>
    </aside>
  );
}
