<template>
    <main>
        <!-- Sección Hero -->
        <HeroSection />

        <!-- Sección Proyectos -->
        <ProjectsSection />

        <!-- Sección Habilidades con efectos interactivos -->
        <SkillsSection />

        <!-- Sección Experiencia -->
        <ExperienceSection />

        <!-- Sección Sobre mí -->
        <AboutMeSection />
    </main>
</template>

<script>
import HeroSection from '@/components/home/HeroSection.vue'
import ProjectsSection from '@/components/home/ProjectsSection.vue'
import SkillsSection from '@/components/home/SkillsSection.vue'
import ExperienceSection from '@/components/home/ExperienceSection.vue'
import AboutMeSection from '@/components/home/AboutMeSection.vue'

export default {
    name: 'HomeView',
    components: {
        HeroSection,
        ProjectsSection,
        SkillsSection,
        ExperienceSection,
        AboutMeSection,
    },
    mounted() {
        // Si hay un hash en la URL, navegar a esa sección después de que todo esté cargado
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