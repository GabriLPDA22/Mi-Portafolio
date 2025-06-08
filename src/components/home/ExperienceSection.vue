<template>
  <section id="experiencia" class="py-16 sm:py-24 relative overflow-hidden">
    <!-- Efectos de fondo optimizados para móvil -->
    <div
      class="absolute -top-[200px] sm:-top-[300px] left-[150px] sm:left-[300px] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-purple-600/5 blur-2xl sm:blur-3xl z-0">
    </div>

    <div class="container mx-auto px-4 sm:px-6 relative">
      <!-- Encabezado de sección -->
      <div class="text-center mb-12 sm:mb-16 relative">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-8xl md:text-9xl font-bold opacity-5 text-white w-full text-center z-0">
          EXPERIENCIA
        </div>
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold relative z-10 inline-block mb-3 sm:mb-4">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Mi Experiencia
          </span>
        </h2>
        <div
          class="h-1.5 w-16 sm:w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-4 sm:mb-6">
        </div>
        <p class="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto px-4">
          Mi trayectoria profesional y los proyectos en los que he trabajado durante mi formación dual.
        </p>
      </div>

      <!-- Timeline de experiencia -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Línea central -->
        <div
          class="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-600/50 via-purple-600/50 to-transparent">
        </div>

        <!-- GOLIVE Services - Experiencia completada -->
        <div class="mb-12 sm:mb-16 relative">
          <!-- Punto de la timeline -->
          <div
            class="absolute left-4 sm:left-1/2 transform -translate-x-1/2 -mt-2 w-4 sm:w-6 h-4 sm:h-6 rounded-full border-2 border-indigo-500 bg-zinc-900 z-10 glow-item">
          </div>

          <!-- Contenido -->
          <div class="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
            <!-- Fecha (Izquierda) -->
            <div class="sm:text-right sm:pr-10 order-2 sm:order-1 fade-right mb-4 sm:mb-0">
              <div class="text-indigo-400 text-lg sm:text-xl mb-1 sm:mb-2">Septiembre 2024 - Junio 2025</div>
              <div class="text-white text-xl sm:text-2xl font-semibold opacity-80">GOLIVE Services</div>
              <div class="text-sm sm:text-base text-zinc-500 mt-1">✅ Formación Dual Completada</div>
            </div>

            <!-- Detalles (Derecha) -->
            <div
              class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-zinc-800 sm:ml-10 order-1 sm:order-2 fade-left hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
              <h3 class="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Mobile Technology y Web Development</h3>
              <p class="text-zinc-400 mb-3 sm:mb-4 text-sm sm:text-base">
                Completé mi formación dual en GOLIVE, una consultora tecnológica, trabajando en el departamento de
                <span class="text-white font-medium">Mobile Technology y Web Integrations</span>. Durante este período
                colaboré con diversos clientes,
                participando en proyectos de desarrollo y mantenimiento de <span class="text-indigo-400">aplicaciones
                  web</span> y
                <span class="text-purple-400">aplicaciones móviles</span>.
              </p>

              <!-- Logros destacados -->
              <div class="space-y-2 mb-4">
                <div class="flex items-start gap-2 text-sm">
                  <span class="text-green-400 mt-0.5">✓</span>
                  <span class="text-zinc-300">Desarrollo de soluciones personalizadas para clientes</span>
                </div>
                <div class="flex items-start gap-2 text-sm">
                  <span class="text-green-400 mt-0.5">✓</span>
                  <span class="text-zinc-300">Implementación de funcionalidades con tecnologías modernas</span>
                </div>
                <div class="flex items-start gap-2 text-sm">
                  <span class="text-green-400 mt-0.5">✓</span>
                  <span class="text-zinc-300">Optimización del rendimiento de plataformas</span>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="https://www.onegolive.com" target="_blank"
                  class="inline-flex items-center justify-center sm:justify-start text-indigo-400 hover:text-white transition-colors text-sm sm:text-base">
                  <span>Visitar sitio web</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4 ml-1" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <!-- Enlace a la nueva vista de la carta -->
                <router-link to="/carta-recomendacion"
                  class="inline-flex items-center justify-center sm:justify-start px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg text-white transition-all duration-300 text-sm sm:text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Ver Carta de Recomendación
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Información adicional sobre próximos pasos -->
        <div class="mb-12 sm:mb-16 relative">
          <div
            class="absolute left-4 sm:left-1/2 transform -translate-x-1/2 -mt-2 w-4 sm:w-6 h-4 sm:h-6 rounded-full border-2 border-emerald-500 bg-zinc-900 z-10 next-step-dot">
          </div>

          <div class="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div class="sm:text-right sm:pr-10 order-2 sm:order-1 fade-right mb-4 sm:mb-0">
              <div class="text-emerald-400 text-lg sm:text-xl mb-1 sm:mb-2">Próximos pasos</div>
              <div class="text-white text-xl sm:text-2xl font-semibold opacity-80">Búsqueda Activa</div>
              <div class="text-sm sm:text-base text-zinc-500 mt-1">🚀 Abierto a nuevas oportunidades</div>
            </div>

            <div
              class="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-800/50 sm:ml-10 order-1 sm:order-2 fade-left hover:border-emerald-500/30 transition-all duration-300">
              <h3 class="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Desarrollador Full-Stack Jr.</h3>
              <p class="text-zinc-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Tras completar mi formación dual y graduarme en DAW, estoy buscando activamente nuevas oportunidades
                profesionales donde pueda aplicar mis conocimientos y continuar creciendo como desarrollador.
              </p>

              <div class="space-y-2 text-sm">
                <div class="flex items-start gap-2">
                  <span class="text-emerald-400 mt-0.5">🎯</span>
                  <span class="text-zinc-300">Desarrollo Frontend y Backend</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-emerald-400 mt-0.5">🌱</span>
                  <span class="text-zinc-300">Especialización en transformación digital</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-emerald-400 mt-0.5">💼</span>
                  <span class="text-zinc-300">Disponible para incorporación inmediata</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tecnologías utilizadas -->
      <div class="mt-12 sm:mt-16 text-center">
        <h3 class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Tecnologías dominadas durante mi experiencia
        </h3>
        <div class="flex flex-wrap justify-center gap-2 sm:gap-4 max-w-4xl mx-auto">
          <div v-for="tech in technologies" :key="tech.name"
            class="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-900/70 border border-zinc-800 text-zinc-400 hover:text-white hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all duration-300 text-sm sm:text-base">
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection',
  data() {
    return {
      technologies: [
        { name: 'PHP' },
        { name: 'JavaScript' },
        { name: 'HTML5' },
        { name: 'Twig' },
        { name: 'CSS3' },
        { name: 'Symfony' },
        { name: 'PostgreSQL' },
        { name: 'TailwindCSS' },
        { name: 'Docker' },
        { name: 'Git' },
        { name: 'Vue.js' }
      ]
    }
  },
  mounted() {
    this.setupAnimations();
  },
  methods: {
    setupAnimations() {
      const fadeRightElements = document.querySelectorAll('.fade-right');
      const fadeLeftElements = document.querySelectorAll('.fade-left');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (entry.target.classList.contains('fade-right')) {
                entry.target.classList.add('animated-right');
              } else if (entry.target.classList.contains('fade-left')) {
                entry.target.classList.add('animated-left');
              }
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      fadeRightElements.forEach(el => observer.observe(el));
      fadeLeftElements.forEach(el => observer.observe(el));
    }
  }
}
</script>


<style scoped>
.fade-right {
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-left {
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animated-right,
.animated-left {
  opacity: 1;
  transform: translateX(0);
}

.glow-item {
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.7);
  animation: pulse-glow 2s infinite;
}

.next-step-dot {
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.7);
  animation: pulse-glow-green 2s infinite;
}

@keyframes pulse-glow {
  0% {
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.7);
  }

  50% {
    box-shadow: 0 0 25px rgba(99, 102, 241, 0.9);
  }

  100% {
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.7);
  }
}

@keyframes pulse-glow-green {
  0% {
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.7);
  }

  50% {
    box-shadow: 0 0 25px rgba(16, 185, 129, 0.9);
  }

  100% {
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.7);
  }
}

/* Optimizaciones para móvil */
@media (max-width: 640px) {
  .blur-2xl {
    filter: blur(20px);
  }

  .blur-3xl {
    filter: blur(30px);
  }
}
</style>
