import type { ImageMetadata } from 'astro';
import huvegrym from '@/assets/projects/huvegrym.webp';
import elixiumReservas from '@/assets/projects/elixium-reservas.webp';
import elixiumDelivery from '@/assets/projects/elixium-delivery.webp';
import coreevo from '@/assets/projects/coreevo.webp';
import type { ServiceId } from './services';

export interface Project {
  slug: string;
  name: string;
  sector: string;
  /** `cliente`: proyecto real en producción. `demo`: proyecto propio que demuestra una solución. */
  kind: 'cliente' | 'demo';
  service: ServiceId;
  image: ImageMetadata;
  imageAlt: string;
  challenge: string;
  solution: string;
  highlights: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    slug: 'huvegrym',
    name: 'Huvegrym Borboleta Danza',
    sector: 'Cultura y artes escénicas',
    kind: 'cliente',
    service: 'diseno-web',
    image: huvegrym,
    imageAlt: 'Página de inicio de la web de la compañía de danza Huvegrym, con una fotografía de un bailarín en pleno salto',
    challenge:
      'La compañía necesitaba una web a la altura de sus espectáculos para presentarse ante teatros, festivales y programadores culturales.',
    solution:
      'Web editorial a pantalla completa con galería de espectáculos y actuaciones, proyectos futuros y contacto directo para contrataciones.',
    highlights: ['Diseño editorial a medida', 'Galería de espectáculos', 'Contacto para programadores', '100 % adaptada a móvil'],
    url: 'https://huvegrym.es',
  },
  {
    slug: 'elixium-restaurante',
    name: 'Elixium Foods — Restaurante',
    sector: 'Hostelería',
    kind: 'demo',
    service: 'web-con-reservas',
    image: elixiumReservas,
    imageAlt: 'Formulario de reserva de mesa con selector de fecha, hora y mesa sobre una fotografía de un plato gourmet',
    challenge:
      'Un restaurante que gestiona las reservas por teléfono pierde clientes fuera de horario y dedica tiempo de sala a atender llamadas.',
    solution:
      'Web con carta interactiva, pedidos y reservas online: el cliente elige fecha, hora y mesa disponible sin tener que llamar.',
    highlights: ['Reserva con selección de mesa', 'Carta digital interactiva', 'Pedidos online', 'Pago integrado'],
  },
  {
    slug: 'elixium-delivery',
    name: 'Elixium Foods — Pedidos online',
    sector: 'Hostelería y delivery',
    kind: 'demo',
    service: 'web-con-reservas',
    image: elixiumDelivery,
    imageAlt: 'Página de inicio de una plataforma de pedidos de comida a domicilio con buscador de dirección',
    challenge:
      'Depender de plataformas de delivery supone pagar comisiones elevadas en cada pedido y no tener relación directa con el cliente.',
    solution:
      'Plataforma propia de pedidos a domicilio con catálogo de restaurantes, carrito, pagos y panel de administración, desplegada en la nube.',
    highlights: ['Pedidos en tiempo real', 'Pagos online', 'Panel de administración', 'Infraestructura escalable'],
  },
  {
    slug: 'coreevo-gym',
    name: 'CoreEvo Gym',
    sector: 'Deporte y fitness',
    kind: 'demo',
    service: 'landing-pages',
    image: coreevo,
    imageAlt: 'Cabecera de la web del gimnasio CoreEvo con el lema "Shape your body" y botón de contacto',
    challenge:
      'Un gimnasio de barrio necesita captar altas nuevas con una página directa que funcione bien en campañas de redes sociales.',
    solution:
      'Landing de alto impacto visual con una propuesta clara y una llamada a la acción de contacto siempre visible.',
    highlights: ['Landing de captación', 'Estética de marca potente', 'CTA de contacto destacado', '100 % adaptada a móvil'],
  },
];
