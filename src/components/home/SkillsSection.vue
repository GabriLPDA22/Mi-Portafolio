<template>
  <section id="skills" class="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-zinc-950">
    <!-- Background animado -->
    <ParticleBackground 
      color="#8b5cf6" 
      :particleCount="40" 
      :connectionDistance="100" 
      :speed="0.3"
      :interactive="true" 
    />

    <!-- Gradientes de fondo -->
    <div class="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header -->
      <div class="text-center mb-12 md:mb-16 relative">
        <!-- Título de fondo gigante -->
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-8xl md:text-9xl font-bold opacity-5 text-white w-full text-center z-0 pointer-events-none"
        >
          HABILIDADES
        </div>

        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 animate-fade-in relative z-10">
          Mis
          <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Habilidades
          </span>
        </h2>
        
        <p class="text-zinc-400 text-base md:text-lg max-w-3xl mx-auto relative z-10">
          Stack completo para desarrollo web y mobile
        </p>
      </div>

      <!-- Grid de categorías compacto y centrado -->
      <div class="max-w-5xl mx-auto space-y-10 md:space-y-14">
        <!-- Categoría por categoría -->
        <div 
          v-for="(category, catIndex) in categories" 
          :key="category.name"
          class="fade-in-element"
          :style="`animation-delay: ${catIndex * 0.1}s`"
        >
          <!-- Header de categoría -->
          <div class="flex items-center justify-center gap-3 mb-6">
            <component 
              :is="category.icon" 
              :size="20" 
              :class="category.iconColor" 
            />
            <h3 class="text-lg md:text-xl font-bold text-white">
              {{ category.name }}
            </h3>
          </div>

          <!-- Iconos centrados -->
          <div class="flex flex-wrap justify-center gap-3 md:gap-4">
            <div
              v-for="(tech, techIndex) in category.technologies"
              :key="tech.name"
              class="skill-badge group"
              :style="`animation-delay: ${(catIndex * 0.05) + (techIndex * 0.02)}s`"
              :title="tech.name"
            >
              <!-- Glow effect -->
              <div 
                class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
                :class="tech.glowClass"
              ></div>

              <!-- Imagen del icono -->
              <div class="relative z-10">
                <img 
                  :src="tech.icon" 
                  :alt="tech.name"
                  class="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <!-- Badge especial -->
              <div 
                v-if="tech.badge"
                class="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[10px] shadow-lg"
                :class="tech.badgeClass"
              >
                {{ tech.badge }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ParticleBackground from '@/components/ui/ParticleBackground.vue';
import { 
  Code2, 
  Server, 
  Smartphone, 
  Wrench
} from 'lucide-vue-next';

export default {
  name: 'SkillsSection',
  components: {
    ParticleBackground,
    Code2,
    Server,
    Smartphone,
    Wrench
  },
  data() {
    return {
      categories: [
        {
          name: 'Frontend & Frameworks',
          icon: Code2,
          iconColor: 'text-blue-400',
          technologies: [
            { 
              name: 'Vue.js', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
              glowClass: 'bg-green-500/30'
            },
            { 
              name: 'React', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
              glowClass: 'bg-cyan-500/30'
            },
            { 
              name: 'JavaScript', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
              glowClass: 'bg-yellow-500/30'
            },
            { 
              name: 'TypeScript', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
              glowClass: 'bg-blue-500/30'
            },
            { 
              name: 'HTML5', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
              glowClass: 'bg-orange-500/30'
            },
            { 
              name: 'CSS3', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
              glowClass: 'bg-blue-500/30'
            },
            { 
              name: 'TailwindCSS', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
              glowClass: 'bg-cyan-500/30'
            },
            { 
              name: 'SCSS', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
              glowClass: 'bg-pink-500/30'
            },
            { 
              name: 'Bootstrap', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
              glowClass: 'bg-purple-500/30'
            }
          ]
        },
        {
          name: 'Backend & Bases de Datos',
          icon: Server,
          iconColor: 'text-purple-400',
          technologies: [
            { 
              name: 'PHP', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
              glowClass: 'bg-indigo-500/30'
            },
            { 
              name: 'Symfony', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg',
              glowClass: 'bg-zinc-500/30'
            },
            { 
              name: '.NET', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
              glowClass: 'bg-blue-500/30'
            },
            { 
              name: 'C#', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
              glowClass: 'bg-purple-500/30'
            },
            { 
              name: 'Java', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
              glowClass: 'bg-red-500/30'
            },
            { 
              name: 'Node.js', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
              glowClass: 'bg-green-500/30'
            },
            { 
              name: 'Python', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
              glowClass: 'bg-blue-500/30'
            },
            { 
              name: 'PostgreSQL', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
              glowClass: 'bg-blue-500/30'
            },
            { 
              name: 'MySQL', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
              glowClass: 'bg-orange-500/30'
            },
            { 
              name: 'MongoDB', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
              glowClass: 'bg-green-500/30'
            }
          ]
        },
        {
          name: 'Mobile',
          icon: Smartphone,
          iconColor: 'text-pink-400',
          technologies: [
            { 
              name: 'React Native', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
              glowClass: 'bg-cyan-500/30',
              badge: '🔥',
              badgeClass: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
            },
            { 
              name: 'Java', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
              glowClass: 'bg-red-500/30'
            }
          ]
        },
        {
          name: 'Herramientas & DevOps',
          icon: Wrench,
          iconColor: 'text-orange-400',
          technologies: [
            { 
              name: 'Git', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
              glowClass: 'bg-orange-500/30'
            },
            { 
              name: 'GitHub', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
              glowClass: 'bg-zinc-500/30'
            },
            { 
              name: 'Docker', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
              glowClass: 'bg-blue-500/30'
            },
            { 
              name: 'AWS', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
              glowClass: 'bg-orange-500/30'
            },
            { 
              name: 'Figma', 
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
              glowClass: 'bg-purple-500/30'
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Animaciones */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

.fade-in-element {
  opacity: 0;
  animation: fade-in 0.8s ease-out forwards;
}

/* Skill Badges - Compactos y centrados */
.skill-badge {
  position: relative;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(24, 24, 27, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(63, 63, 70, 0.5);
  border-radius: 0.875rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  animation: fade-in 0.4s ease-out forwards;
}

.skill-badge:hover {
  transform: translateY(-4px) scale(1.1);
  border-color: rgba(139, 92, 246, 0.6);
  background: rgba(139, 92, 246, 0.1);
  box-shadow: 0 10px 30px -10px rgba(139, 92, 246, 0.5);
}

/* Responsive: más grande en desktop */
@media (min-width: 768px) {
  .skill-badge {
    width: 60px;
    height: 60px;
  }
}

/* Smooth scroll */
@media (prefers-reduced-motion: no-preference) {
  * {
    scroll-behavior: smooth;
  }
}
</style>