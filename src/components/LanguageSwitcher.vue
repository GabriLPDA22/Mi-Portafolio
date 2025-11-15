<template>
  <div class="language-switcher">
    <button
      v-for="lang in languages"
      :key="lang.code"
      @click="changeLanguage(lang.code)"
      :class="['lang-button', { active: locale === lang.code }]"
      :aria-label="`Switch to ${lang.name}`"
    >
      <span class="flag">{{ lang.flag }}</span>
      <span class="code">{{ lang.code.toUpperCase() }}</span>
    </button>
  </div>
</template>

<script>
import { useI18n } from "@/composables/useI18n";

export default {
  name: "LanguageSwitcher",

  setup() {
    const { locale, setLocale } = useI18n();

    const languages = [
      { code: "es", name: "Español", flag: "🇪🇸" },
      { code: "en", name: "English", flag: "🇬🇧" },
    ];

    const changeLanguage = (code) => {
      setLocale(code);
    };

    return {
      locale,
      languages,
      changeLanguage,
    };
  },
};
</script>

<style scoped>
.language-switcher {
  display: flex;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 0.25rem;
}

.lang-button {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.875rem;
  background: transparent;
  border: none;
  border-radius: 0.375rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lang-button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.lang-button.active {
  background: linear-gradient(135deg, #ff6b35, #ec4899);
  color: #ffffff;
  box-shadow: 0 2px 10px rgba(255, 107, 53, 0.3);
}

.flag {
  font-size: 1.125rem;
  line-height: 1;
}

.code {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}

@media (max-width: 767px) {
  .lang-button .code {
    display: none;
  }
}
</style>
