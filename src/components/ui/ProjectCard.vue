<template>
  <div class="project-card group" :class="{ 'mobile-mode': mobileMode }">
    <!-- Imagen del proyecto -->
    <div class="relative overflow-hidden aspect-video rounded-t-2xl">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"
      ></div>

      <!-- Badge de galería -->
      <div
        v-if="hasGallery"
        class="absolute top-3 right-3 px-2 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1 shadow-lg"
      >
        <font-awesome-icon :icon="['fas', 'images']" class="text-indigo-300" />
        <span class="font-semibold">{{ project.gallery.length + 1 }}</span>
      </div>
    </div>

    <!-- Contenido -->
    <div class="p-4 md:p-5 flex flex-col flex-grow">
      <h3
        class="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors"
      >
        {{ project.title }}
      </h3>

      <p class="text-zinc-400 text-sm mb-4 line-clamp-3 flex-grow">
        {{ project.description }}
      </p>

      <!-- Tecnologías -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tech in project.technologies.slice(0, 4)"
          :key="tech.name"
          :class="tech.color"
          class="px-2 py-1 rounded-full text-xs font-medium"
        >
          {{ tech.name }}
        </span>
      </div>

      <!-- Botones - Desktop: Solo en hover | Mobile: Siempre visibles -->
      <div
        class="project-buttons flex flex-col gap-2"
        :class="
          mobileMode ? 'opacity-100' : 'md:opacity-0 md:group-hover:opacity-100'
        "
      >
        <!-- Botón Ver galería (si existe) -->
        <router-link
          v-if="hasGallery"
          :to="{ name: 'ProjectDetail', params: { id: project.id } }"
          class="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white text-sm font-medium flex items-center justify-center gap-2 transition-all hover:scale-105"
        >
          <font-awesome-icon :icon="['fas', 'images']" />
          <span>Ver galería</span>
        </router-link>

        <!-- Enlaces del proyecto -->
        <a
          v-for="link in project.links"
          :key="link.url"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-zinc-300 hover:text-white text-sm font-medium flex items-center justify-center gap-2 transition-all hover:scale-105"
        >
          <font-awesome-icon v-if="link.icon" :icon="link.icon" />
          <span>{{ link.label }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true,
    },
    mobileMode: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const hasGallery = computed(() => {
      return props.project.gallery && props.project.gallery.length > 0;
    });

    return {
      hasGallery,
    };
  },
};
</script>

<style scoped>
.project-card {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: linear-gradient(to bottom right, rgb(24, 24, 27), rgb(9, 9, 11));
  border: 1px solid rgb(63, 63, 70);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  border-color: rgba(99, 102, 241, 0.5);
  box-shadow: 0 20px 50px -10px rgba(99, 102, 241, 0.3);
}

/* En mobile siempre visible */
.mobile-mode .project-buttons {
  opacity: 1 !important;
}

/* Transición suave de botones */
.project-buttons {
  transition: opacity 0.3s ease;
}

/* Line clamp */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
