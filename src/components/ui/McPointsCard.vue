<template>
  <div class="project-showcase">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-content">
        <div class="brand-header">
          <img src="/img/Logo.webp" alt="McPoints Logo" class="app-logo" />
          <div class="title-container">
            <h1 class="main-title">McPoints</h1>
            <div class="app-badge">
              <font-awesome-icon :icon="['fab', 'android']" />
              <span>Android App</span>
            </div>
          </div>
        </div>

        <p class="hero-description">
          Coleccionador de números promocionales de McDonald's
        </p>

        <div class="hero-actions">
          <a href="https://github.com/GabriLPDA22/McPoints/releases"
             target="_blank"
             class="cta-primary">
            <font-awesome-icon :icon="['fas', 'download']" />
            <span>Descargar APK</span>
            <div class="version-badge">v1.0.1</div>
          </a>
          <a href="https://github.com/GabriLPDA22/McPoints"
             target="_blank"
             class="cta-secondary">
            <font-awesome-icon :icon="['fab', 'github']" />
            <span>Ver Código</span>
          </a>
        </div>
      </div>
    </div>

    <!-- App Showcase -->
    <div class="app-showcase">
      <div class="showcase-content">
        <div class="device-container">
          <div class="device-frame">
            <div class="device-notch"></div>
            <div class="device-screen">
              <transition name="screen-fade" mode="out-in">
                <img :key="currentScreen"
                     :src="screens[currentScreen].image"
                     :alt="screens[currentScreen].title"
                     class="screen-image" />
              </transition>
            </div>
          </div>

          <div class="screen-indicators">
            <button
              v-for="(screen, index) in screens"
              :key="index"
              @click="currentScreen = index"
              :class="{ active: currentScreen === index }"
              class="indicator-dot"
            />
          </div>
        </div>

        <div class="app-info">
          <h2>Aplicación Android nativa</h2>
          <p>McPoints es una aplicación Android diseñada para coleccionar números promocionales de McDonald's.
             Permite escanear códigos, llevar un registro de tu colección y visualizar estadísticas detalladas.</p>

          <div class="features-list">
            <div class="feature-item">
              <font-awesome-icon :icon="['fas', 'camera']" />
              <span>Escáner con la cámara</span>
            </div>
            <div class="feature-item">
              <font-awesome-icon :icon="['fas', 'mobile-alt']" />
              <span>Interface táctil optimizada</span>
            </div>
            <div class="feature-item">
              <font-awesome-icon :icon="['fas', 'database']" />
              <span>Almacenamiento local con SQLite</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Grid -->
    <div class="features-section">
      <h2 class="section-title">Características principales</h2>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <font-awesome-icon :icon="['fas', 'camera']" />
          </div>
          <h3>Escáner inteligente</h3>
          <p>Captura números promocionales con la cámara o introdúcelos manualmente</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <font-awesome-icon :icon="['fas', 'chart-bar']" />
          </div>
          <h3>Estadísticas detalladas</h3>
          <p>Visualiza tu progreso con gráficos y análisis de tu colección</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <font-awesome-icon :icon="['fas', 'filter']" />
          </div>
          <h3>Filtros y búsqueda</h3>
          <p>Encuentra números específicos y filtra por estado o categoría</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <font-awesome-icon :icon="['fas', 'file-export']" />
          </div>
          <h3>Exportar/Importar</h3>
          <p>Guarda y recupera tu colección para compartirla entre dispositivos</p>
        </div>
      </div>
    </div>

    <!-- Tech Stack -->
    <div class="tech-section">
      <h2 class="section-title">Tecnologías utilizadas</h2>

      <div class="tech-stack">
        <div class="tech-item android">
          <font-awesome-icon :icon="['fab', 'android']" />
          <span>Android SDK</span>
        </div>
        <div class="tech-item java">
          <font-awesome-icon :icon="['fab', 'java']" />
          <span>Java</span>
        </div>
        <div class="tech-item sqlite">
          <font-awesome-icon :icon="['fas', 'database']" />
          <span>SQLite</span>
        </div>
        <div class="tech-item camerax">
          <font-awesome-icon :icon="['fas', 'camera']" />
          <span>CameraX</span>
        </div>
      </div>
    </div>

    <!-- Final CTA -->
    <div class="final-cta">
      <h2>¿Listo para comenzar tu colección?</h2>
      <p>Descarga McPoints y empieza a coleccionar todos los números promocionales</p>

      <div class="cta-buttons">
        <a href="https://github.com/GabriLPDA22/McPoints/releases/download/v1.0.0/McPoints_v1.0.0.apk"
           target="_blank"
           class="cta-download">
          <font-awesome-icon :icon="['fab', 'android']" />
          <span>Descargar para Android</span>
        </a>
        <router-link to="/proyecto/7" class="cta-details">
          <span>Ver más detalles</span>
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'McPointsCard',
  data() {
    return {
      currentScreen: 0,
      screens: [
        {
          title: 'Inicio',
          image: '/img/McPointsHome.webp'
        },
        {
          title: 'Escáner',
          image: '/img/McPointsScanner.webp'
        },
        {
          title: 'Estadísticas',
          image: '/img/McPointsStats.webp'
        },
        {
          title: 'Ajustes',
          image: '/img/McPointsSettings.webp'
        }
      ],
      autoRotateInterval: null
    };
  },
  mounted() {
    // Auto rotar las pantallas cada 4 segundos
    this.autoRotateInterval = setInterval(() => {
      this.currentScreen = (this.currentScreen + 1) % this.screens.length;
    }, 4000);
  },
  beforeUnmount() {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
    }
  }
};
</script>

<style scoped>
.project-showcase {
  position: relative;
  color: white;
  overflow: hidden;
}

/* Hero Section */
.hero-section {
  padding: 40px 20px;
  text-align: center;
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(234, 88, 12, 0.1));
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.brand-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 24px;
}

.app-logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.title-container {
  text-align: left;
}

.main-title {
  font-size: 48px;
  font-weight: 700;
  margin: 0;
  line-height: 1;
  color: #ef4444;
}

.app-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 14px;
  margin-top: 8px;
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.hero-description {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
  margin: 16px 0 32px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.cta-primary, .cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s;
  position: relative;
}

.cta-primary {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}

.cta-secondary {
  background: rgba(31, 41, 55, 0.8);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.cta-secondary:hover {
  background: rgba(31, 41, 55, 1);
  border-color: rgba(255, 255, 255, 0.2);
}

.version-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #22c55e;
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 10px;
  font-weight: 600;
}

/* App Showcase */
.app-showcase {
  padding: 60px 20px;
  background: rgba(17, 17, 19, 0.9);
}

.showcase-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.device-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.device-frame {
  position: relative;
  width: 300px;
  height: 600px;
  background: #1a1a1f;
  border-radius: 40px;
  padding: 10px;
  box-shadow:
    inset 0 0 0 10px #2d2d35,
    0 0 0 1px #3d3d45,
    0 20px 40px rgba(0, 0, 0, 0.4);
}

.device-notch {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 26px;
  background: #1a1a1f;
  border-radius: 16px;
  z-index: 10;
}

.device-screen {
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
}

.screen-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.screen-indicators {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 24px;
}

.indicator-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  padding: 0;
}

.indicator-dot.active {
  background: #ef4444;
  transform: scale(1.3);
}

.app-info h2 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
}

.app-info p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 32px;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
}

.feature-item svg {
  color: #ef4444;
  font-size: 20px;
}

/* Features Section */
.features-section {
  padding: 60px 20px;
  background: rgba(26, 26, 31, 0.95);
}

.section-title {
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 48px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: rgba(31, 41, 55, 0.8);
  padding: 24px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: rgba(239, 68, 68, 0.3);
}

.feature-icon {
  width: 48px;
  height: 48px;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: #ef4444;
  font-size: 20px;
}

.feature-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

.feature-card p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  line-height: 1.5;
}

/* Tech Section */
.tech-section {
  padding: 60px 20px;
  background: rgba(17, 17, 19, 0.9);
}

.tech-stack {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;
  transition: all 0.3s;
  border: 1px solid transparent;
}

.tech-item:hover {
  transform: translateY(-3px);
}

.tech-item.android {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border-color: rgba(34, 197, 94, 0.2);
}

.tech-item.java {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  border-color: rgba(59, 130, 246, 0.2);
}

.tech-item.sqlite {
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  border-color: rgba(249, 115, 22, 0.2);
}

.tech-item.camerax {
  background: rgba(168, 85, 247, 0.1);
  color: #a855f7;
  border-color: rgba(168, 85, 247, 0.2);
}

/* Final CTA */
.final-cta {
  padding: 80px 20px;
  text-align: center;
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(234, 88, 12, 0.1));
}

.final-cta h2 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 16px;
}

.final-cta p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 32px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.cta-download, .cta-details {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s;
}

.cta-download {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
}

.cta-download:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}

.cta-details {
  background: rgba(31, 41, 55, 0.8);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.cta-details:hover {
  background: rgba(31, 41, 55, 1);
  border-color: rgba(255, 255, 255, 0.2);
}

/* Animations */
.screen-fade-enter-active,
.screen-fade-leave-active {
  transition: opacity 0.5s ease;
}

.screen-fade-enter-from,
.screen-fade-leave-to {
  opacity: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    padding: 30px 20px;
  }

  .brand-header {
    flex-direction: column;
    gap: 16px;
  }

  .app-logo {
    width: 60px;
    height: 60px;
  }

  .main-title {
    font-size: 36px;
    text-align: center;
  }

  .title-container {
    text-align: center;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .cta-primary, .cta-secondary {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  .showcase-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .device-frame {
    width: 260px;
    height: 520px;
  }

  .app-info h2 {
    font-size: 28px;
  }

  .section-title {
    font-size: 28px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .tech-stack {
    gap: 12px;
  }

  .tech-item {
    padding: 8px 16px;
    font-size: 14px;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .cta-download, .cta-details {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 32px;
  }

  .hero-description {
    font-size: 16px;
  }

  .device-frame {
    width: 240px;
    height: 480px;
    border-radius: 30px;
  }

  .device-screen {
    border-radius: 22px;
  }

  .device-notch {
    width: 120px;
    height: 22px;
  }

  .app-info h2 {
    font-size: 24px;
  }

  .app-info p {
    font-size: 16px;
  }

  .feature-card {
    padding: 20px;
  }

  .final-cta h2 {
    font-size: 24px;
  }

  .final-cta p {
    font-size: 16px;
  }
}
</style>
