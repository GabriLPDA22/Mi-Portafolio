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
      lead: 'Llevo productos hasta producción: backend en C# y .NET, webs con Vue o Astro y apps móviles con React Native.',
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
      intro: 'Lo que uso cada día, y debajo dónde he usado el resto de verdad (no lo que he probado una tarde).',
      uses: {
        dotnet: 'C# y .NET: APIs y backend en producción, como el de ARCH, con tiempo real en SignalR.',
        vue: 'Paneles de administración con Vue 3 y TypeScript.',
        astro: 'Webs rápidas y con buen SEO, como esta y Tarot Divinidad.',
        tailwind: 'Interfaces a medida, rápidas de construir y fáciles de mantener.',
        typescript: 'Tipado de punta a punta: front, paneles y apps.',
      },
      more: 'El resto del stack',
      groups: {
        daily: 'Mi día a día',
        arch: 'En producción en ARCH',
        clients: 'En producción con empresas y clientes',
        also: 'También he trabajado con',
      },
    },
    about: {
      title: 'Sobre mí',
      body: [
        'Soy Gabriel, desarrollador full-stack en Zaragoza. Me gusta el producto entero: desde el modelo de datos y la API hasta la pantalla que toca el usuario y el pipeline que la publica.',
        'Busco un equipo donde aportar desde el primer día y seguir aprendiendo de gente que sepa más que yo.',
      ],
      languagesTitle: 'Idiomas',
      languages: [
        { name: 'Español', level: 'Nativo' },
        { name: 'Inglés', level: 'Conversacional, sin certificado oficial' },
      ],
      proofTitle: 'Lo que ya he hecho',
      proof: [
        { big: '5', text: 'apps publicadas en App Store y Google Play: ARCH y cuatro más con Deveco.it.' },
        { big: 'CI/CD', text: 'que publica solo: cada build sube a App Store Connect y Google Play Console sin tocar nada.' },
        { big: 'End-to-end', text: 'en ARCH: app React Native, backend .NET, panel en Vue, pagos con Stripe y Apple Wallet.' },
      ],
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
      lead: 'I take products all the way to production: C# and .NET on the backend, websites with Vue or Astro and mobile apps with React Native.',
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
      intro: 'What I use every day, and below where I have actually used the rest (not what I tried one afternoon).',
      uses: {
        dotnet: 'C# and .NET: APIs and backends in production, like ARCH’s, with real-time SignalR.',
        vue: 'Admin dashboards with Vue 3 and TypeScript.',
        astro: 'Fast, SEO-friendly websites, like this one and Tarot Divinidad.',
        tailwind: 'Custom interfaces that are quick to build and easy to maintain.',
        typescript: 'Typed end to end: frontends, dashboards and apps.',
      },
      more: 'The rest of the stack',
      groups: {
        daily: 'What I use every day',
        arch: 'In production at ARCH',
        clients: 'In production with companies and clients',
        also: 'I have also worked with',
      },
    },
    about: {
      title: 'About me',
      body: [
        "I'm Gabriel, a full-stack developer based in Zaragoza, Spain. I like owning the whole product: from the data model and the API to the screen people touch and the pipeline that ships it.",
        "I'm looking for a team where I can contribute from day one and keep learning from people who know more than I do.",
      ],
      languagesTitle: 'Languages',
      languages: [
        { name: 'Spanish', level: 'Native' },
        { name: 'English', level: 'Conversational, no official certificate' },
      ],
      proofTitle: 'What I have already shipped',
      proof: [
        { big: '5', text: 'apps live on the App Store and Google Play: ARCH and four more with Deveco.it.' },
        { big: 'CI/CD', text: 'that ships by itself: every build goes to App Store Connect and Google Play Console hands-free.' },
        { big: 'End-to-end', text: 'on ARCH: React Native app, .NET backend, Vue dashboard, Stripe payments and Apple Wallet.' },
      ],
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
