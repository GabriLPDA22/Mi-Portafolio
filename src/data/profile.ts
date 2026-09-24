import type { TechId } from './tech';

/**
 * Datos del perfil profesional. Fuente: CV (public/cv/Gabriel-Saiz-CV.pdf) y portfolio anterior.
 * Mantener sincronizado con el CV: es lo primero que un recruiter compara.
 */

export interface Experience {
  role: string;
  company: string;
  url?: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  stack: string[];
}

export const experience: Experience[] = [
  {
    role: 'Publicación de apps y CI/CD',
    company: 'Deveco.it',
    url: 'https://deveco.it/es/',
    period: '2026',
    location: 'Zaragoza',
    summary: 'Colaboración con el equipo de Deveco.it para llevar 4 aplicaciones móviles a App Store y Google Play.',
    bullets: [
      '2 apps en React Native publicadas con Expo (EAS).',
      '2 apps en Flutter publicadas con Codemagic.',
      'CI/CD automatizado: cada build se sube sola a App Store Connect y Google Play Console.',
    ],
    stack: ['Expo EAS', 'Flutter', 'Codemagic', 'CI/CD'],
  },
  {
    role: 'Desarrollador Web & Mobile',
    company: 'Freelance',
    period: '09/2025 — 2026',
    location: 'Zaragoza · Remoto',
    summary: 'Desarrollo end-to-end de una app social multiplataforma, de la idea a la publicación en las stores.',
    bullets: [
      'App en React Native (Expo) publicada en App Store y Google Play, superando los ciclos de revisión de Apple (IAP, disclosures legales, demo credentials).',
      'Suscripciones premium con Stripe (Android) y expo-iap (iOS): trial gratuito, cuotas de uso y compras in-app.',
      'Mensajería en tiempo real con SignalR: read receipts, mensajes de voz con S3 presigned URLs y waveform playback.',
      'Backend .NET 8 + PostgreSQL + Hangfire en VPS con Nginx y SSL; integración con Apple Wallet (.pkpass).',
      'Panel de administración en Vue 3 + TypeScript + Vite con CRUD, export a Excel y autenticación JWT.',
    ],
    stack: ['React Native', '.NET 8', 'PostgreSQL', 'SignalR', 'Stripe', 'Vue 3'],
  },
  {
    role: 'Desarrollador Web · Formación Dual',
    company: 'GOLIVE Services',
    url: 'https://www.onegolive.com/',
    period: '09/2024 — 06/2025',
    location: 'Zaragoza',
    summary: 'Desarrollo y mantenimiento de proyectos web para clientes en producción.',
    bullets: [
      'Proyectos web end-to-end con PHP y Symfony de forma autónoma, de requisitos a despliegue.',
      'Mantenimiento y evolución de sitios WordPress y Joomla: módulos personalizados y resolución de incidencias.',
      'Infraestructura en AWS (instancias, dominios y SSL) y trabajo en equipo con GitLab.',
    ],
    stack: ['PHP', 'Symfony', 'WordPress', 'AWS', 'GitLab'],
  },
];

export interface Education {
  title: string;
  center: string;
  period: string;
  bullets: string[];
}

export const education: Education[] = [
  {
    title: 'Grado Superior en Desarrollo de Aplicaciones Web (DAW)',
    center: 'San Valero Zaragoza',
    period: '2023 — 2025',
    bullets: [
      'Formación full-stack en .NET, Vue 3, Docker, Kubernetes, AWS y CI/CD con GitHub Actions.',
      'TFG con un 10 y Matrícula de Honor: plataforma tipo Uber con .NET + Vue + PostgreSQL, en Kubernetes sobre AWS.',
      'Prácticas (FCT) en GOLIVE Services en modalidad dual.',
    ],
  },
  {
    title: 'Grado Medio en Sistemas Microinformáticos y Redes',
    center: 'San Valero Zaragoza',
    period: '2021 — 2023',
    bullets: ['Administración de sistemas Linux y Windows, redes Cisco, virtualización e introducción a AWS.'],
  },
];

export interface Achievement {
  title: string;
  detail: string;
  year: string;
  medal: 'gold' | 'finalist' | 'participant';
}

export const achievements: Achievement[] = [
  {
    title: 'Ganador NASA Space Apps Challenge',
    detail: 'Edición Zaragoza del hackathon internacional de la NASA: 152 países y 5.556 proyectos.',
    year: '2023',
    medal: 'gold',
  },
  {
    title: '1.º premio Olimpiada de Informática de Aragón',
    detail: 'II Olimpiada, sección Apps. Colegio Profesional de Ingenieros Técnicos en Informática de Aragón.',
    year: '2023',
    medal: 'gold',
  },
  {
    title: 'Finalista National Challenge · UX/UI',
    detail: 'Competición estatal de FP: prototipo en Figma de una app de transporte público de Zaragoza.',
    year: '2023',
    medal: 'finalist',
  },
  {
    title: 'National Challenge · AWS JAM',
    detail: 'Competición oficial de Amazon Web Services con retos en cuentas reales: EC2, S3, Lambda, RDS e IAM.',
    year: '2024',
    medal: 'participant',
  },
];

/**
 * Stack principal: web + mobile sobre un backend .NET. Es lo que se destaca;
 * el resto va en `supportingSkills` y `alsoUsed` para no diluir el perfil.
 */
export const skills: { group: string; description: string; items: TechId[] }[] = [
  {
    group: 'Web',
    description: 'Paneles y aplicaciones web con Vue 3 y TypeScript: rápidas, tipadas y mantenibles.',
    items: ['vue', 'typescript', 'vite', 'tailwind'],
  },
  {
    group: 'Mobile',
    description: 'Apps iOS y Android con React Native publicadas en las stores, con pagos in-app.',
    items: ['reactNative', 'expo', 'stripe', 'appStore'],
  },
  {
    group: 'Backend',
    description: 'APIs REST y en tiempo real con .NET, autenticación JWT y PostgreSQL.',
    items: ['dotnet', 'csharp', 'signalr', 'postgresql'],
  },
];

/** Infraestructura con la que despliego lo anterior. */
export const supportingSkills: TechId[] = ['aws', 'docker', 'kubernetes', 'githubActions', 'nginx', 'linux'];

/** Experiencia secundaria: visible, pero sin protagonismo. */
export const alsoUsed: TechId[] = ['php', 'symfony', 'java', 'flutter', 'mysql', 'nextjs', 'astro', 'wordpress'];

/** Carrusel del hero, fila principal: solo el stack principal. */
export const marquee: TechId[] = [
  'dotnet',
  'csharp',
  'vue',
  'typescript',
  'reactNative',
  'expo',
  'postgresql',
  'signalr',
  'stripe',
  'docker',
  'aws',
];

/** Cifras destacadas: todas verificables en el CV y en los proyectos. */
export const stats = [
  { value: '5', label: 'apps publicadas en App Store y Google Play' },
  { value: '10', label: 'TFG con Matrícula de Honor' },
  { value: '3', label: 'años usando AWS en formación y proyectos' },
  { value: '2', label: 'premios de programación ganados' },
] as const;
