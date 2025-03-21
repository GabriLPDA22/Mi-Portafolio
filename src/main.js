import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'

// Importaciones para Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importar iconos solid
import {
    faCode,
    faDownload,
    faExternalLinkAlt,
    faEnvelope,
    faBriefcase,
    faGraduationCap,
    faTrophy,
    faLaptopCode,
    faSun,
    faMoon,
    faArrowRight,
    faBars,
    faTimes,
    faLink,
    faEye,
    faChevronUp,
    faCheck,
    faMapMarkerAlt,
    faShield,
    faGlobe,
    faServer,
    faDatabase,
    faCodeBranch,
    faImages, // Nuevo icono para galería
    faChevronLeft, // Nuevo icono para navegación
    faChevronRight // Nuevo icono para navegación
} from '@fortawesome/free-solid-svg-icons'

// Importar iconos brands
import {
    faGithub,
    faLinkedin,
    faTwitter,
    faInstagram,
    faHtml5,
    faCss3,
    faCss3Alt,
    faJs,
    faVuejs,
    faReact,
    faNodeJs,
    faNpm,
    faGitAlt,
    faPhp,
    faSymfony,
    faDocker,
    faPython,
    faJava,
    faSass,
    faMicrosoft
} from '@fortawesome/free-brands-svg-icons'

// Agregar iconos a la biblioteca
library.add(
    // Solid
    faCode,
    faDownload,
    faExternalLinkAlt,
    faEnvelope,
    faBriefcase,
    faGraduationCap,
    faTrophy,
    faLaptopCode,
    faSun,
    faMoon,
    faArrowRight,
    faBars,
    faTimes,
    faLink,
    faEye,
    faChevronUp,
    faCheck,
    faMapMarkerAlt,
    faShield,
    faGlobe,
    faServer,
    faDatabase,
    faCodeBranch,
    faImages,
    faChevronLeft,
    faChevronRight,

    // Brands
    faGithub,
    faLinkedin,
    faTwitter,
    faInstagram,
    faHtml5,
    faCss3,
    faCss3Alt,
    faJs,
    faVuejs,
    faReact,
    faNodeJs,
    faNpm,
    faGitAlt,
    faPhp,
    faSymfony,
    faDocker,
    faPython,
    faJava,
    faSass,
    faMicrosoft
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')