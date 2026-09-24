import type { ReactNode } from "react";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { MotionProvider } from "@/components/providers/MotionProvider";
import CookieBanner from "@/components/ui/CookieBanner";

/** Equivalente al RootLayout de Next: idioma, animaciones y banner de cookies. */
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <MotionProvider>
        {children}
        <CookieBanner />
      </MotionProvider>
    </LocaleProvider>
  );
}
