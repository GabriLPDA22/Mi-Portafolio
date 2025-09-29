<template>
  <section id="estudios" class="py-16 sm:py-24 relative overflow-hidden">
    <ParticleBackground color="#6366f1" :particleCount="80" :connectionDistance="150" :speed="0.8" :interactive="true"
      :size="1.5" />
    <div
      class="absolute -top-[200px] sm:-top-[400px] -right-[100px] sm:-right-[200px] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-blue-600/5 blur-2xl sm:blur-3xl z-0">
    </div>

    <div class="container mx-auto px-4 sm:px-6 relative">
      <div class="text-center mb-12 sm:mb-16 relative">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-8xl md:text-9xl font-bold opacity-5 text-white w-full text-center z-0">
          ESTUDIOS
        </div>
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold relative z-10 inline-block mb-3 sm:mb-4">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
            Formación Académica
          </span>
        </h2>
        <div class="h-1.5 w-16 sm:w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4 sm:mb-6">
        </div>
        <p class="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto px-4">
          Mi camino académico hacia la innovación tecnológica y especialización en IA & Ciberseguridad.
        </p>
      </div>

      <div class="relative max-w-4xl mx-auto">
        <div
          class="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-orange-500 via-blue-500 to-cyan-500">
        </div>

        <div class="space-y-12 sm:space-y-20">

          <!-- Doble formación en curso con diseño mejorado -->
          <div class="relative reveal-card">
            <div
              class="hidden sm:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full border-4 border-emerald-500 bg-zinc-900 z-10 education-dot-current">
            </div>

            <div class="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div class="sm:text-right sm:pr-12 mb-4 sm:mb-0">
                <span
                  class="inline-block px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-2 animate-pulse">
                  🔥 En Curso - 2025
                </span>
                <h3 class="text-xl sm:text-2xl font-bold text-white">Doble Especialización</h3>
                <div class="text-emerald-400 mt-1 sm:mt-2 text-sm sm:text-base">IA & Ciberseguridad</div>
                <div class="text-xs sm:text-sm text-zinc-500 mt-1">🚀 Formación dual estratégica</div>
              </div>

              <div
                class="bg-gradient-to-br from-emerald-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-800/50 shadow-lg sm:ml-12 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-emerald-500/10 relative overflow-hidden">

                <!-- Efecto de brillo animado -->
                <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 via-transparent to-emerald-500/10 opacity-50 animate-gradient-shift"></div>

                <div class="flex items-center gap-2 mb-3 relative z-10">
                  <span class="text-emerald-400 text-lg sm:text-xl">🎯</span>
                  <span class="text-emerald-400 font-semibold text-sm sm:text-base">Plan Académico Premium</span>
                </div>

                <p class="text-zinc-300 mb-3 sm:mb-4 text-sm sm:text-base relative z-10">
                  Con el Grado Superior DAW finalizado, actualmente estoy potenciando mi perfil con una
                  <strong class="text-white">doble especialización estratégica</strong> en las áreas más demandadas del sector.
                </p>

                <div class="space-y-3 mb-4 relative z-10">
                  <!-- FOUNDERZ Card Mejorada -->
                  <div class="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-3 border border-purple-500/30 hover:border-purple-400/50 transition-all group">
                    <div class="flex items-center gap-2 mb-2">
                      <div class="flex items-center gap-2">
                        <span class="text-purple-400 group-hover:scale-110 transition-transform">🤖</span>
                        <img src="https://img.icons8.com/fluency/20/microsoft.png" alt="Microsoft" class="opacity-80" />
                      </div>
                      <h5 class="font-semibold text-purple-300 text-sm">Máster IA e Innovación - FOUNDERZ + Microsoft</h5>
                    </div>
                    <p class="text-zinc-300 text-xs mb-2">
                      Programa élite con certificación oficial Microsoft. Formación reconocida como la más grande de Europa en IA.
                    </p>
                    <div class="flex flex-wrap gap-2 mt-2">
                      <span class="px-2 py-0.5 bg-purple-500/20 rounded-full text-purple-300 text-xs">
                        🎓 Acceso libre y flexible
                      </span>
                      <span class="px-2 py-0.5 bg-pink-500/20 rounded-full text-pink-300 text-xs">
                        ⏰ A mi ritmo hasta fin de año
                      </span>
                    </div>
                    <div class="mt-2 grid grid-cols-2 gap-2 text-xs">
                      <div class="flex items-center gap-1 text-purple-400">
                        <span>📚</span>
                        <span>+100 horas contenido</span>
                      </div>
                      <div class="flex items-center gap-1 text-purple-400">
                        <span>🌍</span>
                        <span>+6.000 alumnos</span>
                      </div>
                    </div>
                  </div>

                  <!-- Ciberseguridad Card -->
                  <div class="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-lg p-3 border border-red-500/30 hover:border-red-400/50 transition-all group">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="text-red-400 group-hover:scale-110 transition-transform">🔒</span>
                      <h5 class="font-semibold text-red-300 text-sm">Máster en Ciberseguridad - CPIFP Montessori</h5>
                    </div>
                    <p class="text-zinc-300 text-xs mb-2">
                      Especialización completa en seguridad informática, pentesting y auditorías de seguridad.
                    </p>
                    <div class="flex flex-wrap gap-2 mt-2">
                      <span class="px-2 py-0.5 bg-red-500/20 rounded-full text-red-300 text-xs">
                        🛡️ Ethical Hacking
                      </span>
                      <span class="px-2 py-0.5 bg-orange-500/20 rounded-full text-orange-300 text-xs">
                        🔍 Auditorías
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Sinergia destacada -->
                <div class="bg-gradient-to-r from-emerald-500/10 via-purple-500/10 to-red-500/10 rounded-lg p-3 border border-emerald-500/20 mb-4 relative z-10">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-emerald-400">🏆</span>
                    <span class="text-emerald-300 font-medium text-sm">Sinergia Perfecta</span>
                  </div>
                  <p class="text-zinc-400 text-xs">
                    <strong class="text-white">IA + Ciberseguridad:</strong> Desarrollar soluciones inteligentes con seguridad
                    integrada desde el diseño. Perfil único y altamente valorado en el mercado actual.
                  </p>
                </div>

                <!-- Tech Stack Visual -->
                <div class="flex flex-wrap gap-1.5 sm:gap-2 relative z-10">
                  <span class="px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-xs border border-purple-500/30">ChatGPT-4</span>
                  <span class="px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-xs border border-purple-500/30">Azure AI</span>
                  <span class="px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-xs border border-purple-500/30">Copilot</span>
                  <span class="px-2 py-1 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-300 text-xs border border-red-500/30">SecDevOps</span>
                  <span class="px-2 py-1 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-300 text-xs border border-red-500/30">Pentesting</span>
                </div>
              </div>
            </div>
          </div>

          <!-- AWS Certificaciones -->
          <div class="relative reveal-card">
            <div
              class="hidden sm:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full border-4 border-orange-500 bg-zinc-900 z-10 education-dot-aws">
            </div>

            <div class="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div class="sm:text-right sm:pr-12 mb-4 sm:mb-0">
                <span
                  class="inline-block px-3 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-xs sm:text-sm font-medium mb-2">
                  Verano 2026
                </span>
                <h3 class="text-xl sm:text-2xl font-bold text-white">Certificaciones AWS</h3>
                <div class="text-orange-400 mt-1 sm:mt-2 text-sm sm:text-base">Amazon Web Services</div>
                <div class="text-xs sm:text-sm text-zinc-500 mt-1">☁️ Cloud Computing</div>
              </div>

              <div
                class="bg-gradient-to-br from-orange-900/30 to-orange-800/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-orange-800/50 shadow-lg sm:ml-12 hover:border-orange-500/30 transition-all duration-300 hover:shadow-orange-500/10">
                <div class="flex items-center gap-2 mb-3">
                  <span class="text-orange-400 text-lg sm:text-xl">☁️</span>
                  <span class="text-orange-400 font-semibold text-sm sm:text-base">Especialización Cloud</span>
                </div>

                <p class="text-zinc-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Próximo objetivo: certificaciones AWS para dominar la arquitectura cloud y completar mi perfil técnico
                  con las competencias más demandadas del mercado.
                </p>

                <div class="space-y-2 mb-4 text-sm">
                  <div class="flex items-start gap-2">
                    <span class="text-orange-400 mt-0.5">🎯</span>
                    <span class="text-zinc-300">Solutions Architect - Associate</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-orange-400 mt-0.5">🏗️</span>
                    <span class="text-zinc-300">Arquitectura cloud escalable</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-orange-400 mt-0.5">⚡</span>
                    <span class="text-zinc-300">Serverless & Microservicios</span>
                  </div>
                </div>

                <div class="bg-orange-500/5 rounded-lg p-3 border border-orange-500/10 mb-4">
                  <a href="https://aws.amazon.com/es/certification/" target="_blank" rel="noopener"
                    class="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors">
                    <span>🔗</span>
                    <span class="text-sm font-medium">Explorar certificaciones AWS</span>
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </a>
                </div>

                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                  <span class="px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs">AWS</span>
                  <span class="px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs">Cloud Native</span>
                  <span class="px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs">Kubernetes</span>
                  <span class="px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs">DevOps</span>
                </div>
              </div>
            </div>
          </div>

          <!-- DAW Completado -->
          <div class="relative reveal-card">
            <div
              class="hidden sm:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full border-4 border-blue-500 bg-zinc-900 z-10 education-dot">
            </div>

            <div class="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div class="sm:text-right sm:pr-12 mb-4 sm:mb-0">
                <span
                  class="inline-block px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-2">
                  2023 - 2025
                </span>
                <h3 class="text-xl sm:text-2xl font-bold text-white">Técnico Superior DAW</h3>
                <div class="text-blue-400 mt-1 sm:mt-2 text-sm sm:text-base">CPIFP Montessori, Zaragoza</div>
                <div class="text-xs sm:text-sm text-zinc-500 mt-1">✅ Graduado - Modalidad DUAL</div>
              </div>

              <div
                class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-zinc-800 shadow-lg sm:ml-12 hover:border-blue-500/30 transition-all duration-300 hover:shadow-blue-500/10">
                <div class="flex items-center gap-2 mb-3">
                  <span class="text-blue-400 text-lg sm:text-xl">🎓</span>
                  <span class="text-blue-400 font-semibold text-sm sm:text-base">Titulación Completada</span>
                </div>

                <p class="text-zinc-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Grado Superior en Desarrollo de Aplicaciones Web con modalidad DUAL.
                  <strong class="text-white">Experiencia práctica real</strong> en entorno profesional.
                </p>

                <div class="space-y-2 mb-4 text-sm">
                  <div class="flex items-start gap-2">
                    <span class="text-blue-400 mt-0.5">⚡</span>
                    <span class="text-zinc-300">Frontend moderno: Vue.js, React, TypeScript</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-blue-400 mt-0.5">🔧</span>
                    <span class="text-zinc-300">Backend robusto: .NET, PHP Symfony, Node.js</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-blue-400 mt-0.5">🚀</span>
                    <span class="text-zinc-300">DevOps: Docker, Kubernetes, CI/CD</span>
                  </div>
                </div>

                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                  <span class="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">Full-Stack</span>
                  <span class="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">DUAL</span>
                  <span class="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">Vue.js</span>
                  <span class="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">.NET</span>
                </div>
              </div>
            </div>
          </div>

          <!-- SMR Base -->
          <div class="relative reveal-card">
            <div
              class="hidden sm:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full border-4 border-cyan-500 bg-zinc-900 z-10 education-dot">
            </div>

            <div class="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div class="sm:text-right sm:pr-12 mb-4 sm:mb-0">
                <span
                  class="inline-block px-3 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-medium mb-2">
                  2020 - 2022
                </span>
                <h3 class="text-xl sm:text-2xl font-bold text-white">Grado Medio SMR</h3>
                <div class="text-cyan-400 mt-1 sm:mt-2 text-sm sm:text-base">IES Pilar Lorengar, Zaragoza</div>
                <div class="text-xs sm:text-sm text-zinc-500 mt-1">🏗️ Base técnica sólida</div>
              </div>

              <div
                class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-zinc-800 shadow-lg sm:ml-12 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-cyan-500/10">
                <p class="text-zinc-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Fundamentos en sistemas informáticos, redes y mantenimiento que construyeron mi base técnica.
                </p>

                <div class="space-y-2 mb-4 text-sm">
                  <div class="flex items-start gap-2">
                    <span class="text-cyan-400 mt-0.5">🔧</span>
                    <span class="text-zinc-300">Administración de sistemas</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-cyan-400 mt-0.5">🌐</span>
                    <span class="text-zinc-300">Configuración de redes</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-cyan-400 mt-0.5">💾</span>
                    <span class="text-zinc-300">Hardware y software</span>
                  </div>
                </div>

                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                  <span class="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs">Redes</span>
                  <span class="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs">Hardware</span>
                  <span class="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs">Linux</span>
                  <span class="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs">Windows Server</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Roadmap actualizado con diseño mejorado -->
      <div class="mt-12 sm:mt-20">
        <div
          class="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-800/50 max-w-4xl mx-auto relative overflow-hidden">

          <!-- Efecto de partículas flotantes -->
          <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div class="particle-1"></div>
            <div class="particle-2"></div>
            <div class="particle-3"></div>
          </div>

          <h3 class="text-xl sm:text-2xl font-bold text-white mb-6 text-center relative z-10">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              🗺️ Roadmap Académico 2025
            </span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10">
            <div class="text-center group">
              <div
                class="w-16 h-16 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <span class="text-2xl">✅</span>
              </div>
              <h4 class="font-bold text-blue-400 mb-2">Completado</h4>
              <div class="space-y-1 text-sm text-zinc-300">
                <p>• Grado Medio SMR</p>
                <p>• Grado Superior DAW</p>
                <p class="text-blue-400 font-medium">Base técnica sólida</p>
              </div>
            </div>

            <div class="text-center group">
              <div
                class="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto mb-3 animate-pulse group-hover:scale-110 transition-transform">
                <span class="text-2xl">🎯</span>
              </div>
              <h4 class="font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent mb-2">En Curso</h4>
              <div class="space-y-1 text-sm text-zinc-300">
                <p>• Máster IA (FOUNDERZ)</p>
                <p>• Máster Ciberseguridad</p>
                <p class="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent font-medium">Doble especialización</p>
              </div>
            </div>

            <div class="text-center group">
              <div
                class="w-16 h-16 rounded-full bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <span class="text-2xl">☁️</span>
              </div>
              <h4 class="font-bold text-orange-400 mb-2">Próximo</h4>
              <div class="space-y-1 text-sm text-zinc-300">
                <p>• Certificaciones AWS</p>
                <p>• Solutions Architect</p>
                <p class="text-orange-400 font-medium">Cloud Specialist</p>
              </div>
            </div>
          </div>

          <!-- Stack tecnológico visual mejorado -->
          <div class="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-orange-900/20 rounded-xl p-4 border border-purple-500/20 relative z-10">
            <div class="text-center mb-3">
              <span class="text-sm font-semibold bg-gradient-to-r from-purple-300 to-orange-300 bg-clip-text text-transparent">
                🚀 Stack Tecnológico 2025
              </span>
            </div>
            <div class="flex flex-wrap justify-center gap-3">
              <div class="group relative">
                <img src="https://img.icons8.com/fluency/32/microsoft.png" alt="Microsoft"
                  class="transform transition-all group-hover:scale-125 group-hover:rotate-12" />
                <span class="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Microsoft</span>
              </div>
              <div class="group relative">
                <img src="https://img.icons8.com/color/32/amazon-web-services.png" alt="AWS"
                  class="transform transition-all group-hover:scale-125 group-hover:rotate-12" />
                <span class="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">AWS</span>
              </div>
              <div class="group relative">
                <img src="https://img.icons8.com/fluency/32/chatgpt.png" alt="ChatGPT"
                  class="transform transition-all group-hover:scale-125 group-hover:rotate-12" />
                <span class="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">ChatGPT</span>
              </div>
              <div class="group relative">
                <img src="https://img.icons8.com/color/32/vue-js.png" alt="Vue.js"
                  class="transform transition-all group-hover:scale-125 group-hover:rotate-12" />
                <span class="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Vue.js</span>
              </div>
              <div class="group relative">
                <img src="https://img.icons8.com/color/32/docker.png" alt="Docker"
                  class="transform transition-all group-hover:scale-125 group-hover:rotate-12" />
                <span class="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Docker</span>
              </div>
              <div class="group relative">
                <img src="https://img.icons8.com/color/32/kubernetes.png" alt="Kubernetes"
                  class="transform transition-all group-hover:scale-125 group-hover:rotate-12" />
                <span class="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Kubernetes</span>
              </div>
              <div class="group relative">
                <img src="https://img.icons8.com/fluency/32/azure-1.png" alt="Azure"
                  class="transform transition-all group-hover:scale-125 group-hover:rotate-12" />
                <span class="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Azure</span>
              </div>
              <div class="group relative">
                <img src="https://img.icons8.com/color/32/python--v1.png" alt="Python"
                  class="transform transition-all group-hover:scale-125 group-hover:rotate-12" />
                <span class="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Competencias actualizadas con mejor diseño -->
      <div class="mt-12 sm:mt-20 text-center">
        <h3 class="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Competencias Core</h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <!-- IA & Innovación -->
          <div
            class="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-purple-800/30 text-center hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 group">
            <div
              class="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <span class="text-2xl">🤖</span>
            </div>
            <h4 class="text-base sm:text-lg font-bold text-white mb-2">IA & Innovación</h4>
            <p class="text-zinc-400 text-sm sm:text-base">
              IA generativa, prompt engineering, machine learning y desarrollo low-code con certificación Microsoft.
            </p>
            <div class="mt-3 flex justify-center gap-2">
              <img src="https://img.icons8.com/fluency/20/microsoft.png" alt="Microsoft" class="opacity-60" />
              <img src="https://img.icons8.com/fluency/20/chatgpt.png" alt="ChatGPT" class="opacity-60" />
            </div>
          </div>

          <!-- Ciberseguridad -->
          <div
            class="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-red-800/30 text-center hover:border-red-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 group">
            <div
              class="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <span class="text-2xl">🔒</span>
            </div>
            <h4 class="text-base sm:text-lg font-bold text-white mb-2">Ciberseguridad</h4>
            <p class="text-zinc-400 text-sm sm:text-base">
              Ethical hacking, pentesting, auditorías de seguridad y desarrollo seguro con metodología SecDevOps.
            </p>
            <div class="mt-3 flex justify-center gap-2">
              <span class="text-xs px-2 py-1 bg-red-500/20 rounded text-red-300">OWASP</span>
              <span class="text-xs px-2 py-1 bg-red-500/20 rounded text-red-300">SecDevOps</span>
            </div>
          </div>

          <!-- Full-Stack Development -->
          <div
            class="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-blue-800/30 text-center hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 group">
            <div
              class="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <span class="text-2xl">⚡</span>
            </div>
            <h4 class="text-base sm:text-lg font-bold text-white mb-2">Desarrollo Full-Stack</h4>
            <p class="text-zinc-400 text-sm sm:text-base">
              Frontend moderno, backend robusto, arquitectura cloud-native y experiencia DUAL en entorno real.
            </p>
            <div class="mt-3 flex justify-center gap-2">
              <img src="https://img.icons8.com/color/20/vue-js.png" alt="Vue" class="opacity-60" />
              <img src="https://img.icons8.com/color/20/docker.png" alt="Docker" class="opacity-60" />
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action mejorado -->
      <div class="mt-16 text-center">
        <div class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-full text-white font-medium hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          <span class="text-xl animate-bounce">🚀</span>
          <span>Perfil en constante evolución</span>
          <span class="text-xl animate-pulse">✨</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ParticleBackground from '@/components/ui/ParticleBackground.vue';

export default {
  name: 'EducationSection',
  components: {
    ParticleBackground
  },
  mounted() {
    this.setupCardAnimations();
  },
  methods: {
    setupCardAnimations() {
      const cards = document.querySelectorAll('.reveal-card');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('visible');
              }, index * 200);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      cards.forEach(card => {
        observer.observe(card);
      });
    }
  }
}
</script>

<style scoped>
.reveal-card {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.education-dot {
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
  animation: pulse 2s infinite;
}

.education-dot-current {
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.7);
  animation: pulse-green 2s infinite;
}

.education-dot-aws {
  box-shadow: 0 0 15px rgba(249, 115, 22, 0.6);
  animation: pulse-orange 2s infinite;
}

/* Animación de gradiente */
@keyframes gradient-shift {
  0%, 100% {
    opacity: 0.3;
    transform: translateX(-100%);
  }
  50% {
    opacity: 0.7;
    transform: translateX(100%);
  }
}

.animate-gradient-shift {
  animation: gradient-shift 8s ease-in-out infinite;
}

/* Partículas flotantes */
.particle-1, .particle-2, .particle-3 {
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(45deg, #a855f7, #3b82f6);
  border-radius: 50%;
  opacity: 0.6;
}

.particle-1 {
  top: 20%;
  left: 10%;
  animation: float-1 15s infinite ease-in-out;
}

.particle-2 {
  top: 60%;
  right: 20%;
  animation: float-2 20s infinite ease-in-out;
}

.particle-3 {
  bottom: 20%;
  left: 30%;
  animation: float-3 18s infinite ease-in-out;
}

@keyframes float-1 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(100px, -100px) rotate(120deg); }
  66% { transform: translate(-100px, 100px) rotate(240deg); }
}

@keyframes float-2 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(-150px, 100px) rotate(-120deg); }
  66% { transform: translate(150px, -100px) rotate(-240deg); }
}

@keyframes float-3 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(120px, 80px) rotate(180deg); }
  66% { transform: translate(-120px, -80px) rotate(360deg); }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
  }
  50% {
    box-shadow: 0 0 25px rgba(59, 130, 246, 0.8);
  }
  100% {
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
  }
}

@keyframes pulse-green {
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

@keyframes pulse-orange {
  0% {
    box-shadow: 0 0 15px rgba(249, 115, 22, 0.6);
  }
  50% {
    box-shadow: 0 0 25px rgba(249, 115, 22, 0.8);
  }
  100% {
    box-shadow: 0 0 15px rgba(249, 115, 22, 0.6);
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

  /* Reducir animaciones en móvil para mejor rendimiento */
  @media (prefers-reduced-motion: reduce) {
    .reveal-card {
      animation: none;
      opacity: 1;
      transform: none;
    }

    .education-dot,
    .education-dot-current,
    .education-dot-aws {
      animation: none;
    }

    .particle-1, .particle-2, .particle-3 {
      animation: none;
    }
  }
}

/* Mejoras de accesibilidad */
@media (prefers-contrast: high) {
  .text-zinc-400 {
    color: #d4d4d8;
  }

  .border {
    border-width: 2px;
  }
}
</style>
