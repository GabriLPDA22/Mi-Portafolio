import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'

// Importar plugin de analytics
import analytics from './plugins/analytics'

// Configuración optimizada de Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importación selectiva de iconos para reducir el tamaño del bundle
import { 
  faCode, faDownload, faExternalLinkAlt, faEnvelope, 
  faBriefcase, faGraduationCap, faTrophy, faLaptopCode, 
  faArrowRight, faBars, faTimes, faLink, faEye, 
  faChevronUp, faCheck, faMapMarkerAlt, faShield, 
  faGlobe, faServer, faDatabase, faCodeBranch, 
  faImages, faChevronLeft, faChevronRight, faStar
} from '@fortawesome/free-solid-svg-icons'

// Importación selectiva de iconos de marca para reducir el tamaño del bundle
import {
  faGithub, faLinkedin, faTwitter, faHtml5,
  faCss3Alt, faJs, faVuejs, faReact, faNodeJs,
  faPhp, faSymfony, faDocker, faPython, faJava, faSass
} from '@fortawesome/free-brands-svg-icons'

// Agregar solo los iconos utilizados a la biblioteca
library.add(
  // Solid
  faCode, faDownload, faExternalLinkAlt, faEnvelope,
  faBriefcase, faGraduationCap, faTrophy, faLaptopCode,
  faArrowRight, faBars, faTimes, faLink, faEye,
  faChevronUp, faCheck, faMapMarkerAlt, faShield,
  faGlobe, faServer, faDatabase, faCodeBranch,
  faImages, faChevronLeft, faChevronRight, faStar,

  // Brands
  faGithub, faLinkedin, faTwitter, faHtml5,
  faCss3Alt, faJs, faVuejs, faReact, faNodeJs,
  faPhp, faSymfony, faDocker, faPython, faJava, faSass
)

// Crear la instancia de pinia
const pinia = createPinia()

// Crear y configurar la aplicación
const app = createApp(App)

// Registrar componentes globales
app.component('font-awesome-icon', FontAwesomeIcon)

// Registrar plugins
app.use(pinia)
app.use(router)
app.use(analytics, { router })

// Configuración de rendimiento
app.config.performance = process.env.NODE_ENV !== 'production'

// Montar la aplicación
app.mount('#app')