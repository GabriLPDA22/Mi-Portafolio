<template>
  <section id="estudios" class="py-16 sm:py-24 relative overflow-hidden">
    <ParticleBackground color="#6366f1" :particleCount="80" :connectionDistance="150" :speed="0.8" :interactive="true"
      :size="1.5" />
    <!-- Efectos de fondo optimizados para móvil -->
    <div
      class="absolute -top-[200px] sm:-top-[400px] -right-[100px] sm:-right-[200px] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-blue-600/5 blur-2xl sm:blur-3xl z-0">
    </div>

    <div class="container mx-auto px-4 sm:px-6 relative">
      <!-- Encabezado de sección -->
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
          Mi camino académico hacia la Ingeniería Informática y formación continua en tecnologías emergentes.
        </p>
      </div>

      <!-- Timeline de educación -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Línea de tiempo -->
        <div
          class="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-blue-500 via-purple-500 to-cyan-500">
        </div>

        <!-- Items de formación -->
        <div class="space-y-12 sm:space-y-20">

          <!-- Diplomas Universitarios - En Curso -->
          <div class="relative reveal-card">
            <div
              class="hidden sm:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full border-4 border-emerald-500 bg-zinc-900 z-10 education-dot-current">
            </div>

            <div class="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
              <!-- Fecha y título -->
              <div class="sm:text-right sm:pr-12 mb-4 sm:mb-0">
                <span
                  class="inline-block px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-2">
                  En Curso - 2025
                </span>
                <h3 class="text-xl sm:text-2xl font-bold text-white">Diplomas Universitarios</h3>
                <div class="text-emerald-400 mt-1 sm:mt-2 text-sm sm:text-base">ILERNA + UCAM</div>
                <div class="text-xs sm:text-sm text-zinc-500 mt-1">🎯 Especialización para acceso a carrera</div>
              </div>

              <!-- Contenido -->
              <div
                class="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-800/50 shadow-lg sm:ml-12 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-emerald-500/10">
                <div class="flex items-center gap-2 mb-3">
                  <span class="text-emerald-400 text-lg sm:text-xl">🎓</span>
                  <span class="text-emerald-400 font-semibold text-sm sm:text-base">Camino a Ingeniería
                    Informática</span>
                </div>

                <p class="text-zinc-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Con el Técnico Superior de DAW completado, ahora estoy cursando estos dos diplomas universitarios
                  que me permitirán <strong class="text-white">acceder directamente a 3º curso del Grado en Ingeniería
                    Informática</strong>
                  en la UCAM.
                </p>

                <div class="space-y-3 mb-4">
                  <div class="bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/20">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-emerald-400">📘</span>
                      <h5 class="font-semibold text-emerald-300 text-sm">Diploma en Análisis, Diseño y Soluciones del
                        Software</h5>
                    </div>
                    <p class="text-zinc-300 text-xs">Ingeniería de requisitos, modelado de software, calidad del
                      software</p>
                  </div>

                  <div class="bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/20">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-emerald-400">💻</span>
                      <h5 class="font-semibold text-emerald-300 text-sm">Diploma en Programación Avanzada</h5>
                    </div>
                    <p class="text-zinc-300 text-xs">Fundamentos avanzados, algoritmia, programación paralela</p>
                  </div>
                </div>

                <div class="bg-emerald-500/5 rounded-lg p-3 border border-emerald-500/10 mb-4">
                  <div class="flex items-center gap-2">
                    <span class="text-emerald-400">🏆</span>
                    <span class="text-emerald-300 font-medium text-sm">Reconocimiento: 94,5 ECTS</span>
                  </div>
                  <p class="text-zinc-400 text-xs mt-1">Acceso directo a 3º curso → Solo 2 años más para el grado
                    completo</p>
                </div>

                <!-- Competencias especializadas -->
                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                  <span class="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">Ingeniería
                    Software</span>
                  <span class="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">Algoritmia
                    Avanzada</span>
                  <span class="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">Análisis de
                    Sistemas</span>
                  <span class="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">Calidad
                    Software</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Certificaciones AWS - Objetivo Verano -->
          <div class="relative reveal-card">
            <div
              class="hidden sm:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full border-4 border-orange-500 bg-zinc-900 z-10 education-dot-aws">
            </div>

            <div class="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
              <!-- Fecha y título -->
              <div class="sm:text-right sm:pr-12 mb-4 sm:mb-0">
                <span
                  class="inline-block px-3 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-xs sm:text-sm font-medium mb-2">
                  Verano 2025
                </span>
                <h3 class="text-xl sm:text-2xl font-bold text-white">Certificaciones AWS</h3>
                <div class="text-orange-400 mt-1 sm:mt-2 text-sm sm:text-base">Amazon Web Services</div>
                <div class="text-xs sm:text-sm text-zinc-500 mt-1">☁️ Enfoque prioritario este verano</div>
              </div>

              <!-- Contenido -->
              <div
                class="bg-gradient-to-br from-orange-900/30 to-orange-800/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-orange-800/50 shadow-lg sm:ml-12 hover:border-orange-500/30 transition-all duration-300 hover:shadow-orange-500/10">
                <div class="flex items-center gap-2 mb-3">
                  <span class="text-orange-400 text-lg sm:text-xl">☁️</span>
                  <span class="text-orange-400 font-semibold text-sm sm:text-base">Especialización en Cloud
                    Computing</span>
                </div>

                <p class="text-zinc-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Durante este verano me enfocaré en obtener las certificaciones AWS, especialmente
                  <strong class="text-white">Solutions Architect Associate</strong>, para complementar mi formación
                  con competencias cloud que son muy demandadas en el mercado actual.
                </p>

                <div class="space-y-2 mb-4 text-sm">
                  <div class="flex items-start gap-2">
                    <span class="text-orange-400 mt-0.5">☁️</span>
                    <span class="text-zinc-300">AWS Certified Solutions Architect - Associate</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-orange-400 mt-0.5">☁️</span>
                    <span class="text-zinc-300">Arquitectura de aplicaciones en la nube</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-orange-400 mt-0.5">☁️</span>
                    <span class="text-zinc-300">Servicios AWS: EC2, S3, Lambda, RDS</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-orange-400 mt-0.5">☁️</span>
                    <span class="text-zinc-300">Seguridad y escalabilidad en cloud</span>
                  </div>
                </div>

                <div class="bg-orange-500/5 rounded-lg p-3 border border-orange-500/10 mb-4">
                  <a href="https://aws.amazon.com/es/certification/" target="_blank" rel="noopener"
                    class="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors">
                    <span>🔗</span>
                    <span class="text-sm font-medium">Ver programa de certificación AWS</span>
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </a>
                </div>

                <!-- Competencias -->
                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                  <span class="px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs">AWS</span>
                  <span class="px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs">Cloud
                    Architecture</span>
                  <span class="px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs">Serverless</span>
                  <span class="px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs">DevOps</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Grado Superior DAW - Completado -->
          <div class="relative reveal-card">
            <div
              class="hidden sm:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full border-4 border-blue-500 bg-zinc-900 z-10 education-dot">
            </div>

            <div class="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
              <!-- Fecha y título -->
              <div class="sm:text-right sm:pr-12 mb-4 sm:mb-0">
                <span
                  class="inline-block px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-2">
                  2023 - 2025
                </span>
                <h3 class="text-xl sm:text-2xl font-bold text-white">Técnico Superior DAW</h3>
                <div class="text-blue-400 mt-1 sm:mt-2 text-sm sm:text-base">Desarrollo de Aplicaciones Web</div>
                <div class="text-xs sm:text-sm text-zinc-500 mt-1">✅ Graduado - Modalidad DUAL</div>
              </div>

              <!-- Contenido -->
              <div
                class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-zinc-800 shadow-lg sm:ml-12 hover:border-blue-500/30 transition-all duration-300 hover:shadow-blue-500/10">
                <div class="flex items-center gap-2 mb-3">
                  <span class="text-blue-400 text-lg sm:text-xl">🎓</span>
                  <span class="text-blue-400 font-semibold text-sm sm:text-base">Titulación Oficial Completada</span>
                </div>

                <p class="text-zinc-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Completé exitosamente el Grado Superior en Desarrollo de Aplicaciones Web con formación dual en GOLIVE
                  Services.
                  Esta titulación me proporciona <strong class="text-white">60 ECTS reconocidos</strong> para el Grado
                  en Ingeniería Informática.
                </p>

                <div class="space-y-2 mb-4 text-sm">
                  <div class="flex items-start gap-2">
                    <span class="text-blue-400 mt-0.5">✓</span>
                    <span class="text-zinc-300">Desarrollo Frontend: HTML5, CSS3, JavaScript, Vue.js</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-blue-400 mt-0.5">✓</span>
                    <span class="text-zinc-300">Backend: PHP, Symfony, Node.js, bases de datos</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-blue-400 mt-0.5">✓</span>
                    <span class="text-zinc-300">DevOps: Docker, Git, despliegue de aplicaciones</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-blue-400 mt-0.5">✓</span>
                    <span class="text-zinc-300">Experiencia práctica real en empresa (modalidad DUAL)</span>
                  </div>
                </div>

                <!-- Competencias -->
                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                  <span class="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">Frontend</span>
                  <span class="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">Backend</span>
                  <span class="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">Full-Stack</span>
                  <span class="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">DUAL</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Ingeniería Informática - Futuro -->
          <div class="relative reveal-card">
            <div
              class="hidden sm:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full border-4 border-purple-500 bg-zinc-900 z-10 education-dot-future">
            </div>

            <div class="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
              <!-- Fecha y título -->
              <div class="sm:text-right sm:pr-12 mb-4 sm:mb-0">
                <span
                  class="inline-block px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-400 text-xs sm:text-sm font-medium mb-2">
                  2026 - 2028
                </span>
                <h3 class="text-xl sm:text-2xl font-bold text-white">Grado en Ingeniería Informática</h3>
                <div class="text-purple-400 mt-1 sm:mt-2 text-sm sm:text-base">UCAM - Acceso directo a 3º curso</div>
                <div class="text-xs sm:text-sm text-zinc-500 mt-1">🎯 Solo 2 años más para completar el grado</div>
              </div>

              <!-- Contenido -->
              <div
                class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-purple-800/50 shadow-lg sm:ml-12 hover:border-purple-500/30 transition-all duration-300 hover:shadow-purple-500/10">
                <div class="flex items-center gap-2 mb-3">
                  <span class="text-purple-400 text-lg sm:text-xl">🏛️</span>
                  <span class="text-purple-400 font-semibold text-sm sm:text-base">Universidad Católica de Murcia</span>
                </div>

                <p class="text-zinc-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Gracias al pack de ILERNA (DAW + Diplomas), podré acceder directamente a 3º curso del Grado en
                  Ingeniería Informática.
                  Con 94,5 ECTS ya reconocidos, <strong class="text-white">solo necesito 2 años más</strong> para
                  obtener el título universitario completo.
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div class="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-purple-400">⏰</span>
                      <span class="font-semibold text-purple-300 text-sm">Acceso directo</span>
                    </div>
                    <p class="text-zinc-300 text-xs">Entrada a 3º curso sin exámenes de acceso</p>
                  </div>

                  <div class="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-purple-400">🎯</span>
                      <span class="font-semibold text-purple-300 text-sm">Optimización</span>
                    </div>
                    <p class="text-zinc-300 text-xs">Solo 4 años total en lugar de 6</p>
                  </div>
                </div>

                <div class="space-y-2 mb-4 text-sm">
                  <div class="flex items-start gap-2">
                    <span class="text-purple-400 mt-0.5">🧮</span>
                    <span class="text-zinc-300">Fundamentos matemáticos: Álgebra, Cálculo, Estadística</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-purple-400 mt-0.5">💻</span>
                    <span class="text-zinc-300">Arquitectura y estructura de computadores</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-purple-400 mt-0.5">🔒</span>
                    <span class="text-zinc-300">Seguridad informática y administración de sistemas</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-purple-400 mt-0.5">🤖</span>
                    <span class="text-zinc-300">Inteligencia artificial y sistemas inteligentes</span>
                  </div>
                </div>

                <!-- Ventajas del plan -->
                <div class="bg-purple-500/5 rounded-lg p-3 border border-purple-500/10 mb-4">
                  <div class="text-center">
                    <span class="text-purple-300 font-semibold text-sm">🏆 Plan Optimizado</span>
                    <p class="text-zinc-400 text-xs mt-1">DAW (2 años) + Diplomas + Grado (2 años) = Ingeniería en 4
                      años</p>
                  </div>
                </div>

                <!-- Competencias futuras -->
                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                  <span class="px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs">Ingeniería
                    Software</span>
                  <span class="px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs">IA & ML</span>
                  <span class="px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs">Sistemas
                    Distribuidos</span>
                  <span class="px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs">Ciberseguridad</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Grado Medio SMR -->
          <div class="relative reveal-card">
            <div
              class="hidden sm:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full border-4 border-cyan-500 bg-zinc-900 z-10 education-dot">
            </div>

            <div class="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
              <!-- Fecha y título -->
              <div class="sm:text-right sm:pr-12 mb-4 sm:mb-0">
                <span
                  class="inline-block px-3 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-medium mb-2">
                  2020 - 2022
                </span>
                <h3 class="text-xl sm:text-2xl font-bold text-white">Grado Medio SMR</h3>
                <div class="text-cyan-400 mt-1 sm:mt-2 text-sm sm:text-base">Sistemas Microinformáticos y Redes</div>
                <div class="text-xs sm:text-sm text-zinc-500 mt-1">🏗️ Base técnica sólida</div>
              </div>

              <!-- Contenido -->
              <div
                class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-zinc-800 shadow-lg sm:ml-12 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-cyan-500/10">
                <p class="text-zinc-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Base sólida en sistemas informáticos, redes y mantenimiento de equipos.
                  Esta formación me proporcionó los fundamentos técnicos necesarios para continuar hacia el desarrollo
                  web
                  y la especialización universitaria.
                </p>

                <div class="space-y-2 mb-4 text-sm">
                  <div class="flex items-start gap-2">
                    <span class="text-cyan-400 mt-0.5">🔧</span>
                    <span class="text-zinc-300">Administración de sistemas operativos</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-cyan-400 mt-0.5">🌐</span>
                    <span class="text-zinc-300">Configuración y gestión de redes</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-cyan-400 mt-0.5">💾</span>
                    <span class="text-zinc-300">Mantenimiento de hardware y software</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-cyan-400 mt-0.5">📝</span>
                    <span class="text-zinc-300">Fundamentos de programación</span>
                  </div>
                </div>

                <!-- Competencias -->
                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                  <span class="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs">Redes</span>
                  <span class="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs">Hardware</span>
                  <span class="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs">SO</span>
                  <span class="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs">Soporte</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Resumen del plan formativo -->
      <div class="mt-12 sm:mt-20">
        <div
          class="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-800/50 max-w-4xl mx-auto">
          <h3 class="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              🗺️ Roadmap Académico Completo
            </span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <!-- Completado -->
            <div class="text-center">
              <div
                class="w-16 h-16 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center mx-auto mb-3">
                <span class="text-2xl">✅</span>
              </div>
              <h4 class="font-bold text-blue-400 mb-2">Completado</h4>
              <div class="space-y-1 text-sm text-zinc-300">
                <p>• Grado Medio SMR</p>
                <p>• Técnico Superior DAW</p>
                <p class="text-blue-400 font-medium">60 ECTS reconocidos</p>
              </div>
            </div>

            <!-- En Curso -->
            <div class="text-center">
              <div
                class="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto mb-3">
                <span class="text-2xl">🎯</span>
              </div>
              <h4 class="font-bold text-emerald-400 mb-2">En Curso</h4>
              <div class="space-y-1 text-sm text-zinc-300">
                <p>• Diplomas Universitarios</p>
                <p>• Certificaciones AWS</p>
                <p class="text-emerald-400 font-medium">+34,5 ECTS adicionales</p>
              </div>
            </div>

            <!-- Futuro -->
            <div class="text-center">
              <div
                class="w-16 h-16 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center mx-auto mb-3">
                <span class="text-2xl">🚀</span>
              </div>
              <h4 class="font-bold text-purple-400 mb-2">2026-2028</h4>
              <div class="space-y-1 text-sm text-zinc-300">
                <p>• Ingeniería Informática</p>
                <p>• Acceso directo a 3º</p>
                <p class="text-purple-400 font-medium">Solo 2 años más</p>
              </div>
            </div>
          </div>

          <!-- Ventajas del plan -->
          <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-4 border border-blue-500/20">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div>
                <div class="text-2xl mb-2">⚡</div>
                <div class="font-semibold text-blue-300 text-sm">Optimizado</div>
                <div class="text-xs text-zinc-400">4 años en total</div>
              </div>
              <div>
                <div class="text-2xl mb-2">🎓</div>
                <div class="font-semibold text-emerald-300 text-sm">Sin exámenes</div>
                <div class="text-xs text-zinc-400">Acceso directo</div>
              </div>
              <div>
                <div class="text-2xl mb-2">💼</div>
                <div class="font-semibold text-orange-300 text-sm">Experiencia</div>
                <div class="text-xs text-zinc-400">Formación DUAL</div>
              </div>
              <div>
                <div class="text-2xl mb-2">☁️</div>
                <div class="font-semibold text-purple-300 text-sm">Cloud Ready</div>
                <div class="text-xs text-zinc-400">Certificaciones AWS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Habilidades adicionales y certificaciones -->
      <div class="mt-12 sm:mt-20 text-center">
        <h3 class="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Competencias y Especialización</h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <!-- Tarjeta 1 -->
          <div
            class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-zinc-800 text-center hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
            <div
              class="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 sm:h-8 w-6 sm:w-8 text-blue-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h4 class="text-base sm:text-lg font-bold text-white mb-2">Desarrollo Full-Stack</h4>
            <p class="text-zinc-400 text-sm sm:text-base">Especialización completa en desarrollo frontend y backend con
              tecnologías modernas y experiencia práctica.</p>
          </div>

          <!-- Tarjeta 2 -->
          <div
            class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-zinc-800 text-center hover:border-orange-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
            <div
              class="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 sm:h-8 w-6 sm:w-8 text-orange-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h4 class="text-base sm:text-lg font-bold text-white mb-2">Cloud Computing</h4>
            <p class="text-zinc-400 text-sm sm:text-base">Especialización en AWS con enfoque en arquitecturas escalables
              y soluciones serverless modernas.</p>
          </div>

          <!-- Tarjeta 3 -->
          <div
            class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-zinc-800 text-center hover:border-purple-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
            <div
              class="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 sm:h-8 w-6 sm:w-8 text-purple-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h4 class="text-base sm:text-lg font-bold text-white mb-2">Ingeniería de Software</h4>
            <p class="text-zinc-400 text-sm sm:text-base">Formación universitaria en ingeniería de software,
              arquitectura de sistemas y desarrollo empresarial.</p>
          </div>
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

.education-dot-future {
  box-shadow: 0 0 15px rgba(168, 85, 247, 0.6);
  animation: pulse-purple 2s infinite;
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

@keyframes pulse-purple {
  0% {
    box-shadow: 0 0 15px rgba(168, 85, 247, 0.6);
  }

  50% {
    box-shadow: 0 0 25px rgba(168, 85, 247, 0.8);
  }

  100% {
    box-shadow: 0 0 15px rgba(168, 85, 247, 0.6);
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
}
</style>
