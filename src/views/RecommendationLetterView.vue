<template>
  <div class="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-indigo-950/30 pt-20 pb-10">
    <!-- Efectos de fondo -->
    <div class="fixed inset-0 z-0">
      <div class="absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <!-- Header con navegación -->
      <div class="flex items-center justify-between mb-8">
        <!-- Botón volver -->
        <router-link to="/#experiencia"
          class="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
          <div class="relative h-8 w-8 rounded-full bg-zinc-800/80 flex items-center justify-center overflow-hidden group-hover:bg-indigo-600/30 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 transform transition-transform group-hover:-translate-x-1" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </div>
          <span class="font-medium">Volver a Experiencia</span>
        </router-link>

        <!-- Botón descargar -->
        <a href="/documents/carta-recomendacion-golive.pdf"
           download="Carta_Recomendacion_Gabriel_Saiz_GOLIVE.pdf"
           class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl text-white transition-all duration-300 shadow-lg hover:shadow-xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Descargar PDF Original
        </a>
      </div>

      <!-- Título principal -->
      <div class="text-center mb-8">
        <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Carta de Recomendación
          </span>
        </h1>
        <div class="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
        <p class="text-xl text-zinc-400 max-w-2xl mx-auto">
          Documento oficial expedido por <strong class="text-white">GOLIVE Services S.L.</strong>
        </p>
      </div>

      <!-- Contenedor principal del PDF -->
      <div class="max-w-5xl mx-auto">
        <div class="bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50 shadow-2xl overflow-hidden">

          <!-- Header de la carta -->
          <div class="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-b border-zinc-800/50 p-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <img src="/img/golive-logo.svg" alt="GOLIVE Services" class="h-12 w-auto" />
                <div>
                  <h2 class="text-xl font-bold text-white">ONEGOLIVE SERVICES S.L.</h2>
                  <p class="text-indigo-400">Consultora Tecnológica</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-zinc-400 text-sm">Zaragoza, España</p>
                <p class="text-zinc-400 text-sm">Junio 2025</p>
              </div>
            </div>
          </div>

          <!-- Imagen de la carta -->
          <div class="p-6">
            <div class="bg-white rounded-xl overflow-hidden shadow-inner">
              <img
                src="/img/carta-recomendacion-golive.png"
                alt="Carta de Recomendación GOLIVE Services - Gabriel Saiz"
                class="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <!-- Footer con información adicional -->
          <div class="bg-zinc-800/30 border-t border-zinc-800/50 p-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div class="text-indigo-400 font-semibold mb-1">Período</div>
                <div class="text-zinc-300">Sept 2024 - Jun 2025</div>
              </div>
              <div>
                <div class="text-indigo-400 font-semibold mb-1">Posición</div>
                <div class="text-zinc-300">Software Developer</div>
              </div>
              <div>
                <div class="text-indigo-400 font-semibold mb-1">Modalidad</div>
                <div class="text-zinc-300">Formación Dual</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Información adicional -->
        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Tecnologías utilizadas -->
          <div class="bg-zinc-900/30 backdrop-blur-sm rounded-xl border border-zinc-800/30 p-6">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Tecnologías Utilizadas
            </h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">PHP</span>
              <span class="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">JavaScript</span>
              <span class="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">Symfony</span>
              <span class="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">PostgreSQL</span>
              <span class="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">AWS</span>
              <span class="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">Docker</span>
            </div>
          </div>

          <!-- Contacto empresa -->
          <div class="bg-zinc-900/30 backdrop-blur-sm rounded-xl border border-zinc-800/30 p-6">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-2 0H7m5 0v-9a1 1 0 00-1-1H9a1 1 0 00-1 1v9m3 0V9a1 1 0 011-1h2a1 1 0 011 1v11M7 21h2m3 0h2" />
              </svg>
              Empresa
            </h3>
            <div class="space-y-2 text-sm text-zinc-300">
              <p><strong class="text-white">ONEGOLIVE SERVICES S.L.</strong></p>
              <p>CIF: B99198715</p>
              <p>Consultora Tecnológica</p>
              <a href="https://www.onegolive.com" target="_blank"
                 class="inline-flex items-center gap-1 text-indigo-400 hover:text-white transition-colors">
                www.onegolive.com
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendationLetterView',
  mounted() {
    // Actualizar título de la página
    document.title = 'Carta de Recomendación - Gabriel Saiz'
  }
}
</script>

<style scoped>
/* Animaciones suaves */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.container > * {
  animation: fadeIn 0.6s ease-out;
}

/* Asegurar que el PDF se vea bien */
embed {
  border: none;
  border-radius: 8px;
}
</style>
