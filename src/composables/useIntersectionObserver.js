// src/composables/useIntersectionObserver.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver(options = {}) {
  const elements = ref(new Set())
  const observedElements = ref(new Map())
  const observer = ref(null)
  
  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options
  }
  
  // Función para manejar las intersecciones
  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Activar la clase de animación según el tipo de elemento
        const el = entry.target
        if (el.classList.contains('fade-in-element')) {
          el.classList.add('visible')
        } else if (el.classList.contains('reveal-card')) {
          el.classList.add('revealed')
        } else if (el.classList.contains('reveal-element')) {
          el.classList.add('revealed')
        } else if (el.classList.contains('fade-right')) {
          el.classList.add('animated-right')
        } else if (el.classList.contains('fade-left')) {
          el.classList.add('animated-left')
        }
        
        // Llamar al callback personalizado si existe
        const callback = observedElements.value.get(el)
        if (callback) {
          callback(entry)
        }
        
        // Registrar visualización de sección para analytics
        const sectionId = el.closest('section')?.id
        if (sectionId && typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'section_view', {
            section_id: sectionId,
            visible_percent: Math.round(entry.intersectionRatio * 100)
          })
        }
        
        // Dejar de observar después de activar la animación
        observer.value.unobserve(el)
        elements.value.delete(el)
        observedElements.value.delete(el)
      }
    })
  }
  
  // Función para empezar a observar un elemento con un callback opcional
  const observe = (element, callback = null) => {
    if (!element || elements.value.has(element)) return
    
    elements.value.add(element)
    if (callback) {
      observedElements.value.set(element, callback)
    }
    
    if (observer.value) {
      observer.value.observe(element)
    }
  }
  
  // Función para dejar de observar un elemento
  const unobserve = (element) => {
    if (!element || !elements.value.has(element)) return
    
    if (observer.value) {
      observer.value.unobserve(element)
    }
    
    elements.value.delete(element)
    observedElements.value.delete(element)
  }
  
  // Función para observar todos los elementos con clases específicas
  const observeAll = (selector = '.fade-in-element, .reveal-card, .reveal-element, .fade-right, .fade-left') => {
    document.querySelectorAll(selector).forEach(el => observe(el))
  }
  
  // Función para limpiar todos los observadores
  const cleanup = () => {
    if (observer.value) {
      elements.value.forEach(element => {
        observer.value.unobserve(element)
      })
      elements.value.clear()
      observedElements.value.clear()
    }
  }
  
  // Inicialización y limpieza del ciclo de vida
  onMounted(() => {
    observer.value = new IntersectionObserver(handleIntersection, defaultOptions)
    
    // Si ya hay elementos en la lista, comenzar a observarlos
    elements.value.forEach(element => {
      observer.value.observe(element)
    })
  })
  
  onUnmounted(() => {
    cleanup()
  })
  
  return {
    observe,
    unobserve,
    observeAll,
    cleanup
  }
}