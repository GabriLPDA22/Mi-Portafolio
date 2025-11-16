<template>
  <div class="privacy-page">
    <div class="privacy-container">
      <button @click="goBack" class="back-button">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span>{{ t("privacy.back") }}</span>
      </button>

      <h1 class="privacy-title">{{ t("privacy.title") }}</h1>

      <div class="privacy-content">
        <section class="privacy-section">
          <h2>1. {{ t("privacy.sections.information.title") }}</h2>
          <p>{{ t("privacy.sections.information.content") }}</p>
          <ul>
            <li>{{ t("privacy.sections.information.items.ip") }}</li>
            <li>{{ t("privacy.sections.information.items.browser") }}</li>
            <li>{{ t("privacy.sections.information.items.pages") }}</li>
            <li>{{ t("privacy.sections.information.items.time") }}</li>
          </ul>
        </section>

        <section class="privacy-section">
          <h2>2. {{ t("privacy.sections.cookies.title") }}</h2>
          <p>{{ t("privacy.sections.cookies.content") }}</p>
        </section>

        <section class="privacy-section">
          <h2>3. {{ t("privacy.sections.sharing.title") }}</h2>
          <p>{{ t("privacy.sections.sharing.content") }}</p>
        </section>

        <section class="privacy-section">
          <h2>4. {{ t("privacy.sections.links.title") }}</h2>
          <p>{{ t("privacy.sections.links.content") }}</p>
        </section>

        <section class="privacy-section">
          <h2>5. {{ t("privacy.sections.contact.title") }}</h2>
          <p>{{ t("privacy.sections.contact.content") }}</p>
          <p>
            <a href="mailto:gsaiz.bajo@gmail.com" class="contact-link"
              >gsaiz.bajo@gmail.com</a
            >
          </p>
        </section>

        <p class="last-updated">
          {{ t("privacy.lastUpdated") }}:
          {{
            new Date().toLocaleDateString(locale === "es" ? "es-ES" : "en-US")
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "@/composables/useI18n";

export default {
  name: "PrivacyPolicy",

  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.privacy-page {
  min-height: 100vh;
  background: #0a0a0b;
  padding: 4rem 1.5rem;
}

.privacy-container {
  max-width: 800px;
  margin: 0 auto;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #ff6b35;
  transform: translateX(-4px);
}

.back-button svg {
  width: 20px;
  height: 20px;
}

.privacy-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  background: linear-gradient(135deg, #ff6b35, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 2rem;
}

.privacy-content {
  background: rgba(39, 39, 42, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2.5rem;
}

.privacy-section {
  margin-bottom: 2.5rem;
}

.privacy-section:last-of-type {
  margin-bottom: 0;
}

.privacy-section h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 1rem;
}

.privacy-section p {
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 0 1rem;
}

.privacy-section ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.privacy-section li {
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.75);
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.5rem;
}

.privacy-section li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #ff6b35;
  font-weight: 700;
}

.contact-link {
  color: #ff6b35;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #ec5b25;
  text-decoration: underline;
}

.last-updated {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  margin: 2rem 0 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 767px) {
  .privacy-content {
    padding: 1.5rem;
  }
}
</style>
