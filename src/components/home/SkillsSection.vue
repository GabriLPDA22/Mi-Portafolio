<template>
  <section id="skills" class="skills-section">
    <!-- Background with Parallax Layers -->
    <div class="parallax-bg">
      <div class="bg-layer layer-1" ref="layer1"></div>
      <div class="bg-layer layer-2" ref="layer2"></div>
      <div class="bg-layer layer-3" ref="layer3"></div>
    </div>

    <!-- Elementos decorativos -->
    <div class="decorative-elements">
      <div class="deco-circle deco-1"></div>
      <div class="deco-circle deco-2"></div>
      <div class="deco-square deco-3"></div>
    </div>

    <div class="skills-container">
      <!-- Sticky Header -->
      <div class="sticky-header" ref="stickyHeader">
        <div class="header-content" :class="{ 'is-scrolled': isScrolled }">
          <!-- Texto gigante de fondo -->
          <div class="background-text">SKILLS</div>

          <h2 class="section-title">
            Stack <span class="gradient-text">Tecnológico</span>
          </h2>
          <p class="section-subtitle">
            Tecnologías y herramientas con las que trabajo día a día para
            construir productos digitales de calidad.
          </p>
        </div>
      </div>

      <!-- Skills Grid por categorías -->
      <div class="skills-categories">
        <!-- Frontend -->
        <div class="category-section" ref="category1">
          <div class="category-header">
            <div class="category-icon">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 class="category-title">Frontend & Frameworks</h3>
          </div>
          <div class="skills-grid">
            <div
              v-for="tech in frontend"
              :key="tech.name"
              class="skill-card"
              :title="tech.name"
            >
              <img :src="tech.icon" :alt="tech.name" loading="lazy" />
              <span class="skill-name">{{ tech.name }}</span>
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div class="category-section" ref="category2">
          <div class="category-header">
            <div class="category-icon">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
            </div>
            <h3 class="category-title">Backend & Bases de Datos</h3>
          </div>
          <div class="skills-grid">
            <div
              v-for="tech in backend"
              :key="tech.name"
              class="skill-card"
              :title="tech.name"
            >
              <img :src="tech.icon" :alt="tech.name" loading="lazy" />
              <span class="skill-name">{{ tech.name }}</span>
            </div>
          </div>
        </div>

        <!-- Mobile -->
        <div class="category-section" ref="category3">
          <div class="category-header">
            <div class="category-icon">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="category-title">Mobile</h3>
          </div>
          <div class="skills-grid">
            <div
              v-for="tech in mobile"
              :key="tech.name"
              class="skill-card featured"
              :title="tech.name"
            >
              <img :src="tech.icon" :alt="tech.name" loading="lazy" />
              <span class="skill-name">{{ tech.name }}</span>
              <div v-if="tech.badge" class="skill-badge">{{ tech.badge }}</div>
            </div>
          </div>
        </div>

        <!-- Tools & DevOps -->
        <div class="category-section" ref="category4">
          <div class="category-header">
            <div class="category-icon">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 class="category-title">Herramientas & DevOps</h3>
          </div>
          <div class="skills-grid">
            <div
              v-for="tech in tools"
              :key="tech.name"
              class="skill-card"
              :title="tech.name"
            >
              <img :src="tech.icon" :alt="tech.name" loading="lazy" />
              <span class="skill-name">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SkillsSection",

  data() {
    return {
      isScrolled: false,
      frontend: [
        {
          name: "Vue.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "TailwindCSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "SCSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        },
      ],
      backend: [
        {
          name: "C#",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        },
        {
          name: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
          name: "Symfony",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original-wordmark.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
      ],
      mobile: [
        {
          name: "React Native",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          badge: "🔥",
        },
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
      ],
      tools: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "AWS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
      ],
    };
  },

  mounted() {
    this.initParallax();
    this.initScrollAnimations();
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    initParallax() {
      window.addEventListener("scroll", this.handleScroll);
    },

    handleScroll() {
      const scrollY = window.scrollY;

      if (this.$refs.layer1) {
        this.$refs.layer1.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
      if (this.$refs.layer2) {
        this.$refs.layer2.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
      if (this.$refs.layer3) {
        this.$refs.layer3.style.transform = `translateY(${scrollY * 0.15}px)`;
      }

      if (this.$refs.stickyHeader) {
        const headerTop = this.$refs.stickyHeader.getBoundingClientRect().top;
        this.isScrolled = headerTop <= 100;
      }

      this.animateCategoriesOnScroll();
    },

    animateCategoriesOnScroll() {
      const categories = [
        this.$refs.category1,
        this.$refs.category2,
        this.$refs.category3,
        this.$refs.category4,
      ];

      categories.forEach((category) => {
        if (!category) return;

        const rect = category.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const progress = 1 - rect.top / windowHeight;

        if (progress > 0 && progress < 1.2) {
          const opacity = Math.min(progress * 2, 1);
          const translateY = (1 - Math.min(progress, 1)) * 30;

          category.style.opacity = opacity;
          category.style.transform = `translateY(${translateY}px)`;
        }
      });
    },

    initScrollAnimations() {
      setTimeout(() => {
        this.animateCategoriesOnScroll();
      }, 100);
    },
  },
};
</script>

<style scoped>
/* ================================
   BASE
   ================================ */
.skills-section {
  position: relative;
  min-height: 100vh;
  padding: 8rem 0 4rem;
  background: #0a0a0b;
  overflow: hidden;
}

/* Parallax Background */
.parallax-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.bg-layer {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.12;
  will-change: transform;
}

.layer-1 {
  top: 15%;
  right: 5%;
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, #a855f7, #ec4899);
}

.layer-2 {
  top: 55%;
  left: 10%;
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #06b6d4, #ff6b35);
}

.layer-3 {
  bottom: 15%;
  right: 20%;
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #ff6b35, #a855f7);
}

/* Decorative Elements */
.decorative-elements {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  overflow: hidden;
}

.deco-circle,
.deco-square {
  position: absolute;
  opacity: 0.3;
  border: 2px solid;
  animation: float-slow 10s ease-in-out infinite;
}

.deco-circle {
  border-radius: 50%;
}

.deco-1 {
  top: 25%;
  left: 8%;
  width: 60px;
  height: 60px;
  border-color: #a855f7;
}

.deco-2 {
  bottom: 25%;
  right: 10%;
  width: 70px;
  height: 70px;
  border-color: #ec4899;
  animation-delay: -4s;
}

.deco-square {
  top: 60%;
  left: 12%;
  width: 50px;
  height: 50px;
  border-color: #06b6d4;
  border-radius: 0.5rem;
  transform: rotate(45deg);
  animation-delay: -7s;
}

@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-15px) translateX(10px);
  }
  50% {
    transform: translateY(-5px) translateX(-10px);
  }
  75% {
    transform: translateY(-20px) translateX(5px);
  }
}

@media (max-width: 1023px) {
  .decorative-elements {
    display: none;
  }
}

/* ================================
   CONTAINER
   ================================ */
.skills-container {
  position: relative;
  z-index: 10;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ================================
   STICKY HEADER
   ================================ */
.sticky-header {
  position: sticky;
  top: 100px;
  z-index: 20;
  margin-bottom: 4rem;
  padding: 2rem 0;
  transition: all 0.6s ease;
}

.header-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  transition: all 0.6s ease;
}

.background-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(6rem, 12vw, 10rem);
  font-weight: 900;
  color: rgba(255, 255, 255, 0.03);
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  letter-spacing: 0.1em;
}

.header-content.is-scrolled {
  transform: scale(0.95);
  opacity: 0.8;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.2;
  color: #ffffff;
  margin: 0 0 1rem;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, #ff6b35 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0 auto;
  max-width: 600px;
}

/* ================================
   SKILLS CATEGORIES
   ================================ */
.skills-categories {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.category-section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.category-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.category-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(255, 107, 53, 0.2),
    rgba(168, 85, 247, 0.2)
  );
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 0.75rem;

  svg {
    width: 24px;
    height: 24px;
    color: #ff6b35;
  }
}

.category-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
}

/* ================================
   SKILLS GRID
   ================================ */
.skills-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
}

.skill-card {
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: rgba(39, 39, 42, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 0.75rem;
  transition: all 0.3s ease;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.05);
    background: rgba(39, 39, 42, 0.9);
    border-color: rgba(255, 107, 53, 0.5);
    box-shadow: 0 12px 30px rgba(255, 107, 53, 0.3);

    img {
      transform: scale(1.1);
    }
  }

  &.featured {
    border-color: rgba(255, 107, 53, 0.4);
    background: rgba(39, 39, 42, 0.8);
  }

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;

    img {
      width: 50px;
      height: 50px;
    }
  }
}

.skill-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  line-height: 1.2;
}

.skill-badge {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff6b35, #ec4899);
  border-radius: 50%;
  font-size: 0.75rem;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);
}

/* ================================
   RESPONSIVE
   ================================ */
@media (max-width: 767px) {
  .skills-section {
    padding: 4rem 0 2rem;
  }

  .sticky-header {
    position: relative;
    top: 0;
  }

  .skills-categories {
    gap: 3rem;
  }

  .category-title {
    font-size: 1.25rem;
  }
}
</style>
