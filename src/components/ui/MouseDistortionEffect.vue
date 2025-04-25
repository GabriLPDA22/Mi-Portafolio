<!-- src/components/ui/MouseDistortionEffect.vue -->
<template>
    <div 
      ref="container" 
      class="mouse-distortion-container"
      @mousemove="handleMouseMove"
      @mouseleave="resetEffect"
    >
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MouseDistortionEffect',
    props: {
      intensity: {
        type: Number,
        default: 0.1
      },
      invert: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        containerRect: null,
        elements: [],
        mouseX: 0,
        mouseY: 0,
        raf: null
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initializeEffect();
        window.addEventListener('resize', this.onResize);
      });
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.onResize);
      if (this.raf) {
        cancelAnimationFrame(this.raf);
      }
    },
    methods: {
      initializeEffect() {
        this.containerRect = this.$refs.container.getBoundingClientRect();
        this.elements = this.$refs.container.querySelectorAll('.distort-element');
        
        // Inicializar posiciones iniciales
        this.elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          el._defaultX = rect.left + rect.width / 2;
          el._defaultY = rect.top + rect.height / 2;
          el._scale = 1;
          el._rotation = 0;
          
          // Asegurarse de que el elemento tiene posición relativa o absoluta
          const computedStyle = window.getComputedStyle(el);
          if (computedStyle.position === 'static') {
            el.style.position = 'relative';
          }
          
          // Asegurarse de que el transform-origin está en el centro
          el.style.transformOrigin = 'center center';
          
          // Aplicar configuración para usar will-change para optimización
          el.style.willChange = 'transform';
        });
      },
      
      onResize() {
        this.containerRect = this.$refs.container.getBoundingClientRect();
        this.initializeEffect();
      },
      
      handleMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        
        // Cancelar cualquier animación previa
        if (this.raf) {
          cancelAnimationFrame(this.raf);
        }
        
        // Iniciar loop de animación
        this.raf = requestAnimationFrame(this.updateElements);
      },
      
      updateElements() {
        const containerCenterX = this.containerRect.left + this.containerRect.width / 2;
        const containerCenterY = this.containerRect.top + this.containerRect.height / 2;
        
        // Calcular la distancia relativa desde el centro del contenedor
        const relativeX = (this.mouseX - containerCenterX) / (this.containerRect.width / 2);
        const relativeY = (this.mouseY - containerCenterY) / (this.containerRect.height / 2);
        
        this.elements.forEach(el => {
          // Calcular la distancia entre el mouse y el elemento
          const rect = el.getBoundingClientRect();
          const elementCenterX = rect.left + rect.width / 2;
          const elementCenterY = rect.top + rect.height / 2;
          
          // Calcular el vector desde el elemento al mouse
          let displacementX = this.mouseX - elementCenterX;
          let displacementY = this.mouseY - elementCenterY;
          
          // Normalizar la distancia para que afecte menos a elementos más lejanos
          const distance = Math.sqrt(displacementX * displacementX + displacementY * displacementY);
          const normalizedDistance = Math.max(1, distance);
          
          // Calcular el movimiento basado en la distancia y la intensidad
          const moveFactorX = (displacementX / normalizedDistance) * this.intensity * 40;
          const moveFactorY = (displacementY / normalizedDistance) * this.intensity * 40;
          
          // Si se invierte el efecto, invertir la dirección
          const directionMultiplier = this.invert ? -1 : 1;
          
          // Calcular rotación basada en la posición del mouse
          const rotationFactor = (relativeX * relativeY) * 10 * this.intensity * directionMultiplier;
          
          // Calcular escala basada en la proximidad del mouse
          const proximityFactor = Math.max(0, 1 - (distance / 500));
          const scaleFactor = 1 + (proximityFactor * this.intensity * 0.2);
          
          // Guardar los valores actuales
          el._translateX = moveFactorX * directionMultiplier;
          el._translateY = moveFactorY * directionMultiplier;
          el._rotation = rotationFactor;
          el._scale = scaleFactor;
          
          // Aplicar transformación
          el.style.transform = `
            translate3d(${el._translateX}px, ${el._translateY}px, 0)
            rotate(${el._rotation}deg)
            scale(${el._scale})
          `;
        });
        
        // Continuar el loop de animación
        this.raf = requestAnimationFrame(this.updateElements);
      },
      
      resetEffect() {
        // Cancelar cualquier animación previa
        if (this.raf) {
          cancelAnimationFrame(this.raf);
        }
        
        // Animar suavemente de vuelta a la posición original
        this.elements.forEach(el => {
          el.style.transition = 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)';
          el.style.transform = 'translate3d(0, 0, 0) rotate(0deg) scale(1)';
          
          // Eliminar la transición después de completarse
          setTimeout(() => {
            el.style.transition = '';
          }, 700);
        });
      }
    }
  }
  </script>
  
  <style scoped>
  .mouse-distortion-container {
    position: relative;
    overflow: visible;
  }
  </style>