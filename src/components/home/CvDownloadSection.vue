<template>
    <section class="relative py-20 overflow-hidden">
      <!-- Fondo con gradiente y efecto de malla -->
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/80 to-purple-900/80 z-0"></div>
      <div class="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px] z-0"></div>
      
      <!-- Patrones decorativos -->
      <div class="absolute left-10 bottom-10 opacity-20 z-0">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="55" stroke="white" stroke-width="2"/>
          <circle cx="60" cy="60" r="40" stroke="white" stroke-width="2"/>
          <circle cx="60" cy="60" r="25" stroke="white" stroke-width="2"/>
        </svg>
      </div>
      <div class="absolute right-10 top-10 opacity-20 z-0">
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
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto bg-zinc-900/40 backdrop-blur-md rounded-2xl p-10 border border-white/10 shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <!-- Columna izquierda -->
            <div>
              <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">¿Buscas más detalles sobre mi perfil?</h2>
              <div class="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mb-6"></div>
              
              <p class="text-zinc-300 mb-8">
                Si quieres conocer más sobre mi experiencia, formación y habilidades técnicas, puedes descargar 
                mi CV completo. Estoy abierto a nuevas oportunidades que me permitan seguir creciendo profesionalmente.
              </p>
              
              <a 
                href="/cv.pdf" 
                target="_blank"
                class="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-indigo-600 px-8 py-3 text-white transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                <span class="relative flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar CV
                </span>
                <span class="absolute right-0 -top-2 -z-10 h-14 w-14 rounded-full bg-indigo-800 transition-all duration-300 ease-in-out group-hover:scale-150"></span>
              </a>
            </div>
            
            <!-- Columna derecha: Información de contacto -->
            <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 class="text-xl font-semibold text-white mb-6">Información de Contacto</h3>
              
              <div class="space-y-4">
                <div class="flex items-center gap-3 text-zinc-300">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div class="text-xs text-zinc-400">Email</div>
                    <a href="mailto:gsaiz.bajo@gmail.com" class="hover:text-indigo-400 transition-colors">
                      gsaiz.bajo@gmail.com
                    </a>
                  </div>
                </div>
                
                <div class="flex items-center gap-3 text-zinc-300">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div class="text-xs text-zinc-400">Ubicación</div>
                    <div>Zaragoza, España</div>
                  </div>
                </div>
                
                <div class="flex items-center gap-3 text-zinc-300">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <div class="text-xs text-zinc-400">Intereses</div>
                    <div>Desarrollo Web, Tecnología, Innovación</div>
                  </div>
                </div>
              </div>
              
              <!-- Enlaces sociales -->
              <div class="mt-8 pt-6 border-t border-white/10">
                <div class="flex items-center gap-4">
                  <a 
                    href="https://www.linkedin.com/in/gabriel-saiz-de-la-maza-bajo-140370184/" 
                    target="_blank" 
                    class="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-800 hover:bg-indigo-600 text-white transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://github.com/GabriLPDA22" 
                    target="_blank" 
                    class="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-800 hover:bg-indigo-600 text-white transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="mailto:gsaiz.bajo@gmail.com" 
                    class="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-800 hover:bg-indigo-600 text-white transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'CvDownloadSection'
  }
  </script>
  
  <style scoped>
  </style>