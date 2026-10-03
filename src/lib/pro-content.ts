/**
 * Textos del portfolio profesional que no están en translations.ts (hero, stack, sobre mí,
 * BUG RUN como proyecto). Proyectos, experiencia y formulario siguen saliendo de translations.ts.
 */
import type { Locale } from '@/lib/i18n';

const APP_STORE = 'https://apps.apple.com/us/app/the-arch/id6753820007';

export const LINKS = {
  email: 'gsaiz.bajo@gmail.com',
  cv: '/cv/Gabriel-Saiz-CV.pdf',
  linkedin: 'https://www.linkedin.com/in/gabriel-saiz-de-la-maza-bajo-140370184/',
  github: 'https://github.com/GabriLPDA22',
  appStore: APP_STORE,
  huvegrym: 'https://huvegrym.es',
  divinidad: 'https://divinidad000.com',
  deveco: 'https://deveco.it/es/',
} as const;

const content = {
  es: {
    nav: { projects: 'Proyectos', experience: 'Experiencia', stack: 'Stack', about: 'Sobre mí', contact: 'Contacto', cv: 'Descargar CV' },
    hero: {
      role: 'Desarrollador full-stack',
      lead: 'Llevo apps y webs hasta producción: móvil con React Native, web con Next.js y Astro, y backend en .NET.',
      availability: 'Disponible para incorporarme, en Zaragoza o en remoto',
      cv: 'Descargar CV',
      projects: 'Ver proyectos',
      ledgerTitle: 'En producción ahora mismo',
      ledger: [
        { name: 'ARCH', what: 'App iOS', where: 'App Store', href: APP_STORE },
        { name: 'huvegrym.es', what: 'Web de escuela de danza', where: 'Online', href: 'https://huvegrym.es' },
        { name: 'divinidad000.com', what: 'Web con reservas', where: 'Online', href: 'https://divinidad000.com' },
        { name: '4 apps con Deveco.it', what: 'React Native y Flutter', where: 'App Store y Google Play', href: 'https://deveco.it/es/' },
      ],
      photoAlt: 'Gabriel Saiz',
    },
    projects: {
      title: 'Proyectos en producción',
      intro: 'Productos que hoy usan personas reales. En cada uno he hecho de todo: diseño, frontend, backend y despliegue.',
      stack: 'Stack',
      did: 'Qué hice',
      live: 'En producción',
      bugrun: {
        name: 'BUG RUN',
        kind: 'Proyecto personal',
        text: 'Un minijuego escondido en esta web, con ranking global. Por debajo hay más backend del que parece: tokens de partida de un solo uso, límites por IP, transacciones, migraciones automáticas y un filtro de nombres.',
        stack: ['TypeScript', 'Canvas', 'PHP', 'MySQL'],
        play: 'Jugar ahora',
      },
    },
    experience: {
      title: 'Experiencia',
      intro: 'Empecé en formación dual manteniendo webs de clientes y desde entonces no he dejado de publicar.',
    },
    stack: {
      title: 'Stack',
      intro: 'Agrupado por dónde lo he usado de verdad, no por lo que he probado una tarde.',
      groups: {
        legendary: 'En producción en ARCH',
        epic: 'En producción con empresas y clientes',
        common: 'Día a día',
      },
    },
    about: {
      title: 'Sobre mí',
      body: [
        'Soy Gabriel, desarrollador full-stack en Zaragoza. Me gusta el producto entero: desde el modelo de datos y la API hasta la pantalla que toca el usuario y el pipeline que la publica.',
        'Busco un equipo donde aportar desde el primer día y seguir aprendiendo de gente que sepa más que yo.',
      ],
      principlesTitle: 'Cómo trabajo',
    },
    contact: {
      title: '¿Hablamos?',
      lead: 'Si tienes una vacante, un proyecto o quieres conectar, escríbeme. Respondo en menos de 24 horas.',
      emailLabel: 'Escríbeme directamente',
      formTitle: 'O déjame un mensaje aquí',
    },
    footer: {
      play: '¿Tienes un minuto? Juega a BUG RUN',
      konami: 'Pista: ↑ ↑ ↓ ↓ ← → ← → B A',
    },
  },
  en: {
    nav: { projects: 'Projects', experience: 'Experience', stack: 'Stack', about: 'About', contact: 'Contact', cv: 'Download CV' },
    hero: {
      role: 'Full-stack developer',
      lead: 'I take apps and websites all the way to production: mobile with React Native, web with Next.js and Astro, and .NET on the backend.',
      availability: 'Available to join a team, in Zaragoza or remote',
      cv: 'Download CV',
      projects: 'See projects',
      ledgerTitle: 'Live in production right now',
      ledger: [
        { name: 'ARCH', what: 'iOS app', where: 'App Store', href: APP_STORE },
        { name: 'huvegrym.es', what: 'Dance school website', where: 'Online', href: 'https://huvegrym.es' },
        { name: 'divinidad000.com', what: 'Website with bookings', where: 'Online', href: 'https://divinidad000.com' },
        { name: '4 apps with Deveco.it', what: 'React Native and Flutter', where: 'App Store and Google Play', href: 'https://deveco.it/es/' },
      ],
      photoAlt: 'Gabriel Saiz',
    },
    projects: {
      title: 'Projects in production',
      intro: 'Products real people use today. On each one I did a bit of everything: design, frontend, backend and deployment.',
      stack: 'Stack',
      did: 'What I did',
      live: 'Live',
      bugrun: {
        name: 'BUG RUN',
        kind: 'Side project',
        text: 'A mini-game hidden in this site, with a global leaderboard. There is more backend under it than it looks: single-use run tokens, per-IP limits, transactions, automatic migrations and a name filter.',
        stack: ['TypeScript', 'Canvas', 'PHP', 'MySQL'],
        play: 'Play now',
      },
    },
    experience: {
      title: 'Experience',
      intro: 'I started in a dual training programme maintaining client websites, and I have been shipping ever since.',
    },
    stack: {
      title: 'Stack',
      intro: 'Grouped by where I have actually used it, not by what I tried one afternoon.',
      groups: {
        legendary: 'In production at ARCH',
        epic: 'In production with companies and clients',
        common: 'Everyday tools',
      },
    },
    about: {
      title: 'About me',
      body: [
        "I'm Gabriel, a full-stack developer based in Zaragoza, Spain. I like owning the whole product: from the data model and the API to the screen people touch and the pipeline that ships it.",
        "I'm looking for a team where I can contribute from day one and keep learning from people who know more than I do.",
      ],
      principlesTitle: 'How I work',
    },
    contact: {
      title: "Let's talk",
      lead: "If you have an opening, a project or just want to connect, write to me. I reply within 24 hours.",
      emailLabel: 'Email me directly',
      formTitle: 'Or leave me a message here',
    },
    footer: {
      play: 'Got a minute? Play BUG RUN',
      konami: 'Hint: ↑ ↑ ↓ ↓ ← → ← → B A',
    },
  },
} as const;

export type ProContent = (typeof content)['es'];
export const getPro = (locale: Locale): ProContent => content[locale] as ProContent;
