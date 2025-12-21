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
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/[0.1] bg-[#0B0D10]/95 backdrop-blur-xl"
        >
          <div className="container-main py-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Content */}
              <div className="flex flex-1 items-start gap-3">
                <Cookie className="h-5 w-5 flex-shrink-0 text-[#8b5cf6] mt-0.5" />
                <div className="flex-1">
                  <p className="text-[14px] leading-relaxed text-white/80">
                    {t.cookies?.message || "Este sitio web utiliza cookies técnicas necesarias para su funcionamiento y para guardar tus preferencias de idioma. No utilizamos cookies de seguimiento ni publicidad."}
                  </p>
                  <p className="mt-2 text-[12px] text-white/50">
                    {t.cookies?.moreInfo || "Más información en nuestra"}{" "}
                    <Link
                      href="/privacidad"
                      className="text-[#8b5cf6] underline hover:text-[#a78bfa] transition-colors"
                    >
                      {t.cookies?.privacyPolicy || "Política de Privacidad"}
                    </Link>
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 sm:flex-shrink-0">
                <button
                  onClick={handleReject}
                  className="px-4 py-2 text-[13px] font-medium text-white/60 hover:text-white transition-colors"
                >
                  {t.cookies?.reject || "Rechazar"}
                </button>
                <button
                  onClick={handleAccept}
                  className="inline-flex items-center gap-2 rounded-full bg-[#8b5cf6] px-6 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#7c4fe4] hover:shadow-lg hover:shadow-[#8b5cf6]/25"
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

