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
      className="relative flex h-9 items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 text-[13px] font-medium text-white/70 transition-all duration-200 hover:border-white/[0.12] hover:bg-white/[0.04] hover:text-white"
      aria-label={`Change language to ${locale === 'es' ? 'English' : 'Español'}`}
      title={`Change to ${locale === 'es' ? 'English' : 'Español'}`}
    >
      <Languages className="h-3.5 w-3.5" strokeWidth={1.5} />
      <AnimatePresence mode="wait">
        <motion.span
          key={locale}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.2 }}
          className="uppercase tracking-wide"
        >
          {locale}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

