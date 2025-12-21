"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";

export default function CookieBanner() {
  const { t } = useLocale();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 w-full border-t border-white/[0.1] bg-[#0B0D10]/95 backdrop-blur-xl"
        >
          <div className="w-full px-3 py-2.5 sm:container-main sm:py-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              {/* Content */}
              <div className="flex flex-1 items-start gap-1.5 min-w-0 sm:gap-2">
                <Cookie className="h-3.5 w-3.5 flex-shrink-0 text-[#8b5cf6] mt-0.5 sm:h-5 sm:w-5" />
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] leading-snug text-white/80 sm:text-[14px] sm:leading-relaxed">
                    {t.cookies?.message || "Este sitio web utiliza cookies técnicas necesarias para su funcionamiento y para guardar tus preferencias de idioma. No utilizamos cookies de seguimiento ni publicidad."}
                  </p>
                  <p className="mt-1 text-[10px] text-white/50 sm:mt-2 sm:text-[12px]">
                    {t.cookies?.moreInfo || "Más información en nuestra"}{" "}
                    <Link
                      href="/privacidad"
                      className="text-[#8b5cf6] underline hover:text-[#a78bfa] transition-colors break-words"
                    >
                      {t.cookies?.privacyPolicy || "Política de Privacidad"}
                    </Link>
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1.5 sm:gap-3 sm:flex-shrink-0">
                <button
                  onClick={handleReject}
                  className="px-2.5 py-1.5 text-[11px] font-medium text-white/60 hover:text-white transition-colors sm:px-4 sm:py-2 sm:text-[13px] flex-shrink-0 whitespace-nowrap"
                >
                  {t.cookies?.reject || "Rechazar"}
                </button>
                <button
                  onClick={handleAccept}
                  className="inline-flex items-center justify-center rounded-full bg-[#8b5cf6] px-3.5 py-1.5 text-[11px] font-semibold text-white transition-all duration-300 hover:bg-[#7c4fe4] hover:shadow-lg hover:shadow-[#8b5cf6]/25 sm:px-6 sm:py-2.5 sm:text-[13px] flex-shrink-0 whitespace-nowrap"
                >
                  {t.cookies?.accept || "Aceptar"}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

