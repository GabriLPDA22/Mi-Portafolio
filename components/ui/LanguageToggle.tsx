"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { Languages } from "lucide-react";

export default function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  const toggleLanguage = () => {
    setLocale(locale === "es" ? "en" : "es");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex h-9 flex-shrink-0 items-center gap-1 rounded-full border border-white/[0.1] bg-white/[0.03] px-2.5 text-[11px] font-semibold text-ink/70 transition-all duration-200 hover:border-acid/40 hover:text-acid sm:gap-1.5 sm:px-3 sm:text-[12px]"
      aria-label={`Change language to ${locale === "es" ? "English" : "Español"}`}
      title={`Change to ${locale === "es" ? "English" : "Español"}`}
    >
      <Languages className="h-3 w-3 flex-shrink-0 sm:h-3.5 sm:w-3.5" strokeWidth={1.7} />
      <span
        key={locale}
        className="animate-fade-locale whitespace-nowrap uppercase tracking-wide"
      >
        {locale}
      </span>
    </button>
  );
}
