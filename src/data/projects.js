// Datos de proyectos
export const projects = [
  {
    id: 1,
    title: "Sistema Cine",
    description: "Gestión de un sistema de cine con visualización de películas y horarios. Frontend en HTML, SCSS y JavaScript. API en C#, con Swagger.",
    image: "/img/Cine.png",
    gradient: "from-blue-600 to-indigo-600",
    category: "web",
    technologies: [
      { name: "HTML", icon: ["fab", "html5"], color: "bg-orange-500/20 text-orange-400" },
      { name: "SCSS", icon: ["fab", "sass"], color: "bg-pink-500/20 text-pink-400" },
      { name: "JavaScript", icon: ["fab", "js"], color: "bg-yellow-500/20 text-yellow-400" },
      { name: "C#", icon: ["fab", "microsoft"], color: "bg-purple-600/20 text-purple-400" },
      { name: "Docker", icon: ["fab", "docker"], color: "bg-blue-600/20 text-blue-400" }
    ],
    links: [
      { label: "Ver frontend", url: "https://github.com/GabriLPDA22/Cine-front", icon: ["fas", "code"] },
      { label: "Ver backend", url: "https://github.com/GabriLPDA22/Cine-Back", icon: ["fas", "server"] }
    ]
  },
  {
    id: 2,
    title: "Elixium Foods",
    description: "Plataforma para restaurante con reservas online, menú interactivo y sistema de pedidos. Desarrollado con tecnologías modernas para ofrecer una experiencia fluida al usuario.",
    image: "/img/Elixium_Foods.png",
    // Añadir galería de imágenes adicionales
    gallery: [
      { src: "/img/Menu-Elixium.png", alt: "Menú interactivo de Elixium Foods" },
      { src: "/img/Reseva-Elixium.png", alt: "Sistema de reservas" },
      { src: "/img/Select-Table.png", alt: "Selección de mesa" },
      { src: "/img/Checkout.png", alt: "Proceso de pago" }
    ],
    gradient: "from-purple-500 to-indigo-600",
    category: "app",
    technologies: [
      { name: "Vue.js", icon: ["fab", "vuejs"], color: "bg-green-500/20 text-green-400" },
      { name: "TypeScript", icon: ["fab", "js"], color: "bg-blue-600/20 text-blue-400" },
      { name: "SCSS", icon: ["fab", "sass"], color: "bg-pink-500/20 text-pink-400" },
      { name: "C#", icon: ["fab", "microsoft"], color: "bg-purple-600/20 text-purple-400" }
    ],
    links: [
      { label: "Ver frontend", url: "https://github.com/GabriLPDA22/Restaurante-Front", icon: ["fas", "code"] },
      { label: "Ver backend", url: "https://github.com/GabriLPDA22/Restaurante-Back", icon: ["fas", "server"] }
    ]
  },
  {
    id: 3,
    title: "BurgerVibes",
    description: "Aplicación para gestión de pedidos y menús en un restaurante. Base de datos en SQL (Oracle), frontend en HTML/CSS/JS y backend en Java.",
    image: "/img/BurerVibes.jpg",
    gradient: "from-orange-500 to-red-500",
    category: "app",
    technologies: [
      { name: "HTML", icon: ["fab", "html5"], color: "bg-orange-500/20 text-orange-400" },
      { name: "CSS", icon: ["fab", "css3"], color: "bg-blue-500/20 text-blue-400" },
      { name: "JavaScript", icon: ["fab", "js"], color: "bg-yellow-500/20 text-yellow-400" },
      { name: "Java", icon: ["fab", "java"], color: "bg-red-600/20 text-red-400" },
      { name: "Oracle", icon: ["fas", "database"], color: "bg-red-700/20 text-red-400" }
    ],
    links: [
      { label: "Ver frontend", url: "https://github.com/GabriLPDA22/BurgerVibesFront", icon: ["fas", "code"] },
      { label: "Ver backend", url: "https://github.com/GabriLPDA22/BurgerVibesBack", icon: ["fas", "server"] }
    ]
  },
  {
    id: 4,
    title: "CoreEvo Gym",
    description: "Mi primer proyecto web para un gimnasio. Sitio web responsivo con HTML, CSS y JavaScript que ofrece una experiencia interactiva y visualmente atractiva.",
    image: "/img/Banner.png",
    gradient: "from-green-500 to-emerald-600",
    category: "web",
    technologies: [
      { name: "HTML", icon: ["fab", "html5"], color: "bg-orange-500/20 text-orange-400" },
      { name: "CSS", icon: ["fab", "css3"], color: "bg-blue-500/20 text-blue-400" },
      { name: "JavaScript", icon: ["fab", "js"], color: "bg-yellow-500/20 text-yellow-400" }
    ],
    links: [
      { label: "Ver proyecto", url: "https://github.com/GabriLPDA22/CoreEvo", icon: ["fas", "globe"] }
    ]
  },
  {
    id: 5,
    title: "Portfolio Personal",
    description: "Mi portafolio web personal desarrollado con Vue.js y TailwindCSS, con secciones para mostrar mis proyectos, experiencia y habilidades.",
    image: "/img/portfolio.jpg",
    gradient: "from-indigo-600 to-purple-600",
    category: "web",
    technologies: [
      { name: "Vue.js", icon: ["fab", "vuejs"], color: "bg-green-500/20 text-green-400" },
      { name: "TailwindCSS", icon: ["fab", "css3-alt"], color: "bg-blue-500/20 text-blue-400" },
      { name: "JavaScript", icon: ["fab", "js"], color: "bg-yellow-500/20 text-yellow-400" }
    ],
    links: [
      { label: "Ver código", url: "https://github.com/GabriLPDA22/Mi-Portafolio", icon: ["fab", "github"] },
      // { label: "Ver demo", url: "https://gabrielcodes.dev", icon: ["fas", "eye"] }
    ]
  }
];