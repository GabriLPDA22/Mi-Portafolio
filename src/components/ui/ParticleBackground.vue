<!-- src/components/ui/ParticleBackground.vue -->
<template>
    <div class="particle-container">
      <canvas ref="canvas" class="particle-canvas"></canvas>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ParticleBackground',
    props: {
      color: {
        type: String,
        default: '#6366f1' // Color predeterminado (indigo)
      },
      particleCount: {
        type: Number,
        default: 100
      },
      connectionDistance: {
        type: Number,
        default: 150
      },
      speed: {
        type: Number,
        default: 1
      },
      interactive: {
        type: Boolean,
        default: true
      },
      size: {
        type: Number,
        default: 2
      }
    },
    data() {
      return {
        canvas: null,
        ctx: null,
        particles: [],
        width: 0,
        height: 0,
        animationId: null,
        mouse: {
          x: null,
          y: null,
          radius: 150
        }
      }
    },
    mounted() {
      this.initCanvas();
      window.addEventListener('resize', this.resizeCanvas);
      
      if (this.interactive) {
        // Manejo de eventos de ratón
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('touchmove', this.handleTouchMove);
        window.addEventListener('touchend', this.handleTouchEnd);
      }
  
      // Gestión de visibilidad para mejorar el rendimiento
      document.addEventListener('visibilitychange', this.handleVisibilityChange);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.resizeCanvas);
      
      if (this.interactive) {
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('touchmove', this.handleTouchMove);
        window.removeEventListener('touchend', this.handleTouchEnd);
      }
      
      document.removeEventListener('visibilitychange', this.handleVisibilityChange);
      
      // Detener la animación
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
      }
    },
    methods: {
      initCanvas() {
        this.canvas = this.$refs.canvas;
        this.ctx = this.canvas.getContext('2d');
        
        this.resizeCanvas();
        this.createParticles();
        this.animate();
      },
      resizeCanvas() {
        const parent = this.canvas.parentElement;
        this.width = parent.offsetWidth;
        this.height = parent.offsetHeight;
        
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        
        // Recrear partículas después del redimensionamiento
        this.createParticles();
      },
      createParticles() {
        this.particles = [];
        
        for (let i = 0; i < this.particleCount; i++) {
          const size = (Math.random() * this.size) + 1;
          const x = Math.random() * this.width;
          const y = Math.random() * this.height;
          const directionX = (Math.random() * 2) - 1;
          const directionY = (Math.random() * 2) - 1;
          
          this.particles.push({
            x,
            y,
            directionX: directionX * this.speed,
            directionY: directionY * this.speed,
            size,
            color: this.color
          });
        }
      },
      animate() {
        this.animationId = requestAnimationFrame(this.animate);
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        for (let i = 0; i < this.particles.length; i++) {
          const p = this.particles[i];
          
          // Dibujar partícula
          this.ctx.beginPath();
          this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          this.ctx.fillStyle = p.color;
          this.ctx.fill();
          
          // Actualizar posición
          p.x += p.directionX;
          p.y += p.directionY;
          
          // Rebote en los bordes
          if (p.x > this.width || p.x < 0) {
            p.directionX = -p.directionX;
          }
          if (p.y > this.height || p.y < 0) {
            p.directionY = -p.directionY;
          }
          
          // Interactividad con el ratón
          if (this.interactive && this.mouse.x !== null) {
            const dx = p.x - this.mouse.x;
            const dy = p.y - this.mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < this.mouse.radius) {
              const pushFactor = (this.mouse.radius - distance) / this.mouse.radius;
              p.x += dx * pushFactor * 0.1;
              p.y += dy * pushFactor * 0.1;
            }
          }
          
          // Conectar partículas cercanas
          this.connectParticles(p, i);
        }
      },
      connectParticles(p, index) {
        for (let j = index + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < this.connectionDistance) {
            // Calcular opacidad basada en la distancia
            const opacity = 1 - (distance / this.connectionDistance);
            
            // Establecer color de la línea con opacidad
            const colorRgb = this.hexToRgb(this.color);
            this.ctx.strokeStyle = `rgba(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b}, ${opacity * 0.5})`;
            this.ctx.lineWidth = 1;
            
            // Dibujar línea entre partículas
            this.ctx.beginPath();
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.stroke();
          }
        }
      },
      handleMouseMove(e) {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
      },
      handleTouchMove(e) {
        if (e.touches.length > 0) {
          const rect = this.canvas.getBoundingClientRect();
          this.mouse.x = e.touches[0].clientX - rect.left;
          this.mouse.y = e.touches[0].clientY - rect.top;
        }
      },
      handleTouchEnd() {
        this.mouse.x = null;
        this.mouse.y = null;
      },
      handleVisibilityChange() {
        if (document.hidden) {
          // Pausar animación cuando la página no está visible
          if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
          }
        } else {
          // Reiniciar animación cuando la página es visible de nuevo
          if (!this.animationId) {
            this.animate();
          }
        }
      },
      hexToRgb(hex) {
        // Eliminar # si está presente
        hex = hex.replace(/^#/, '');
        
        // Verificar si es una abreviación de 3 dígitos
        if (hex.length === 3) {
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        
        // Convertir a RGB
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        
        return { r, g, b };
      }
    }
  }
  </script>
  
  <style scoped>
  .particle-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;
  }
  
  .particle-canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
  </style>