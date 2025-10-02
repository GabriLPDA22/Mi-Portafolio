<template>
    <main>
      <!-- Sección Hero -->
      <HeroSection />
  
      <!-- Sección Servicios (NUEVA - Con efectos parallax Apple) -->
      <ServicesSection />
  
      <!-- Sección Proyectos -->
      <ProjectsSection />
  
      <!-- Sección Habilidades -->
      <SkillsSection />
  
      <!-- Sección Experiencia -->
      <ExperienceSection />
  
      <!-- Sección Sobre mí -->
      <AboutMeSection />
    </main>
  </template>
  
  <script>
  import HeroSection from '@/components/home/HeroSection.vue'
  import ServicesSection from '@/components/home/ServicesSection.vue' // ✨ NUEVO
  import ProjectsSection from '@/components/home/ProjectsSection.vue'
  import SkillsSection from '@/components/home/SkillsSection.vue'
  import ExperienceSection from '@/components/home/ExperienceSection.vue'
  import AboutMeSection from '@/components/home/AboutMeSection.vue'
  
  export default {
    name: 'HomeView',
    components: {
      HeroSection,
      ServicesSection, // ✨ NUEVO
      ProjectsSection,
      SkillsSection,
      ExperienceSection,
      AboutMeSection,
    },
    mounted() {
      // Smooth scroll al hacer clic en links del header
      this.$nextTick(() => {
        if (window.location.hash) {
          const id = window.location.hash.substring(1);
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }
  }
  </script>
  
  <style scoped>
  /* Estilos globales del main si necesitas */
  main {
    position: relative;
    z-index: 1;
  }
  </style>