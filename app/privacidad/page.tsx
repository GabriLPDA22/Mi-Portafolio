import type { Metadata } from "next";
import PrivacidadContent from "./PrivacidadContent";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad del sitio web gabrielcodes.dev. Información sobre el tratamiento de datos personales conforme al RGPD.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://gabrielcodes.dev/privacidad",
  },
};

export default function PrivacidadPage() {
  return <PrivacidadContent />;
}
