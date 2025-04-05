<template>
  <div 
    ref="cardRef"
    class="group relative rounded-xl overflow-hidden hover:z-10 transition-all duration-300"
  >
    <!-- Fondo con degradado y efecto de brillo -->
    <div
      class="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 group-hover:duration-200">
    </div>

    <!-- Tarjeta principal -->
    <div
      class="relative bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 group-hover:border-transparent rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300">

      <!-- Imagen del proyecto con overlay y lazy loading -->
      <div class="relative h-[180px] sm:h-[200px] overflow-hidden">
        <img 
          :src="project.image" 
          :alt="project.title"
          loading="lazy"
          decoding="async"
          class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
        />

        <!-- Overlay con gradiente -->
        <div
          :class="`absolute inset-0 bg-gradient-to-t ${project.gradient || 'from-indigo-600 to-purple-600'} opacity-70 mix-blend-multiply`">
        </div>

        <!-- Botones de acción en hover -->
        <div
          class="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 transition-all duration-300 p-3">

          <!-- Botón para ver detalles si el proyecto tiene galería -->
          <router-link 
            v-if="hasGallery" 
            :to="{ name: 'ProjectDetail', params: { id: project.id } }"
            class="w-full sm:w-auto px-4 py-2.5 sm:py-2 bg-zinc-800/90 sm:bg-zinc-800/80 hover:bg-indigo-600 backdrop-blur-sm rounded-full text-white text-sm font-medium flex items-center justify-center sm:justify-start gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
            style="transition-delay: 0s"
            @click="trackProjectView(project.id, project.title)"
          >
            <span class="text-indigo-400 group-hover:text-white">
              <font-awesome-icon :icon="['fas', 'images']" />
            </span>
            <span>Ver galería</span>
          </router-link>

          <!-- Enlaces externos del proyecto - Con tracking de análisis -->
          <a 
            v-for="(link, index) in project.links" 
            :key="link.url" 
            :href="link.url" 
            target="_blank"
            rel="noopener"
            @click="trackProjectLink(project.id, project.title, link.label)"
            class="w-full sm:w-auto px-4 py-2.5 sm:py-2 bg-zinc-800/90 sm:bg-zinc-800/80 hover:bg-indigo-600 backdrop-blur-sm rounded-full text-white text-sm font-medium flex items-center justify-center sm:justify-start gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
            :style="`transition-delay: ${(hasGallery ? index + 1 : index) * 0.1}s`"
          >
            <span v-if="link.icon" class="text-indigo-400 group-hover:text-white">
              <font-awesome-icon :icon="link.icon" />
            </span>
            <span>{{ link.label }}</span>
          </a>
        </div>

        <!-- Indicador de galería para proyectos con imágenes adicionales -->
        <div 
          v-if="hasGallery"
          class="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1 sm:gap-2 shadow-lg hover:bg-indigo-500/40 transition-colors duration-300 cursor-pointer"
          @click="navigateToGallery"
        >
          <font-awesome-icon :icon="['fas', 'images']" class="text-indigo-300" />
          <div class="flex items-center">
            <span class="font-semibold mr-1">{{ project.gallery.length + 1 }}</span>
            <span class="hidden xs:inline">fotos</span>
          </div>
          <div class="absolute -right-1 -top-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-indigo-500 animate-ping"></div>
          <div class="absolute -right-1 -top-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-indigo-500"></div>
        </div>
      </div>

      <!-- Información del proyecto -->
      <div class="p-4 sm:p-5 flex flex-col flex-grow">
        <!-- Título con enlace a galería si está disponible -->
        <h3 
          @click="hasGallery && navigateToGallery()"
          :class="`text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-indigo-400 transition-colors flex items-center ${hasGallery ? 'cursor-pointer' : ''}`"
        >
          {{ project.title }}

          <!-- Icono indicador de galería versión discreta -->
          <div v-if="hasGallery" class="ml-2 opacity-70 group-hover:opacity-100 transition-opacity">
            <font-awesome-icon :icon="['fas', 'images']" class="text-xs sm:text-sm text-indigo-400" />
          </div>
        </h3>

        <!-- Descripción - Con truncamiento para mejor rendimiento -->
        <p class="text-zinc-400 mb-4 sm:mb-5 flex-grow group-hover:text-zinc-300 transition-colors text-sm sm:text-base line-clamp-3">
          {{ project.description }}
        </p>

        <!-- Tecnologías -->
        <div>
          <div class="flex flex-wrap gap-1.5 sm:gap-2">
            <span 
              v-for="tech in project.technologies" 
              :key="tech.name"
              :class="`${tech.color} text-xs py-0.5 sm:py-1 px-1.5 sm:px-2 rounded-full font-medium flex items-center gap-1 transform group-hover:scale-105 transition-transform`"
            >
              <font-awesome-icon v-if="tech.icon" :icon="tech.icon" class="text-xs" />
              {{ tech.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- Borde inferior decorativo con degradado -->
      <div class="h-1 w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-hover:via-indigo-500 transition-colors duration-300">
      </div>

      <!-- Indicador de galería en la esquina inferior derecha para el modo hover -->
      <div 
        v-if="hasGallery"
        class="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <router-link 
          :to="{ name: 'ProjectDetail', params: { id: project.id } }"
          class="w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-indigo-600/30 hover:bg-indigo-600/60 transition-colors"
          aria-label="Ver detalles del proyecto"
        >
          <font-awesome-icon :icon="['fas', 'eye']" class="text-white text-sm" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useIntersectionObserver } from '@vueuse/core';

// Props con validación TypeScript
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

// Emits para comunicación con componentes padre
const emit = defineEmits(['intersect']);

// Estado reactivo con Composition API
const router = useRouter();
const cardRef = ref(null);

// Computados para mejorar rendimiento
const hasGallery = computed(() => {
  return props.project.gallery && props.project.gallery.length > 0;
});

// Métodos con Composition API
const navigateToGallery = () => {
  if (hasGallery.value) {
    trackProjectView(props.project.id, props.project.title, 'gallery_click');
    router.push({ name: 'ProjectDetail', params: { id: props.project.id } });
  }
};

// Funciones para analítica
const trackProjectView = (projectId, projectTitle, action = 'view') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'project_interaction', {
      'event_category': 'project',
      'event_label': projectTitle,
      'project_id': projectId,
      'action': action
    });
  }
};

const trackProjectLink = (projectId, projectTitle, linkLabel) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'project_interaction', {
      'event_category': 'link_click',
      'event_label': linkLabel,
      'project_id': projectId,
      'project_title': projectTitle
    });
  }
};

// Configuración de Intersection Observer para animaciones
onMounted(() => {
  if (cardRef.value) {
    const observer = useIntersectionObserver(
      cardRef,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          emit('intersect', cardRef.value, isIntersecting);
        }
      },
      { threshold: 0.2 }
    );
  }
});
</script>

<style scoped>
/* Mejoras específicas para dispositivos táctiles */
@media (hover: none) {
  /* Hacer que los botones sean siempre visibles en dispositivos táctiles */
  .group:active .opacity-0 {
    opacity: 1;
  }

  .group:active .translate-y-4 {
    transform: translateY(0);
  }

  /* Una pulsación larga también puede activar los efectos hover */
  .group:active .group-hover\:scale-110 {
    transform: scale(1.1);
  }

  .group:active .group-hover\:opacity-100 {
    opacity: 1;
  }
}

/* Utilidad para limitar líneas de texto */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>