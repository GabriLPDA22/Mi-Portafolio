/**
 * Datos del negocio: única fuente de verdad para cabecera, footer, formularios,
 * botón de WhatsApp y datos estructurados (Schema.org).
 *
 * Mantén estos datos idénticos a los de tu ficha de Google Business Profile
 * (NAP: Name, Address, Phone). La coherencia NAP es un factor de SEO local.
 */

/** Número en formato E.164 sin "+" ni espacios. TODO: sustituir por el número real. */
const PHONE_E164 = '34663941885';

export const PHONE_PLACEHOLDER = PHONE_E164 === '34600000000';

export const site = {
  url: 'https://gabrielcodes.dev',
  name: 'GabrielCodes',
  legalName: 'Gabriel Saiz de la Maza Bajo',
  tagline: 'Diseño y desarrollo web para negocios en Zaragoza',
  description:
    'Estudio de diseño web en Zaragoza. Creamos páginas web profesionales, landing pages y webs con reservas online para negocios que quieren conseguir más clientes desde Google.',
  locale: 'es_ES',
  lang: 'es',
  foundingDate: '2023',

  founder: {
    name: 'Gabriel Saiz',
    jobTitle: 'Diseñador y desarrollador web',
    linkedin: 'https://www.linkedin.com/in/gabriel-saiz-de-la-maza-bajo-140370184/',
    github: 'https://github.com/GabriLPDA22',
  },

  contact: {
    email: 'gsaiz.bajo@gmail.com',
    phoneE164: PHONE_E164,
    /** Formato legible para mostrar en pantalla. */
    phoneDisplay: `+${PHONE_E164.slice(0, 2)} ${PHONE_E164.slice(2, 5)} ${PHONE_E164.slice(5, 8)} ${PHONE_E164.slice(8)}`,
    whatsappMessage: 'Hola, me gustaría pedir presupuesto para una página web.',
    responseTime: 'Respuesta en menos de 24 h laborables',
  },

  address: {
    locality: 'Zaragoza',
    region: 'Aragón',
    postalCode: '',
    country: 'ES',
  },

  /** Centro de Zaragoza. Negocio de área de servicio: no se publica dirección exacta. */
  geo: { latitude: 41.6488, longitude: -0.8891 },

  areaServed: [
    'Zaragoza',
    'Utebo',
    'Cuarte de Huerva',
    'Cadrete',
    'María de Huerva',
    'La Puebla de Alfindén',
    'Villanueva de Gállego',
    'Zuera',
    'La Muela',
    'Alfajarín',
    'Pastriz',
    'Casetas',
  ],

  openingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const,
    opens: '09:00',
    closes: '19:00',
    display: 'Lunes a viernes, 9:00 – 19:00',
  },

  /** Precios orientativos. Se reutilizan en páginas, tarjetas, FAQ y Schema (Offer). */
  pricing: {
    currency: 'EUR',
    note: 'Precios orientativos sin IVA. Presupuesto cerrado antes de empezar.',
  },

  /** Datos del titular para el aviso legal (LSSI-CE art. 10). TODO: completar NIF. */
  legal: {
    holder: 'Gabriel Saiz de la Maza Bajo',
    nif: '',
    lastUpdated: '23 de septiembre de 2026',
  },

  analytics: {
    /** Google Analytics 4. Solo se carga tras aceptar cookies. */
    gaId: 'G-CEDV9NP2WJ',
  },

  ogImage: '/og/og-default.png',
} as const;

export const whatsappUrl = (message: string = site.contact.whatsappMessage) =>
  `https://wa.me/${site.contact.phoneE164}?text=${encodeURIComponent(message)}`;

export const absoluteUrl = (path: string) => new URL(path, site.url).toString();
