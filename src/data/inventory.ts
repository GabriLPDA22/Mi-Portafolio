/**
 * Inventario RPG de tecnologías. La rareza no es una "nota" inventada: indica DÓNDE se ha usado.
 * - legendary: en producción en ARCH (app propia publicada en stores).
 * - epic: en producción para empresas o clientes (Deveco.it, GOLIVE, webs de clientes).
 * - common: caja de herramientas habitual.
 * Los logos salen de simple-icons en build (0 KB de JS en cliente).
 */
import {
  siApple,
  siAstro,
  siCodemagic,
  siDocker,
  siDotnet,
  siExpo,
  siFlutter,
  siGithubactions,
  siJoomla,
  siNextdotjs,
  siPostgresql,
  siReact,
  siStripe,
  siSymfony,
  siTailwindcss,
  siTypescript,
  siVuedotjs,
  siWordpress,
} from 'simple-icons';

export type Rarity = 'legendary' | 'epic' | 'common';
export type InventoryItem = {
  id: string;
  name: string;
  rarity: Rarity;
  /** Path SVG en viewBox 0 0 24 24; sin path se usa `lucide`. */
  path?: string;
  lucide?: string;
  color: string;
  note: { es: string; en: string };
};

const AWS_PATH =
  'M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.336-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.176 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z';

/** Los logos negros (Next.js, Symfony, Apple, Expo) no se verían sobre fondo oscuro. */
const light = (hex: string) => (['000000', '1C2024'].includes(hex) ? '#fff3e6' : `#${hex}`);
const si = (icon: { path: string; hex: string }) => ({ path: icon.path, color: light(icon.hex) });

export const INVENTORY: InventoryItem[] = [
  // Legendarios: en producción en ARCH
  {
    id: 'react-native',
    name: 'React Native',
    rarity: 'legendary',
    ...si(siReact),
    note: {
      es: 'App social multiplataforma publicada en App Store y Google Play (ARCH) y 2 apps más con Deveco.it.',
      en: 'Cross-platform social app live on the App Store and Google Play (ARCH), plus 2 more apps with Deveco.it.',
    },
  },
  {
    id: 'expo',
    name: 'Expo',
    rarity: 'legendary',
    ...si(siExpo),
    note: {
      es: 'Builds y publicación con EAS: ARCH y 2 apps de Deveco.it subidas a las stores.',
      en: 'Builds and releases with EAS: ARCH and 2 Deveco.it apps shipped to the stores.',
    },
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    rarity: 'legendary',
    ...si(siTypescript),
    note: {
      es: 'En la app móvil y en el panel de administración de ARCH.',
      en: 'In the ARCH mobile app and admin panel.',
    },
  },
  {
    id: 'dotnet',
    name: '.NET',
    rarity: 'legendary',
    ...si(siDotnet),
    note: {
      es: 'Backend de ARCH en producción: API, tiempo real y pagos.',
      en: 'ARCH backend in production: API, real-time and payments.',
    },
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    rarity: 'legendary',
    ...si(siPostgresql),
    note: { es: 'Base de datos de ARCH en producción.', en: 'ARCH production database.' },
  },
  {
    id: 'signalr',
    name: 'SignalR',
    rarity: 'legendary',
    lucide: 'Zap',
    color: '#ffd06a',
    note: { es: 'Chat y mensajería en tiempo real de ARCH.', en: 'Real-time chat and messaging in ARCH.' },
  },
  {
    id: 'stripe',
    name: 'Stripe',
    rarity: 'legendary',
    ...si(siStripe),
    note: { es: 'Suscripciones premium y pagos en ARCH.', en: 'Premium subscriptions and payments in ARCH.' },
  },
  {
    id: 'aws',
    name: 'AWS',
    rarity: 'legendary',
    path: AWS_PATH,
    color: '#FF9900',
    note: {
      es: 'Infraestructura cloud de ARCH; en GOLIVE, instancias, dominios y SSL.',
      en: 'ARCH cloud infrastructure; at GOLIVE, instances, domains and SSL.',
    },
  },
  {
    id: 'vue',
    name: 'Vue 3',
    rarity: 'legendary',
    ...si(siVuedotjs),
    note: { es: 'Panel de administración de ARCH (Vue 3 + TypeScript).', en: 'ARCH admin panel (Vue 3 + TypeScript).' },
  },
  {
    id: 'apple-wallet',
    name: 'Apple Wallet',
    rarity: 'legendary',
    ...si(siApple),
    note: { es: 'Tickets digitales de ARCH en Apple Wallet.', en: 'ARCH digital tickets in Apple Wallet.' },
  },
  // Épicos: en producción para empresas y clientes
  {
    id: 'flutter',
    name: 'Flutter',
    rarity: 'epic',
    ...si(siFlutter),
    note: { es: '2 apps de Deveco.it publicadas en App Store y Google Play.', en: '2 Deveco.it apps live on the App Store and Google Play.' },
  },
  {
    id: 'codemagic',
    name: 'Codemagic',
    rarity: 'epic',
    ...si(siCodemagic),
    note: {
      es: 'CI/CD de Deveco.it: cada build sube sola a App Store Connect y Google Play Console.',
      en: 'Deveco.it CI/CD: every build uploads itself to App Store Connect and Google Play Console.',
    },
  },
  {
    id: 'symfony',
    name: 'Symfony',
    rarity: 'epic',
    ...si(siSymfony),
    note: { es: 'Proyectos web end-to-end en GOLIVE, de requisitos a despliegue.', en: 'End-to-end web projects at GOLIVE, from requirements to deployment.' },
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    rarity: 'epic',
    ...si(siWordpress),
    note: { es: 'Mantenimiento y evolución de sitios en producción en GOLIVE.', en: 'Maintaining and evolving production sites at GOLIVE.' },
  },
  {
    id: 'joomla',
    name: 'Joomla',
    rarity: 'epic',
    ...si(siJoomla),
    note: { es: 'Sitios de clientes en producción en GOLIVE.', en: 'Client sites in production at GOLIVE.' },
  },
  {
    id: 'astro',
    name: 'Astro',
    rarity: 'epic',
    ...si(siAstro),
    note: { es: 'Web de Tarot Divinidad 000 y este portfolio.', en: 'Tarot Divinidad 000 website and this portfolio.' },
  },
  // Comunes: caja de herramientas
  {
    id: 'nextjs',
    name: 'Next.js',
    rarity: 'common',
    ...si(siNextdotjs),
    note: { es: 'Webs y dashboards con SSR/SSG.', en: 'Websites and dashboards with SSR/SSG.' },
  },
  {
    id: 'tailwind',
    name: 'Tailwind',
    rarity: 'common',
    ...si(siTailwindcss),
    note: { es: 'Estilos de mis proyectos web, este incluido.', en: 'Styling for my web projects, this one included.' },
  },
  {
    id: 'docker',
    name: 'Docker',
    rarity: 'common',
    ...si(siDocker),
    note: { es: 'Contenedores para desarrollo y despliegue.', en: 'Containers for development and deployment.' },
  },
  {
    id: 'github-actions',
    name: 'GH Actions',
    rarity: 'common',
    ...si(siGithubactions),
    note: { es: 'Pipelines de CI/CD.', en: 'CI/CD pipelines.' },
  },
];

export const RARITY_LABEL = {
  es: { legendary: 'Legendario', epic: 'Épico', common: 'Común' },
  en: { legendary: 'Legendary', epic: 'Epic', common: 'Common' },
} as const;

export const RARITY_HINT = {
  es: { legendary: 'En producción en ARCH', epic: 'En producción con empresas y clientes', common: 'Caja de herramientas' },
  en: { legendary: 'In production at ARCH', epic: 'In production for companies & clients', common: 'Toolbox' },
} as const;
