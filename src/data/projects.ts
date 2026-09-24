import type { ImageMetadata } from 'astro';
import theArch from '@/assets/projects/the-arch.webp';
import elixiumDelivery from '@/assets/projects/elixium-delivery.webp';
import huvegrym from '@/assets/projects/huvegrym.webp';
import tarotDivinidad from '@/assets/projects/tarot-divinidad.webp';

export interface Project {
  slug: string;
  name: string;
  /** Tipo de proyecto visible en la tarjeta. */
  label: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  image: ImageMetadata;
  imageAlt: string;
  /** `contain` para capturas verticales (móvil) que no deben recortarse. */
  imageFit?: 'cover' | 'contain';
  links: { label: string; url: string }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'the-arch',
    name: 'The Arch',
    label: 'App iOS · En producción',
    tagline: 'App social para la red de antiguos alumnos de Oxford',
    description:
      'Producto completo desarrollado de principio a fin: app móvil, backend, panel de administración y publicación en las stores.',
    highlights: [
      'Publicada en App Store tras superar la revisión de Apple (IAP y requisitos legales)',
      'Chat en tiempo real con SignalR y mensajes de voz',
      'Suscripciones con Stripe y compras in-app en iOS',
      'Entradas digitales en Apple Wallet',
      'Backend .NET 8 + PostgreSQL y panel admin en Vue 3',
    ],
    stack: ['React Native', 'Expo', '.NET 8', 'PostgreSQL', 'SignalR', 'Stripe', 'Vue 3'],
    image: theArch,
    imageFit: 'contain',
    imageAlt: 'Pantalla de inicio de la app The Arch, red de antiguos alumnos de Oxford, en un iPhone',
    links: [{ label: 'Ver en App Store', url: 'https://apps.apple.com/us/app/arch-oxford/id6753820007' }],
    featured: true,
  },
  {
    slug: 'elixium-foods',
    name: 'Elixium Foods',
    label: 'TFG · 10 y Matrícula de Honor',
    tagline: 'Plataforma de pedidos a domicilio tipo Uber Eats',
    description:
      'Trabajo de Fin de Grado: plataforma completa con catálogo de restaurantes, carrito, pedidos en tiempo real y panel de administración.',
    highlights: [
      'Arquitectura .NET + Vue + PostgreSQL',
      'Contenerizada con Docker y orquestada con Kubernetes',
      'Desplegada en AWS con CI/CD en GitHub Actions',
    ],
    stack: ['.NET', 'Vue 3', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'],
    image: elixiumDelivery,
    imageAlt: 'Página de inicio de la plataforma de pedidos Elixium Foods con buscador de dirección de entrega',
    links: [{ label: 'Ver código', url: 'https://github.com/GabriLPDA22/ELIXIUM-FOODS' }],
  },
  {
    slug: 'huvegrym',
    name: 'Huvegrym Borboleta Danza',
    label: 'Web para cliente',
    tagline: 'Web de una compañía de danza contemporánea',
    description: 'Web editorial a pantalla completa con galería de espectáculos, proyectos y contacto para programadores culturales.',
    highlights: ['Diseño editorial a medida', 'Mobile-first', 'SEO técnico y Core Web Vitals'],
    stack: ['HTML', 'CSS', 'JavaScript', 'SEO'],
    image: huvegrym,
    imageAlt: 'Página de inicio de la web de Huvegrym con la fotografía de un bailarín en pleno salto',
    links: [{ label: 'Ver web', url: 'https://huvegrym.es' }],
  },
  {
    slug: 'tarot-divinidad',
    name: 'Tarot Divinidad 000',
    label: 'Web para cliente',
    tagline: 'Web con reservas online',
    description: 'Web para cliente con reservas vía Calendly sincronizadas con Google Calendar y alternativa por WhatsApp.',
    highlights: ['Reservas online integradas', 'Sincronización con Google Calendar', 'Construida con Astro'],
    stack: ['Astro', 'Calendly', 'Google Calendar', 'SEO'],
    image: tarotDivinidad,
    imageAlt: 'Página de inicio de Tarot Divinidad 000 con botones para reservar consulta o escribir por WhatsApp',
    links: [{ label: 'Ver web', url: 'https://divinidad000.com' }],
  },
];
