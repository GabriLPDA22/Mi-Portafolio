<template>
  <div class="group relative rounded-xl overflow-hidden hover:z-10 transition-all duration-300">
    <!-- Fondo con degradado y efecto de brillo -->
    <div
      class="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 group-hover:duration-200">
    </div>

    <!-- Tarjeta principal -->
    <div
      class="relative bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 group-hover:border-transparent rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300">

      <!-- Imagen del proyecto con overlay -->
      <div class="relative h-[180px] sm:h-[200px] overflow-hidden">
        <img :src="project.image" :alt="project.title"
          class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" />

        <!-- Overlay con gradiente -->
        <div
          :class="`absolute inset-0 bg-gradient-to-t ${project.gradient || 'from-indigo-600 to-purple-600'} opacity-70 mix-blend-multiply`">
        </div>

        <!-- Botones de acción en hover - Adaptados para toques en móvil -->
        <div
          class="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 transition-all duration-300 p-3">

          <!-- Botón para ver detalles si el proyecto tiene galería - Más grande en móvil -->
          <router-link v-if="hasGallery" :to="{ name: 'ProjectDetail', params: { id: project.id } }"
            class="w-full sm:w-auto px-4 py-2.5 sm:py-2 bg-zinc-800/90 sm:bg-zinc-800/80 hover:bg-indigo-600 backdrop-blur-sm rounded-full text-white text-sm font-medium flex items-center justify-center sm:justify-start gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
            style="transition-delay: 0s">
            <span class="text-indigo-400 group-hover:text-white">
              <font-awesome-icon :icon="['fas', 'images']" />
            </span>
            <span>Ver galería</span>
          </router-link>

          <!-- Enlaces externos del proyecto - Ajustados para pantallas pequeñas -->
          <a v-for="(link, index) in project.links" :key="link.url" :href="link.url" target="_blank"
            class="w-full sm:w-auto px-4 py-2.5 sm:py-2 bg-zinc-800/90 sm:bg-zinc-800/80 hover:bg-indigo-600 backdrop-blur-sm rounded-full text-white text-sm font-medium flex items-center justify-center sm:justify-start gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
            :style="`transition-delay: ${(hasGallery ? index + 1 : index) * 0.1}s`">
            <span v-if="link.icon" class="text-indigo-400 group-hover:text-white">
              <font-awesome-icon :icon="link.icon" />
            </span>
            <span>{{ link.label }}</span>
          </a>
        </div>

        <!-- Indicador de galería para proyectos con imágenes adicionales (optimizado para móvil) -->
        <div v-if="hasGallery"
          class="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1 sm:gap-2 shadow-lg hover:bg-indigo-500/40 transition-colors duration-300 cursor-pointer"
          @click="navigateToGallery">
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
        <h3 @click="hasGallery && navigateToGallery()"
          :class="`text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-indigo-400 transition-colors flex items-center ${hasGallery ? 'cursor-pointer' : ''}`">
          {{ project.title }}

          <!-- Icono indicador de galería versión discreta -->
          <div v-if="hasGallery" class="ml-2 opacity-70 group-hover:opacity-100 transition-opacity">
            <font-awesome-icon :icon="['fas', 'images']" class="text-xs sm:text-sm text-indigo-400" />
          </div>
        </h3>

        <!-- Descripción - Texto más pequeño en móvil -->
        <p
          class="text-zinc-400 mb-4 sm:mb-5 flex-grow group-hover:text-zinc-300 transition-colors text-sm sm:text-base">
          {{ project.description }}
        </p>

        <!-- Tecnologías - Adaptadas para móvil -->
        <div>
          <div class="flex flex-wrap gap-1.5 sm:gap-2">
            <span v-for="tech in project.technologies" :key="tech.name"
              :class="`${tech.color} text-xs py-0.5 sm:py-1 px-1.5 sm:px-2 rounded-full font-medium flex items-center gap-1 transform group-hover:scale-105 transition-transform`">
              <font-awesome-icon v-if="tech.icon" :icon="tech.icon" class="text-xs" />
              {{ tech.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- Borde inferior decorativo con degradado -->
      <div
        class="h-1 w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-hover:via-indigo-500 transition-colors duration-300">
      </div>

      <!-- Indicador de galería en la esquina inferior derecha para el modo hover - Más grande para toques -->
      <div v-if="hasGallery"
        class="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <router-link :to="{ name: 'ProjectDetail', params: { id: project.id } }"
          class="w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-indigo-600/30 hover:bg-indigo-600/60 transition-colors">
          <font-awesome-icon :icon="['fas', 'eye']" class="text-white text-sm" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasGallery() {
      return this.project.gallery && this.project.gallery.length > 0;
    }
  },
  methods: {
    navigateToGallery() {
      if (this.hasGallery) {
        this.$router.push({ name: 'ProjectDetail', params: { id: this.project.id } });
      }
    }
  }
};
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
</style>