<template>
  <section id="proyectos" class="py-24 relative overflow-hidden">
    <!-- Efectos de fondo -->
    <div class="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-3xl z-0">
    </div>
    <div class="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-3xl z-0">
    </div>

    <div class="container mx-auto px-6 relative">
      <!-- Encabezado de sección -->
      <div class="text-center mb-16 relative">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl sm:text-9xl font-bold opacity-5 text-white w-full text-center z-0">
          PROYECTOS
        </div>
        <h2 class="text-3xl md:text-4xl font-bold relative z-10 inline-block mb-4">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Mis Proyectos
          </span>
        </h2>
        <div class="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
        <p class="text-lg text-zinc-400 max-w-xl mx-auto">
          Una selección de proyectos en los que he trabajado, demostrando mis habilidades y conocimientos en desarrollo
          web.
        </p>
      </div>

      <!-- Destacado - Proyecto con galería (opcional) -->
      <div v-if="hasProjectWithGallery" class="mb-16 fade-in-element visible">
        <div class="glass-card p-4 rounded-xl overflow-hidden gradient-border">
          <div class="flex items-center gap-3 mb-4 px-2">
            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400">
              <font-awesome-icon :icon="['fas', 'star']" />
            </div>
            <h3 class="text-lg font-semibold text-white">¡Nuevo! Explora la galería de imágenes</h3>
          </div>

          <div class="relative rounded-lg overflow-hidden">
            <router-link :to="{ name: 'ProjectDetail', params: { id: featuredProject.id } }">
              <div class="relative aspect-video md:aspect-[21/9] overflow-hidden">
                <!-- Imágenes en carrusel automático -->
                <div class="absolute inset-0 flex">
                  <div class="gallery-slider">
                    <!-- La imagen principal y las imágenes de la galería en bucle -->
                    <img :src="featuredProject.image" :alt="featuredProject.title" class="gallery-image" />
                    <img v-for="(img, index) in featuredProject.gallery" :key="index" :src="img.src" :alt="img.alt"
                      class="gallery-image" />
                  </div>
                </div>

                <!-- Overlay con degradado y texto -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
                  <div class="p-6 md:p-10 max-w-2xl">
                    <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">{{ featuredProject.title }}</h3>
                    <p class="text-zinc-300 mb-6 text-sm md:text-base">{{ featuredProject.description }}</p>

                    <div class="flex items-center gap-3 mb-3">
                      <div class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <font-awesome-icon :icon="['fas', 'images']" class="text-indigo-400" />
                      </div>
                      <div class="text-white">
                        <span class="font-medium">{{ featuredProject.gallery.length + 1 }}</span> imágenes disponibles
                      </div>
                    </div>

                    <div
                      class="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-medium transition-colors duration-300">
                      Ver galería completa
                      <font-awesome-icon :icon="['fas', 'arrow-right']" />
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Cartas de proyectos -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" class="reveal-card" />
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
  computed: {
    hasProjectWithGallery() {
      return this.projects.some(project => project.gallery && project.gallery.length > 0);
    },
    featuredProject() {
      return this.projects.find(project => project.gallery && project.gallery.length > 0) || null;
    }
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

/* Aplicar retrasos adicionales para proyectos subsiguientes */
.reveal-card:nth-child(4) {
  transition-delay: 0.7s;
}

.reveal-card:nth-child(5) {
  transition-delay: 0.9s;
}

.reveal-card:nth-child(6) {
  transition-delay: 1.1s;
}

/* Animación del carrusel de galería */
.gallery-slider {
  display: flex;
  animation: slide 20s linear infinite;
  width: max-content;
}

.gallery-image {
  width: 100vw;
  max-width: 1200px;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-100% / (var(--image-count) + 1)));
  }
}

/* Calcular la cantidad de imágenes para la animación */
.gallery-slider {
  --image-count: 5;
  /* Ajustar según la cantidad de imágenes */
}
</style>