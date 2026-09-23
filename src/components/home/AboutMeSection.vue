<template>
  <section id="sobre-mi" class="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-zinc-950">
    <!-- Background -->
    <div class="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-teal-600/10 blur-3xl"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-emerald-600/10 blur-3xl"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header con texto de fondo -->
      <div class="text-center mb-12 md:mb-16 relative">
        <!-- Texto de fondo gigante -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-8xl md:text-9xl font-bold opacity-5 text-white w-full text-center pointer-events-none whitespace-nowrap">
          SOBRE MÍ
        </div>
        
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 relative z-10 animate-fade-in">
          Conoce Mi
          <span class="bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
            Historia
          </span>
        </h2>
        <div class="h-1.5 w-20 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full mb-6"></div>
      </div>

      <!-- Content Grid -->
      <div class="max-w-6xl mx-auto">
        <!-- Card Principal - Quién soy -->
        <div class="relative group mb-8">
          <div class="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div class="relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl border border-zinc-800 p-6 md:p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
              <h3 class="text-2xl md:text-3xl font-bold text-white">¿Quién soy?</h3>
            </div>

            <div class="space-y-4 text-zinc-300 text-sm md:text-base leading-relaxed">
              <p>
                Soy <strong class="text-white">Gabriel</strong>, un apasionado del desarrollo de software y la tecnología. 
                Me encanta crear soluciones que realmente funcionen y ayuden a las personas. Para mí, programar no es solo 
                escribir código, es <span class="text-teal-400 font-medium">resolver problemas de forma creativa</span> y 
                construir experiencias que marquen la diferencia.
              </p>

              <p>
                Soy una persona <span class="text-emerald-400 font-medium">curiosa y autodidacta</span>. Me fascina 
                aprender nuevas tecnologías y explorar cómo funcionan las cosas por dentro. La ciberseguridad me 
                apasiona tanto como el desarrollo porque creo que <strong class="text-white">crear tecnología segura 
                es una responsabilidad</strong>, no una opción.
              </p>

              <p>
                Me considero alguien <span class="text-blue-400 font-medium">proactivo y resolutivo</span>. Cuando me 
                enfrento a un desafío, no me rindo hasta encontrar la solución. Me gusta trabajar en equipo, aprender 
                de otros desarrolladores y compartir lo que sé. Creo firmemente en que la mejor forma de crecer es 
                rodeándote de gente que te inspire.
              </p>

              <p>
                Más allá del código, me apasiona estar al día con las últimas tendencias tech, participar en 
                hackathones y crear proyectos que surgen de ideas locas. Soy de esas personas que ve un problema 
                cotidiano y piensa <span class="text-purple-400 font-medium">"esto lo puedo automatizar"</span>.
              </p>
            </div>

            <!-- Quote -->
            <div class="mt-6 border-l-4 border-teal-500 pl-4 bg-teal-500/5 rounded-r-lg py-3">
              <p class="text-base text-white italic">
                "Mi objetivo es crear tecnología que no solo funcione, sino que sea segura, elegante y aporte valor real"
              </p>
            </div>
          </div>
        </div>

        <!-- Grid de valores/pasiones -->
        <div class="grid md:grid-cols-3 gap-4 md:gap-6">
          <!-- Card 1: Pasión por el código -->
          <div class="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800 p-6 hover:border-blue-500/30 transition-all">
            <div class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 class="text-lg font-bold text-white mb-2">Pasión por el código</h4>
            <p class="text-zinc-400 text-sm">
              Disfruto cada línea de código, cada bug que soluciono y cada funcionalidad que cobra vida.
            </p>
          </div>

          <!-- Card 2: Mentalidad de crecimiento -->
          <div class="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800 p-6 hover:border-emerald-500/30 transition-all">
            <div class="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h4 class="text-lg font-bold text-white mb-2">Mentalidad de crecimiento</h4>
            <p class="text-zinc-400 text-sm">
              Siempre buscando aprender, mejorar y salir de mi zona de confort para evolucionar como profesional.
            </p>
          </div>

          <!-- Card 3: Orientado a soluciones -->
          <div class="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800 p-6 hover:border-purple-500/30 transition-all">
            <div class="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 class="text-lg font-bold text-white mb-2">Orientado a soluciones</h4>
            <p class="text-zinc-400 text-sm">
              No me quedo en el problema, busco la manera de resolverlo de forma eficiente y elegante.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMeSection'
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}
</style>