// projects.js
export const projects = [
    {
      id: 1,
      title: "Sistema Cine",
      description: "Gestión de un sistema de cine con visualización de películas y horarios. Frontend en HTML, SCSS y JavaScript. API en C#, con Swagger.",
      image: "/img/Cine.png",
      gradient: "from-blue-600 to-indigo-600",
      technologies: [
        { name: "HTML", icon: "html5", color: "bg-orange-500 text-white" },
        { name: "SCSS", icon: "sass", color: "bg-pink-500 text-white" },
        { name: "JavaScript", icon: "js", color: "bg-yellow-500 text-black" },
        { name: "C#", icon: "microsoft", color: "bg-purple-600 text-white" },
        { name: "Docker", icon: "docker", color: "bg-blue-600 text-white" }
      ],
      links: [
        { text: "Ver frontend", url: "https://github.com/GabriLPDA22/Cine-front", icon: "code" },
        { text: "Ver backend", url: "https://github.com/GabriLPDA22/Cine-Back", icon: "server" }
      ]
    },
    {
      id: 2,
      title: "Elixium Foods",
      description: "Plataforma para restaurante con reservas online, menú interactivo y sistema de pedidos. Desarrollado con tecnologías modernas para ofrecer una experiencia fluida al usuario.",
      image: "/img/Elixium_Foods.png",
      gradient: "from-purple-500 to-indigo-600",
      technologies: [
        { name: "Vue.js", icon: "vuejs", color: "bg-green-500 text-white" },
        { name: "TypeScript", icon: "typescript", color: "bg-blue-600 text-white" },
        { name: "SCSS", icon: "sass", color: "bg-pink-500 text-white" },
        { name: "C#", icon: "microsoft", color: "bg-purple-600 text-white" }
      ],
      links: [
        { text: "Ver proyecto", url: "https://github.com/GabriLPDA22/Restaurante-Front", icon: "code" }
      ]
    },
    {
      id: 3,
      title: "BurgerVibes",
      description: "Aplicación para gestión de pedidos y menús en un restaurante. Base de datos en SQL (Oracle), frontend en HTML/CSS/JS y backend en Java.",
      image: "/img/BurerVibes.jpg",
      gradient: "from-orange-500 to-red-500",
      technologies: [
        { name: "HTML", icon: "html5", color: "bg-orange-500 text-white" },
        { name: "CSS", icon: "css3", color: "bg-blue-500 text-white" },
        { name: "JavaScript", icon: "js", color: "bg-yellow-500 text-black" },
        { name: "Java", icon: "java", color: "bg-red-600 text-white" },
        { name: "Oracle", icon: "database", color: "bg-red-700 text-white" }
      ],
      links: [
        { text: "Ver frontend", url: "https://github.com/GabriLPDA22/BurgerVibesFront", icon: "code" },
        { text: "Ver backend", url: "https://github.com/GabriLPDA22/BurgerVibesBack", icon: "server" }
      ]
    },
    {
      id: 4,
      title: "CoreEvo Gym",
      description: "Mi primer proyecto web para un gimnasio. Sitio web responsivo con HTML, CSS y JavaScript que ofrece una experiencia interactiva y visualmente atractiva.",
      image: "/img/Banner.png",
      gradient: "from-green-500 to-emerald-600",
      technologies: [
        { name: "HTML", icon: "html5", color: "bg-orange-500 text-white" },
        { name: "CSS", icon: "css3", color: "bg-blue-500 text-white" },
        { name: "JavaScript", icon: "js", color: "bg-yellow-500 text-black" }
      ],
      links: [
        { text: "Ver proyecto", url: "https://github.com/GabriLPDA22/CoreEvo", icon: "globe" }
      ]
    }
  ];