import { ref, computed } from "vue";

// Estado global del idioma
const currentLocale = ref(localStorage.getItem("locale") || "es");

// Traducciones
const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      projects: "Proyectos",
      skills: "Skills",
      experience: "Experiencia",
      about: "Sobre mí",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Desarrollador Full Stack Freelance",
      description:
        "Especializado en Vue.js, React Native, .NET y arquitecturas cloud. Creo productos digitales de calidad que resuelven problemas reales.",
      cta: "Ver Proyectos",
      contact: "Contactar",
    },
    services: {
      title: "Mis",
      titleHighlight: "Servicios",
      subtitle:
        "Soluciones profesionales para llevar tu negocio al siguiente nivel",
      web: {
        title: "Desarrollo Web",
        description:
          "Aplicaciones web modernas con Vue.js, responsive y optimizadas para SEO",
        features: ["Diseño responsive", "SEO optimizado", "Rendimiento alto"],
      },
      mobile: {
        title: "Apps Móviles",
        description:
          "Desarrollo de aplicaciones iOS/Android nativas con React Native",
        features: ["iOS & Android", "Experiencia nativa", "Offline-first"],
      },
      backend: {
        title: "Backend & APIs",
        description:
          "APIs REST escalables con .NET, PostgreSQL y arquitectura cloud",
        features: ["APIs REST", "Base de datos", "Cloud AWS"],
      },
    },
    projects: {
      title: "Mis",
      titleHighlight: "Proyectos",
      subtitle: "Algunos de los proyectos en los que he trabajado",
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
      technologies: "Tecnologías",
    },
    skills: {
      title: "Mis",
      titleHighlight: "Habilidades",
      subtitle: "Tecnologías y herramientas con las que trabajo",
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Mobile",
      tools: "Herramientas",
    },
    experience: {
      title: "Mi",
      titleHighlight: "Trayectoria",
      subtitle: "Desde formación dual hasta freelance profesional",
      freelance: {
        title: "Desarrollador Full Stack Freelance",
        company: "Trabajo Autónomo",
        description:
          "Desarrollo de soluciones web y mobile completas para clientes. Especializado en arquitecturas modernas con Vue.js, React Native, .NET y AWS.",
        status: "Freelance Activo 🚀",
        achievements: [
          "Primer MVP completo (Web + iOS + Backend + AWS)",
          "Portfolio web para cliente (Huvegrym - En producción)",
          "Gestión completa de proyectos desde diseño hasta deploy",
        ],
      },
      golive: {
        title: "Desarrollador Full Stack",
        company: "GOLIVE Services - Formación Dual",
        description:
          "Formación dual en consultora tecnológica especializada en desarrollo web y mobile. Participación en proyectos reales con clientes de diversos sectores.",
        status: "Completado ✓",
        achievements: [
          "Desarrollo de soluciones personalizadas para clientes",
          "Implementación de funcionalidades con tecnologías modernas",
          "Optimización del rendimiento de plataformas",
        ],
        visitWebsite: "Visitar sitio web",
        downloadLetter: "Descargar Carta de Recomendación",
      },
    },
    about: {
      title: "Conoce Mi",
      titleHighlight: "Historia",
      subtitle:
        "Desarrollador apasionado por crear soluciones que marquen la diferencia",
      whoAmI: "¿Quién soy?",
      intro:
        'Soy <strong>Gabriel</strong>, un apasionado del desarrollo de software y la tecnología. Me encanta crear soluciones que realmente funcionen y ayuden a las personas. Para mí, programar no es solo escribir código, es <span class="highlight-orange">resolver problemas de forma creativa</span> y construir experiencias que marquen la diferencia.',
      passion:
        'Soy una persona <span class="highlight-purple">curiosa y autodidacta</span>. Me fascina aprender nuevas tecnologías y explorar cómo funcionan las cosas por dentro. La ciberseguridad me apasiona tanto como el desarrollo porque creo que <strong>crear tecnología segura es una responsabilidad</strong>, no una opción.',
      mindset:
        'Me considero alguien <span class="highlight-cyan">proactivo y resolutivo</span>. Cuando me enfrento a un desafío, no me rindo hasta encontrar la solución. Me gusta trabajar en equipo, aprender de otros desarrolladores y compartir lo que sé.',
      extra:
        "Más allá del código, me apasiona estar al día con las últimas tendencias tech, participar en hackathones y crear proyectos que surgen de ideas locas.",
      quote:
        '"Mi objetivo es crear tecnología que no solo funcione, sino que sea segura, elegante y aporte valor real"',
      values: {
        passion: {
          title: "Pasión por el código",
          description:
            "Disfruto cada línea de código, cada bug que soluciono y cada funcionalidad que cobra vida.",
        },
        growth: {
          title: "Mentalidad de crecimiento",
          description:
            "Siempre buscando aprender, mejorar y salir de mi zona de confort para evolucionar como profesional.",
        },
        solutions: {
          title: "Orientado a soluciones",
          description:
            "No me quedo en el problema, busco la manera de resolverlo de forma eficiente y elegante.",
        },
      },
    },
    contact: {
      title: "Trabajemos",
      titleHighlight: "Juntos",
      subtitle: "¿Tienes un proyecto en mente? Hablemos",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado! Te responderé pronto.",
      error: "Error al enviar. Inténtalo de nuevo.",
    },
    footer: {
      description:
        "Desarrollador Full Stack freelance especializado en Vue.js, React Native, .NET y arquitecturas cloud. Creando productos digitales de calidad.",
      quickLinks: "Enlaces",
      contact: "Contacto",
      location: "Zaragoza, España",
      copyright: "Todos los derechos reservados",
      madeWith: "Hecho con",
      using: "usando",
      privacy: "Política de Privacidad",
    },
    common: {
      learnMore: "Saber más",
      viewMore: "Ver más",
      backToTop: "Volver arriba",
      loading: "Cargando...",
      error: "Error",
      success: "Éxito",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      about: "About",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Full Stack Freelance Developer",
      description:
        "Specialized in Vue.js, React Native, .NET and cloud architectures. I create quality digital products that solve real problems.",
      cta: "View Projects",
      contact: "Contact Me",
    },
    services: {
      title: "My",
      titleHighlight: "Services",
      subtitle:
        "Professional solutions to take your business to the next level",
      web: {
        title: "Web Development",
        description:
          "Modern web applications with Vue.js, responsive and SEO optimized",
        features: ["Responsive design", "SEO optimized", "High performance"],
      },
      mobile: {
        title: "Mobile Apps",
        description: "Native iOS/Android app development with React Native",
        features: ["iOS & Android", "Native experience", "Offline-first"],
      },
      backend: {
        title: "Backend & APIs",
        description:
          "Scalable REST APIs with .NET, PostgreSQL and cloud architecture",
        features: ["REST APIs", "Database", "AWS Cloud"],
      },
    },
    projects: {
      title: "My",
      titleHighlight: "Projects",
      subtitle: "Some of the projects I've worked on",
      viewProject: "View Project",
      viewCode: "View Code",
      technologies: "Technologies",
    },
    skills: {
      title: "My",
      titleHighlight: "Skills",
      subtitle: "Technologies and tools I work with",
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Mobile",
      tools: "Tools",
    },
    experience: {
      title: "My",
      titleHighlight: "Journey",
      subtitle: "From dual training to professional freelance",
      freelance: {
        title: "Full Stack Freelance Developer",
        company: "Self-employed",
        description:
          "Development of complete web and mobile solutions for clients. Specialized in modern architectures with Vue.js, React Native, .NET and AWS.",
        status: "Active Freelance 🚀",
        achievements: [
          "First complete MVP (Web + iOS + Backend + AWS)",
          "Client web portfolio (Huvegrym - In production)",
          "Complete project management from design to deployment",
        ],
      },
      golive: {
        title: "Full Stack Developer",
        company: "GOLIVE Services - Dual Training",
        description:
          "Dual training in a technology consulting firm specialized in web and mobile development. Participation in real projects with clients from various sectors.",
        status: "Completed ✓",
        achievements: [
          "Development of customized solutions for clients",
          "Implementation of functionalities with modern technologies",
          "Platform performance optimization",
        ],
        visitWebsite: "Visit website",
        downloadLetter: "Download Recommendation Letter",
      },
    },
    about: {
      title: "Know My",
      titleHighlight: "Story",
      subtitle:
        "Developer passionate about creating solutions that make a difference",
      whoAmI: "Who am I?",
      intro:
        "I'm <strong>Gabriel</strong>, passionate about software development and technology. I love creating solutions that really work and help people. For me, programming is not just writing code, it's <span class=\"highlight-orange\">solving problems creatively</span> and building experiences that make a difference.",
      passion:
        "I'm a <span class=\"highlight-purple\">curious and self-taught</span> person. I'm fascinated by learning new technologies and exploring how things work inside. Cybersecurity excites me as much as development because I believe that <strong>creating secure technology is a responsibility</strong>, not an option.",
      mindset:
        'I consider myself <span class="highlight-cyan">proactive and resourceful</span>. When I face a challenge, I don\'t give up until I find the solution. I enjoy working in teams, learning from other developers and sharing what I know.',
      extra:
        "Beyond code, I'm passionate about keeping up with the latest tech trends, participating in hackathons and creating projects that arise from crazy ideas.",
      quote:
        '"My goal is to create technology that not only works, but is secure, elegant and brings real value"',
      values: {
        passion: {
          title: "Passion for code",
          description:
            "I enjoy every line of code, every bug I solve and every functionality that comes to life.",
        },
        growth: {
          title: "Growth mindset",
          description:
            "Always seeking to learn, improve and get out of my comfort zone to evolve as a professional.",
        },
        solutions: {
          title: "Solution-oriented",
          description:
            "I don't stay with the problem, I look for ways to solve it efficiently and elegantly.",
        },
      },
    },
    contact: {
      title: "Let's Work",
      titleHighlight: "Together",
      subtitle: "Have a project in mind? Let's talk",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent! I'll reply soon.",
      error: "Error sending. Try again.",
    },
    footer: {
      description:
        "Full Stack freelance developer specialized in Vue.js, React Native, .NET and cloud architectures. Creating quality digital products.",
      quickLinks: "Links",
      contact: "Contact",
      location: "Zaragoza, Spain",
      copyright: "All rights reserved",
      madeWith: "Made with",
      using: "using",
      privacy: "Privacy Policy",
    },
    common: {
      learnMore: "Learn more",
      viewMore: "View more",
      backToTop: "Back to top",
      loading: "Loading...",
      error: "Error",
      success: "Success",
    },
  },
};

export function useI18n() {
  // Cambiar idioma
  const setLocale = (locale) => {
    if (translations[locale]) {
      currentLocale.value = locale;
      localStorage.setItem("locale", locale);
    }
  };

  // Obtener traducción
  const t = (key) => {
    const keys = key.split(".");
    let value = translations[currentLocale.value];

    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k];
      } else {
        return key; // Fallback a la key si no existe
      }
    }

    return value || key;
  };

  // Idioma actual
  const locale = computed(() => currentLocale.value);

  return {
    t,
    locale,
    setLocale,
  };
}
