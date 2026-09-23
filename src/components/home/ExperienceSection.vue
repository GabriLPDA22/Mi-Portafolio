<template>
  <section id="experiencia" class="py-16 sm:py-24 relative overflow-hidden bg-zinc-950">
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
          Mi trayectoria profesional en desarrollo full-stack
        </p>
      </div>

      <!-- Timeline de experiencia -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Línea central -->
        <div
          class="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-600/50 via-purple-600/50 to-transparent">
        </div>

        <!-- GOLIVE Services - Experiencia completada -->
        <div class="mb-12 sm:mb-20 relative">
          <!-- Punto de la timeline -->
          <div
            class="absolute left-4 sm:left-1/2 transform -translate-x-1/2 -mt-2 w-4 sm:w-6 h-4 sm:h-6 rounded-full border-2 border-indigo-500 bg-zinc-900 z-10 glow-item">
          </div>

          <!-- Contenido -->
          <div class="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
            <!-- Fecha (Izquierda) -->
            <div class="sm:text-right sm:pr-10 order-2 sm:order-1 fade-right mb-4 sm:mb-0">
              <div class="text-indigo-400 text-lg sm:text-xl mb-1 sm:mb-2 font-semibold">Sep 2024 - Jun 2025</div>
              <div class="text-white text-xl sm:text-2xl font-bold opacity-90">GOLIVE Services</div>
              <div class="inline-flex items-center gap-2 mt-2 text-sm sm:text-base">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span class="text-green-400">Formación Dual Completada</span>
              </div>
            </div>

            <!-- Detalles (Derecha) -->
            <div
              class="group bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-5 sm:p-7 border border-zinc-800 sm:ml-10 order-1 sm:order-2 fade-left hover:border-indigo-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-1">
              <h3 class="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-indigo-400 transition-colors">
                Mobile Technology & Web Development
              </h3>
              <p class="text-zinc-400 mb-4 sm:mb-5 text-sm sm:text-base leading-relaxed">
                Formación dual en GOLIVE, consultora tecnológica especializada en 
                <span class="text-indigo-400 font-medium">desarrollo web</span> y 
                <span class="text-purple-400 font-medium">aplicaciones móviles</span>. 
                Colaboración directa con clientes en proyectos de transformación digital.
              </p>

              <!-- Logros destacados -->
              <div class="space-y-2.5 mb-5">
                <div class="flex items-start gap-3 text-sm group/item">
                  <span class="text-green-400 mt-0.5 text-lg">✓</span>
                  <span class="text-zinc-300 group-hover/item:text-white transition-colors">
                    Desarrollo de soluciones personalizadas para clientes
                  </span>
                </div>
                <div class="flex items-start gap-3 text-sm group/item">
                  <span class="text-green-400 mt-0.5 text-lg">✓</span>
                  <span class="text-zinc-300 group-hover/item:text-white transition-colors">
                    Implementación de funcionalidades con tecnologías modernas
                  </span>
                </div>
                <div class="flex items-start gap-3 text-sm group/item">
                  <span class="text-green-400 mt-0.5 text-lg">✓</span>
                  <span class="text-zinc-300 group-hover/item:text-white transition-colors">
                    Optimización del rendimiento de plataformas
                  </span>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-3">
                <a href="https://www.onegolive.com" target="_blank"
                  class="inline-flex items-center justify-center sm:justify-start text-indigo-400 hover:text-white transition-all duration-300 text-sm sm:text-base group/link">
                  <span>Visitar sitio web</span>
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    class="h-3 w-3 sm:h-4 sm:w-4 ml-1 group-hover/link:translate-x-1 transition-transform" 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <router-link to="/carta-recomendacion"
                  class="inline-flex items-center justify-center sm:justify-start px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg text-white transition-all duration-300 text-sm sm:text-base shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Carta de Recomendación
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Estado actual profesional (más sutil) -->
        <div class="mb-12 relative">
          <div
            class="absolute left-4 sm:left-1/2 transform -translate-x-1/2 -mt-2 w-4 sm:w-6 h-4 sm:h-6 rounded-full border-2 border-zinc-600 bg-zinc-900 z-10">
            <div class="absolute inset-0 rounded-full border-2 border-zinc-500 animate-ping opacity-20"></div>
          </div>

          <div class="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div class="sm:text-right sm:pr-10 order-2 sm:order-1 fade-right mb-4 sm:mb-0">
              <div class="text-zinc-400 text-base sm:text-lg mb-1">Actualidad</div>
              <div class="text-white/60 text-lg sm:text-xl font-medium">En crecimiento</div>
            </div>

            <div
              class="bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-zinc-800/50 sm:ml-10 order-1 sm:order-2 fade-left">
              <p class="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Graduado en DAW y con experiencia práctica en desarrollo full-stack. 
                Enfocado en continuar aprendiendo y aportar valor en proyectos desafiantes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Stack Tecnológico con el mismo estilo que Skills -->
      <div class="mt-16 sm:mt-20">
        <h3 class="text-xl sm:text-2xl font-bold text-white mb-8 text-center">
          Stack Tecnológico
        </h3>
        
        <!-- Grid de iconos con el mismo estilo que la sección Skills -->
        <div class="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
          <div
            v-for="(tech, index) in technologies"
            :key="tech.name"
            class="skill-badge group"
            :style="`animation-delay: ${index * 0.05}s`"
            :title="tech.name"
          >
            <!-- Glow effect -->
            <div 
              class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
              :class="tech.glowClass"
            ></div>

            <!-- Imagen del icono -->
            <div class="relative z-10">
              <img 
                :src="tech.icon" 
                :alt="tech.name"
                class="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
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
        { 
          name: 'Vue.js', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
          glowClass: 'bg-green-500/30'
        },
        { 
          name: 'PHP', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
          glowClass: 'bg-indigo-500/30'
        },
        { 
          name: 'JavaScript', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          glowClass: 'bg-yellow-500/30'
        },
        { 
          name: 'TypeScript', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          glowClass: 'bg-blue-500/30'
        },
        { 
          name: 'Symfony', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg',
          glowClass: 'bg-zinc-500/30'
        },
        { 
          name: 'React Native', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          glowClass: 'bg-cyan-500/30'
        },
        { 
          name: 'PostgreSQL', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
          glowClass: 'bg-blue-500/30'
        },
        { 
          name: 'TailwindCSS', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
          glowClass: 'bg-cyan-500/30'
        },
        { 
          name: 'Docker', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
          glowClass: 'bg-blue-500/30'
        },
        { 
          name: 'Git', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
          glowClass: 'bg-orange-500/30'
        },
        { 
          name: 'HTML5', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
          glowClass: 'bg-orange-500/30'
        },
        { 
          name: 'CSS3', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
          glowClass: 'bg-blue-500/30'
        }
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
      const skillBadges = document.querySelectorAll('.skill-badge');

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
        { threshold: 0.1 }
      );

      fadeRightElements.forEach(el => observer.observe(el));
      fadeLeftElements.forEach(el => observer.observe(el));
      skillBadges.forEach(el => observer.observe(el));
    }
  }
}
</script>

<style scoped>
.fade-right {
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-left {
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.animated-right,
.animated-left {
  opacity: 1;
  transform: translateX(0);
}

.glow-item {
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.6), 0 0 40px rgba(99, 102, 241, 0.3);
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.6), 0 0 40px rgba(99, 102, 241, 0.3);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 30px rgba(99, 102, 241, 0.8), 0 0 60px rgba(99, 102, 241, 0.4);
    transform: scale(1.05);
  }
}

/* Skill Badges - Mismo estilo que Skills section */
.skill-badge {
  position: relative;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(24, 24, 27, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(63, 63, 70, 0.5);
  border-radius: 0.875rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  animation: fade-in 0.4s ease-out forwards;
}

.skill-badge:hover {
  transform: translateY(-4px) scale(1.1);
  border-color: rgba(139, 92, 246, 0.6);
  background: rgba(139, 92, 246, 0.1);
  box-shadow: 0 10px 30px -10px rgba(139, 92, 246, 0.5);
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive: más grande en desktop */
@media (min-width: 768px) {
  .skill-badge {
    width: 60px;
    height: 60px;
  }
}

/* Optimizaciones para móvil */
@media (max-width: 640px) {
  .blur-2xl {
    filter: blur(40px);
  }

  .blur-3xl {
    filter: blur(60px);
  }
}

/* Animaciones suaves para interacciones */
@media (prefers-reduced-motion: no-preference) {
  * {
    scroll-behavior: smooth;
  }
}
</style>