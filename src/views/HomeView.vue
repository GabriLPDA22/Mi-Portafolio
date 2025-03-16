<template>
    <main>
        <!-- Sección Hero -->
        <HeroSection />

        <!-- Sección Proyectos -->
        <ProjectsSection />

        <!-- Sección Reconocimientos -->
        <AwardsSection />

        <!-- Sección Experiencia -->
        <ExperienceSection />

        <!-- Sección Hackathones -->
        <HackathonSection />

        <!-- Sección Educación -->
        <EducationSection />

        <!-- Sección Sobre mí -->
        <AboutMeSection />

        <!-- Sección CV -->
        <CvDownloadSection />
    </main>
</template>

<script>
import HeroSection from '@/components/home/HeroSection.vue'
import ProjectsSection from '@/components/home/ProjectsSection.vue'
import AwardsSection from '@/components/home/AwardsSection.vue'
import ExperienceSection from '@/components/home/ExperienceSection.vue'
import HackathonSection from '@/components/home/HackathonSection.vue'
import EducationSection from '@/components/home/EducationSection.vue'
import AboutMeSection from '@/components/home/AboutMeSection.vue'
import CvDownloadSection from '@/components/home/CvDownloadSection.vue'

export default {
    name: 'HomeView',
    components: {
        HeroSection,
        ProjectsSection,
        AwardsSection,
        ExperienceSection,
        HackathonSection,
        EducationSection,
        AboutMeSection,
        CvDownloadSection,
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