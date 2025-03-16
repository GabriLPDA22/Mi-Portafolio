<template>
    <footer class="relative mt-20 overflow-hidden">
      <!-- Gradientes y efectos de fondo -->
      <div class="absolute inset-0 bg-gradient-to-b from-zinc-950 to-indigo-950/20 opacity-80 z-0"></div>
      <div class="absolute h-px top-0 inset-x-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      
      <!-- Elementos decorativos -->
      <div class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-indigo-500/5 to-transparent"></div>
      <div class="absolute -bottom-48 left-1/3 w-96 h-96 rounded-full bg-indigo-500/10 mix-blend-multiply blur-3xl"></div>
      
      <div class="container mx-auto px-6 py-12 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <!-- Logo y descripción -->
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/20">
                <span class="text-xl font-bold text-white">GS</span>
              </div>
              <span class="ml-2 text-white font-semibold text-xl">Gabriel Saiz</span>
            </div>
  
            <p class="text-zinc-400 mb-6 max-w-md">
              Desarrollador web apasionado por crear experiencias digitales modernas y funcionales.
              Estudiante de DAW en formación Dual, siempre buscando aprender y mejorar mis habilidades.
            </p>
  
            <!-- Enlaces sociales -->
            <div class="flex space-x-4">
              <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer" :aria-label="link.name"
                class="w-10 h-10 flex items-center justify-center rounded-full text-zinc-400 hover:text-white hover:bg-indigo-600/20 border border-zinc-800 hover:border-indigo-500/50 transition-all duration-300">
                <span v-html="link.icon"></span>
              </a>
            </div>
          </div>
  
          <!-- Enlaces rápidos -->
          <div>
            <h3 class="text-white font-semibold mb-6">Enlaces rápidos</h3>
            <ul class="space-y-3">
              <li v-for="link in quickLinks" :key="link.name">
                <a :href="link.path"
                  class="text-zinc-400 hover:text-indigo-400 transition-colors duration-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>
  
          <!-- Contacto -->
          <div>
            <h3 class="text-white font-semibold mb-6">Contacto</h3>
            <ul class="space-y-3">
              <li class="flex items-center text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:gsaiz.bajo@gmail.com" class="hover:text-indigo-400 transition-colors duration-300">
                  gsaiz.bajo@gmail.com
                </a>
              </li>
              <li class="flex items-center text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Zaragoza, España</span>
              </li>
              <li class="mt-6">
                <a href="/cv.pdf" target="_blank"
                  class="flex items-center justify-center px-4 py-2 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 rounded-lg text-indigo-400 hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  Descargar CV
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        <!-- Línea divisoria -->
        <div class="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-8"></div>
  
        <!-- Copyright -->
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-zinc-500 text-sm mb-4 md:mb-0">
            &copy; {{ new Date().getFullYear() }} Gabriel Saiz. Casi todos los derechos reservados.
          </p>
          <div class="flex items-center space-x-2 text-zinc-500 text-sm">
            <span>Hecho con</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd" />
            </svg>
            <span>usando</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.2 2c-.1 0-.2.1-.3.2L7.2 12h3.2v10l5-10h-3.3z" />
            </svg>
            <span>Vue.js</span>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'TheFooter',
    data() {
      return {
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
        ],
        quickLinks: [
          { name: 'Inicio', path: '/#inicio' },
          { name: 'Proyectos', path: '/#proyectos' },
          { name: 'Experiencia', path: '/#experiencia' },
          { name: 'Sobre mí', path: '/#sobre-mi' },
          { name: 'Hackathones', path: '/#hackathones' },
          { name: 'Reconocimientos', path: '/#reconocimientos' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  </style>