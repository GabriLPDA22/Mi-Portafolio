/**
 * Datos personales y de contacto: única fuente de verdad para cabecera, pie, formulario,
 * datos estructurados (Schema.org Person) y /llms.txt.
 */

export const site = {
  url: 'https://gabrielcodes.dev',
  name: 'Gabriel Saiz',
  fullName: 'Gabriel Saiz de la Maza Bajo',
  role: 'Desarrollador Full-Stack',
  /** Especialidad tal y como aparece en el CV. */
  headline: 'Full-Stack Web & Mobile · .NET · Vue 3 · React Native',
  description:
    'Desarrollador Full-Stack web y mobile en Zaragoza: backend .NET, web con Vue 3 y apps con React Native publicadas en App Store y Google Play.',
  locale: 'es_ES',
  lang: 'es',
  location: 'Zaragoza, España',
  /** Qué tipo de puesto busca: se muestra en la web y en /llms.txt. */
  lookingFor: 'Puesto full-stack web y/o mobile con .NET, Vue o React Native (también abierto a PHP/Symfony), en Zaragoza (presencial o híbrido) o en remoto desde España.',
  availability: 'Incorporación inmediata',

  contact: {
    email: 'gsaiz.bajo@gmail.com',
    phoneE164: '34663941885',
    phoneDisplay: '+34 663 941 885',
  },

  social: {
    linkedin: 'https://www.linkedin.com/in/gabriel-saiz-de-la-maza-bajo-140370184/',
    github: 'https://github.com/GabriLPDA22',
  },

  documents: {
    cv: '/cv/Gabriel-Saiz-CV.pdf',
    recommendation: '/documents/carta-recomendacion-golive.pdf',
  },

  /** Formulario de contacto vía Web3Forms: reenvía cada mensaje al email de la cuenta. */
  forms: {
    web3formsKey: '7bc8e344-1f6a-4df7-b056-540f8a25a4ba',
    endpoint: 'https://api.web3forms.com/submit',
  },

  analytics: {
    /** Google Analytics 4. Solo se carga tras aceptar cookies. */
    gaId: 'G-CEDV9NP2WJ',
  },

  legal: {
    lastUpdated: '24 de septiembre de 2026',
  },

  ogImage: '/og/og-default.png',
} as const;

export const absoluteUrl = (path: string) => new URL(path, site.url).toString();
