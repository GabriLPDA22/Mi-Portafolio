<template>
  <section id="proyectos" class="py-16 sm:py-24 relative overflow-hidden">
    <!-- Efectos de fondo -->
    <div class="absolute -top-[300px] -right-[300px] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-indigo-600/5 blur-3xl z-0"></div>
    <div class="absolute -bottom-[300px] -left-[300px] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-purple-600/5 blur-3xl z-0"></div>

    <div class="container mx-auto px-4 sm:px-6 relative">
      <!-- Encabezado de sección -->
      <div class="text-center mb-10 sm:mb-16 relative">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-8xl md:text-9xl font-bold opacity-5 text-white w-full text-center z-0">
          PROYECTOS
        </div>
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold relative z-10 inline-block mb-3 sm:mb-4">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Mis Proyectos
          </span>
        </h2>
        <div class="h-1.5 w-16 sm:w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
        <p class="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto px-4">
          Una selección de proyectos en los que he trabajado, demostrando mis habilidades y conocimientos en desarrollo web.
        </p>
      </div>

      <!-- Destacado - Proyecto con galería (optimizado para rendimiento) -->
      <div v-if="hasProjectWithGallery" class="mb-8 sm:mb-16 fade-in-element visible">
        <div class="glass-card p-3 sm:p-4 rounded-xl overflow-hidden gradient-border">
          <div class="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 px-1 sm:px-2">
            <div class="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-500/20 text-indigo-400">
              <font-awesome-icon :icon="['fas', 'star']" class="text-xs sm:text-sm" />
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-white">¡Nuevo! Explora la galería de imágenes</h3>
          </div>
          
          <div class="relative rounded-lg overflow-hidden">
            <router-link :to="{ name: 'ProjectDetail', params: { id: featuredProject.id } }">
              <div class="relative aspect-video overflow-hidden">
                <!-- Imágenes en carrusel optimizado -->
                <div class="absolute inset-0 flex">
                  <div class="gallery-slider-mobile sm:gallery-slider">
                    <!-- Imagen principal optimizada con carga perezosa -->
                    <img 
                      :src="featuredProject.image" 
                      :alt="featuredProject.title" 
                      class="gallery-image" 
                      loading="lazy" 
                    />
                    <!-- Imágenes de galería con carga perezosa -->
                    <img 
                      v-for="(img, index) in limitedGalleryImages" 
                      :key="index"
                      :src="img.src" 
                      :alt="img.alt" 
                      class="gallery-image" 
                      loading="lazy"
                    />
                  </div>
                </div>
                
                <!-- Overlay con degradado y texto - Optimizado para móvil -->
                <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
                  <div class="p-4 sm:p-6 md:p-10 max-w-full sm:max-w-lg md:max-w-2xl">
                    <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">{{ featuredProject.title }}</h3>
                    <p class="text-zinc-300 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base line-clamp-2 sm:line-clamp-3">{{ featuredProject.description }}</p>
                    
                    <div class="flex items-center gap-2 sm:gap-3 mb-3">
                      <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <font-awesome-icon :icon="['fas', 'images']" class="text-indigo-400 text-sm sm:text-base" />
                      </div>
                      <div class="text-white text-sm sm:text-base">
                        <span class="font-medium">{{ featuredProject.gallery.length + 1 }}</span> imágenes disponibles
                      </div>
                    </div>
                    
                    <div class="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white text-sm font-medium transition-colors duration-300">
                      Ver galería completa
                      <font-awesome-icon :icon="['fas', 'arrow-right']" class="text-xs sm:text-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Cartas de proyectos con renderizado condicional -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        <ProjectCard 
          v-for="project in visibleProjects" 
          :key="project.id" 
          :project="project" 
          class="reveal-card" 
          @intersect="onCardIntersect"
        />
      </div>

      <!-- Botón para cargar más proyectos -->
      <div v-if="hasMoreProjects" class="flex justify-center mt-10 sm:mt-16">
        <button 
          @click="loadMoreProjects"
          class="group relative overflow-hidden rounded-full bg-zinc-900 border border-zinc-800 px-4 sm:px-6 py-2 sm:py-3 text-zinc-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300"
        >
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
import { useIntersectionObserver } from '@vueuse/core';

// Estado reactivo con Composition API
const router = useRouter();
const projectsPerPage = ref(3);
const currentPage = ref(1);
const allProjects = ref(projects);
const observedCards = ref(new Set());

// Computados para mejorar rendimiento
const visibleProjects = computed(() => {
  return allProjects.value.slice(0, currentPage.value * projectsPerPage.value);
});

const hasMoreProjects = computed(() => {
  return visibleProjects.value.length < allProjects.value.length;
});

const hasProjectWithGallery = computed(() => {
  return allProjects.value.some(project => project.gallery && project.gallery.length > 0);
});

const featuredProject = computed(() => {
  return allProjects.value.find(project => project.gallery && project.gallery.length > 0) || null;
});

const limitedGalleryImages = computed(() => {
  if (!featuredProject.value || !featuredProject.value.gallery) return [];
  // En móvil, solo mostramos las primeras 2 imágenes para mejor rendimiento
  return featuredProject.value.gallery.slice(0, 2);
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

// Configuración de efectos CSS para la galería
const setupGalleryAnimation = () => {
  // Ajustar la animación según el ancho de pantalla
  const isMobile = window.innerWidth < 640;
  const imageCount = isMobile ? 3 : featuredProject.value?.gallery?.length + 1 || 5;
  
  // Establecer variable CSS para la animación
  document.documentElement.style.setProperty('--image-count', imageCount);
};

// Ciclo de vida del componente
onMounted(() => {
  // Configurar animaciones
  setupGalleryAnimation();
  
  // Escuchar cambios de tamaño para actualizar animaciones
  window.addEventListener('resize', setupGalleryAnimation);
  
  // Registrar vista de la sección de proyectos
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_project_section', {
      'event_category': 'page_view',
      'event_label': 'Proyectos'
    });
  }
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

/* Animación del carrusel de galería optimizada */
.gallery-slider {
  display: flex;
  animation: slide 20s linear infinite;
  width: max-content;
  will-change: transform; /* Optimización para rendimiento */
}

.gallery-slider-mobile {
  display: flex;
  animation: slideMobile 12s linear infinite;
  width: max-content;
  will-change: transform; /* Optimización para rendimiento */
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
    transform: translateX(calc(-100% / (var(--image-count))));
  }
}

@keyframes slideMobile {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 3)); /* Siempre 3 imágenes en móvil */
  }
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