import type { Metadata } from "next";
import AvisoLegalContent from "./AvisoLegalContent";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal del sitio web gabrielcodes.dev. Información sobre el titular del sitio y condiciones de uso.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://gabrielcodes.dev/aviso-legal",
  },
};

export default function AvisoLegalPage() {
  return <AvisoLegalContent />;
}
