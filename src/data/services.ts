export type ServiceId = 'landing-pages' | 'diseno-web' | 'web-con-reservas' | 'mantenimiento-web';

export interface Service {
  id: ServiceId;
  path: string;
  /** Nombre corto para navegación y tarjetas. */
  name: string;
  /** Nombre del servicio tal y como se describe en Schema.org. */
  schemaName: string;
  summary: string;
  price: { min: number; max?: number; unit?: 'proyecto' | 'mes' };
  delivery: string;
  idealFor: string;
  includes: string[];
  /** Valor para preseleccionar el tipo de web en el formulario de contacto. */
  formValue: string;
}

export const services: Service[] = [
  {
    id: 'landing-pages',
    path: '/servicios/landing-pages',
    name: 'Landing pages',
    schemaName: 'Diseño de landing pages profesionales',
    summary:
      'Una página enfocada a un único objetivo: que el visitante llame, reserve o pida presupuesto. Ideal para campañas, lanzamientos y negocios que empiezan.',
    price: { min: 300, max: 600, unit: 'proyecto' },
    delivery: '1–2 semanas',
    idealFor: 'Campañas de Google Ads, lanzamientos y profesionales que empiezan',
    includes: [
      'Diseño a medida, adaptado a móvil',
      'Textos orientados a conversión',
      'Formulario y botón de WhatsApp',
      'SEO básico y Google Analytics',
      'Dominio, hosting y SSL configurados',
    ],
    formValue: 'landing-page',
  },
  {
    id: 'diseno-web',
    path: '/servicios/diseno-web',
    name: 'Web profesional',
    schemaName: 'Diseño de páginas web para empresas',
    summary:
      'La web completa de tu negocio: servicios, sobre nosotros, contacto y todo lo que un cliente necesita para confiar en ti antes de llamarte.',
    price: { min: 700, max: 1200, unit: 'proyecto' },
    delivery: '2–4 semanas',
    idealFor: 'Pymes, comercios y profesionales que quieren captar clientes desde Google',
    includes: [
      'Hasta 6 páginas diseñadas a medida',
      'SEO on-page y SEO local para Zaragoza',
      'Textos redactados para tu sector',
      'Formularios, WhatsApp y Google Maps',
      'Optimización de velocidad (Lighthouse 95+)',
    ],
    formValue: 'web-profesional',
  },
  {
    id: 'web-con-reservas',
    path: '/servicios/web-con-reservas',
    name: 'Web con reservas',
    schemaName: 'Página web con sistema de reservas online',
    summary:
      'Tu web profesional con un sistema de reservas o citas integrado. Tus clientes eligen día y hora sin llamarte y tú recibes el aviso al momento.',
    price: { min: 900, max: 1500, unit: 'proyecto' },
    delivery: '3–5 semanas',
    idealFor: 'Restaurantes, clínicas, centros de estética, fisios y academias',
    includes: [
      'Todo lo de la web profesional',
      'Calendario de reservas o citas online',
      'Confirmaciones y recordatorios por email',
      'Panel para gestionar disponibilidad',
      'Pago o señal online opcional',
    ],
    formValue: 'web-reservas',
  },
  {
    id: 'mantenimiento-web',
    path: '/mantenimiento-web',
    name: 'Mantenimiento web',
    schemaName: 'Mantenimiento de páginas web',
    summary:
      'Tu web siempre actualizada, segura y funcionando. Copias de seguridad, cambios de contenido y soporte directo sin tener que preocuparte de nada.',
    price: { min: 25, unit: 'mes' },
    delivery: 'Alta en 48 h',
    idealFor: 'Cualquier negocio que no quiere perder tiempo con la parte técnica',
    includes: [
      'Actualizaciones y parches de seguridad',
      'Copias de seguridad automáticas',
      'Pequeños cambios de contenido cada mes',
      'Monitorización de caídas 24/7',
      'Soporte directo por WhatsApp y email',
    ],
    formValue: 'mantenimiento',
  },
];

export const getService = (id: ServiceId): Service => {
  const service = services.find((s) => s.id === id);
  if (!service) throw new Error(`Servicio desconocido: ${id}`);
  return service;
};

// es-ES no agrupa miles en números de 4 cifras por defecto (1200); forzamos "1.200".
const num = new Intl.NumberFormat('es-ES', { useGrouping: 'always', maximumFractionDigits: 0 });

/** "300 – 600 €" / "desde 25 €/mes" */
export const formatPrice = ({ min, max, unit }: Service['price']): string => {
  if (unit === 'mes') return `desde ${num.format(min)} €/mes`;
  return max ? `${num.format(min)} – ${num.format(max)} €` : `desde ${num.format(min)} €`;
};

/** Opciones del formulario de presupuesto. */
export const projectTypes = [
  { value: 'landing-page', label: 'Landing page (300 – 600 €)' },
  { value: 'web-profesional', label: 'Web profesional (700 – 1.200 €)' },
  { value: 'web-reservas', label: 'Web con reservas (900 – 1.500 €)' },
  { value: 'rediseno', label: 'Rediseño de mi web actual' },
  { value: 'mantenimiento', label: 'Mantenimiento web' },
  { value: 'no-lo-se', label: 'Aún no lo tengo claro' },
] as const;

export const budgetRanges = [
  { value: 'menos-600', label: 'Menos de 600 €' },
  { value: '600-1000', label: '600 € – 1.000 €' },
  { value: '1000-1500', label: '1.000 € – 1.500 €' },
  { value: 'mas-1500', label: 'Más de 1.500 €' },
  { value: 'sin-definir', label: 'Todavía no lo sé' },
] as const;

export const sectors = [
  'Hostelería y restauración',
  'Salud y bienestar',
  'Estética y peluquería',
  'Deporte y gimnasios',
  'Asesoría, abogados y consultoría',
  'Reformas y construcción',
  'Comercio local',
  'Formación y academias',
  'Otro',
] as const;
