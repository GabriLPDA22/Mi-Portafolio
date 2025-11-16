import { ref, computed } from 'vue';

// Estado global del idioma
const currentLocale = ref(localStorage.getItem('locale') || 'es');

// Traducciones
const translations = {
  es: {
    // ====================================
    // NAVEGACIÓN
    // ====================================
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      projects: 'Proyectos',
      skills: 'Skills',
      experience: 'Experiencia',
      about: 'Sobre mí',
      contact: 'Contacto'
    },

    // ====================================
    // HERO SECTION
    // ====================================
    hero: {
      followMe: 'Sígueme',
      availability: 'Disponible para proyectos',
      title: {
        line1: 'Desarrollo',
        line2: 'aplicaciones web y mobile',
        line3: 'que convierten visitantes',
        line4: 'en clientes'
      },
      subtitle: 'Desarrollador Full Stack especializado en Vue.js, React Native y experiencias digitales que generan resultados. Transformo ideas en productos que tus usuarios amarán.',
      cta: {
        primary: 'Hablemos de tu proyecto',
        secondary: 'Ver casos de éxito',
        aboutMe: 'Sobre mí'
      },
      stats: {
        projects: 'Proyectos completados',
        experience: 'Años de experiencia',
        technologies: 'Tecnologías dominadas'
      },
      photoAlt: 'Gabriel Saiz - Desarrollador Full Stack'
    },

    // ====================================
    // SERVICIOS (CORREGIDO PARA ENCAJAR CON TU COMPONENTE)
    // ====================================
    services: {
      title: 'Mis',
      titleHighlight: 'Servicios',
      subtitle: 'Soluciones profesionales adaptadas a tus necesidades',
      
      // AQUI ESTABA EL ERROR. AHORA TIENE LA ESTRUCTURA 'cards' CORRECTA
      cards: {
        frontend: {
          title: 'Desarrollo Web Frontend',
          description: 'Interfaces modernas y responsivas con Vue.js y React. Desde landing pages hasta aplicaciones web complejas.',
          features: [
            'Vue.js 3 & Composition API',
            'React & Next.js',
            'TypeScript & JavaScript',
            'Tailwind CSS + SCSS'
          ],
          price: 'Desde 800€',
          badge: 'Popular',
        },
        mobile: {
          title: 'Apps Mobile Nativas',
          description: 'Aplicaciones iOS y Android con React Native. Experiencia nativa con código compartido y rendimiento óptimo.',
          features: [
            'React Native',
            'iOS & Android',
            'Expo & Bare Workflow',
            'Push Notifications'
          ],
          price: 'Desde 1.500€',
          badge: 'Demandado',
        },
        backend: {
          title: 'Backend & APIs REST',
          description: 'Arquitecturas escalables y seguras con Symfony y .NET. Integración con bases de datos y servicios externos.',
          features: [
            'Symfony & PHP',
            '.NET & C#',
            'PostgreSQL & MySQL',
            'API RESTful'
          ],
          price: 'Desde 1.200€',
          badge: 'Full Stack',
        },
        uiux: {
          title: 'UI/UX & Animaciones',
          description: 'Diseños pixel-perfect con atención al detalle. Animaciones fluidas y microinteracciones que enamoran.',
          features: [
            'Diseño Mobile-First',
            'Scroll Animations',
            'Parallax Effects',
            'Prototipos Figma'
          ],
          price: 'Desde 600€',
          badge: 'Premium',
        },
        performance: {
          title: 'Web Performance',
          description: 'Optimización de velocidad y SEO. Auditorías Lighthouse y mejoras técnicas para mejor posicionamiento.',
          features: [
            'Core Web Vitals',
            'SEO Técnico',
            'Lazy Loading',
            'Code Splitting'
          ],
          price: 'Desde 400€',
          badge: 'Técnico',
        },
        support: {
          title: 'Soporte & Mantenimiento',
          description: 'Actualizaciones, mejoras continuas y resolución de bugs. Mantén tu aplicación siempre al día y funcionando.',
          features: [
            'Bug Fixing',
            'Actualizaciones',
            'Nuevas Features',
            'Soporte Mensual'
          ],
          price: '300€/mes',
          badge: 'Recurrente',
        },
      },
    },

    // ====================================
    // PROYECTOS
    // ====================================
    projects: {
      title: 'Mis',
      titleHighlight: 'Proyectos',
      subtitle: 'Algunos de los proyectos más destacados en los que he trabajado.',
      
      viewProject: 'Ver Proyecto',
      viewCode: 'Ver Código',
      viewDemo: 'Ver Demo',
      technologies: 'Tecnologías',
      
      status: {
        production: 'En Producción',
        development: 'En Desarrollo',
        completed: 'Completado'
      },

      elixium: {
        category: 'Full Stack',
        title: 'Elixium Foods',
        description: 'Plataforma de reparto de comida. Sistema de pedidos en tiempo real, panel de administración para restaurantes y seguimiento de entregas.',
      },
      huvegrym: {
        category: 'Desarrollo Web',
        title: 'Huvegrym',
        description: 'Web de promoción y punto de venta para un grupo de música. Diseño personalizado y enfoque en la experiencia del usuario.',
      },
      mvpApp: {
        category: 'App Móvil & Web',
        title: 'MVP App',
        description: 'Aplicación móvil y web para gestión de proyectos freelance. Permite organizar tareas, clientes y seguimiento de ingresos.',
      }
    },

    // ====================================
    // SKILLS
    // ====================================
    skills: {
      title: 'Mis',
      titleHighlight: 'Habilidades',
      subtitle: 'Tecnologías y herramientas con las que trabajo día a día',
      
      categories: {
        frontend: 'Frontend & Frameworks',
        backend: 'Backend & Bases de Datos',
        mobile: 'Mobile',
        database: 'Bases de Datos',
        cloud: 'Cloud & DevOps',
        tools: 'Herramientas & DevOps'
      }
    },

    // ====================================
    // EXPERIENCIA
    // ====================================
    experience: {
      title: 'Mi',
      titleHighlight: 'Trayectoria',
      subtitle: 'Desde formación dual hasta freelance profesional, construyendo productos digitales de calidad',
      
      current: 'Actualidad',
      present: 'Presente',
      
      freelance: {
        date: 'Jun 2025 - Actualidad',
        status: 'Freelance Activo 🚀',
        title: 'Desarrollador Full Stack Freelance',
        company: 'Trabajo Autónomo',
        description: 'Desarrollo de soluciones web y mobile completas para clientes. Especializado en arquitecturas modernas con Vue.js, React Native, .NET y AWS.',
        achievements: [
          'Primer MVP completo (Web + iOS + Backend + AWS)',
          'Portfolio web para cliente (Huvegrym - En producción)',
          'Gestión completa de proyectos desde diseño hasta deploy'
        ]
      },
      
      golive: {
        date: 'Sep 2024 - Jun 2025',
        status: 'Completado ✓',
        title: 'Desarrollador Full Stack',
        company: 'GOLIVE Services - Formación Dual',
        description: 'Formación dual en consultora tecnológica especializada en desarrollo web y mobile. Participación en proyectos reales con clientes de diversos sectores.',
        achievements: [
          'Desarrollo de soluciones personalizadas para clientes',
          'Implementación de funcionalidades con tecnologías modernas',
          'Optimización del rendimiento de plataformas'
        ],
        visitWebsite: 'Visitar sitio web',
        downloadLetter: 'Descargar Carta de Recomendación'
      }
    },

    // ====================================
    // SOBRE MÍ
    // ====================================
    about: {
      title: 'Conoce Mi',
      titleHighlight: 'Historia',
      subtitle: 'Desarrollador apasionado por crear soluciones que marquen la diferencia',
      
      whoAmI: '¿Quién soy?',
      
      paragraphs: {
        intro: 'Soy <strong>Gabriel</strong>, un apasionado del desarrollo de software y la tecnología. Me encanta crear soluciones que realmente funcionen y ayuden a las personas. Para mí, programar no es solo escribir código, es <span class="highlight-orange">resolver problemas de forma creativa</span> y construir experiencias que marquen la diferencia.',
        
        passion: 'Soy una persona <span class="highlight-purple">curiosa y autodidacta</span>. Me fascina aprender nuevas tecnologías y explorar cómo funcionan las cosas por dentro. La ciberseguridad me apasiona tanto como el desarrollo porque creo que <strong>crear tecnología segura es una responsabilidad</strong>, no una opción.',
        
        mindset: 'Me considero alguien <span class="highlight-cyan">proactivo y resolutivo</span>. Cuando me enfrento a un desafío, no me rindo hasta encontrar la solución. Me gusta trabajar en equipo, aprender de otros desarrolladores y compartir lo que sé. Creo firmemente en que la mejor forma de crecer es rodeándote de gente que te inspire.',
        
        extra: 'Más allá del código, me apasiona estar al día con las últimas tendencias tech, participar en hackathones y crear proyectos que surgen de ideas locas. Soy de esas personas que ve un problema cotidiano y piensa <span class="highlight-pink">"esto lo puedo automatizar"</span>.'
      },
      
      quote: 'Mi objetivo es crear tecnología que no solo funcione, sino que sea segura, elegante y aporte valor real',
      
      values: {
        passion: {
          title: 'Pasión por el código',
          description: 'Disfruto cada línea de código, cada bug que soluciono y cada funcionalidad que cobra vida.'
        },
        growth: {
          title: 'Mentalidad de crecimiento',
          description: 'Siempre buscando aprender, mejorar y salir de mi zona de confort para evolucionar como profesional.'
        },
        solutions: {
          title: 'Orientado a soluciones',
          description: 'No me quedo en el problema, busco la manera de resolverlo de forma eficiente y elegante.'
        }
      }
    },

    // ====================================
    // CONTACTO
    // ====================================
    contact: {
      title: 'Trabajemos',
      titleHighlight: 'Juntos',
      subtitle: '¿Tienes un proyecto en mente? Hablemos de cómo puedo ayudarte',
      
      form: {
        name: 'Nombre',
        namePlaceholder: 'Tu nombre',
        email: 'Email',
        emailPlaceholder: 'tu@email.com',
        subject: 'Asunto',
        subjectPlaceholder: '¿En qué puedo ayudarte?',
        message: 'Mensaje',
        messagePlaceholder: 'Cuéntame sobre tu proyecto...',
        send: 'Enviar Mensaje',
        sending: 'Enviando...'
      },
      note: '* Los precios son orientativos y varían según la complejidad del proyecto',
      
      info: {
        email: 'Email',
        phone: 'Teléfono',
        location: 'Ubicación',
        availability: 'Disponibilidad',
        availabilityStatus: 'Disponible para proyectos'
      },
      
      success: '¡Mensaje enviado correctamente! Te responderé pronto.',
      error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
      
      validation: {
        nameRequired: 'El nombre es obligatorio',
        emailRequired: 'El email es obligatorio',
        emailInvalid: 'Email inválido',
        messageRequired: 'El mensaje es obligatorio'
      }
    },

    // ====================================
    // FOOTER
    // ====================================
    footer: {
      description: 'Desarrollador Full Stack freelance especializado en Vue.js, React Native, .NET y arquitecturas cloud. Creando productos digitales de calidad.',
      
      links: {
        title: 'Enlaces',
        home: 'Inicio',
        services: 'Servicios',
        projects: 'Proyectos',
        skills: 'Skills',
        experience: 'Experiencia',
        about: 'Sobre mí',
        contact: 'Contacto'
      },
      
      contact: {
        title: 'Contacto',
        email: 'Email',
        phone: 'Teléfono',
        location: 'Zaragoza, España'
      },
      
      copyright: 'Todos los derechos reservados',
      madeWith: 'Hecho con',
      using: 'usando',
      privacy: 'Política de Privacidad'
    },

    // ====================================
    // COMPONENTES COMUNES
    // ====================================
    common: {
      learnMore: 'Saber más',
      viewMore: 'Ver más',
      backToTop: 'Volver arriba',
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      close: 'Cerrar',
      open: 'Abrir',
      previous: 'Anterior',
      next: 'Siguiente',
      download: 'Descargar',
      share: 'Compartir'
    },

    // ====================================
    // COOKIES
    // ====================================
    cookies: {
      title: 'Cookies',
      message: 'Usamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra',
      policy: 'política de privacidad',
      accept: 'Aceptar',
      reject: 'Rechazar'
    },

    // ====================================
    // 404
    // ====================================
    notFound: {
      code: '404',
      title: 'Página no encontrada',
      description: 'Lo sentimos, la página que buscas no existe o ha sido movida.',
      backHome: 'Volver al inicio'
    },

    // ====================================
    // PRIVACIDAD
    // ====================================
    privacy: {
      title: 'Política de Privacidad',
      lastUpdated: 'Última actualización',
      back: 'Volver',
      
      sections: {
        information: {
          title: 'Información que recopilamos',
          content: 'Este sitio web personal no recopila información personal identificable de forma activa. Sin embargo, como la mayoría de sitios web, puede recopilar información técnica básica como:',
          items: {
            ip: 'Dirección IP',
            browser: 'Tipo de navegador',
            pages: 'Páginas visitadas',
            time: 'Tiempo de permanencia en el sitio'
          }
        },
        cookies: {
          title: 'Uso de cookies',
          content: 'Utilizamos cookies esenciales para el funcionamiento básico del sitio web. Puedes gestionar tus preferencias de cookies en cualquier momento.'
        },
        sharing: {
          title: 'Compartir información',
          content: 'No compartimos, vendemos ni alquilamos tu información personal a terceros. Los datos técnicos recopilados se utilizan únicamente para mejorar la experiencia del usuario.'
        },
        links: {
          title: 'Enlaces externos',
          content: 'Este sitio puede contener enlaces a sitios web externos. No somos responsables de las prácticas de privacidad de estos sitios.'
        },
        contact: {
          title: 'Contacto',
          content: 'Si tienes preguntas sobre esta política de privacidad, puedes contactarme en:'
        }
      }
    }
  },

  // ====================================
  // ENGLISH TRANSLATIONS
  // ====================================
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      about: 'About',
      contact: 'Contact'
    },

    hero: {
      followMe: 'Follow me',
      availability: 'Available for projects',
      title: {
        line1: 'I develop',
        line2: 'web and mobile apps',
        line3: 'that convert visitors',
        line4: 'into customers'
      },
      subtitle: 'Full Stack Developer specialized in Vue.js, React Native and digital experiences that generate results. I transform ideas into products your users will love.',
      cta: {
        primary: "Let's talk about your project",
        secondary: 'View success stories',
        aboutMe: 'About me'
      },
      stats: {
        projects: 'Completed projects',
        experience: 'Years of experience',
        technologies: 'Technologies mastered'
      },
      photoAlt: 'Gabriel Saiz - Full Stack Developer'
    },

    services: {
      title: 'My',
      titleHighlight: 'Services',
      subtitle: 'Professional solutions tailored to your needs',
      
      // ENGLISH CARDS CORRECTION
      cards: {
        frontend: {
          title: 'Frontend Web Development',
          description: 'Modern and responsive interfaces with Vue.js and React. From landing pages to complex web applications.',
          features: [
            'Vue.js 3 & Composition API',
            'React & Next.js',
            'TypeScript & JavaScript',
            'Tailwind CSS + SCSS'
          ],
          price: 'From €800',
          badge: 'Popular',
        },
        mobile: {
          title: 'Native Mobile Apps',
          description: 'iOS and Android applications with React Native. Native experience with shared code and optimal performance.',
          features: [
            'React Native',
            'iOS & Android',
            'Expo & Bare Workflow',
            'Push Notifications'
          ],
          price: 'From €1,500',
          badge: 'In Demand',
        },
        backend: {
          title: 'Backend & REST APIs',
          description: 'Scalable and secure architectures with Symfony and .NET. Integration with databases and external services.',
          features: [
            'Symfony & PHP',
            '.NET & C#',
            'PostgreSQL & MySQL',
            'RESTful API'
          ],
          price: 'From €1,200',
          badge: 'Full Stack',
        },
        uiux: {
          title: 'UI/UX & Animations',
          description: 'Pixel-perfect designs with attention to detail. Smooth animations and micro-interactions that delight.',
          features: [
            'Mobile-First Design',
            'Scroll Animations',
            'Parallax Effects',
            'Figma Prototypes'
          ],
          price: 'From €600',
          badge: 'Premium',
        },
        performance: {
          title: 'Web Performance',
          description: 'Speed and SEO optimization. Lighthouse audits and technical improvements for better positioning.',
          features: [
            'Core Web Vitals',
            'Technical SEO',
            'Lazy Loading',
            'Code Splitting'
          ],
          price: 'From €400',
          badge: 'Technical',
        },
        support: {
          title: 'Support & Maintenance',
          description: 'Updates, continuous improvements, and bug resolution. Keep your application up-to-date and running.',
          features: [
            'Bug Fixing',
            'Updates',
            'New Features',
            'Monthly Support'
          ],
          price: '€300/month',
          badge: 'Recurring',
        },
      },
    },

    projects: {
      title: 'My',
      titleHighlight: 'Projects',
      subtitle: 'Some of the most notable projects I have worked on.',
      
      viewProject: 'View Project',
      viewCode: 'View Code',
      viewDemo: 'View Demo',
      technologies: 'Technologies',
      
      status: {
        production: 'In Production',
        development: 'In Development',
        completed: 'Completed'
      },

      elixium: {
        category: 'Full Stack',
        title: 'Elixium Foods',
        description: 'Food delivery platform. Real-time ordering system, admin panel for restaurants, and delivery tracking.',
      },
      huvegrym: {
        category: 'Web Development',
        title: 'Huvegrym',
        description: 'Promotional and sales website for a music band. Custom design and focus on user experience.',
      },
      mvpApp: {
        category: 'Mobile & Web App',
        title: 'MVP App',
        description: 'Mobile and web application for freelance project management. Allows organizing tasks, clients, and income tracking.',
      }
    },

    skills: {
      title: 'My',
      titleHighlight: 'Skills',
      subtitle: 'Technologies and tools I work with daily',
      
      categories: {
        frontend: 'Frontend & Frameworks',
        backend: 'Backend & Databases',
        mobile: 'Mobile',
        database: 'Databases',
        cloud: 'Cloud & DevOps',
        tools: 'Tools & DevOps'
      }
    },

    experience: {
      title: 'My',
      titleHighlight: 'Journey',
      subtitle: 'From dual training to professional freelance, building quality digital products',
      
      current: 'Present',
      present: 'Present',
      
      freelance: {
        date: 'Jun 2025 - Present',
        status: 'Active Freelance 🚀',
        title: 'Full Stack Freelance Developer',
        company: 'Self-employed',
        description: 'Development of complete web and mobile solutions for clients. Specialized in modern architectures with Vue.js, React Native, .NET and AWS.',
        achievements: [
          'First complete MVP (Web + iOS + Backend + AWS)',
          'Client web portfolio (Huvegrym - In production)',
          'Complete project management from design to deployment'
        ]
      },
      
      golive: {
        date: 'Sep 2024 - Jun 2025',
        status: 'Completed ✓',
        title: 'Full Stack Developer',
        company: 'GOLIVE Services - Dual Training',
        description: 'Dual training at a technology consulting firm specialized in web and mobile development. Participation in real projects with clients from various sectors.',
        achievements: [
          'Development of customized solutions for clients',
          'Implementation of features with modern technologies',
          'Platform performance optimization'
        ],
        visitWebsite: 'Visit website',
        downloadLetter: 'Download Recommendation Letter'
      }
    },

    about: {
      title: 'Know My',
      titleHighlight: 'Story',
      subtitle: 'Developer passionate about creating solutions that make a difference',
      
      whoAmI: 'Who am I?',
      
      paragraphs: {
        intro: 'I\'m <strong>Gabriel</strong>, passionate about software development and technology. I love creating solutions that really work and help people. For me, programming is not just writing code, it\'s <span class="highlight-orange">solving problems creatively</span> and building experiences that make a difference.',
        
        passion: 'I\'m a <span class="highlight-purple">curious and self-taught</span> person. I\'m fascinated by learning new technologies and exploring how things work inside. Cybersecurity excites me as much as development because I believe <strong>creating secure technology is a responsibility</strong>, not an option.',
        
        mindset: 'I consider myself <span class="highlight-cyan">proactive and resourceful</span>. When I face a challenge, I don\'t give up until I find the solution. I enjoy working in teams, learning from other developers and sharing what I know. I firmly believe the best way to grow is by surrounding yourself with people who inspire you.',
        
        extra: 'Beyond code, I\'m passionate about keeping up with the latest tech trends, participating in hackathons and creating projects from crazy ideas. I\'m one of those people who sees an everyday problem and thinks <span class="highlight-pink">"I can automate this"</span>.'
      },
      
      quote: 'My goal is to create technology that not only works, but is secure, elegant and brings real value',
      
      values: {
        passion: {
          title: 'Passion for code',
          description: 'I enjoy every line of code, every bug I solve and every functionality that comes to life.'
        },
        growth: {
          title: 'Growth mindset',
          description: 'Always seeking to learn, improve and get out of my comfort zone to evolve as a professional.'
        },
        solutions: {
          title: 'Solution-oriented',
          description: 'I don\'t stay with the problem, I look for ways to solve it efficiently and elegantly.'
        }
      }
    },

    contact: {
      title: 'Let\'s Work',
      titleHighlight: 'Together',
      subtitle: 'Have a project in mind? Let\'s talk about how I can help you',
      
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        subject: 'Subject',
        subjectPlaceholder: 'How can I help you?',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        send: 'Send Message',
        sending: 'Sending...'
      },
      note: '* Prices are indicative and vary depending on project complexity',
      
      info: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        availability: 'Availability',
        availabilityStatus: 'Available for projects'
      },
      
      success: 'Message sent successfully! I\'ll reply soon.',
      error: 'Error sending message. Please try again.',
      
      validation: {
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Invalid email',
        messageRequired: 'Message is required'
      }
    },

    footer: {
      description: 'Full Stack freelance developer specialized in Vue.js, React Native, .NET and cloud architectures. Creating quality digital products.',
      
      links: {
        title: 'Links',
        home: 'Home',
        services: 'Services',
        projects: 'Projects',
        skills: 'Skills',
        experience: 'Experience',
        about: 'About',
        contact: 'Contact'
      },
      
      contact: {
        title: 'Contact',
        email: 'Email',
        phone: 'Phone',
        location: 'Zaragoza, Spain'
      },
      
      copyright: 'All rights reserved',
      madeWith: 'Made with',
      using: 'using',
      privacy: 'Privacy Policy'
    },

    common: {
      learnMore: 'Learn more',
      viewMore: 'View more',
      backToTop: 'Back to top',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      close: 'Close',
      open: 'Open',
      previous: 'Previous',
      next: 'Next',
      download: 'Download',
      share: 'Share'
    },

    cookies: {
      title: 'Cookies',
      message: 'We use cookies to improve your experience. By continuing to browse, you accept our',
      policy: 'privacy policy',
      accept: 'Accept',
      reject: 'Reject'
    },

    notFound: {
      code: '404',
      title: 'Page not found',
      description: 'Sorry, the page you\'re looking for doesn\'t exist or has been moved.',
      backHome: 'Back to home'
    },

    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated',
      back: 'Back',
      
      sections: {
        information: {
          title: 'Information we collect',
          content: 'This personal website does not actively collect personally identifiable information. However, like most websites, it may collect basic technical information such as:',
          items: {
            ip: 'IP address',
            browser: 'Browser type',
            pages: 'Pages visited',
            time: 'Time spent on site'
          }
        },
        cookies: {
          title: 'Use of cookies',
          content: 'We use essential cookies for the basic functioning of the website. You can manage your cookie preferences at any time.'
        },
        sharing: {
          title: 'Sharing information',
          content: 'We do not share, sell or rent your personal information to third parties. Technical data collected is used solely to improve user experience.'
        },
        links: {
          title: 'External links',
          content: 'This site may contain links to external websites. We are not responsible for the privacy practices of these sites.'
        },
        contact: {
          title: 'Contact',
          content: 'If you have questions about this privacy policy, you can contact me at:'
        }
      }
    }
  }
};

export function useI18n() {
  // Cambiar idioma
  const setLocale = (locale) => {
    if (translations[locale]) {
      currentLocale.value = locale;
      localStorage.setItem('locale', locale);
    }
  };

  // Obtener traducción
  const t = (key, args) => {
    const keys = key.split('.');
    let value = translations[currentLocale.value];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Fallback a la key si no existe
      }
    }
    
    // Handle placeholders {0}, {1}, etc.
    if (typeof value === 'string' && Array.isArray(args)) {
      return value.replace(/\{(\d+)\}/g, (match, index) => {
        return args[index] !== undefined ? args[index] : match;
      });
    }

    return value || key;
  };

  // Idioma actual
  const locale = computed(() => currentLocale.value);

  return {
    t,
    locale,
    setLocale
  };
}