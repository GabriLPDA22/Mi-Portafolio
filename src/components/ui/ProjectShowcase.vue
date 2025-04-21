<template>
  <div class="showcase-container">
    <!-- Navegación de proyectos -->
    <div class="project-nav">
      <button v-for="(project, index) in featuredProjects" :key="index" class="nav-button"
        :class="{ active: activeProject === index }" @click="setActiveProject(index)">
        {{ project.title }}
      </button>
    </div>

    <!-- Galería de proyectos -->
    <div class="projects-gallery">
      <!-- Usar un div absoluto por proyecto -->
      <div v-for="(project, index) in featuredProjects" :key="project.title" class="project-card"
        :class="{ active: activeProject === index }" :style="{ zIndex: activeProject === index ? 10 : 1 }">
        <!-- Contenido del proyecto -->
        <div class="project-content">
          <div class="project-badge" :class="project.color">
            <span class="badge-dot"></span>
            {{ project.subtitle }}
          </div>

          <h3 class="project-title">
            <div class="title-line">{{ project.title.split(' ')[0] }}</div>
            <div class="title-line gradient-text" :class="`${project.color}-gradient`">
              {{ project.title.split(' ').slice(1).join(' ') }}
            </div>
          </h3>

          <p class="project-description">
            {{ project.description }}
          </p>

          <!-- Barra de progreso para proyectos en desarrollo -->
          <div v-if="project.progress" class="progress-container">
            <div class="progress-header">
              <span>Progreso del proyecto</span>
              <span class="progress-percentage">{{ project.progress }}%</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" :style="{ width: `${project.progress}%` }">
                <div class="progress-glow"></div>
              </div>
              <div class="progress-markers">
                <div class="marker m-25" :class="{ active: project.progress >= 25 }">
                  <div class="marker-label">Diseño</div>
                </div>
                <div class="marker m-50" :class="{ active: project.progress >= 50 }">
                  <div class="marker-label">Desarrollo</div>
                </div>
                <div class="marker m-75" :class="{ active: project.progress >= 75 }">
                  <div class="marker-label">Testing</div>
                </div>
                <div class="marker m-100" :class="{ active: project.progress >= 100 }">
                  <div class="marker-label">Lanzamiento</div>
                </div>
              </div>
            </div>
          </div>

          <div class="tech-stack">
            <div v-for="(tech, i) in project.technologies" :key="i" class="tech-badge" :class="getTechClass(tech)">
              <span>{{ tech }}</span>
            </div>
          </div>

          <div class="project-actions">
            <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="action-button github-btn">
              <div class="button-glow"></div>
              <span>Ver Código</span>
            </a>

            <!-- Reemplazar el botón de demo por uno que navegue a ProjectDetail -->
            <router-link :to="{ name: 'ProjectDetail', params: { id: project.id } }" class="action-button gallery-btn">
              <div class="button-glow"></div>
              <span>Ver Galería</span>
            </router-link>
          </div>
        </div>

        <!-- Imágenes del proyecto -->
        <div class="project-media" @mousemove="handleMouseMove($event, index)">
          <div class="media-container" :style="getMediaTransform(index)">
            <div class="main-image-wrap">
              <div class="image-frame" :class="project.color === 'purple' ? 'purple-frame' : ''"></div>
              <img :src="project.image" :alt="project.title" class="main-image">
              <div class="image-reflection"></div>

              <!-- Etiqueta para proyectos en desarrollo -->
              <div v-if="project.inDevelopment" class="dev-label">
                <div class="dev-pulse"></div>
                <span>En Desarrollo</span>
              </div>
            </div>

            <!-- Imágenes secundarias flotantes -->
            <div v-if="project.secondaryImage" class="floating-screenshot secondary-image">
              <img :src="project.secondaryImage" :alt="`${project.title} screenshot`">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  name: 'ProjectShowcase',
  props: {
    featuredProjects: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeProject: 0,
      mousePositions: [],
      mediaTransforms: []
    };
  },
  created() {
    // Inicializar arrays para seguimiento de posición del mouse para cada proyecto
    this.mousePositions = this.featuredProjects.map(() => ({ x: 0, y: 0 }));
    this.mediaTransforms = this.featuredProjects.map(() => 'rotateY(0deg) rotateX(0deg)');
  },
  methods: {
    setActiveProject(index) {
      this.activeProject = index;
    },

    handleMouseMove(e, projectIndex) {
      const container = e.currentTarget;
      const rect = container.getBoundingClientRect();

      // Calcular la posición relativa del mouse
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calcular el desplazamiento desde el centro (-1 a 1)
      const mouseX = (e.clientX - centerX) / (rect.width / 2);
      const mouseY = (e.clientY - centerY) / (rect.height / 2);

      // Limitar el movimiento
      this.mousePositions[projectIndex] = {
        x: Math.max(-1, Math.min(1, mouseX)),
        y: Math.max(-1, Math.min(1, mouseY))
      };

      // Aplicar el efecto 3D
      this.updateMediaTransform(projectIndex);
    },

    updateMediaTransform(projectIndex) {
      const { x, y } = this.mousePositions[projectIndex];
      const tiltX = y * 15; // Rotación en eje X
      const tiltY = -x * 15; // Rotación en eje Y

      this.mediaTransforms[projectIndex] = `rotateY(${tiltY}deg) rotateX(${tiltX}deg)`;
    },

    getMediaTransform(projectIndex) {
      return { transform: this.mediaTransforms[projectIndex] };
    },

    getTechClass(tech) {
      const techMap = {
        'Vue.js': 'vue',
        'TypeScript': 'typescript',
        'SCSS': 'scss',
        'C#': 'csharp',
        'Tailwind': 'tailwind',
        'Astro': 'astro'
      };

      return techMap[tech] || '';
    }
  }
};
</script>

<style scoped>
.showcase-container {
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 2rem 0;
  min-height: 650px;
  /* Altura mínima para evitar saltos */
}

/* Navegación entre proyectos */
.project-nav {
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
  gap: 1rem;
}

.nav-button {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.nav-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.7s ease;
}

.nav-button:hover::before {
  left: 100%;
}

.nav-button.active {
  background: linear-gradient(90deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3));
  color: white;
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
}

/* Galería de proyectos */
.projects-gallery {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  min-height: 500px;
  /* Altura mínima para evitar saltos */
}

.gallery-btn {
  background: linear-gradient(90deg, #8b5cf6, #c084fc);
  color: white;
  border: none;
}

.gallery-btn:hover {
  box-shadow: 0 5px 15px rgba(139, 92, 246, 0.3);
}

.project-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 2rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease;
}

.project-card.active {
  opacity: 1;
  pointer-events: auto;
  position: relative;
}

/* Contenido del proyecto */
.project-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  color: #818cf8;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  width: fit-content;
  backdrop-filter: blur(10px);
}

.project-badge.purple {
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.2);
  color: #c084fc;
}

.badge-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #818cf8;
  animation: pulse 1.5s infinite;
}

.project-badge.purple .badge-dot {
  background-color: #c084fc;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.6;
    transform: scale(1.2);
  }
}

.project-title {
  margin-bottom: 1.5rem;
}

.title-line {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
}

.gradient-text {
  background: linear-gradient(90deg, #6366f1, #a5b4fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.purple-gradient {
  background: linear-gradient(90deg, #a855f7, #e879f9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.project-description {
  font-size: 1.125rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  max-width: 90%;
}

/* Barra de progreso */
.progress-container {
  width: 100%;
  margin-bottom: 2rem;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
}

.progress-percentage {
  font-weight: 600;
  color: #e879f9;
}

.progress-track {
  position: relative;
  width: 100%;
  height: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  overflow: hidden;
}

.progress-fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: linear-gradient(90deg, #a855f7, #e879f9);
  border-radius: 5px;
  transition: width 1s ease;
}

.progress-glow {
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(232, 121, 249, 0.7));
  filter: blur(3px);
  animation: glow-slide 2s infinite;
}

@keyframes glow-slide {

  0%,
  100% {
    opacity: 0.7;
  }

  50% {
    opacity: 0.3;
  }
}

/* Marcadores de progreso */
.progress-markers {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.marker {
  position: absolute;
  top: 50%;
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
}

.marker.active {
  background: #e879f9;
  border-color: #f9a8d4;
  box-shadow: 0 0 10px rgba(232, 121, 249, 0.7);
}

.marker-label {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
}

.m-25 {
  left: 25%;
}

.m-50 {
  left: 50%;
}

.m-75 {
  left: 75%;
}

.m-100 {
  left: 100%;
}

/* Tecnologías */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.tech-badge {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.tech-badge:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.tech-badge.vue {
  color: #4fc08d;
  border-color: rgba(79, 192, 141, 0.3);
}

.tech-badge.typescript {
  color: #007acc;
  border-color: rgba(0, 122, 204, 0.3);
}

.tech-badge.scss {
  color: #c6538c;
  border-color: rgba(198, 83, 140, 0.3);
}

.tech-badge.csharp {
  color: #68217a;
  border-color: rgba(104, 33, 122, 0.3);
}

.tech-badge.tailwind {
  color: #38bdf8;
  border-color: rgba(56, 189, 248, 0.3);
}

.tech-badge.astro {
  color: #ff5d01;
  border-color: rgba(255, 93, 1, 0.3);
}

/* Botones de acción */
.project-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.action-button {
  position: relative;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  overflow: hidden;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.action-button:hover {
  transform: translateY(-3px);
}

.button-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: button-shine 3s infinite;
  z-index: -1;
}

@keyframes button-shine {
  0% {
    left: -100%;
  }

  50%,
  100% {
    left: 100%;
  }
}

.github-btn {
  background: rgba(33, 33, 33, 0.8);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.github-btn:hover {
  background: #333;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.demo-btn {
  background: linear-gradient(90deg, #10b981, #34d399);
  color: white;
  border: none;
}

.demo-btn:hover {
  box-shadow: 0 5px 15px rgba(16, 185, 129, 0.3);
}

/* Media (imágenes) */
.project-media {
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1500px;
}

.media-container {
  position: relative;
  width: 100%;
  height: 400px;
  transform-style: preserve-3d;
  transition: transform 0.3s ease-out;
  will-change: transform;
}

.main-image-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: translateZ(0);
}

.image-frame {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(99, 102, 241, 0.3);
  border-radius: 20px;
  transform: translateZ(-5px);
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.2);
}

.purple-frame {
  border-color: rgba(168, 85, 247, 0.3);
  box-shadow: 0 0 30px rgba(168, 85, 247, 0.2);
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  transform: translateZ(0);
}

.image-reflection {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  border-radius: 16px;
  pointer-events: none;
}

/* Etiqueta de desarrollo */
.dev-label {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 6px 12px;
  background: rgba(168, 85, 247, 0.2);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #e879f9;
  display: flex;
  align-items: center;
  gap: 8px;
  backdrop-filter: blur(8px);
  z-index: 2;
}

.dev-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #e879f9;
  animation: pulse 1.5s infinite;
}

/* Imagen secundaria flotante */
.floating-screenshot {
  position: absolute;
  width: 150px;
  height: 120px;
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform-style: preserve-3d;
  transform: translateZ(30px) rotate(15deg);
  animation: float-screenshot 6s ease-in-out infinite;
}

.secondary-image {
  bottom: -30px;
  left: -20px;
}

.floating-screenshot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes float-screenshot {

  0%,
  100% {
    transform: translateZ(30px) rotate(15deg);
  }

  50% {
    transform: translateZ(40px) translateY(-10px) rotate(12deg);
  }
}

/* Media queries */
@media (max-width: 1200px) {
  .project-card {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-media {
    order: -1;
  }

  .media-container {
    height: 350px;
  }

  .floating-screenshot {
    width: 120px;
    height: 100px;
  }

  .title-line {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .nav-button {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }

  .media-container {
    height: 300px;
  }

  .floating-screenshot {
    width: 100px;
    height: 80px;
  }

  .title-line {
    font-size: 2rem;
  }

  .project-description {
    font-size: 1rem;
  }

  .tech-stack {
    gap: 0.5rem;
  }

  .tech-badge {
    padding: 0.4rem 0.75rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .project-nav {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .nav-button {
    width: 100%;
    max-width: 300px;
  }

  .media-container {
    height: 250px;
  }

  .floating-screenshot {
    width: 80px;
    height: 60px;
  }

  .title-line {
    font-size: 1.5rem;
  }

  .action-button {
    padding: 0.6rem 1.2rem;
    font-size: 0.875rem;
  }
}
</style>