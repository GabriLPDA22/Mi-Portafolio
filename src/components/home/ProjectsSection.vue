<!-- Modificación al ProjectsSection.vue -->
<template>
  <section id="proyectos" class="py-16 sm:py-24 relative overflow-hidden">
    <!-- Efectos de fondo -->
    <div
      class="absolute -top-[300px] -right-[300px] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-indigo-600/5 blur-3xl z-0">
    </div>
    <div
      class="absolute -bottom-[300px] -left-[300px] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-purple-600/5 blur-3xl z-0">
    </div>

    <div class="container mx-auto px-4 sm:px-6 relative">
      <!-- Encabezado de sección -->
      <div class="text-center mb-10 sm:mb-16 relative">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-8xl md:text-9xl font-bold opacity-5 text-white w-full text-center z-0">
          PROYECTOS
        </div>
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold relative z-10 inline-block mb-3 sm:mb-4">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Mis Proyectos
          </span>
        </h2>
        <div
          class="h-1.5 w-16 sm:w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-4 sm:mb-6">
        </div>
        <p class="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto px-4">
          Una selección de proyectos en los que he trabajado, demostrando mis habilidades y conocimientos en desarrollo
          web.
        </p>
      </div>

      <!-- NUEVA SECCIÓN: Proyecto McPoints destacado -->
      <div class="mb-16 reveal-element" data-delay="200">
        <McPointsCard />
      </div>

      <!-- Proyectos destacados al estilo Apple -->
      <ProjectShowcase :featuredProjects="highlightedProjects" class="mb-16" />

      <!-- Título para otros proyectos -->
      <div class="text-center mb-10">
        <h3 class="text-xl sm:text-2xl font-bold text-white inline-block relative">
          Otros Proyectos
          <div
            class="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500 to-indigo-500/0">
          </div>
        </h3>
      </div>

      <!-- Cartas de proyectos con renderizado condicional -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        <ProjectCard v-for="project in visibleProjects" :key="project.id" :project="project" class="reveal-card"
          @intersect="onCardIntersect" />
      </div>

      <!-- Botón para cargar más proyectos -->
      <div v-if="hasMoreProjects" class="flex justify-center mt-10 sm:mt-16">
        <button @click="loadMoreProjects"
          class="group relative overflow-hidden rounded-full bg-zinc-900 border border-zinc-800 px-4 sm:px-6 py-2 sm:py-3 text-zinc-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300">
          <span class="relative flex items-center gap-2">
            Cargar más proyectos
            <svg class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
      </div>

      <!-- Enlace a GitHub -->
      <div class="flex justify-center mt-6">
        <a href="https://github.com/GabriLPDA22" target="_blank"
          class="group relative overflow-hidden rounded-full bg-zinc-900 border border-zinc-800 px-4 sm:px-6 py-2 sm:py-3 text-zinc-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300">
          <span class="relative flex items-center gap-2">
            Ver más en GitHub
            <svg class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard.vue';
import ProjectShowcase from '@/components/ui/ProjectShowcase.vue';
import McPointsCard from '@/components/ui/McPointsCard.vue'; // Importar el nuevo componente
import { useIntersectionObserver } from '@vueuse/core';

// Estado reactivo con Composition API
const router = useRouter();
const projectsPerPage = ref(3);
const currentPage = ref(1);
const allProjects = ref(projects);
const observedCards = ref(new Set());

// Definir proyectos destacados
const highlightedProjects = computed(() => {
  return [
    {
      id: 2,
      title: "Restaurante Elixium Foods",
      subtitle: "Proyecto Completo",
      description: "Plataforma completa para gestión de restaurantes que ofrece reservas online, menú interactivo y sistema de pedidos desarrollada con Vue.js, TypeScript y C#.",
      image: "/img/Elixium_Foods.webp",
      secondaryImage: "/img/Menu-Elixium.webp",
      technologies: ["Vue.js", "TypeScript", "SCSS", "C#"],
      githubUrl: "https://github.com/GabriLPDA22/Restaurante-Front",
      demoUrl: "https://restaurante-elixium.netlify.app",
      color: "indigo"
    },
    {
      id: 6,
      title: "ELIXIUM FOODS Delivery",
      subtitle: "TFG en Desarrollo",
      description: "Una reimaginación moderna de plataformas de entrega de comida tipo UberEats. Este proyecto, que forma parte de mi TFG, se encuentra actualmente en desarrollo activo.",
      image: "/img/home-screen.webp",
      secondaryImage: "/img/categories-screen.webp",
      technologies: ["Vue.js", "SCSS", "Tailwind", "Astro"],
      githubUrl: "https://github.com/GabriLPDA22/ELIXIUM-FOODS",
      inDevelopment: true,
      progress: 40,
      color: "purple"
    }
  ];
});

// Computados para mejorar rendimiento
const visibleProjects = computed(() => {
  // Excluir los proyectos destacados
  // Utilizamos IDs específicos en lugar de IDs numéricos que podrían coincidir
  const highlightedTitles = highlightedProjects.value.map(p => p.title);
  const filteredProjects = allProjects.value.filter(project =>
    !highlightedTitles.includes(project.title)
  );
  console.log("Proyectos filtrados:", filteredProjects);
  return filteredProjects.slice(0, currentPage.value * projectsPerPage.value);
});

const hasMoreProjects = computed(() => {
  // Ajustar contando solo los proyectos filtrados
  const highlightedTitles = highlightedProjects.value.map(p => p.title);
  const filteredTotal = allProjects.value.filter(project =>
    !highlightedTitles.includes(project.title)
  ).length;
  return visibleProjects.value.length < filteredTotal;
});

// Métodos con Composition API
const loadMoreProjects = () => {
  if (hasMoreProjects.value) {
    currentPage.value++;

    // Evento de analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'load_more_projects', {
        'event_category': 'interaction',
        'event_label': `Página ${currentPage.value}`,
        'value': currentPage.value
      });
    }
  }
};

// Observador de intersección para animaciones
const onCardIntersect = (element, isIntersecting) => {
  if (isIntersecting && !observedCards.value.has(element)) {
    element.classList.add('revealed');
    observedCards.value.add(element);
  }
};

// Ciclo de vida del componente
onMounted(() => {
  // Registrar vista de la sección de proyectos
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_project_section', {
      'event_category': 'page_view',
      'event_label': 'Proyectos'
    });
  }

  // Cargar los proyectos de projects.js y verificar que el Sistema Cine esté presente
  console.log("Proyectos cargados:", allProjects.value);

  // Verificar que el proyecto "Sistema Cine" esté entre los proyectos cargados
  const cinemaProject = allProjects.value.find(p => p.title === "Sistema Cine");
  console.log("Proyecto Sistema Cine:", cinemaProject);

  // Verificar los proyectos filtrados que se mostrarán
  const highlightedTitles = highlightedProjects.value.map(p => p.title);
  const filteredProjects = allProjects.value.filter(project =>
    !highlightedTitles.includes(project.title)
  );
  console.log("Proyectos que se mostrarán:", filteredProjects);
});

// Limpiar efectos al desmontar
watch(() => router.currentRoute.value, (newRoute) => {
  if (newRoute.hash === '#proyectos') {
    // Reiniciar el contador cuando se navega específicamente a esta sección
    currentPage.value = 1;
  }
});
</script>

<style scoped>
.reveal-card {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal-card.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Aplicar retraso a las tarjetas para que aparezcan secuencialmente */
.reveal-card:nth-child(1) {
  transition-delay: 0.1s;
}

.reveal-card:nth-child(2) {
  transition-delay: 0.3s;
}

.reveal-card:nth-child(3) {
  transition-delay: 0.5s;
}

/* Utilidad para limitar líneas de texto */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
