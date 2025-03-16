import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'Portafolio - Gabriel Saiz Estudiante de DAW'
        }
    },
    {
        path: '/proyecto/:id',
        name: 'ProjectDetail',
        component: ProjectDetailView,
        props: true,
        meta: {
            title: 'Detalles del Proyecto - Portafolio de Gabriel Saiz'
        }
    },
    // Ruta de redirección para gestionar fragmentos de URL
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 80 // Offset para el header fijo
            }
        } else if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

// Actualizar título dinámicamente
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Portafolio - Gabriel Saiz'
    next()
})

export default router