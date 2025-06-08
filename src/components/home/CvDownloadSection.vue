<template>
    <section id="contacto" class="relative py-20 sm:py-24 overflow-hidden">
      <!-- Fondo con efectos mejorados -->
      <div class="absolute inset-0 bg-gradient-to-br from-zinc-950 via-indigo-950/50 to-purple-950/50 z-0"></div>
      <div class="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px] z-0"></div>

      <!-- Efectos de partículas flotantes -->
      <div class="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse z-0"></div>
      <div class="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-purple-600/15 to-pink-600/15 blur-3xl animate-pulse z-0" style="animation-delay: 2s;"></div>

      <!-- Patrones decorativos animados -->
      <div class="absolute left-4 sm:left-10 bottom-10 opacity-10 z-0 animate-spin-slow">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="55" stroke="white" stroke-width="2"/>
          <circle cx="60" cy="60" r="40" stroke="white" stroke-width="2"/>
          <circle cx="60" cy="60" r="25" stroke="white" stroke-width="2"/>
        </svg>
      </div>
      <div class="absolute right-4 sm:right-10 top-10 opacity-10 z-0 animate-pulse">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="80" stroke="white" stroke-width="2"/>
          <line x1="0" y1="20" x2="80" y2="20" stroke="white" stroke-width="2"/>
          <line x1="0" y1="40" x2="80" y2="40" stroke="white" stroke-width="2"/>
          <line x1="0" y1="60" x2="80" y2="60" stroke="white" stroke-width="2"/>
          <line x1="20" y1="0" x2="20" y2="80" stroke="white" stroke-width="2"/>
          <line x1="40" y1="0" x2="40" y2="80" stroke="white" stroke-width="2"/>
          <line x1="60" y1="0" x2="60" y2="80" stroke="white" stroke-width="2"/>
        </svg>
      </div>

      <!-- Contenido principal -->
      <div class="container mx-auto px-4 sm:px-6 relative z-10">
        <!-- Título mejorado -->
        <div class="text-center mb-12 sm:mb-16">
          <div class="inline-block">
            <h2 class="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 relative">
              <span class="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 blur-lg">
                Conectemos
              </span>
              <span class="relative bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
                Conectemos
              </span>
            </h2>
            <div class="h-1 w-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4 sm:mb-6"></div>
            <p class="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? ¡Hablemos y hagamos realidad tus ideas!
            </p>
          </div>
        </div>

        <!-- Contenedor principal -->
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">

            <!-- Columna izquierda - Call to action principal -->
            <div class="lg:col-span-2 space-y-8">
              <!-- Card principal -->
              <div class="bg-zinc-900/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-2">
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <h3 class="text-2xl sm:text-3xl font-bold text-white">¿Listo para colaborar?</h3>
                </div>

                <p class="text-zinc-300 text-base sm:text-lg mb-8 leading-relaxed">
                  Si buscas un desarrollador web apasionado por crear soluciones innovadoras, estaré encantado de
                  conocer tu proyecto. Con experiencia en <strong class="text-white">Vue.js, .NET 9, PostgreSQL</strong>
                  y <strong class="text-white">despliegue en la nube</strong>, puedo ayudarte a materializar tus ideas.
                </p>

                <!-- Opciones de contacto mejoradas -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <!-- Email -->
                  <button @click="copyEmail"
                    class="group relative p-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 hover:-translate-y-1">
                    <div class="flex items-center gap-3">
                      <div class="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div class="text-left">
                        <div class="font-semibold text-white">Email</div>
                        <div class="text-sm text-zinc-400">Copiar dirección</div>
                      </div>
                    </div>
                  </button>

                  <!-- LinkedIn -->
                  <a href="https://www.linkedin.com/in/gabriel-saiz-de-la-maza-bajo-140370184/" target="_blank"
                    class="group relative p-4 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1">
                    <div class="flex items-center gap-3">
                      <div class="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                        <svg class="w-6 h-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </div>
                      <div class="text-left">
                        <div class="font-semibold text-white">LinkedIn</div>
                        <div class="text-sm text-zinc-400">Conectar profesional</div>
                      </div>
                    </div>
                  </a>
                </div>

                <!-- CV Download mejorado -->
                <div class="p-4 bg-gradient-to-r from-teal-600/10 to-emerald-600/10 rounded-xl border border-teal-500/20">
                  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h4 class="font-semibold text-white mb-1">Currículum Completo</h4>
                      <p class="text-sm text-zinc-400">Descarga mi CV con todos los detalles técnicos y experiencia</p>
                    </div>
                    <a href="/cv.pdf" target="_blank" @click="trackCvDownload"
                      class="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl text-white font-medium transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-teal-500/20">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      </svg>
                      Descargar CV
                    </a>
                  </div>
                </div>
              </div>

              <!-- Stats rápidas -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="bg-zinc-900/40 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center hover:border-indigo-500/30 transition-all duration-300">
                  <div class="text-2xl font-bold text-indigo-400 mb-1">1+</div>
                  <div class="text-xs text-zinc-400">Año Experiencia</div>
                </div>
                <div class="bg-zinc-900/40 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center hover:border-purple-500/30 transition-all duration-300">
                  <div class="text-2xl font-bold text-purple-400 mb-1">7+</div>
                  <div class="text-xs text-zinc-400">Proyectos</div>
                </div>
                <div class="bg-zinc-900/40 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center hover:border-teal-500/30 transition-all duration-300">
                  <div class="text-2xl font-bold text-teal-400 mb-1">100%</div>
                  <div class="text-xs text-zinc-400">TFG Completado</div>
                </div>
                <div class="bg-zinc-900/40 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center hover:border-emerald-500/30 transition-all duration-300">
                  <div class="text-2xl font-bold text-emerald-400 mb-1">24h</div>
                  <div class="text-xs text-zinc-400">Respuesta</div>
                </div>
              </div>
            </div>

            <!-- Columna derecha - Información de contacto -->
            <div class="space-y-6">
              <!-- Info personal -->
              <div class="bg-zinc-900/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg">
                <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span class="text-indigo-400">👨‍💻</span>
                  Información
                </h3>

                <div class="space-y-4">
                  <div class="flex items-start gap-3 text-zinc-300">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-xs text-zinc-400 uppercase tracking-wide">Desarrollador</div>
                      <div class="font-medium">Gabriel Saiz</div>
                      <div class="text-sm text-zinc-500">Full-Stack Developer</div>
                    </div>
                  </div>

                  <div class="flex items-start gap-3 text-zinc-300">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-xs text-zinc-400 uppercase tracking-wide">Ubicación</div>
                      <div class="font-medium">Zaragoza, España</div>
                      <div class="text-sm text-zinc-500">Disponible para proyectos</div>
                    </div>
                  </div>

                  <div class="flex items-start gap-3 text-zinc-300">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-xs text-zinc-400 uppercase tracking-wide">Disponibilidad</div>
                      <div class="font-medium">Respuesta en 24h</div>
                      <div class="text-sm text-zinc-500">Lunes a Viernes</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Especialidades -->
              <div class="bg-zinc-900/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg">
                <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span class="text-emerald-400">⚡</span>
                  Especialidades
                </h3>

                <div class="space-y-3">
                  <div class="flex items-center gap-2 text-sm">
                    <div class="w-2 h-2 rounded-full bg-green-400"></div>
                    <span class="text-zinc-300">Desarrollo Frontend (Vue.js)</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <div class="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span class="text-zinc-300">Backend (.NET 9, PostgreSQL)</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <div class="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span class="text-zinc-300">DevOps (Docker, AWS)</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <div class="w-2 h-2 rounded-full bg-teal-400"></div>
                    <span class="text-zinc-300">Transformación Digital</span>
                  </div>
                </div>
              </div>

              <!-- Enlaces sociales ampliados -->
              <div class="bg-zinc-900/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg">
                <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span class="text-pink-400">🔗</span>
                  Redes
                </h3>

                <div class="grid grid-cols-2 gap-3">
                  <a href="https://www.linkedin.com/in/gabriel-saiz-de-la-maza-bajo-140370184/" target="_blank"
                    class="flex items-center justify-center gap-2 p-3 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 hover:border-blue-400/40 rounded-lg transition-all duration-300 group">
                    <svg class="w-5 h-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span class="text-sm text-white group-hover:text-blue-300">LinkedIn</span>
                  </a>

                  <a href="https://github.com/GabriLPDA22" target="_blank"
                    class="flex items-center justify-center gap-2 p-3 bg-gray-600/10 hover:bg-gray-600/20 border border-gray-500/20 hover:border-gray-400/40 rounded-lg transition-all duration-300 group">
                    <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span class="text-sm text-white group-hover:text-gray-300">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to action final -->
        <div class="text-center mt-16">
          <div class="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30">
            <span class="text-indigo-400 mr-2">💡</span>
            <span class="text-white font-medium">¿Tienes una idea? ¡Hagámosla realidad juntos!</span>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'ContactSection',
  methods: {
    async copyEmail() {
      const email = 'gsaiz.bajo@gmail.com';

      try {
        await navigator.clipboard.writeText(email);
        this.showNotification('📧 Email copiado: ' + email);

        // Tracking
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'email_copy', {
            'event_category': 'contact',
            'event_label': 'email_copied_contact_section'
          });
        }
      } catch (err) {
        this.showNotification('📧 Email: ' + email);
      }
    },

    trackCvDownload() {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'cv_download', {
          'event_category': 'contact',
          'event_label': 'cv_download_contact_section'
        });
      }
    },

    showNotification(message) {
      const notification = document.createElement('div');
      notification.className = 'fixed top-20 right-4 bg-indigo-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-x-full opacity-0';
      notification.textContent = message;

      document.body.appendChild(notification);

      // Animar entrada
      setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
      }, 100);

      // Remover después de 4 segundos
      setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => {
          if (document.body.contains(notification)) {
            document.body.removeChild(notification);
          }
        }, 300);
      }, 4000);
    }
  }
}
</script>

<style scoped>
/* Animación de rotación lenta */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

/* Efectos hover mejorados */
.hover\:-translate-y-1:hover {
  transform: translateY(-0.25rem);
}

.hover\:-translate-y-2:hover {
  transform: translateY(-0.5rem);
}

/* Grid pattern background */
.bg-grid-white\/\[0\.02\] {
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .text-4xl {
    font-size: 2.5rem;
  }

  .text-5xl {
    font-size: 3rem;
  }

  .text-6xl {
    font-size: 3.5rem;
  }
}
</style>
