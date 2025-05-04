<template>
  <section id="proyectos" class="relative min-h-screen py-24 overflow-hidden bg-black">
    <!-- Efectos de fondo mejorados -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(17,24,39,1),rgba(0,0,0,1))]"></div>
      <div class="absolute w-full h-full">
        <div
          class="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[128px] animate-pulse">
        </div>
        <div
          class="absolute top-40 right-10 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-[128px] animate-pulse animation-delay-1000">
        </div>
        <div
          class="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[128px] animate-pulse animation-delay-2000">
        </div>
      </div>
    </div>

    <div class="relative z-10 container mx-auto px-4">
      <!-- Título principal con nuevo diseño -->
      <div class="text-center mb-20">
        <div class="inline-block">
          <h2 class="text-7xl md:text-8xl font-black mb-6 relative">
            <span
              class="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 blur-lg">
              Proyectos
            </span>
            <span
              class="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Proyectos
            </span>
          </h2>
          <div class="h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"></div>
          <p class="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Una colección de aplicaciones web y móviles que demuestran mi pasión por crear experiencias digitales
            excepcionales
          </p>
        </div>
      </div>

      <!-- Navegación de categorías con nuevo diseño -->
      <div class="flex justify-center mb-20">
        <div
          class="inline-flex p-1 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700/50">
          <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="[
            'relative px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-500',
            activeTab === tab.id
              ? 'text-white shadow-lg'
              : 'text-gray-400 hover:text-gray-300'
          ]">
            <span v-if="activeTab === tab.id"
              class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl"></span>
            <span class="relative flex items-center gap-2">
              <component :is="tab.icon" class="w-4 h-4" />
              {{ tab.label }}
            </span>
          </button>
        </div>
      </div>

      <!-- Contenedor de proyectos -->
      <div class="relative">
        <!-- Vista: Todos los proyectos -->
        <transition name="fade-scale">
          <div v-if="activeTab === 'all'" key="all" class="space-y-32">
            <!-- Elixium Foods - Proyecto destacado -->
            <div class="relative group">
              <div
                class="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              </div>
              <div
                class="relative grid lg:grid-cols-2 gap-12 items-center p-8 bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-800 hover:border-purple-500/50 transition-all duration-500">
                <div class="space-y-8">
                  <div
                    class="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                    <div class="w-2 h-2 rounded-full bg-purple-400 animate-pulse mr-2"></div>
                    <span class="text-purple-400 text-sm font-semibold">Proyecto Completo</span>
                  </div>

                  <div>
                    <h3 class="text-5xl font-bold text-white mb-2">
                      Elixium Foods
                    </h3>
                    <p class="text-2xl text-purple-400">Restaurant Management Platform</p>
                  </div>

                  <p class="text-xl text-gray-300 leading-relaxed">
                    Plataforma para restaurante con reservas online, menú interactivo y sistema de pedidos. Desarrollado
                    con tecnologías modernas para ofrecer una experiencia fluida al usuario.
                  </p>

                  <div class="flex flex-wrap gap-3">
                    <TechnologyBadge name="Vue.js" :icon="['fab', 'vuejs']" color="green" />
                    <TechnologyBadge name="TypeScript" :icon="['fab', 'js']" color="blue" />
                    <TechnologyBadge name="SCSS" :icon="['fab', 'sass']" color="pink" />
                    <TechnologyBadge name="C#" :icon="['fab', 'microsoft']" color="purple" />
                  </div>

                  <div class="flex flex-wrap gap-4 pt-4">
                    <a href="https://github.com/GabriLPDA22/Restaurante-Front" target="_blank"
                      class="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center gap-2 transition-all hover:-translate-y-0.5">
                      <Code class="w-4 h-4" />
                      Ver Frontend
                    </a>
                    <a href="https://github.com/GabriLPDA22/Restaurante-Back" target="_blank"
                      class="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center gap-2 transition-all hover:-translate-y-0.5">
                      <Server class="w-4 h-4" />
                      Ver Backend
                    </a>
                    <router-link :to="{ name: 'ProjectDetail', params: { id: 2 } }"
                      class="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl flex items-center gap-2 transition-all hover:-translate-y-0.5">
                      <Images class="w-4 h-4" />
                      Ver Galería
                    </router-link>
                  </div>
                </div>

                <div class="relative group">
                  <div
                    class="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-600/30 to-red-600/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  </div>
                  <div
                    class="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
                    <img src="/img/Elixium_Foods.webp" alt="Elixium Foods" class="w-full" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- McPoints - Proyecto móvil destacado -->
            <div class="relative group">
              <div
                class="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-yellow-600/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              </div>
              <div
                class="relative grid lg:grid-cols-2 gap-12 items-center p-8 bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-800 hover:border-red-500/50 transition-all duration-500">
                <div class="order-2 lg:order-1">
                  <div class="relative mx-auto max-w-[320px]">
                    <!-- Frame del dispositivo móvil -->
                    <div class="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl border border-gray-700">
                      <!-- Notch -->
                      <div class="absolute top-0 inset-x-0 h-6 flex justify-center">
                        <div class="bg-gray-900 w-40 h-6 rounded-b-3xl"></div>
                      </div>
                      <!-- Botones laterales -->
                      <div class="absolute right-[-2px] top-24 w-1 h-12 bg-gray-700 rounded-l-lg"></div>
                      <div class="absolute right-[-2px] top-40 w-1 h-20 bg-gray-700 rounded-l-lg"></div>
                      <div class="absolute left-[-2px] top-32 w-1 h-20 bg-gray-700 rounded-r-lg"></div>

                      <!-- Pantalla -->
                      <div class="relative bg-black rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                        <img src="/img/McPointsHome.webp" alt="McPoints App" class="w-full h-full object-cover" />
                      </div>
                    </div>
                    <!-- Sombra del dispositivo -->
                    <div class="absolute inset-x-8 -bottom-4 h-8 bg-black/50 rounded-full blur-xl"></div>
                  </div>
                </div>

                <div class="order-1 lg:order-2 space-y-8">
                  <div class="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20">
                    <div class="w-2 h-2 rounded-full bg-red-400 animate-pulse mr-2"></div>
                    <span class="text-red-400 text-sm font-semibold">App Android</span>
                  </div>

                  <div>
                    <h3 class="text-5xl font-bold text-white mb-2">
                      McPoints
                    </h3>
                    <p class="text-2xl text-red-400">Coleccionador de Números de Pedido</p>
                  </div>

                  <p class="text-xl text-gray-300 leading-relaxed">
                    Aplicación Android para coleccionar números de pedido de McDonald's. Mi amigo quería coleccionar
                    todos los números de los tickets, así que desarrollé esta app para escanearlos, llevar un registro
                    detallado y visualizar estadísticas del progreso.
                  </p>

                  <div class="flex flex-wrap gap-3">
                    <TechnologyBadge name="Android" :icon="['fab', 'android']" color="green" />
                    <TechnologyBadge name="Java" :icon="['fab', 'java']" color="blue" />
                    <TechnologyBadge name="React Native" :icon="['fab', 'react']" color="cyan" />
                    <TechnologyBadge name="CameraX" :icon="['fas', 'camera']" color="purple" />
                  </div>

                  <div class="flex flex-wrap gap-4 pt-4">
                    <a href="https://github.com/GabriLPDA22/McPoints" target="_blank"
                      class="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center gap-2 transition-all hover:-translate-y-0.5">
                      <Github class="w-4 h-4" />
                      Ver Código
                    </a>
                    <router-link :to="{ name: 'ProjectDetail', params: { id: 7 } }"
                      class="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-xl flex items-center gap-2 transition-all hover:-translate-y-0.5">
                      <Images class="w-4 h-4" />
                      Ver Galería
                    </router-link>
                  </div>
                </div>
              </div>
            </div>

            <!-- Elixium Foods Delivery - Proyecto en desarrollo -->
            <div class="relative group">
              <div
                class="absolute -inset-4 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              </div>
              <div
                class="relative grid lg:grid-cols-2 gap-12 items-center p-8 bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-800 hover:border-violet-500/50 transition-all duration-500">
                <div class="space-y-8">
                  <div
                    class="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
                    <div class="w-2 h-2 rounded-full bg-violet-400 animate-pulse mr-2"></div>
                    <span class="text-violet-400 text-sm font-semibold">En Desarrollo - 40%</span>
                  </div>

                  <div>
                    <h3 class="text-5xl font-bold text-white mb-2">
                      Elixium Foods Delivery
                    </h3>
                    <p class="text-2xl text-violet-400">Plataforma de Entrega de Comida</p>
                  </div>

                  <p class="text-xl text-gray-300 leading-relaxed">
                    Una reimaginación moderna de plataformas de entrega de comida tipo UberEats. Este proyecto, que
                    forma parte de mi TFG, se encuentra actualmente en desarrollo activo.
                  </p>

                  <!-- Barra de progreso -->
                  <div class="space-y-3">
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-400">Progreso del proyecto</span>
                      <span class="text-violet-400 font-semibold">40%</span>
                    </div>
                    <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div class="h-full w-[40%] bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full relative">
                        <div class="absolute right-0 top-0 h-full w-4 bg-white/20 blur animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-wrap gap-3">
                    <TechnologyBadge name="Vue.js" :icon="['fab', 'vuejs']" color="green" />
                    <TechnologyBadge name="SCSS" :icon="['fab', 'sass']" color="pink" />
                    <TechnologyBadge name="Tailwind" :icon="['fab', 'css3-alt']" color="blue" />
                    <TechnologyBadge name="Astro" :icon="['fas', 'rocket']" color="orange" />
                  </div>

                  <div class="flex flex-wrap gap-4 pt-4">
                    <a href="https://github.com/GabriLPDA22/ELIXIUM-FOODS" target="_blank"
                      class="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center gap-2 transition-all hover:-translate-y-0.5">
                      <Github class="w-4 h-4" />
                      Ver Código
                    </a>
                    <router-link :to="{ name: 'ProjectDetail', params: { id: 6 } }"
                      class="px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 rounded-xl flex items-center gap-2 transition-all hover:-translate-y-0.5">
                      <Images class="w-4 h-4" />
                      Ver Galería
                    </router-link>
                  </div>
                </div>

                <div class="relative group">
                  <div
                    class="absolute inset-0 bg-gradient-to-br from-violet-600/30 via-fuchsia-600/30 to-pink-600/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  </div>
                  <div
                    class="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
                    <img src="/img/home-screen.webp" alt="Elixium Foods Delivery" class="w-full" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Grid de otros proyectos -->
            <div class="mt-20">
              <h3 class="text-3xl font-bold text-white mb-12">Otros Proyectos</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="project in otherProjects" :key="project.id"
                  class="group relative rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <ProjectCard :project="project" />
                </div>
              </div>
            </div>
          </div>
        </transition>

        <!-- Vista: Proyectos Web -->
        <transition name="fade-scale">
          <div v-if="activeTab === 'web'" key="web" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="project in webProjects" :key="project.id"
              class="group relative rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <ProjectCard :project="project" />
            </div>
          </div>
        </transition>

        <!-- Vista: Proyectos Mobile -->
        <transition name="fade-scale">
          <div v-if="activeTab === 'mobile'" key="mobile" class="space-y-16">
            <McPointsCard />
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import McPointsCard from '@/components/ui/McPointsCard.vue'
import TechnologyBadge from '@/components/ui/TechnologyBadge.vue'
import { Globe, Smartphone, Grid, Github, Server, Code, Images } from 'lucide-vue-next'

export default {
  name: 'ProjectsSection',
  components: {
    ProjectCard,
    McPointsCard,
    TechnologyBadge,
    Globe,
    Smartphone,
    Grid,
    Github,
    Server,
    Code,
    Images
  },
  setup() {
    const activeTab = ref('all')

    const tabs = [
      { id: 'all', label: 'Todos', icon: Grid },
      { id: 'web', label: 'Web', icon: Globe },
      { id: 'mobile', label: 'Mobile', icon: Smartphone }
    ]

    const webProjects = computed(() =>
      projects.filter(p => p.category === 'web')
    )

    const mobileProjects = computed(() =>
      projects.filter(p => p.category === 'mobile')
    )

    const mcPointsProject = computed(() =>
      projects.find(p => p.id === 7)
    )

    const otherProjects = computed(() =>
      projects.filter(p => ![2, 6, 7].includes(p.id))
    )

    return {
      activeTab,
      tabs,
      webProjects,
      mobileProjects,
      mcPointsProject,
      otherProjects,
      projects
    }
  }
}
</script>

<style scoped>
/* Animaciones */
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }

  33% {
    transform: translate(30px, -50px) scale(1.1);
  }

  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }

  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

/* Transiciones */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.5s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}

/* Estilos para el scroll en móvil */
@media (max-width: 768px) {
  .text-7xl {
    font-size: 3rem;
  }

  .md\:text-8xl {
    font-size: 3.5rem;
  }
}

/* Animación de pulse mejorada */
@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
