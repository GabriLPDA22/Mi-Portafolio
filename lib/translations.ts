import type { Locale } from './i18n';

export const translations = {
  es: {
    // Header
    nav: {
      services: 'Servicios',
      projects: 'Proyectos',
      process: 'Proceso',
      about: 'Sobre mí',
      contact: 'Contacto',
    },
    // Hero
    hero: {
      badge: 'Disponible para nuevos proyectos',
      title: 'Transformo ideas en',
      titleAccent: 'productos digitales',
      subtitle: 'Full Stack Developer especializado en crear aplicaciones web y móviles de alto rendimiento. De la idea al producto en semanas, no meses.',
      ctaPrimary: 'Reservar llamada',
      ctaSecondary: 'Ver proyectos',
      proof: 'Respuesta <24h · Entregas iterativas · Código mantenible',
    },
    // Services
    services: {
      title: 'SERVICIOS',
      headline: 'Lo que puedo hacer por ti',
      subtitle: 'Desarrollo completo de principio a fin, con foco en producto y rendimiento.',
      items: [
        {
          id: 'mobile',
          title: 'Apps móviles',
          description: 'Aplicaciones nativas iOS y Android con una única base de código. Rendimiento nativo, desarrollo ágil.',
          bullets: [
            'React Native + Expo SDK',
            'Push notifications & deep linking',
            'Integración APIs nativas',
            'App Store & Play Store',
            'OTA updates',
          ],
          chips: ['React Native', 'Expo', 'TypeScript'],
          cta: 'Cómo trabajo',
        },
        {
          id: 'web',
          title: 'Web & dashboards',
          description: 'Aplicaciones web modernas, SPAs y paneles admin con las mejores prácticas.',
          bullets: [
            'SSR, SSG e ISR optimizados',
            'Dashboards interactivos',
            'Autenticación y roles',
          ],
          chips: ['Next.js', 'Vue.js', 'Tailwind'],
          cta: 'Ver ejemplos',
        },
        {
          id: 'backend',
          title: 'Backend & APIs',
          description: 'Arquitecturas escalables y APIs robustas. Clean Architecture y patrones enterprise.',
          bullets: [
            'APIs REST y tiempo real',
            'Autenticación JWT/OAuth',
            'Integración pagos (Stripe)',
          ],
          chips: ['.NET 9', 'PostgreSQL', 'SignalR'],
          cta: 'Solicitar info',
        },
        {
          id: 'devops',
          title: 'Infra & DevOps',
          description: 'Despliegues automatizados, contenedores y cloud. Tu código en producción sin fricciones.',
          bullets: [
            'CI/CD pipelines',
            'Contenedores Docker',
            'AWS / cloud setup',
          ],
          chips: ['Docker', 'AWS', 'GitHub Actions'],
          cta: 'Hablemos',
        },
        {
          id: 'performance',
          title: 'UX & performance',
          description: 'Optimización de Core Web Vitals, SEO técnico y experiencia de usuario que convierte.',
          bullets: [
            'Auditorías Lighthouse',
            'Core Web Vitals',
            'SEO técnico avanzado',
          ],
          chips: ['Lighthouse', 'Web Vitals', 'SEO'],
          cta: 'Ver proceso',
        },
        {
          id: 'maintenance',
          title: 'Soporte & mantenimiento',
          description: 'Tu producto siempre actualizado, seguro y funcionando. Respuesta rápida ante incidencias.',
          bullets: [
            'Monitorización 24/7',
            'Updates de seguridad',
            'Soporte prioritario',
          ],
          chips: ['SLA', 'Monitoring', 'Hotfixes'],
          cta: 'Ver planes',
        },
      ],
    },
    // Projects
    projects: {
      title: 'PROYECTOS',
      headline: 'Trabajo real en producción',
      subtitle: 'Proyectos que están funcionando hoy, con usuarios reales.',
      items: [
        {
          id: 'arch',
          title: 'ARCH',
          subtitle: 'Plataforma de comunidad para Oxford University',
          description: 'App iOS completa con backend escalable y panel de administración.',
          bullets: [
            'App iOS con React Native + Expo',
            'Tickets digitales con Apple Wallet',
            'Chat en tiempo real (SignalR)',
            'Pagos y suscripciones (Stripe)',
            'Panel admin y moderación cloud',
          ],
          chips: ['.NET 9', 'PostgreSQL', 'AWS', 'Stripe', 'React Native', 'Expo'],
          cta: 'Descargar en App Store',
          secondaryCta: 'Solicitar detalles',
        },
        {
          id: 'huvegrym',
          title: 'Huvegrym',
          subtitle: 'Web para escuela de danza',
          description: 'Optimizada para SEO y rendimiento (Core Web Vitals).',
          bullets: [
            'Diseño y desarrollo web moderno',
            'Mobile-first y responsive',
            'Core Web Vitals optimizados',
            'SEO técnico avanzado',
            'Formularios de contacto',
          ],
          chips: ['Next.js', 'Tailwind', 'SEO', 'Performance', 'UI/UX'],
          cta: 'Ver sitio web',
        },
      ],
    },
    // About
    about: {
      title: 'SOBRE MÍ',
      headline: 'Full-Stack Developer',
      subtitle: 'Construyo productos digitales en producción, con foco en rendimiento y mantenibilidad.',
      bullets: [
        'Producto y negocio primero',
        'Código mantenible y limpio',
        'Comunicación clara y entregas continuas',
      ],
      cta: 'Contactar',
    },
    // Results
    results: {
      title: 'CÓMO ES TRABAJAR CONMIGO',
      headline: 'Sin promesas vacías.',
      subtitle: 'Trabajo claro, entregas reales y comunicación directa.',
      items: {
        communication: {
          title: 'Comunicación clara',
          text: 'Hablamos claro desde el primer día. Feedback continuo y sin sorpresas.',
        },
        iterations: {
          title: 'Iteraciones semanales',
          text: 'Avanzamos por entregas pequeñas y constantes, no proyectos eternos.',
        },
        code: {
          title: 'Código que se mantiene',
          text: 'Arquitectura limpia y decisiones pensadas para el largo plazo.',
        },
        product: {
          title: 'Producto antes que features',
          text: 'No construyo por construir. Cada decisión tiene un porqué.',
        },
      },
    },
    // FAQ
    faq: {
      title: 'FAQ',
      headline: 'Preguntas frecuentes',
      subtitle: 'Todo lo que necesitas saber antes de empezar.',
      questions: {
        timeline: {
          q: '¿Cuánto tardas en entregar una primera versión?',
          a: 'Depende del alcance, pero normalmente entre 2-4 semanas para una primera versión funcional. Trabajo por iteraciones semanales, así que verás progreso constante desde el día uno.',
        },
        budget: {
          q: '¿Trabajas con presupuestos cerrados o por iteraciones?',
          a: 'Ambos. Para proyectos con alcance claro, presupuesto cerrado. Para proyectos que evolucionan, trabajo por iteraciones semanales con un presupuesto mensual. Siempre transparente.',
        },
        design: {
          q: '¿Incluyes diseño UI/UX?',
          a: 'Sí, diseño y desarrollo van de la mano. Si ya tienes diseño, lo implemento. Si no, diseño interfaces modernas y funcionales basadas en buenas prácticas y tu marca.',
        },
        maintenance: {
          q: '¿Puedes mantener y escalar el proyecto?',
          a: 'Absolutamente. El código que escribo está pensado para escalar. Ofrezco mantenimiento continuo, mejoras y nuevas features según tus necesidades.',
        },
        stack: {
          q: '¿Qué stack usas normalmente?',
          a: 'React Native para apps móviles, Next.js para web, .NET para backend, PostgreSQL para base de datos. Pero me adapto a lo que necesites. Lo importante es elegir la herramienta correcta para cada problema.',
        },
        process: {
          q: '¿Cómo es el proceso de trabajo?',
          a: 'Empezamos con una llamada para entender tu proyecto. Te envío una propuesta clara con alcance, tiempos y presupuesto. Si encaja, empezamos con iteraciones semanales. Comunicación constante y entregas regulares.',
        },
      },
    },
    // Contact
    contact: {
      title: 'CONTACTO',
      headline: '¿Hablamos?',
      subtitle: 'Cuéntame tu idea y te respondo en menos de 24h. La primera consulta es siempre gratuita.',
      badges: {
        response: 'Respuesta <24h',
        free: 'Consulta inicial gratis',
        noCommitment: 'Sin compromiso',
      },
      form: {
        title: 'Hablemos de tu proyecto',
        description: 'Ya sea una app móvil, una web o un sistema completo, estoy aquí para ayudarte a convertir tu idea en realidad.',
        name: 'Nombre *',
        email: 'Email *',
        project: 'Tipo de proyecto',
        projectOptions: {
          select: 'Selecciona una opción',
          mobile: 'App móvil',
          web: 'Aplicación web',
          ecommerce: 'E-commerce',
          saas: 'SaaS / Plataforma',
          consulting: 'Consultoría técnica',
          other: 'Otro',
        },
        message: 'Cuéntame sobre tu proyecto *',
        messagePlaceholder: 'Describe brevemente tu idea, objetivos y timeline...',
        send: 'Enviar mensaje',
        sending: 'Enviando...',
        success: {
          title: '¡Mensaje enviado!',
          message: 'Gracias por contactar. Te responderé en menos de 24 horas.',
          again: 'Enviar otro mensaje',
        },
        error: 'Por favor, completa todos los campos obligatorios.',
        support: 'Si tienes problemas, puedes escribirme directamente a',
        directEmail: '¿Prefieres email directo?',
        social: 'Redes sociales',
        includes: '¿Qué incluye la consulta inicial?',
        includesItems: [
          'Análisis de tu idea o proyecto',
          'Recomendaciones técnicas',
          'Estimación de tiempos y costes',
          'Resolución de dudas',
        ],
      },
    },
    // Footer
    footer: {
      copyright: 'Todos los derechos reservados.',
    },
    // Cookies
    cookies: {
      message: 'Este sitio web utiliza cookies técnicas necesarias para su funcionamiento y para guardar tus preferencias de idioma. No utilizamos cookies de seguimiento ni publicidad.',
      moreInfo: 'Más información en nuestra',
      privacyPolicy: 'Política de Privacidad',
      accept: 'Aceptar',
      reject: 'Rechazar',
    },
    // Privacy Policy
    privacy: {
      title: 'Política de Privacidad',
      lastUpdated: 'Última actualización',
      sections: {
        responsible: {
          title: '1. Responsable del tratamiento',
          description: 'El responsable del tratamiento de los datos personales es:',
          name: 'Nombre',
          email: 'Email',
          website: 'Sitio web',
        },
        dataCollected: {
          title: '2. Datos que recopilamos',
          description: 'En este sitio web recopilamos los siguientes datos:',
          contactForm: {
            title: '2.1. Datos del formulario de contacto',
            description: 'Cuando utilizas el formulario de contacto, recopilamos:',
            items: ['Nombre', 'Dirección de correo electrónico', 'Mensaje', 'Tipo de proyecto (opcional)'],
            note: 'Estos datos se envían a través de Formspree y se almacenan temporalmente para poder responder a tu consulta.',
          },
          cookies: {
            title: '2.2. Cookies técnicas',
            description: 'Utilizamos cookies técnicas necesarias para el funcionamiento del sitio:',
            items: [
              'cookie-consent: Almacena tu preferencia sobre el uso de cookies',
              'locale: Almacena tu preferencia de idioma (español/inglés)',
            ],
            note: 'Estas cookies son necesarias y no requieren consentimiento según el RGPD, ya que son estrictamente necesarias para el funcionamiento del sitio.',
          },
        },
        purpose: {
          title: '3. Finalidad del tratamiento',
          description: 'Los datos recopilados se utilizan exclusivamente para:',
          items: [
            'Responder a tus consultas enviadas a través del formulario de contacto',
            'Mantener tus preferencias de idioma',
            'Recordar tu consentimiento sobre el uso de cookies',
          ],
        },
        legalBasis: {
          title: '4. Base legal',
          description: 'El tratamiento de tus datos se basa en:',
          items: [
            'Consentimiento: Para el formulario de contacto, basado en tu consentimiento explícito al enviar el formulario',
            'Interés legítimo: Para las cookies técnicas necesarias para el funcionamiento del sitio',
          ],
        },
        retention: {
          title: '5. Conservación de datos',
          description: 'Los datos del formulario de contacto se conservan durante el tiempo necesario para responder a tu consulta y, en su caso, durante los plazos legalmente establecidos.',
          cookiesNote: 'Las cookies técnicas se conservan según su finalidad:',
          cookieItems: ['Cookie de consentimiento: 1 año', 'Cookie de idioma: Persistente hasta que la elimines'],
        },
        rights: {
          title: '6. Tus derechos',
          description: 'Tienes derecho a:',
          items: [
            'Acceso: Obtener información sobre tus datos personales',
            'Rectificación: Corregir datos inexactos o incompletos',
            'Supresión: Solicitar la eliminación de tus datos',
            'Oposición: Oponerte al tratamiento de tus datos',
            'Portabilidad: Recibir tus datos en formato estructurado',
            'Retirar el consentimiento: En cualquier momento',
          ],
          contact: 'Para ejercer estos derechos, puedes contactarme en:',
        },
        security: {
          title: '7. Seguridad',
          description: 'Implemento medidas técnicas y organizativas apropiadas para proteger tus datos personales contra el acceso no autorizado, la pérdida o la destrucción.',
        },
        thirdParty: {
          title: '8. Cookies de terceros',
          description: 'Este sitio web NO utiliza cookies de terceros para seguimiento, publicidad o análisis. Solo utilizamos cookies técnicas propias necesarias para el funcionamiento del sitio.',
        },
        changes: {
          title: '9. Cambios en esta política',
          description: 'Me reservo el derecho de modificar esta política de privacidad. Cualquier cambio será publicado en esta página con la fecha de actualización correspondiente.',
        },
        contact: {
          title: '10. Contacto',
          description: 'Si tienes preguntas sobre esta política de privacidad, puedes contactarme en:',
        },
      },
      backHome: '← Volver al inicio',
    },
  },
  en: {
    // Header
    nav: {
      services: 'Services',
      projects: 'Projects',
      process: 'Process',
      about: 'About',
      contact: 'Contact',
    },
    // Hero
    hero: {
      badge: 'Available for new projects',
      title: 'I transform ideas into',
      titleAccent: 'digital products',
      subtitle: 'Full Stack Developer specialized in creating high-performance web and mobile applications. From idea to product in weeks, not months.',
      ctaPrimary: 'Book a call',
      ctaSecondary: 'View projects',
      proof: 'Response <24h · Iterative deliveries · Maintainable code',
    },
    // Services
    services: {
      title: 'SERVICES',
      headline: 'What I can do for you',
      subtitle: 'End-to-end development, focused on product and performance.',
      items: [
        {
          id: 'mobile',
          title: 'Mobile Apps',
          description: 'Native iOS and Android applications with a single codebase. Native performance, agile development.',
          bullets: [
            'React Native + Expo SDK',
            'Push notifications & deep linking',
            'Native API integration',
            'App Store & Play Store',
            'OTA updates',
          ],
          chips: ['React Native', 'Expo', 'TypeScript'],
          cta: 'How I work',
        },
        {
          id: 'web',
          title: 'Web & Dashboards',
          description: 'Modern web applications, SPAs and admin panels with best practices.',
          bullets: [
            'Optimized SSR, SSG and ISR',
            'Interactive dashboards',
            'Authentication and roles',
          ],
          chips: ['Next.js', 'Vue.js', 'Tailwind'],
          cta: 'See examples',
        },
        {
          id: 'backend',
          title: 'Backend & APIs',
          description: 'Scalable architectures and robust APIs. Clean Architecture and enterprise patterns.',
          bullets: [
            'REST and real-time APIs',
            'JWT/OAuth authentication',
            'Payment integration (Stripe)',
          ],
          chips: ['.NET 9', 'PostgreSQL', 'SignalR'],
          cta: 'Request info',
        },
        {
          id: 'devops',
          title: 'Infra & DevOps',
          description: 'Automated deployments, containers and cloud. Your code in production without friction.',
          bullets: [
            'CI/CD pipelines',
            'Docker containers',
            'AWS / cloud setup',
          ],
          chips: ['Docker', 'AWS', 'GitHub Actions'],
          cta: "Let's talk",
        },
        {
          id: 'performance',
          title: 'UX & Performance',
          description: 'Core Web Vitals optimization, technical SEO and user experience that converts.',
          bullets: [
            'Lighthouse audits',
            'Core Web Vitals',
            'Advanced technical SEO',
          ],
          chips: ['Lighthouse', 'Web Vitals', 'SEO'],
          cta: 'See process',
        },
        {
          id: 'maintenance',
          title: 'Support & Maintenance',
          description: 'Your product always updated, secure and functional. Fast response to incidents.',
          bullets: [
            '24/7 Monitoring',
            'Security updates',
            'Priority support',
          ],
          chips: ['SLA', 'Monitoring', 'Hotfixes'],
          cta: 'See plans',
        },
      ],
    },
    // Projects
    projects: {
      title: 'PROJECTS',
      headline: 'Real work in production',
      subtitle: 'Projects that are running today, with real users.',
      items: [
        {
          id: 'arch',
          title: 'ARCH',
          subtitle: 'Community platform for Oxford University',
          description: 'Complete iOS app with scalable backend and administration panel.',
          bullets: [
            'iOS app with React Native + Expo',
            'Digital tickets with Apple Wallet',
            'Real-time chat (SignalR)',
            'Payments and subscriptions (Stripe)',
            'Cloud admin panel and moderation',
          ],
          chips: ['.NET 9', 'PostgreSQL', 'AWS', 'Stripe', 'React Native', 'Expo'],
          cta: 'Download on App Store',
          secondaryCta: 'Request details',
        },
        {
          id: 'huvegrym',
          title: 'Huvegrym',
          subtitle: 'Web for dance school',
          description: 'Optimized for SEO and performance (Core Web Vitals).',
          bullets: [
            'Modern web design and development',
            'Mobile-first and responsive',
            'Optimized Core Web Vitals',
            'Advanced technical SEO',
            'Contact forms',
          ],
          chips: ['Next.js', 'Tailwind', 'SEO', 'Performance', 'UI/UX'],
          cta: 'View website',
        },
      ],
    },
    // About
    about: {
      title: 'ABOUT ME',
      headline: 'Full-Stack Developer',
      subtitle: 'I build digital products in production, focused on performance and maintainability.',
      bullets: [
        'Product and business first',
        'Maintainable and clean code',
        'Clear communication and continuous deliveries',
      ],
      cta: 'Contact',
    },
    // Results
    results: {
      title: 'HOW IT IS TO WORK WITH ME',
      headline: 'No empty promises.',
      subtitle: 'Clear work, real deliveries and direct communication.',
      items: {
        communication: {
          title: 'Clear communication',
          text: 'We speak clearly from day one. Continuous feedback and no surprises.',
        },
        iterations: {
          title: 'Weekly iterations',
          text: 'We progress through small and constant deliveries, not endless projects.',
        },
        code: {
          title: 'Maintainable code',
          text: 'Clean architecture and decisions made for the long term.',
        },
        product: {
          title: 'Product before features',
          text: "I don't build just to build. Every decision has a reason.",
        },
      },
    },
    // FAQ
    faq: {
      title: 'FAQ',
      headline: 'Frequently asked questions',
      subtitle: 'Everything you need to know before starting.',
      questions: {
        timeline: {
          q: 'How long does it take to deliver a first version?',
          a: "It depends on the scope, but usually 2-4 weeks for a first functional version. I work in weekly iterations, so you'll see constant progress from day one.",
        },
        budget: {
          q: 'Do you work with fixed budgets or by iterations?',
          a: 'Both. For projects with clear scope, fixed budget. For evolving projects, I work in weekly iterations with a monthly budget. Always transparent.',
        },
        design: {
          q: 'Do you include UI/UX design?',
          a: 'Yes, design and development go hand in hand. If you already have a design, I implement it. If not, I design modern and functional interfaces based on best practices and your brand.',
        },
        maintenance: {
          q: 'Can you maintain and scale the project?',
          a: 'Absolutely. The code I write is designed to scale. I offer continuous maintenance, improvements and new features according to your needs.',
        },
        stack: {
          q: 'What stack do you normally use?',
          a: 'React Native for mobile apps, Next.js for web, .NET for backend, PostgreSQL for database. But I adapt to what you need. What matters is choosing the right tool for each problem.',
        },
        process: {
          q: 'What is the work process like?',
          a: 'We start with a call to understand your project. I send you a clear proposal with scope, timeline and budget. If it fits, we start with weekly iterations. Constant communication and regular deliveries.',
        },
      },
    },
    // Contact
    contact: {
      title: 'CONTACT',
      headline: "Let's talk?",
      subtitle: "Tell me your idea and I'll respond in less than 24h. The first consultation is always free.",
      badges: {
        response: 'Response <24h',
        free: 'Free initial consultation',
        noCommitment: 'No commitment',
      },
      form: {
        title: "Let's talk about your project",
        description: "Whether it's a mobile app, a web app or a complete system, I'm here to help you turn your idea into reality.",
        name: 'Name *',
        email: 'Email *',
        project: 'Project type',
        projectOptions: {
          select: 'Select an option',
          mobile: 'Mobile app',
          web: 'Web application',
          ecommerce: 'E-commerce',
          saas: 'SaaS / Platform',
          consulting: 'Technical consulting',
          other: 'Other',
        },
        message: 'Tell me about your project *',
        messagePlaceholder: 'Briefly describe your idea, objectives and timeline...',
        send: 'Send message',
        sending: 'Sending...',
        success: {
          title: 'Message sent!',
          message: 'Thanks for contacting. I will respond in less than 24 hours.',
          again: 'Send another message',
        },
        error: 'Please complete all required fields.',
        support: 'If you have problems, you can write to me directly at',
        directEmail: 'Prefer direct email?',
        social: 'Social networks',
        includes: 'What does the initial consultation include?',
        includesItems: [
          'Analysis of your idea or project',
          'Technical recommendations',
          'Time and cost estimation',
          'Answering questions',
        ],
      },
    },
    // Footer
    footer: {
      copyright: 'All rights reserved.',
    },
    // Cookies
    cookies: {
      message: 'This website uses necessary technical cookies for its operation and to save your language preferences. We do not use tracking or advertising cookies.',
      moreInfo: 'More information in our',
      privacyPolicy: 'Privacy Policy',
      accept: 'Accept',
      reject: 'Reject',
    },
    // Privacy Policy
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated',
      sections: {
        responsible: {
          title: '1. Data Controller',
          description: 'The data controller for personal data is:',
          name: 'Name',
          email: 'Email',
          website: 'Website',
        },
        dataCollected: {
          title: '2. Data We Collect',
          description: 'This website collects the following data:',
          contactForm: {
            title: '2.1. Contact Form Data',
            description: 'When you use the contact form, we collect:',
            items: ['Name', 'Email address', 'Message', 'Project type (optional)'],
            note: 'This data is sent through Formspree and stored temporarily to respond to your inquiry.',
          },
          cookies: {
            title: '2.2. Technical Cookies',
            description: 'We use technical cookies necessary for the site operation:',
            items: [
              'cookie-consent: Stores your preference regarding cookie usage',
              'locale: Stores your language preference (Spanish/English)',
            ],
            note: 'These cookies are necessary and do not require consent under GDPR, as they are strictly necessary for the site operation.',
          },
        },
        purpose: {
          title: '3. Purpose of Processing',
          description: 'The collected data is used exclusively for:',
          items: [
            'Responding to your inquiries sent through the contact form',
            'Maintaining your language preferences',
            'Remembering your consent regarding cookie usage',
          ],
        },
        legalBasis: {
          title: '4. Legal Basis',
          description: 'The processing of your data is based on:',
          items: [
            'Consent: For the contact form, based on your explicit consent when submitting the form',
            'Legitimate interest: For technical cookies necessary for the site operation',
          ],
        },
        retention: {
          title: '5. Data Retention',
          description: 'Contact form data is retained for the time necessary to respond to your inquiry and, where applicable, for legally established periods.',
          cookiesNote: 'Technical cookies are retained according to their purpose:',
          cookieItems: ['Consent cookie: 1 year', 'Language cookie: Persistent until you delete it'],
        },
        rights: {
          title: '6. Your Rights',
          description: 'You have the right to:',
          items: [
            'Access: Obtain information about your personal data',
            'Rectification: Correct inaccurate or incomplete data',
            'Erasure: Request deletion of your data',
            'Objection: Object to the processing of your data',
            'Portability: Receive your data in structured format',
            'Withdraw consent: At any time',
          ],
          contact: 'To exercise these rights, you can contact me at:',
        },
        security: {
          title: '7. Security',
          description: 'I implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss or destruction.',
        },
        thirdParty: {
          title: '8. Third-Party Cookies',
          description: 'This website does NOT use third-party cookies for tracking, advertising or analytics. We only use our own technical cookies necessary for the site operation.',
        },
        changes: {
          title: '9. Changes to This Policy',
          description: 'I reserve the right to modify this privacy policy. Any changes will be published on this page with the corresponding update date.',
        },
        contact: {
          title: '10. Contact',
          description: 'If you have questions about this privacy policy, you can contact me at:',
        },
      },
      backHome: '← Back to home',
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.es;

