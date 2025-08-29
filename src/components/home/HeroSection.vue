<template>
  <section id="inicio" class="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
    <!-- Efectos de fondo sutilmente dinámicos -->
    <div class="absolute inset-0 z-0">
      <!-- Círculos decorativos con transiciones suaves -->
      <div :class="[
        'absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl transition-all duration-[3000ms]',
        currentMode === 'dev' ? 'bg-indigo-600/10' : 'bg-red-600/8'
      ]"></div>
      <div :class="[
        'absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl transition-all duration-[3000ms]',
        currentMode === 'dev' ? 'bg-rose-600/10' : 'bg-orange-600/8'
      ]"></div>

      <!-- Patrones decorativos originales -->
      <div class="absolute right-32 top-32 opacity-20">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="white" stroke-width="2" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="white" stroke-width="2" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="white" stroke-width="2" />
        </svg>
      </div>
      <div class="absolute left-48 bottom-32 opacity-20">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="100" height="100" stroke="white" stroke-width="2" />
          <rect x="30" y="30" width="60" height="60" stroke="white" stroke-width="2" />
        </svg>
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Columna de texto con efecto parallax -->
        <div class="space-y-6 text-left">
          <!-- Badge animado con parallax - Mejorado con dual gradient -->
          <MouseParallaxEffect :intensity="0.03" :enable-rotation="false">
            <div class="inline-flex overflow-hidden p-[1px] rounded-full bg-dual-gradient animate-dual-pulse"
              :class="animationClass(0.3)">
              <div class="bg-zinc-900/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                <div :class="[
                  'w-2 h-2 rounded-full animate-pulse transition-colors duration-1000',
                  currentMode === 'dev' ? 'bg-green-400' : 'bg-red-400'
                ]"></div>
                <span class="text-sm font-medium text-white/80">{{ currentStatus }}</span>
              </div>
            </div>
          </MouseParallaxEffect>

          <!-- Encabezado con parallax más intenso -->
          <MouseParallaxEffect :intensity="0.05" :perspective="1200">
            <h2 class="text-2xl text-indigo-400 mb-4 font-medium" :class="animationClass(0.5)">¡Hola! Soy
            </h2>

            <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none z-20 relative"
              :class="animationClassModified(0.7)">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Gabriel Saiz
              </span>
            </h1>

            <!-- Título con transición suave -->
            <div class="flex items-center space-x-4 mt-3 mb-8" :class="animationClass(0.9)">
              <div :class="[
                'h-1 w-16 transition-all duration-1000',
                currentMode === 'dev' ? 'bg-indigo-500' : 'bg-red-500'
              ]"></div>
              <div class="text-2xl font-medium text-white transition-all duration-500">
                {{ currentTitle }}
              </div>
              <!-- Icono pequeño que rota -->
              <div :class="[
                'p-2 rounded-lg transition-all duration-1000',
                currentMode === 'dev' ? 'bg-indigo-600/20' : 'bg-red-600/20'
              ]">
                <font-awesome-icon
                  :icon="currentMode === 'dev' ? ['fas', 'code'] : ['fas', 'shield']"
                  class="w-4 h-4 text-white transition-transform duration-500"
                />
              </div>
            </div>
          </MouseParallaxEffect>

          <!-- Descripción con parallax sutil - Unificada -->
          <MouseParallaxEffect :intensity="0.02" :enable-rotation="false">
            <p class="text-xl text-zinc-400 max-w-xl" :class="animationClass(1.1)">
              Soy un <span class="text-white font-medium">Desarrollador Web </span>
              <span class="text-rose-400">apasionado por construir aplicaciones modernas</span> y
              <span :class="currentMode === 'dev' ? 'text-indigo-400' : 'text-orange-400'">
                {{ currentMode === 'dev' ? 'crear soluciones digitales' : 'proteger infraestructuras seguras' }}
              </span>.
              Desde <span class="text-indigo-400">Zaragoza, España</span>.
            </p>
          </MouseParallaxEffect>

          <!-- Skills que cambian sutilmente -->
          <div class="flex flex-wrap gap-2 mt-6" :class="animationClass(1.15)">
            <span v-for="(skill, index) in currentSkills.slice(0, 5)" :key="skill"
                  :class="[
                    'px-3 py-1 rounded-full text-sm font-medium border transition-all duration-700 animate-fade-in-up',
                    currentMode === 'dev' ? 'bg-blue-500/10 border-blue-500/30 text-blue-300' : 'bg-red-500/10 border-red-500/30 text-red-300'
                  ]"
                  :style="{ animationDelay: (1.2 + index * 0.1) + 's' }">
              {{ skill }}
            </span>
          </div>

          <!-- Indicador discreto del modo actual -->
          <div class="flex items-center gap-3 mt-4 text-sm text-gray-500" :class="animationClass(1.25)">
            <div class="flex gap-1">
              <div :class="[
                'w-2 h-2 rounded-full transition-all duration-500',
                currentMode === 'dev' ? 'bg-indigo-500' : 'bg-gray-600'
              ]"></div>
              <div :class="[
                'w-2 h-2 rounded-full transition-all duration-500',
                currentMode === 'cybersec' ? 'bg-red-500' : 'bg-gray-600'
              ]"></div>
            </div>
            <span class="transition-colors duration-500">{{ currentLabel }}</span>
          </div>

          <!-- Botones de acción con parallax - ARREGLADOS -->
          <MouseParallaxEffect :intensity="0.04" :perspective="1000">
            <div class="flex flex-wrap gap-4 mt-8" :class="animationClass(1.3)">
              <!-- Botón principal ARREGLADO -->
              <a href="#proyectos" class="btn-primary group">
                <span class="relative flex items-center gap-2">
                  Ver proyectos
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor"
                    class="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </a>

              <!-- Botón "Saber más de mí" -->
              <a href="#sobre-mi" class="btn-secondary group">
                <span class="relative flex items-center gap-2">
                  Saber más de mí
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor"
                    class="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </span>
              </a>

              <a href="/cv.pdf" download="Gabriel_Saiz_CV.pdf" target="_blank" @click="trackCvDownload"
                class="btn-cv group">
                <span class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Descargar CV
                </span>
              </a>
            </div>
          </MouseParallaxEffect>

          <!-- Enlaces sociales -->
          <div class="flex items-center gap-6 mt-12" :class="animationClass(1.5)">
            <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer"
              class="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-800/50 border border-white/5 text-zinc-400 hover:text-white hover:bg-indigo-600/20 hover:border-indigo-600/50 transition-all duration-300 hover:-translate-y-1"
              :aria-label="link.name">
              <span v-html="link.icon"></span>
            </a>
          </div>
        </div>

        <!-- Columna de imagen con parallax -->
        <MouseParallaxEffect :intensity="0.06" :perspective="1000">
          <div class="relative flex justify-center lg:justify-end animate-float">
            <div class="relative">
              <!-- Marco decorativo animado -->
              <div class="absolute inset-0 rotate-3 rounded-3xl border border-indigo-500/30 bg-indigo-500/5">
              </div>
              <div class="absolute inset-0 -rotate-3 rounded-3xl border border-rose-500/20 bg-rose-500/5">
              </div>

              <!-- Imagen principal con efecto de brillo -->
              <div
                class="relative overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl shadow-black/50 bg-gradient-to-br from-zinc-800 to-zinc-900 z-10">
                <div class="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]"></div>

                <img src="/img/Yo.webp" alt="Gabriel Saiz"
                  class="w-[350px] h-[450px] object-cover object-center z-10 mix-blend-screen opacity-90 scale-105" />

                <!-- Efecto de brillo -->
                <div class="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-xl">
                </div>
              </div>

              <!-- Elemento flotante "años exp." - Dinámico -->
              <div
                class="hidden md:flex absolute -bottom-10 -left-10 w-24 h-24 backdrop-blur-md bg-zinc-900/50 border border-white/10 rounded-lg items-center justify-center animate-float-delay-1 shadow-lg">
                <div :class="[
                  'text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r transition-all duration-1000',
                  currentMode === 'dev' ? 'from-indigo-400 to-indigo-600' : 'from-red-400 to-orange-600'
                ]">
                  {{ currentMode === 'dev' ? '1+' : 'Oct' }}
                </div>
                <div class="text-xs text-zinc-400 absolute bottom-3">
                  {{ currentMode === 'dev' ? 'años exp.' : '2025' }}
                </div>
              </div>

              <!-- Versión móvil del elemento flotante -->
              <div
                class="md:hidden absolute -bottom-5 -left-5 w-20 h-20 backdrop-blur-md bg-zinc-900/50 border border-white/10 rounded-lg flex flex-col items-center justify-center animate-float-delay-1 shadow-lg z-20">
                <div :class="[
                  'text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r transition-all duration-1000',
                  currentMode === 'dev' ? 'from-indigo-400 to-indigo-600' : 'from-red-400 to-orange-600'
                ]">
                  {{ currentMode === 'dev' ? '1+' : 'Oct' }}
                </div>
                <div class="text-xs text-zinc-400 mt-1">
                  {{ currentMode === 'dev' ? 'años' : '2025' }}
                </div>
              </div>

              <!-- Elemento flotante especialidad - Dinámico -->
              <div
                class="hidden md:block absolute -top-10 -right-10 p-3 backdrop-blur-md bg-zinc-900/50 border border-white/10 rounded-lg animate-float-delay-2 shadow-lg">
                <div class="flex space-x-1">
                  <span :class="[
                    'block w-3 h-3 rounded-full transition-colors duration-1000',
                    currentMode === 'dev' ? 'bg-indigo-500' : 'bg-red-500'
                  ]"></span>
                  <span :class="[
                    'block w-3 h-3 rounded-full transition-colors duration-1000',
                    currentMode === 'dev' ? 'bg-purple-500' : 'bg-orange-500'
                  ]"></span>
                  <span :class="[
                    'block w-3 h-3 rounded-full transition-colors duration-1000',
                    currentMode === 'dev' ? 'bg-rose-500' : 'bg-amber-500'
                  ]"></span>
                </div>
                <div class="text-xs text-zinc-400 mt-1">
                  {{ currentMode === 'dev' ? 'Desarrollador' : 'Security' }}
                </div>
              </div>

              <!-- Versión móvil especialidad -->
              <div
                class="md:hidden absolute -top-5 -right-5 p-2 backdrop-blur-md bg-zinc-900/50 border border-white/10 rounded-lg animate-float-delay-2 shadow-lg z-20">
                <div class="flex space-x-1">
                  <span :class="[
                    'block w-2 h-2 rounded-full transition-colors duration-1000',
                    currentMode === 'dev' ? 'bg-indigo-500' : 'bg-red-500'
                  ]"></span>
                  <span :class="[
                    'block w-2 h-2 rounded-full transition-colors duration-1000',
                    currentMode === 'dev' ? 'bg-purple-500' : 'bg-orange-500'
                  ]"></span>
                  <span :class="[
                    'block w-2 h-2 rounded-full transition-colors duration-1000',
                    currentMode === 'dev' ? 'bg-rose-500' : 'bg-amber-500'
                  ]"></span>
                </div>
                <div class="text-xs text-zinc-400 mt-1">
                  {{ currentMode === 'dev' ? 'Dev' : 'Sec' }}
                </div>
              </div>
            </div>
          </div>
        </MouseParallaxEffect>
      </div>

      <!-- Indicador de desplazamiento -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6 text-zinc-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import ParticleBackground from '@/components/ui/ParticleBackground.vue';
import MouseParallaxEffect from '@/components/ui/MouseParallaxEffect.vue';

export default {
  name: 'HeroSection',
  components: {
    ParticleBackground,
    MouseParallaxEffect
  },
  data() {
    return {
      currentMode: 'dev', // 'dev' o 'cybersec'

      modes: {
        dev: {
          title: 'Desarrollador Web Full-Stack',
          status: 'Disponible para proyectos',
          label: 'Desarrollo Web & Apps',
          skills: ['Vue.js', 'PHP', 'JavaScript', 'TypeScript', '.NET', 'Java', 'Symfony', 'PostgreSQL']
        },
        cybersec: {
          title: 'Especialista en Ciberseguridad',
          status: 'Iniciando máster en octubre 2024',
          label: 'Ciberseguridad & SecDevOps',
          skills: ['Security Fundamentals', 'OWASP Top 10', 'Vulnerability Analysis', 'Risk Assessment', 'Network Security', 'Compliance']
        }
      },

      socialLinks: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/gabriel-saiz-de-la-maza-bajo-140370184/',
          icon: '<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>'
        },
        {
          name: 'GitHub',
          url: 'https://github.com/GabriLPDA22',
          icon: '<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>'
        },
        {
          name: 'Email',
          url: 'mailto:gsaiz.bajo@gmail.com',
          icon: '<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'
        }
      ]
    }
  },

  computed: {
    currentTitle() {
      return this.modes[this.currentMode].title;
    },
    currentStatus() {
      return this.modes[this.currentMode].status;
    },
    currentLabel() {
      return this.modes[this.currentMode].label;
    },
    currentSkills() {
      return this.modes[this.currentMode].skills;
    }
  },

  methods: {
    trackCvDownload() {
      if (typeof this.$track === 'function') {
        this.$track('cv_download', {
          section: 'hero_section',
          device_type: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'mobile' : 'desktop'
        });
      }
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'file_download', {
          file_name: 'Gabriel_Saiz_CV.pdf',
          file_type: 'pdf',
          download_method: 'hero_button'
        });
      }
    },

    animationClass(delay, isClipText = false) {
      if (isClipText) {
        return {
          'animate-clip-text': true,
          'opacity-0': true,
          'style': `animation-delay: ${delay}s;`
        }
      }
      return {
        'animate-fade-in-up': true,
        'opacity-0': true,
        'style': `animation-delay: ${delay}s;`
      }
    },

    animationClassModified(delay) {
      return {
        'animate-clip-text-visible': true,
        'style': `animation-delay: ${delay}s;`
      }
    },

    // Cambio suave de modo
    switchMode() {
      this.currentMode = this.currentMode === 'dev' ? 'cybersec' : 'dev';
    }
  },

  mounted() {
    // Tus animaciones originales
    setTimeout(() => {
      const animatedElements = document.querySelectorAll('.opacity-0');
      animatedElements.forEach(el => {
        el.classList.remove('opacity-0');
        el.classList.add('opacity-100');
      });
    }, 3000);

    if (typeof this.$track === 'function') {
      this.$track('section_view', { section_id: 'hero' });
    }

    // Cambio automático sutil cada 8 segundos
    setInterval(() => {
      this.switchMode();
    }, 8000);
  }
}
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out both;
}

.animate-clip-text {
  animation: clipText 1s cubic-bezier(0.25, 1, 0.5, 1) both;
}

.animate-clip-text-visible {
  animation: clipTextVisible 1s cubic-bezier(0.25, 1, 0.5, 1) both;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delay-1 {
  animation: float 6s ease-in-out 1s infinite;
}

.animate-float-delay-2 {
  animation: float 6s ease-in-out 2s infinite;
}

/* Gradiente dual para el badge */
.bg-dual-gradient {
  background: linear-gradient(90deg,
    #4F46E5 0%, #4F46E5 45%,
    #DC2626 55%, #DC2626 100%);
  background-size: 200% 100%;
  background-position: 0% 50%;
}

.animate-dual-pulse {
  animation: dualPulse 6s ease-in-out infinite;
}

@keyframes dualPulse {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Botones arreglados */
.btn-primary {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%);
  border-radius: 50px;
  padding: 14px 32px;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  font-size: 16px;
  color: white;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(79, 70, 229, 0.25);
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(79, 70, 229, 0.4);
}

.btn-secondary {
  position: relative;
  background: rgba(24, 24, 27, 0.8);
  border: 2px solid rgba(99, 102, 241, 0.3);
  border-radius: 50px;
  padding: 12px 28px;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  font-size: 16px;
  color: #A5B4FC;
  text-decoration: none;
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary:hover {
  border-color: rgba(99, 102, 241, 0.6);
  background: rgba(99, 102, 241, 0.1);
  color: white;
  transform: translateY(-1px);
}

.btn-cv {
  position: relative;
  background: rgba(24, 24, 27, 0.8);
  border: 2px solid rgba(99, 102, 241, 0.3);
  border-radius: 50px;
  padding: 12px 24px;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  font-size: 16px;
  color: #A5B4FC;
  text-decoration: none;
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-cv:hover {
  border-color: rgba(99, 102, 241, 0.6);
  background: rgba(99, 102, 241, 0.1);
  color: white;
  transform: translateY(-1px);
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .btn-primary, .btn-secondary, .btn-cv {
    padding: 12px 24px;
    min-height: 44px;
    font-size: 14px;
    width: 100%;
    margin-bottom: 8px;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes clipText {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

@keyframes clipTextVisible {
  from {
    clip-path: inset(0 80% 0 0);
    opacity: 0.3;
  }
  to {
    clip-path: inset(0 0 0 0);
    opacity: 1;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.bg-grid-white {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E");
}
</style>
