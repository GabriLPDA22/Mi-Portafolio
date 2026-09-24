import Providers from "./Providers";
import AvisoLegalContent from "./AvisoLegalContent";
import PrivacidadContent from "./PrivacidadContent";

const pages = {
  "aviso-legal": AvisoLegalContent,
  privacidad: PrivacidadContent,
};

/** Páginas legales (misma estructura que en la versión Next.js). */
export default function LegalApp({ page }: { page: keyof typeof pages }) {
  const Content = pages[page];
  return (
    <Providers>
      <Content />
    </Providers>
  );
}
