<!-- ProjectsSection.vue -->
<template>
    <section id="proyectos" class="py-24 relative overflow-hidden">
      <!-- Efectos de fondo -->
      <div class="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-3xl z-0"></div>
      <div class="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-3xl z-0"></div>
  
      <div class="container mx-auto px-6 relative">
        <!-- Encabezado de sección -->
        <div class="text-center mb-16 relative">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl sm:text-9xl font-bold opacity-5 text-white w-full text-center z-0">
            PROYECTOS
          </div>
          <h2 class="text-3xl md:text-4xl font-bold relative z-10 inline-block mb-4">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Mis Proyectos
            </span>
          </h2>
          <div class="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p class="text-lg text-zinc-400 max-w-xl mx-auto">
            Una selección de proyectos en los que he trabajado, demostrando mis habilidades y conocimientos en desarrollo web.
          </p>
        </div>
  
        <!-- Cartas de proyectos -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            v-for="project in projects" 
            :key="project.id" 
            :project="project" 
            class="reveal-card" 
          />
        </div>
  
        <!-- Botón para ver más proyectos -->
        <div class="flex justify-center mt-16">
          <a href="https://github.com/GabriLPDA22" target="_blank"
            class="group relative overflow-hidden rounded-full bg-zinc-900 border border-zinc-800 px-6 py-3 text-zinc-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300">
            <span class="relative flex items-center gap-2">
              Ver más en GitHub
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { projects } from '@/data/projects';
  import ProjectCard from '@/components/ui/ProjectCard.vue';
  
  export default {
    name: 'ProjectsSection',
    components: {
      ProjectCard
    },
    data() {
      return {
        projects
      };
    },
    mounted() {
      // Configurar las animaciones de revelación para las tarjetas
      this.setupRevealAnimations();
    },
    methods: {
      setupRevealAnimations() {
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        };
  
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);
  
        // Observar todas las tarjetas con clase reveal-card
        document.querySelectorAll('.reveal-card').forEach(card => {
          observer.observe(card);
        });
      }
    }
  };
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
  </style>