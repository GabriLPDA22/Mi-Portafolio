'use client';

import { useLocale } from '@/contexts/LocaleContext';
import { Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  const toggleLanguage = () => {
    setLocale(locale === 'es' ? 'en' : 'es');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex h-9 items-center gap-1 rounded-lg border border-white/[0.08] bg-white/[0.02] px-2 text-[11px] font-medium text-white/70 transition-all duration-200 hover:border-white/[0.12] hover:bg-white/[0.04] hover:text-white flex-shrink-0 sm:gap-1.5 sm:px-2.5 sm:text-[12px]"
      aria-label={`Change language to ${locale === 'es' ? 'English' : 'Español'}`}
      title={`Change to ${locale === 'es' ? 'English' : 'Español'}`}
    >
      <Languages className="h-3 w-3 flex-shrink-0 sm:h-3.5 sm:w-3.5" strokeWidth={1.5} />
      <AnimatePresence mode="wait">
        <motion.span
          key={locale}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.2 }}
          className="uppercase tracking-wide whitespace-nowrap"
        >
          {locale}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

