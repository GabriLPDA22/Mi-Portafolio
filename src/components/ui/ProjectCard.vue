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
      <div class="relative h-[200px] overflow-hidden">
        <img :src="project.image" :alt="project.title"
          class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" />

        <!-- Overlay con gradiente -->
        <div
          :class="`absolute inset-0 bg-gradient-to-t ${project.gradient || 'from-indigo-600 to-purple-600'} opacity-70 mix-blend-multiply`">
        </div>

        <!-- Botones de acción en hover -->
        <div
          class="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all duration-300">
          <a v-for="(link, index) in project.links" :key="link.url" :href="link.url" target="_blank"
            class="px-4 py-2 bg-zinc-800/80 hover:bg-indigo-600 backdrop-blur-sm rounded-full text-white text-sm font-medium flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
            :style="`transition-delay: ${index * 0.1}s`">
            <span v-if="link.icon" class="text-indigo-400 group-hover:text-white">
              <font-awesome-icon :icon="link.icon" />
            </span>
            <span>{{ link.label }}</span>
          </a>
        </div>
      </div>

      <!-- Información del proyecto -->
      <div class="p-5 flex flex-col flex-grow">
        <!-- Título -->
        <h3 class="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">{{ project.title }}
        </h3>

        <!-- Descripción -->
        <p class="text-zinc-400 mb-5 flex-grow group-hover:text-zinc-300 transition-colors">{{ project.description }}
        </p>

        <!-- Tecnologías -->
        <div>
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in project.technologies" :key="tech.name"
              :class="`${tech.color} text-xs py-1 px-2 rounded-full font-medium flex items-center gap-1 transform group-hover:scale-105 transition-transform`">
              <font-awesome-icon v-if="tech.icon" :icon="tech.icon" />
              {{ tech.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- Borde inferior decorativo con degradado -->
      <div
        class="h-1 w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-hover:via-indigo-500 transition-colors duration-300">
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
  }
};
</script>