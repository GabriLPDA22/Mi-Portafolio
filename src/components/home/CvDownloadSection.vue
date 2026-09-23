<template>
  <section id="contacto" class="relative py-20 sm:py-32 overflow-hidden">
    <!-- Fondo -->
    <div class="absolute inset-0 bg-gradient-to-br from-zinc-950 via-indigo-950/50 to-purple-950/50 z-0"></div>
    <div class="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px] z-0"></div>

    <!-- Efectos de fondo -->
    <div class="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse z-0"></div>
    <div class="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-purple-600/15 to-pink-600/15 blur-3xl animate-pulse z-0" style="animation-delay: 2s;"></div>

    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <!-- Header con título de fondo -->
      <div class="text-center mb-12 sm:mb-20 relative">
        <!-- Título de fondo gigante -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-8xl md:text-9xl font-bold opacity-5 text-white w-full text-center z-0 pointer-events-none">
          CONTACTO
        </div>

        <h2 class="text-4xl sm:text-5xl md:text-6xl font-black mb-6 relative z-10">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
            ¿Hablamos?
          </span>
        </h2>
        <div class="h-1 w-20 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-6"></div>
        <p class="text-lg sm:text-2xl text-zinc-300 max-w-3xl mx-auto font-light relative z-10">
          Si tienes un proyecto en mente o quieres colaborar,<br class="hidden sm:block" />
          <span class="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            estoy listo para hacerlo realidad
          </span>
        </p>
      </div>

      <!-- Contenido principal - Layout simplificado -->
      <div class="max-w-5xl mx-auto">
        <!-- Card principal -->
        <div class="bg-zinc-900/40 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl mb-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Email -->
            <button @click="copyEmail"
              class="group relative p-6 sm:p-8 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
              <div class="flex flex-col items-center text-center gap-4">
                <div class="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-white mb-2">Email</div>
                  <div class="text-sm text-zinc-400">Click para copiar mi email</div>
                </div>
              </div>
            </button>

            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/gabriel-saiz-de-la-maza-bajo-140370184/" target="_blank"
              class="group relative p-6 sm:p-8 bg-gradient-to-br from-blue-600/20 to-blue-500/20 rounded-2xl border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
              <div class="flex flex-col items-center text-center gap-4">
                <div class="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
                  <svg class="w-8 h-8 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-white mb-2">LinkedIn</div>
                  <div class="text-sm text-zinc-400">Conecta profesionalmente</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <!-- Fila inferior: CV + GitHub -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <!-- CV Download -->
          <div class="bg-zinc-900/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-teal-500/30 transition-all duration-300">
            <div class="flex items-center justify-between gap-4">
              <div>
                <h4 class="font-bold text-white mb-1 text-lg">Currículum</h4>
                <p class="text-sm text-zinc-400">Descarga mi CV completo</p>
              </div>
              <a href="/cv.pdf" download="Gabriel_Saiz_CV.pdf" target="_blank" @click="trackCvDownload"
                class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>

          <!-- GitHub -->
          <a href="https://github.com/GabriLPDA22" target="_blank"
            class="bg-zinc-900/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-gray-500/30 transition-all duration-300 group">
            <div class="flex items-center justify-between gap-4">
              <div>
                <h4 class="font-bold text-white mb-1 text-lg">GitHub</h4>
                <p class="text-sm text-zinc-400">Revisa mis proyectos</p>
              </div>
              <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-700/50 flex items-center justify-center group-hover:bg-gray-700 group-hover:scale-110 transition-all duration-300">
                <svg class="w-6 h-6 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
            </div>
          </a>
        </div>

        <!-- Info rápida -->
        <div class="mt-12 text-center">
          <div class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900/40 border border-white/10 backdrop-blur-sm">
            <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span class="text-zinc-300 text-sm">Disponible para proyectos</span>
            <span class="text-zinc-600">•</span>
            <span class="text-zinc-300 text-sm">Respuesta en 24h</span>
          </div>
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
        this.showNotification('Email copiado al portapapeles');

        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'email_copy', {
            'event_category': 'contact',
            'event_label': 'email_copied'
          });
        }
      } catch (err) {
        this.showNotification('Email: ' + email);
      }
    },

    trackCvDownload() {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'cv_download', {
          'event_category': 'contact',
          'event_label': 'cv_download'
        });
      }
    },

    showNotification(message) {
      const notification = document.createElement('div');
      notification.className = 'fixed top-20 right-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow-2xl z-50 transition-all duration-300 transform translate-x-full opacity-0';
      notification.textContent = message;

      document.body.appendChild(notification);

      setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
      }, 100);

      setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => {
          if (document.body.contains(notification)) {
            document.body.removeChild(notification);
          }
        }, 300);
      }, 3000);
    }
  }
}
</script>

<style scoped>
/* Grid pattern background */
.bg-grid-white\/\[0\.02\] {
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
}

/* Animaciones suaves */
@media (prefers-reduced-motion: no-preference) {
  * {
    scroll-behavior: smooth;
  }
}
</style>