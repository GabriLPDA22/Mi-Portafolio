<template>
  <div class="not-found">
    <div class="not-found-content">
      <div class="error-code">404</div>

      <h1 class="error-title">Página no encontrada</h1>

      <p class="error-description">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>

      <router-link to="/" class="back-button">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span>Volver al inicio</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundView",
};
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0a0b;
  padding: 2rem;
}

.not-found-content {
  text-align: center;
  max-width: 500px;
}

.error-code {
  font-size: clamp(6rem, 15vw, 10rem);
  font-weight: 900;
  background: linear-gradient(135deg, #ff6b35, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 1rem;
}

.error-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 1rem;
}

.error-description {
  font-size: 1.125rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0 0 2rem;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #ff6b35, #ec4899);
  border-radius: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
  transition: all 0.3s ease;
}

.back-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.5);
}

.back-button svg {
  width: 20px;
  height: 20px;
}
</style>
