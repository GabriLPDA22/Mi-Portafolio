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
      <!-- Título principal mejorado -->
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
            Una colección de aplicaciones web y móviles que demuestran mi evolución como desarrollador
          </p>
        </div>
      </div>

      <!-- Navegación de categorías mejorada -->
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

            <!-- HUVEGRYM - PROYECTO DESTACADO PRINCIPAL -->
            <div class="relative">
              <!-- Efecto de aurora boreal animado -->
              <div
                class="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-3xl blur-lg opacity-30 animate-gradient-xy">
              </div>

              <div class="relative bg-black/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-800">
                <!-- Grid Bento Box -->
                <div class="grid grid-cols-12 gap-6 mb-8">
                  <!-- Celda principal grande - Imagen del proyecto -->
                  <div class="col-span-12 lg:col-span-7 relative group">
                    <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-2xl"></div>
                    <div class="relative h-[400px] rounded-2xl overflow-hidden">
                      <img src="/img/huvegrym_preview.png" alt="Huvegrym Danza"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                      <!-- Título flotante sobre la imagen -->
                      <div class="absolute bottom-8 left-8 right-8">
                        <div class="flex items-center gap-3 mb-4">
                          <span
                            class="px-3 py-1 bg-purple-500/20 backdrop-blur-md rounded-full text-purple-400 text-sm font-semibold border border-purple-500/30 animate-pulse">
                            ✨ Proyecto Actual
                          </span>
                          <span class="px-3 py-1 bg-pink-500/20 backdrop-blur-md rounded-full text-pink-400 text-sm">
                            En Producción
                          </span>
                        </div>
                        <h3 class="text-4xl lg:text-5xl font-black text-white mb-2">
                          HUVEGRYM
                          <span class="block text-2xl font-light text-purple-400 mt-1">Danza Contemporánea</span>
                        </h3>
                      </div>
                    </div>
                  </div>

                  <!-- Columna de stats y features -->
                  <div class="col-span-12 lg:col-span-5 space-y-6">
                    <!-- Stats Cards -->
                    <div class="grid grid-cols-2 gap-4">
                      <div
                        class="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-xl p-4 border border-purple-700/30">
                        <div class="text-3xl font-bold text-purple-400">🎭</div>
                        <div class="text-sm text-gray-400">Arte</div>
                      </div>
                      <div
                        class="bg-gradient-to-br from-pink-900/50 to-pink-800/30 rounded-xl p-4 border border-pink-700/30">
                        <div class="text-3xl font-bold text-pink-400">Live</div>
                        <div class="text-sm text-gray-400">En Producción</div>
                      </div>
                      <div
                        class="bg-gradient-to-br from-indigo-900/50 to-indigo-800/30 rounded-xl p-4 border border-indigo-700/30">
                        <div class="text-3xl font-bold text-indigo-400">100%</div>
                        <div class="text-sm text-gray-400">Responsive</div>
                      </div>
                      <div
                        class="bg-gradient-to-br from-violet-900/50 to-violet-800/30 rounded-xl p-4 border border-violet-700/30">
                        <div class="text-3xl font-bold text-violet-400">SEO</div>
                        <div class="text-sm text-gray-400">Optimizado</div>
                      </div>
                    </div>

                    <!-- Features destacadas con íconos -->
                    <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                      <h4 class="text-white font-semibold mb-4 flex items-center gap-2">
                        <Sparkles class="w-5 h-5 text-yellow-400" />
                        Features Principales
                      </h4>
                      <ul class="space-y-3 text-sm">
                        <li class="flex items-center gap-2 text-gray-300">
                          <div class="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                          Portfolio del grupo de danza
                        </li>
                        <li class="flex items-center gap-2 text-gray-300">
                          <div class="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
                          Galería de espectáculos y actuaciones
                        </li>
                        <li class="flex items-center gap-2 text-gray-300">
                          <div class="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                          Sección de proyectos futuros
                        </li>
                        <li class="flex items-center gap-2 text-gray-300">
                          <div class="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                          Botón de contacto directo
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- Tech Stack y botones -->
                <div class="grid grid-cols-12 gap-6">
                  <!-- Tech Stack con hover effects -->
                  <div class="col-span-12 lg:col-span-8">
                    <div class="flex flex-wrap gap-3">
                      <TechnologyBadge name="HTML5" :icon="['fab', 'html5']" color="orange" />
                      <TechnologyBadge name="CSS3" :icon="['fab', 'css3-alt']" color="blue" />
                      <TechnologyBadge name="JavaScript" :icon="['fab', 'js']" color="yellow" />
                      <TechnologyBadge name="Bootstrap" :icon="['fab', 'bootstrap']" color="purple" />
                    </div>
                  </div>

                  <!-- CTAs -->
                  <div class="col-span-12 lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
                    <a href="https://github.com/GabriLPDA22/huvegrym" target="_blank"
                      class="relative group overflow-hidden px-6 py-3 bg-gray-900 rounded-xl border border-gray-700 hover:border-gray-600 transition-all">
                      <span class="relative z-10 flex items-center gap-2 text-gray-300 group-hover:text-white">
                        <Github class="w-4 h-4" />
                        Código
                      </span>
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 translate-y-full group-hover:translate-y-0 transition-transform">
                      </div>
                    </a>
                    <a href="https://huvegrym.es" target="_blank"
                      class="relative group overflow-hidden px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/25">
                      <span class="relative z-10 flex items-center gap-2 text-white">
                        <Globe class="w-4 h-4" />
                        Ver Sitio Web
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- ELIXIUM FOODS DELIVERY - TFG COMPLETADO -->
            <div class="relative">
              <!-- Efecto de neón animado -->
              <div
                class="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 rounded-3xl blur-lg opacity-30 animate-gradient-xy">
              </div>

              <div class="relative bg-black/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-800">
                <!-- Grid Bento Box -->
                <div class="grid grid-cols-12 gap-6 mb-8">
                  <!-- Celda principal grande - Imagen del proyecto -->
                  <div class="col-span-12 lg:col-span-7 relative group">
                    <div class="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent rounded-2xl"></div>
                    <div class="relative h-[400px] rounded-2xl overflow-hidden">
                      <img src="/img/home-screen.webp" alt="Elixium Foods Delivery"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                      <!-- Título flotante sobre la imagen -->
                      <div class="absolute bottom-8 left-8 right-8">
                        <div class="flex items-center gap-3 mb-4">
                          <span
                            class="px-3 py-1 bg-green-500/20 backdrop-blur-md rounded-full text-green-400 text-sm font-semibold border border-green-500/30">
                            ✓ TFG Completado
                          </span>
                          <span
                            class="px-3 py-1 bg-violet-500/20 backdrop-blur-md rounded-full text-violet-400 text-sm">
                            v2.0
                          </span>
                        </div>
                        <h3 class="text-4xl lg:text-5xl font-black text-white mb-2">
                          Elixium Foods
                          <span class="block text-2xl font-light text-violet-400 mt-1">Delivery Platform</span>
                        </h3>
                      </div>
                    </div>
                  </div>

                  <!-- Columna de stats y features -->
                  <div class="col-span-12 lg:col-span-5 space-y-6">
                    <!-- Stats Cards -->
                    <div class="grid grid-cols-2 gap-4">
                      <div
                        class="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-xl p-4 border border-purple-700/30">
                        <div class="text-3xl font-bold text-purple-400">8+</div>
                        <div class="text-sm text-gray-400">Tecnologías</div>
                      </div>
                      <div
                        class="bg-gradient-to-br from-green-900/50 to-green-800/30 rounded-xl p-4 border border-green-700/30">
                        <div class="text-3xl font-bold text-green-400">100%</div>
                        <div class="text-sm text-gray-400">Completado</div>
                      </div>
                      <div
                        class="bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-xl p-4 border border-blue-700/30">
                        <div class="text-3xl font-bold text-blue-400">AWS</div>
                        <div class="text-sm text-gray-400">Cloud Deploy</div>
                      </div>
                      <div
                        class="bg-gradient-to-br from-orange-900/50 to-orange-800/30 rounded-xl p-4 border border-orange-700/30">
                        <div class="text-3xl font-bold text-orange-400">CI/CD</div>
                        <div class="text-sm text-gray-400">Automatizado</div>
                      </div>
                    </div>

                    <!-- Features destacadas con íconos -->
                    <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                      <h4 class="text-white font-semibold mb-4 flex items-center gap-2">
                        <Sparkles class="w-5 h-5 text-yellow-400" />
                        Features Principales
                      </h4>
                      <ul class="space-y-3 text-sm">
                        <li class="flex items-center gap-2 text-gray-300">
                          <div class="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                          Panel de administración completo
                        </li>
                        <li class="flex items-center gap-2 text-gray-300">
                          <div class="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          Sistema de pedidos en tiempo real
                        </li>
                        <li class="flex items-center gap-2 text-gray-300">
                          <div class="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                          Gestión multi-restaurante
                        </li>
                        <li class="flex items-center gap-2 text-gray-300">
                          <div class="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                          Despliegue con Kubernetes
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- Tech Stack y botones -->
                <div class="grid grid-cols-12 gap-6">
                  <!-- Tech Stack con hover effects -->
                  <div class="col-span-12 lg:col-span-8">
                    <div class="flex flex-wrap gap-3">
                      <TechnologyBadge name="Vue.js" :icon="['fab', 'vuejs']" color="green" />
                      <TechnologyBadge name="SCSS" :icon="['fab', 'sass']" color="pink" />
                      <TechnologyBadge name=".NET 9" :icon="['fab', 'microsoft']" color="purple" />
                      <TechnologyBadge name="PostgreSQL" :icon="['fas', 'database']" color="blue" />
                      <TechnologyBadge name="Docker" :icon="['fab', 'docker']" color="blue" />
                      <TechnologyBadge name="Kubernetes" :icon="['fas', 'dharmachakra']" color="purple" />
                      <TechnologyBadge name="AWS" :icon="['fab', 'aws']" color="orange" />
                      <TechnologyBadge name="GitHub Actions" :icon="['fab', 'github']" color="gray" />
                    </div>
                  </div>

                  <!-- CTAs -->
                  <div class="col-span-12 lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
                    <a href="https://github.com/GabriLPDA22/ELIXIUM-FOODS" target="_blank"
                      class="relative group overflow-hidden px-6 py-3 bg-gray-900 rounded-xl border border-gray-700 hover:border-gray-600 transition-all">
                      <span class="relative z-10 flex items-center gap-2 text-gray-300 group-hover:text-white">
                        <Github class="w-4 h-4" />
                        Código
                      </span>
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 translate-y-full group-hover:translate-y-0 transition-transform">
                      </div>
                    </a>
                    <router-link :to="{ name: 'ProjectDetail', params: { id: 6 } }"
                      class="relative group overflow-hidden px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl transition-all hover:shadow-lg hover:shadow-violet-500/25">
                      <span class="relative z-10 flex items-center gap-2 text-white">
                        <PlayCircle class="w-4 h-4" />
                        Ver Demo
                      </span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>

            <!-- MCPOINTS - DISEÑO MINIMALISTA FLOTANTE -->
            <div class="relative perspective-1000">
              <div class="relative transform-style-3d transition-transform duration-700 hover:rotate-y-5">
                <!-- Tarjeta 3D con efecto glassmorphism -->
                <div
                  class="relative bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-transparent backdrop-blur-2xl rounded-3xl p-8 border border-purple-500/20">
                  <!-- Patrón de puntos decorativo -->
                  <div class="absolute top-0 right-0 w-64 h-64 opacity-10">
                    <div class="grid grid-cols-8 gap-2">
                      <div v-for="n in 64" :key="n" class="w-2 h-2 rounded-full bg-purple-400"></div>
                    </div>
                  </div>

                  <div class="relative grid lg:grid-cols-2 gap-12 items-center">
                    <!-- Contenido -->
                    <div class="space-y-8">
                      <!-- Badge animado -->
                      <div class="inline-block">
                        <div class="relative">
                          <div class="absolute inset-0 bg-purple-600 rounded-full blur-xl animate-pulse"></div>
                          <div class="relative px-4 py-2 bg-black rounded-full border border-purple-500/50">
                            <span class="text-purple-400 text-sm font-semibold flex items-center gap-2">
                              <span class="relative flex h-3 w-3">
                                <span
                                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                              </span>
                              Proyecto Completo
                            </span>
                          </div>
                        </div>
                      </div>

                      <!-- Título con efecto de gradiente animado -->
                      <div>
                        <h3 class="text-5xl lg:text-6xl font-black mb-4">
                          <span
                            class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-size-200 animate-gradient">
                            Elixium Foods
                          </span>
                        </h3>
                        <p class="text-2xl text-purple-300 font-light">Restaurant Management Platform</p>
                      </div>

                      <!-- Descripción con glassmorphism -->
                      <div class="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                        <p class="text-lg text-gray-300 leading-relaxed">
                          Plataforma integral para gestión de restaurantes con sistema de reservas online,
                          menú interactivo y gestión de pedidos. Arquitectura moderna y escalable.
                        </p>
                      </div>

                      <!-- Tech badges con efecto hover 3D -->
                      <div class="flex flex-wrap gap-3">
                        <TechnologyBadge name="Vue.js" :icon="['fab', 'vuejs']" color="green" />
                        <TechnologyBadge name="TypeScript" :icon="['fab', 'js']" color="blue" />
                        <TechnologyBadge name="SCSS" :icon="['fab', 'sass']" color="pink" />
                        <TechnologyBadge name="C#" :icon="['fab', 'microsoft']" color="purple" />
                      </div>

                      <!-- Botones con efecto de neón -->
                      <div class="flex flex-wrap gap-4">
                        <a href="https://github.com/GabriLPDA22/Restaurante-Front" target="_blank"
                          class="group relative px-6 py-3 overflow-hidden rounded-xl bg-black border border-purple-500/30 transition-all hover:border-purple-400/60">
                          <div
                            class="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 translate-x-full group-hover:translate-x-0 transition-transform">
                          </div>
                          <span class="relative flex items-center gap-2 text-purple-400 group-hover:text-purple-300">
                            <Code class="w-4 h-4" />
                            Frontend
                          </span>
                        </a>
                        <a href="https://github.com/GabriLPDA22/Restaurante-Back" target="_blank"
                          class="group relative px-6 py-3 overflow-hidden rounded-xl bg-black border border-pink-500/30 transition-all hover:border-pink-400/60">
                          <div
                            class="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 translate-x-full group-hover:translate-x-0 transition-transform">
                          </div>
                          <span class="relative flex items-center gap-2 text-pink-400 group-hover:text-pink-300">
                            <Server class="w-4 h-4" />
                            Backend
                          </span>
                        </a>
                        <router-link :to="{ name: 'ProjectDetail', params: { id: 2 } }"
                          class="group relative px-6 py-3 overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 transition-all hover:shadow-2xl hover:shadow-purple-500/30">
                          <span class="relative flex items-center gap-2 text-white">
                            <Images class="w-4 h-4" />
                            Ver Galería
                          </span>
                        </router-link>
                      </div>
                    </div>

                    <!-- Imagen con efecto parallax -->
                    <div class="relative group">
                      <!-- Marco decorativo -->
                      <div
                        class="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity">
                      </div>

                      <!-- Contenedor de imagen con perspectiva -->
                      <div
                        class="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1">
                        <img src="/img/Elixium_Foods.webp" alt="Elixium Foods" class="w-full" />

                        <!-- Overlay con patrón -->
                        <div
                          class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <div class="absolute bottom-4 left-4 right-4">
                            <div class="flex gap-2">
                              <span
                                class="px-3 py-1 bg-black/50 backdrop-blur-md rounded-lg text-white text-xs">React</span>
                              <span
                                class="px-3 py-1 bg-black/50 backdrop-blur-md rounded-lg text-white text-xs">TypeScript</span>
                              <span class="px-3 py-1 bg-black/50 backdrop-blur-md rounded-lg text-white text-xs">Modern
                                UI</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- MCPOINTS - DISEÑO MINIMALISTA FLOTANTE -->
            <div class="relative">
              <!-- Contenedor con diseño split-screen -->
              <div
                class="relative bg-gradient-to-r from-red-950/30 via-black to-yellow-950/30 rounded-3xl overflow-hidden">
                <div class="grid lg:grid-cols-2 min-h-[600px]">
                  <!-- Lado izquierdo - Mockup flotante -->
                  <div class="relative flex items-center justify-center p-12 overflow-hidden">
                    <!-- Círculos decorativos de fondo -->
                    <div class="absolute top-10 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
                    <div class="absolute bottom-10 right-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"></div>

                    <!-- Mockup del teléfono flotante con animación -->
                    <div class="relative animate-float">
                      <div class="relative mx-auto max-w-[280px]">
                        <!-- Dispositivo -->
                        <div
                          class="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl border border-gray-800 transform rotate-3">
                          <!-- Pantalla -->
                          <div class="relative bg-black rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                            <img src="/img/McPointsHome.webp" alt="McPoints App" class="w-full h-full object-cover" />

                            <!-- Notificación flotante -->
                            <div
                              class="absolute top-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg transform -rotate-2 animate-slide-down">
                              <div class="flex items-center gap-2">
                                <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                  <span class="text-white text-xs font-bold">M</span>
                                </div>
                                <div class="flex-1">
                                  <p class="text-xs font-semibold text-gray-900">Nuevo número!</p>
                                  <p class="text-xs text-gray-600">#9547 escaneado</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- Badge version -->
                          <div class="absolute -top-2 -right-2 px-3 py-1 bg-red-500 rounded-full shadow-lg">
                            <span class="text-white text-xs font-bold">v1.0.1</span>
                          </div>
                        </div>

                        <!-- Sombra del dispositivo -->
                        <div
                          class="absolute inset-x-8 -bottom-4 h-16 bg-gradient-to-t from-black/30 to-transparent rounded-full blur-2xl">
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Lado derecho - Contenido -->
                  <div class="relative flex items-center p-12">
                    <div class="space-y-8 max-w-xl">
                      <!-- Badge minimalista -->
                      <div class="inline-flex items-center gap-3">
                        <div class="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center">
                          <Smartphone class="w-6 h-6 text-red-400" />
                        </div>
                        <div>
                          <p class="text-xs text-gray-500 uppercase tracking-wider">App Android</p>
                          <p class="text-sm text-red-400 font-semibold">Disponible</p>
                        </div>
                      </div>

                      <!-- Título con estilo McDonald's -->
                      <div>
                        <h3 class="text-6xl lg:text-7xl font-black">
                          <span class="text-red-500">Mc</span><span class="text-yellow-400">Points</span>
                        </h3>
                        <p class="text-xl text-gray-400 mt-2">Coleccionador de Números</p>
                      </div>

                      <!-- Descripción -->
                      <p class="text-lg text-gray-300 leading-relaxed">
                        Una app única para mi amigo coleccionista. Escanea, registra y completa
                        tu colección de números de tickets de McDonald's (hasta 10,000!) con estadísticas
                        detalladas y seguimiento de progreso.
                      </p>

                      <!-- Stats en grid -->
                      <div class="grid grid-cols-3 gap-4">
                        <div class="text-center p-4 bg-black/50 rounded-xl border border-gray-800">
                          <div class="text-2xl font-bold text-red-400">10K</div>
                          <div class="text-xs text-gray-500">Números Max</div>
                        </div>
                        <div class="text-center p-4 bg-black/50 rounded-xl border border-gray-800">
                          <div class="text-2xl font-bold text-yellow-400">OCR</div>
                          <div class="text-xs text-gray-500">Scanner</div>
                        </div>
                        <div class="text-center p-4 bg-black/50 rounded-xl border border-gray-800">
                          <div class="text-2xl font-bold text-green-400">100%</div>
                          <div class="text-xs text-gray-500">Offline</div>
                        </div>
                      </div>

                      <!-- CTAs con estilo McDonald's -->
                      <div class="flex gap-4">
                        <a href="https://github.com/GabriLPDA22/McPoints" target="_blank"
                          class="flex-1 px-6 py-4 bg-gray-900 hover:bg-gray-800 rounded-2xl flex items-center justify-center gap-2 transition-all group">
                          <Github class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                          <span class="text-gray-300 group-hover:text-white font-semibold">GitHub</span>
                        </a>
                        <router-link :to="{ name: 'ProjectDetail', params: { id: 7 } }"
                          class="flex-1 px-6 py-4 bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-red-500/25">
                          <Smartphone class="w-5 h-5 text-white" />
                          <span class="text-white font-semibold">Ver App</span>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Grid de otros proyectos mejorado -->
            <div class="mt-20">
              <h3 class="text-3xl font-bold text-white mb-12 text-center">Otros Proyectos</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="project in otherProjects" :key="project.id"
                  class="group relative rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
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
              class="group relative rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:-translate-y-2">
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
import {
  Globe,
  Smartphone,
  Grid,
  Github,
  Server,
  Code,
  Images,
  PlayCircle,
  CheckCircle,
  Sparkles
} from 'lucide-vue-next'

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
    Images,
    PlayCircle,
    CheckCircle,
    Sparkles
  },
  setup() {
    const activeTab = ref('all')

    const tabs = [
      { id: 'all', label: 'Todos', icon: Grid },
      { id: 'web', label: 'Web', icon: Globe },
      { id: 'mobile', label: 'Mobile', icon: Smartphone }
    ]

    const elixiumTechs = [
      { name: 'Vue.js' },
      { name: 'SCSS' },
      { name: '.NET 9' },
      { name: 'PostgreSQL' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'AWS' },
      { name: 'GitHub Actions' }
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
      projects.filter(p => ![6, 7].includes(p.id))
    )

    return {
      activeTab,
      tabs,
      webProjects,
      mobileProjects,
      mcPointsProject,
      otherProjects,
      projects,
      elixiumTechs
    }
  }
}
</script>

<style scoped>
/* Animaciones mejoradas */
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

@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(3deg);
  }

  50% {
    transform: translateY(-20px) rotate(3deg);
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes gradient-xy {

  0%,
  100% {
    background-position: left top;
  }

  25% {
    background-position: right top;
  }

  50% {
    background-position: right bottom;
  }

  75% {
    background-position: left bottom;
  }
}

@keyframes slide-down {
  0% {
    transform: translateY(-100%) rotate(-2deg);
    opacity: 0;
  }

  100% {
    transform: translateY(0) rotate(-2deg);
    opacity: 1;
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

.animate-gradient-xy {
  animation: gradient-xy 10s ease infinite;
}

.animate-slide-down {
  animation: slide-down 0.5s ease-out 1s both;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

/* Efectos 3D */
.perspective-1000 {
  perspective: 1000px;
}

.transform-style-3d {
  transform-style: preserve-3d;
}

.rotate-y-5:hover {
  transform: rotateY(5deg);
}

/* Transiciones mejoradas */
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

/* Background gradient size */
.bg-size-200 {
  background-size: 200% 200%;
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

/* Efectos hover mejorados */
.group:hover .group-hover\:scale-\[1\.02\] {
  transform: scale(1.02);
}

.hover\:-translate-y-2:hover {
  transform: translateY(-0.5rem);
}
</style>
