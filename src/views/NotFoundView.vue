<template>
    <div class="min-h-screen pt-20 pb-16 flex items-center justify-center">
      <div class="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div class="max-w-lg mx-auto glass-card p-8 sm:p-10">
          <!-- Imagen del monstruo 404 -->
          <div class="mb-8 mx-auto w-64">
            <img src="" alt="Error 404" class="w-full h-auto" 
                 onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMTUwIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzZhNWRjOSIgcng9IjEwIiByeT0iMTAiLz48Y2lyY2xlIGN4PSI2NSIgY3k9IjgwIiByPSIyNSIgZmlsbD0iI2ZmZiIvPjxjaXJjbGUgY3g9IjY1IiBjeT0iODAiIHI9IjEyIiBmaWxsPSIjMDAwIi8+PGNpcmNsZSBjeD0iMTMwIiBjeT0iODAiIHI9IjI1IiBmaWxsPSIjZmZmIi8+PGNpcmNsZSBjeD0iMTMwIiBjeT0iODAiIHI9IjEyIiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTcwIDExMGMxNSAyMCA0NCAyMCA2MCAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNCIgZmlsbD0ibm9uZSIvPjx0ZXh0IHg9IjEwMCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+NDA0PC90ZXh0PjxwYXRoIGQ9Ik00MCAyMGwyMCAxME02MCAxMGwxNSAyNU0xNDAgMjBsMjAgMTBNMTYwIDEwbDE1IDI1IiBzdHJva2U9IiNmZjgwODAiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+'">
          </div>
  
          <h1 class="text-3xl sm:text-4xl font-bold text-white mb-4">Oops, página no encontrada</h1>
          
          <p class="text-zinc-400 mb-8">
            La página que estás buscando no existe o ha sido movida.
          </p>
  
          <div class="flex justify-center">
            <router-link to="/" 
              class="group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-3 text-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25">
              <span class="relative flex items-center gap-2">
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="transform rotate-180" />
                Volver al inicio
              </span>
              <span class="absolute right-0 -top-2 -z-10 h-14 w-14 rounded-full bg-indigo-800 transition-all duration-300 ease-in-out group-hover:scale-150"></span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent, onMounted } from 'vue';
  import { useTitle } from '@vueuse/core';
  
  export default defineComponent({
    name: 'NotFoundView',
    setup() {
      // Establecer el título de la página
      useTitle('404 - Página no encontrada');
      
      onMounted(() => {
        // Registrar evento de página no encontrada
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'page_404', {
            page: window.location.pathname,
            referrer: document.referrer,
            timestamp: new Date().toISOString()
          });
        }
      })
    }
  });
  </script>