<template>
  <section id="estudios" class="py-16 sm:py-24 relative overflow-hidden bg-zinc-950">
    <ParticleBackground color="#6366f1" :particleCount="50" :connectionDistance="120" :speed="0.5" :interactive="true" :size="1.2" />
    
    <!-- Gradientes de fondo -->
    <div class="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"></div>

    <div class="container mx-auto px-4 sm:px-6 relative">
      <!-- Header -->
      <div class="text-center mb-12 sm:mb-16 relative">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-8xl md:text-9xl font-bold opacity-5 text-white w-full text-center z-0">
          ESTUDIOS
        </div>
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold relative z-10 inline-block mb-3 sm:mb-4">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
            Formación Académica
          </span>
        </h2>
        <div class="h-1.5 w-16 sm:w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
        <p class="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto px-4">
          Especialización en IA & Ciberseguridad
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative max-w-4xl mx-auto">
        <div class="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-orange-500 via-blue-500 to-cyan-500"></div>

        <div class="space-y-12 sm:space-y-20">

          <!-- Doble Especialización - EN CURSO -->
          <div class="relative reveal-card">
            <div class="hidden sm:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full border-4 border-emerald-500 bg-zinc-900 z-10 education-dot-current"></div>

            <div class="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div class="sm:text-right sm:pr-12 mb-4 sm:mb-0">
                <span class="inline-block px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-2 animate-pulse">
                  🔥 En Curso
                </span>
                <h3 class="text-xl sm:text-2xl font-bold text-white">Doble Especialización</h3>
                <div class="text-emerald-400 mt-1 sm:mt-2 text-sm sm:text-base">IA & Ciberseguridad Ofensiva</div>
                <div class="text-xs sm:text-sm text-zinc-500 mt-1">🚀 Formación dual estratégica</div>
              </div>

              <div class="bg-gradient-to-br from-emerald-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-800/50 shadow-lg sm:ml-12 hover:border-emerald-500/30 transition-all duration-300">
                <p class="text-zinc-300 mb-4 text-sm sm:text-base leading-relaxed">
                  Con el Grado Superior completado, potencio mi perfil con dos masters simultáneos en las áreas más demandadas: 
                  desarrollo con inteligencia artificial avanzada y seguridad ofensiva.
                </p>

                <div class="space-y-3 mb-4">
                  <!-- IA -->
                  <div class="bg-purple-600/10 rounded-lg p-3 border border-purple-500/30">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="text-purple-400">🤖</span>
                      <h5 class="font-semibold text-purple-300 text-sm">Máster IA & Low-Code - FOUNDERZ + Microsoft</h5>
                    </div>
                    <p class="text-zinc-400 text-xs mb-2">
                      Programa élite con certificación oficial Microsoft. IA generativa, prompt engineering y desarrollo low-code con Power Platform.
                    </p>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-2 py-0.5 bg-purple-500/20 rounded-full text-purple-300 text-xs">GPT-4o & Claude</span>
                      <span class="px-2 py-0.5 bg-purple-500/20 rounded-full text-purple-300 text-xs">Azure AI Studio</span>
                      <span class="px-2 py-0.5 bg-purple-500/20 rounded-full text-purple-300 text-xs">Copilot Dev</span>
                      <span class="px-2 py-0.5 bg-purple-500/20 rounded-full text-purple-300 text-xs">Power Platform</span>
                    </div>
                  </div>

                  <!-- Ciberseguridad -->
                  <div class="bg-red-600/10 rounded-lg p-3 border border-red-500/30">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="text-red-400">🔐</span>
                      <h5 class="font-semibold text-red-300 text-sm">Máster Ciberseguridad - CPIFP Montessori</h5>
                    </div>
                    <p class="text-zinc-400 text-xs mb-2">
                      Especialización en ethical hacking, pentesting, auditorías de seguridad y desarrollo seguro con metodología SecDevOps.
                    </p>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-2 py-0.5 bg-red-500/20 rounded-full text-red-300 text-xs">Pentesting</span>
                      <span class="px-2 py-0.5 bg-red-500/20 rounded-full text-red-300 text-xs">Red Team</span>
                      <span class="px-2 py-0.5 bg-red-500/20 rounded-full text-red-300 text-xs">OWASP Top 10</span>
                      <span class="px-2 py-0.5 bg-red-500/20 rounded-full text-red-300 text-xs">SecDevOps</span>
                    </div>
                  </div>
                </div>

                <!-- Sinergia -->
                <div class="bg-emerald-500/5 rounded-lg p-3 border border-emerald-500/20">
                  <p class="text-zinc-300 text-xs">
                    <strong class="text-emerald-400">Combinación estratégica:</strong> Desarrollar soluciones con IA integrada y seguridad desde el diseño inicial.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- AWS -->
          <div class="relative reveal-card">
            <div class="hidden sm:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full border-4 border-orange-500 bg-zinc-900 z-10 education-dot-aws"></div>

            <div class="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div class="sm:text-right sm:pr-12 mb-4 sm:mb-0">
                <span class="inline-block px-3 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-xs sm:text-sm font-medium mb-2">
                  Verano 2026
                </span>
                <h3 class="text-xl sm:text-2xl font-bold text-white">Certificaciones AWS</h3>
                <div class="text-orange-400 mt-1 sm:mt-2 text-sm sm:text-base">Amazon Web Services</div>
                <div class="text-xs sm:text-sm text-zinc-500 mt-1">☁️ Cloud Computing</div>
              </div>

              <div class="bg-gradient-to-br from-orange-900/30 to-orange-800/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-orange-800/50 shadow-lg sm:ml-12 hover:border-orange-500/30 transition-all duration-300">
                <p class="text-zinc-300 mb-3 text-sm sm:text-base leading-relaxed">
                  Próximo objetivo: certificaciones AWS para dominar arquitectura cloud escalable, infraestructura como código y servicios serverless en producción.
                </p>

                <div class="space-y-2 mb-3 text-sm">
                  <div class="flex items-start gap-2 text-zinc-300">
                    <span class="text-orange-400">•</span>
                    <span>Solutions Architect Associate</span>
                  </div>
                  <div class="flex items-start gap-2 text-zinc-300">
                    <span class="text-orange-400">•</span>
                    <span>Servicios Lambda, EC2, S3, DynamoDB</span>
                  </div>
                  <div class="flex items-start gap-2 text-zinc-300">
                    <span class="text-orange-400">•</span>
                    <span>CloudFormation & Terraform IaC</span>
                  </div>
                </div>

                <div class="flex flex-wrap gap-2">
                  <span class="px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs">AWS</span>
                  <span class="px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs">Serverless</span>
                  <span class="px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs">IaC</span>
                </div>
              </div>
            </div>
          </div>

          <!-- DAW -->
          <div class="relative reveal-card">
            <div class="hidden sm:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full border-4 border-blue-500 bg-zinc-900 z-10 education-dot"></div>

            <div class="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div class="sm:text-right sm:pr-12 mb-4 sm:mb-0">
                <span class="inline-block px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-2">
                  2023 - 2025
                </span>
                <h3 class="text-xl sm:text-2xl font-bold text-white">Técnico Superior DAW</h3>
                <div class="text-blue-400 mt-1 sm:mt-2 text-sm sm:text-base">CPIFP Montessori, Zaragoza</div>
                <div class="text-xs sm:text-sm text-zinc-500 mt-1">✅ Graduado - Modalidad DUAL</div>
              </div>

              <div class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-zinc-800 shadow-lg sm:ml-12 hover:border-blue-500/30 transition-all duration-300">
                <p class="text-zinc-300 mb-3 text-sm sm:text-base leading-relaxed">
                  Desarrollo de Aplicaciones Web full-stack con formación DUAL. Experiencia práctica real en 
                  <a href="https://www.onegolive.com" target="_blank" rel="noopener" class="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30 transition-colors">
                    GOLIVE Services
                  </a>, trabajando en proyectos de clientes.
                </p>

                <div class="space-y-2 mb-3 text-sm">
                  <div class="flex items-start gap-2 text-zinc-300">
                    <span class="text-blue-400">•</span>
                    <span>Frontend: Vue.js, React, TypeScript</span>
                  </div>
                  <div class="flex items-start gap-2 text-zinc-300">
                    <span class="text-blue-400">•</span>
                    <span>Backend: .NET 9, PHP Symfony, Node.js</span>
                  </div>
                  <div class="flex items-start gap-2 text-zinc-300">
                    <span class="text-blue-400">•</span>
                    <span>DevOps: Docker, Kubernetes, CI/CD</span>
                  </div>
                </div>

                <div class="flex flex-wrap gap-2">
                  <span class="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">Vue.js</span>
                  <span class="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">.NET 9</span>
                  <span class="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">PostgreSQL</span>
                  <span class="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">Docker</span>
                </div>
              </div>
            </div>
          </div>

          <!-- SMR -->
          <div class="relative reveal-card">
            <div class="hidden sm:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full border-4 border-cyan-500 bg-zinc-900 z-10 education-dot"></div>

            <div class="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div class="sm:text-right sm:pr-12 mb-4 sm:mb-0">
                <span class="inline-block px-3 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-medium mb-2">
                  2020 - 2022
                </span>
                <h3 class="text-xl sm:text-2xl font-bold text-white">Grado Medio SMR</h3>
                <div class="text-cyan-400 mt-1 sm:mt-2 text-sm sm:text-base">IES Pilar Lorengar, Zaragoza</div>
                <div class="text-xs sm:text-sm text-zinc-500 mt-1">🏗️ Base técnica sólida</div>
              </div>

              <div class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-zinc-800 shadow-lg sm:ml-12 hover:border-cyan-500/30 transition-all duration-300">
                <p class="text-zinc-300 mb-3 text-sm sm:text-base leading-relaxed">
                  Sistemas Microinformáticos y Redes. Fundamentos en administración de sistemas, redes y hardware que construyeron mi base técnica.
                </p>

                <div class="space-y-2 mb-3 text-sm">
                  <div class="flex items-start gap-2 text-zinc-300">
                    <span class="text-cyan-400">•</span>
                    <span>Administración de sistemas Linux/Windows</span>
                  </div>
                  <div class="flex items-start gap-2 text-zinc-300">
                    <span class="text-cyan-400">•</span>
                    <span>Configuración de redes TCP/IP</span>
                  </div>
                </div>

                <div class="flex flex-wrap gap-2">
                  <span class="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs">Redes</span>
                  <span class="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs">Linux</span>
                  <span class="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs">Windows Server</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Roadmap -->
      <div class="mt-12 sm:mt-20">
        <div class="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-800/50 max-w-4xl mx-auto">
          <h3 class="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              🗺️ Roadmap 2025
            </span>
          </h3>

          <div class="grid grid-cols-3 gap-4 sm:gap-6">
            <div class="text-center">
              <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center mx-auto mb-3">
                <span class="text-2xl">✅</span>
              </div>
              <h4 class="font-bold text-blue-400 mb-1 text-sm sm:text-base">Completado</h4>
              <p class="text-zinc-500 text-xs">SMR + DAW</p>
            </div>

            <div class="text-center">
              <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto mb-3 animate-pulse">
                <span class="text-2xl">🎯</span>
              </div>
              <h4 class="font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent mb-1 text-sm sm:text-base">En Curso</h4>
              <p class="text-zinc-500 text-xs">IA + Cyber</p>
            </div>

            <div class="text-center">
              <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center mx-auto mb-3">
                <span class="text-2xl">☁️</span>
              </div>
              <h4 class="font-bold text-orange-400 mb-1 text-sm sm:text-base">Próximo</h4>
              <p class="text-zinc-500 text-xs">AWS Cloud</p>
            </div>
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

/* Optimizaciones móvil */
@media (max-width: 640px) {
  .blur-2xl {
    filter: blur(20px);
  }

  .blur-3xl {
    filter: blur(30px);
  }
}

/* Smooth scroll */
@media (prefers-reduced-motion: no-preference) {
  * {
    scroll-behavior: smooth;
  }
}
</style>