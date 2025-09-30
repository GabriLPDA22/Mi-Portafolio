<template>
  <section
    id="proyectos"
    class="py-16 md:py-24 lg:py-32 bg-zinc-950 relative overflow-hidden"
  >
    <!-- Background animado -->
    <div class="absolute inset-0 opacity-20">
      <div
        class="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1.5s"
      ></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header -->
      <div class="text-center mb-12 md:mb-16 relative">
        <!-- Título de fondo gigante -->
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-8xl md:text-9xl font-bold opacity-5 text-white w-full text-center z-0 pointer-events-none"
        >
          PROYECTOS
        </div>

        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 animate-fade-in relative z-10"
        >
          Mis
          <span
            class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Proyectos
          </span>
        </h2>
        <p class="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto relative z-10">
          Explora mis últimos trabajos y proyectos en producción
        </p>
      </div>

      <!-- Tabs -->
      <div class="flex justify-center mb-10 md:mb-14">
        <div
          class="inline-flex rounded-2xl bg-zinc-900/50 p-1.5 backdrop-blur-sm border border-zinc-800 overflow-x-auto max-w-full"
        >
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id; currentSlide = 0"
            class="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap text-sm sm:text-base"
            :class="
              activeTab === tab.id
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
            "
          >
            <component :is="tab.icon" :size="18" />
            <span>{{ tab.label }}</span>
          </button>
        </div>
      </div>

      <!-- Grid de Proyectos -->
      <transition name="fade-scale" mode="out-in">
        <div :key="activeTab">
          <!-- Desktop: Grid normal -->
          <div class="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <!-- Huvegrym destacado -->
            <div
              v-if="shouldShowHuvegrym"
              class="project-card-special group"
            >
              <!-- Badge especial -->
              <div class="absolute top-4 right-4 z-10">
                <div
                  class="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-xs font-bold flex items-center gap-1.5 shadow-lg animate-pulse"
                >
                  <Sparkles :size="14" />
                  <span>En Producción</span>
                </div>
              </div>

              <!-- Imagen -->
              <div class="relative overflow-hidden aspect-video">
                <div
                  class="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 group-hover:opacity-0 transition-opacity duration-500"
                ></div>
                <img
                  :src="huvegrymProject.image"
                  :alt="huvegrymProject.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"
                ></div>
              </div>

              <!-- Contenido -->
              <div class="p-5 sm:p-6">
                <h3
                  class="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300"
                >
                  {{ huvegrymProject.title }}
                </h3>
                <p
                  class="text-sm text-purple-400 font-medium mb-3"
                  v-if="huvegrymProject.subtitle"
                >
                  {{ huvegrymProject.subtitle }}
                </p>
                <p class="text-zinc-400 text-sm mb-4 line-clamp-3">
                  {{ huvegrymProject.description }}
                </p>

                <!-- Tecnologías -->
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="tech in huvegrymProject.technologies.slice(0, 4)"
                    :key="tech.name"
                    :class="tech.color"
                    class="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                  >
                    {{ tech.name }}
                  </span>
                </div>

                <!-- Botones - Solo visible en hover -->
                <div class="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    v-for="link in huvegrymProject.links"
                    :key="link.url"
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 min-w-[120px] px-4 py-2.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                    :class="
                      link.icon[1] === 'globe'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/50'
                        : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white'
                    "
                  >
                    <font-awesome-icon :icon="link.icon" />
                    <span>{{ link.label }}</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Resto de proyectos -->
            <ProjectCard
              v-for="project in displayedProjects"
              :key="project.id"
              :project="project"
              class="hover:scale-[1.02] transition-transform duration-300"
            />
          </div>

          <!-- Mobile: Carrusel (solo si hay más de 1 proyecto) -->
          <div class="md:hidden" v-if="showCarousel">
            <div class="relative">
              <div class="overflow-hidden">
                <div
                  class="flex transition-transform duration-500 ease-out"
                  :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
                >
                  <!-- Huvegrym -->
                  <div v-if="shouldShowHuvegrym" class="w-full flex-shrink-0 px-4">
                    <div class="project-card-special-mobile">
                      <!-- Badge -->
                      <div class="absolute top-3 right-3 z-10">
                        <div class="px-2 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-xs font-bold flex items-center gap-1">
                          <Sparkles :size="12" />
                          <span>En Producción</span>
                        </div>
                      </div>

                      <!-- Imagen -->
                      <div class="relative overflow-hidden aspect-video rounded-t-2xl">
                        <img
                          :src="huvegrymProject.image"
                          :alt="huvegrymProject.title"
                          class="w-full h-full object-cover"
                        />
                      </div>

                      <!-- Contenido -->
                      <div class="p-4">
                        <h3 class="text-lg font-bold text-white mb-1">
                          {{ huvegrymProject.title }}
                        </h3>
                        <p class="text-xs text-purple-400 font-medium mb-2">
                          {{ huvegrymProject.subtitle }}
                        </p>
                        <p class="text-zinc-400 text-sm mb-3 line-clamp-2">
                          {{ huvegrymProject.description }}
                        </p>

                        <!-- Tecnologías -->
                        <div class="flex flex-wrap gap-2 mb-3">
                          <span
                            v-for="tech in huvegrymProject.technologies.slice(0, 3)"
                            :key="tech.name"
                            :class="tech.color"
                            class="px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {{ tech.name }}
                          </span>
                        </div>

                        <!-- Botones siempre visibles en mobile -->
                        <div class="flex flex-col gap-2">
                          <a
                            v-for="link in huvegrymProject.links"
                            :key="link.url"
                            :href="link.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="w-full px-4 py-2 rounded-xl font-medium text-sm flex items-center justify-center gap-2"
                            :class="
                              link.icon[1] === 'globe'
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                : 'bg-zinc-800 text-zinc-300'
                            "
                          >
                            <font-awesome-icon :icon="link.icon" />
                            <span>{{ link.label }}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Otros proyectos -->
                  <div
                    v-for="project in displayedProjects"
                    :key="project.id"
                    class="w-full flex-shrink-0 px-4"
                  >
                    <ProjectCard :project="project" :mobile-mode="true" />
                  </div>
                </div>
              </div>

              <!-- Controles del carrusel -->
              <button
                v-if="currentSlide > 0"
                @click="currentSlide--"
                class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg z-10"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                v-if="currentSlide < totalSlides - 1"
                @click="currentSlide++"
                class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg z-10"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <!-- Dots -->
              <div class="flex justify-center gap-2 mt-6">
                <button
                  v-for="index in totalSlides"
                  :key="index"
                  @click="currentSlide = index - 1"
                  class="w-2 h-2 rounded-full transition-all"
                  :class="
                    currentSlide === index - 1
                      ? 'bg-indigo-500 w-8'
                      : 'bg-zinc-700'
                  "
                ></button>
              </div>
            </div>
          </div>

          <!-- Mobile: Un solo proyecto (sin carrusel) -->
          <div class="md:hidden px-4" v-else>
            <ProjectCard :project="displayedProjects[0]" :mobile-mode="true" />
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import { ref, computed } from "vue";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard.vue";
import { Globe, Smartphone, Grid, Sparkles } from "lucide-vue-next";

export default {
  name: "ProjectsSection",
  components: {
    ProjectCard,
    Globe,
    Smartphone,
    Grid,
    Sparkles,
  },
  setup() {
    const activeTab = ref("all");
    const currentSlide = ref(0);

    const tabs = [
      { id: "all", label: "Todos", icon: Grid },
      { id: "web", label: "Web", icon: Globe },
      { id: "mobile", label: "Mobile", icon: Smartphone },
    ];

    const huvegrymProject = computed(() =>
      projects.find((p) => p.id === 8)
    );

    const shouldShowHuvegrym = computed(() => {
      if (!huvegrymProject.value) return false;
      if (activeTab.value === "all") return true;
      return huvegrymProject.value.category === activeTab.value;
    });

    const displayedProjects = computed(() => {
      let filtered = projects.filter((p) => p.id !== 8);

      if (activeTab.value === "web") {
        filtered = filtered.filter((p) => p.category === "web");
      } else if (activeTab.value === "mobile") {
        filtered = filtered.filter((p) => p.category === "mobile");
      }

      return filtered;
    });

    const totalSlides = computed(() => {
      const count = displayedProjects.value.length + (shouldShowHuvegrym.value ? 1 : 0);
      return count;
    });

    const showCarousel = computed(() => totalSlides.value > 1);

    return {
      activeTab,
      currentSlide,
      tabs,
      huvegrymProject,
      shouldShowHuvegrym,
      displayedProjects,
      totalSlides,
      showCarousel,
    };
  },
};
</script>

<style scoped>
/* Animaciones */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.4s ease;
}

.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}

.fade-scale-leave-to {
  opacity: 0;
  transform: scale(1.05) translateY(-10px);
}

/* Project Cards */
.project-card-special {
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  background: linear-gradient(to bottom right, rgb(24, 24, 27), rgb(9, 9, 11));
  border: 1px solid rgb(63, 63, 70);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card-special:hover {
  border-color: rgba(168, 85, 247, 0.5);
  box-shadow: 0 20px 50px -10px rgba(168, 85, 247, 0.4);
  transform: scale(1.02);
}

.project-card-special-mobile {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: linear-gradient(to bottom right, rgb(24, 24, 27), rgb(9, 9, 11));
  border: 1px solid rgb(63, 63, 70);
}

/* Line clamp utility */
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

/* Smooth scroll behavior */
@media (prefers-reduced-motion: no-preference) {
  * {
    scroll-behavior: smooth;
  }
}
</style>