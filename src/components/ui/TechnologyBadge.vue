<template>
  <div :class="['tech-badge-wrapper group', color]">
    <!-- Badge con animación y efecto hover -->
    <div
      class="relative inline-flex overflow-hidden rounded-full transform transition-transform duration-300 group-hover:scale-105">
      <!-- Contenido del badge -->
      <div
        class="relative inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900/80 backdrop-blur-sm rounded-full text-sm font-medium border transition-all duration-300"
        :class="getBorderClass()">
        <!-- Icono (si existe) -->
        <span v-if="icon" class="tech-icon" :class="getIconClass()">
          <font-awesome-icon :icon="icon" />
        </span>

        <!-- Texto -->
        <span class="text-zinc-300 group-hover:text-white transition-colors duration-300">{{ name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechnologyBadge',
  props: {
    name: {
      type: String,
      required: true
    },
    icon: {
      type: Array,
      required: false,
      default: null
    },
    color: {
      type: String,
      default: 'indigo'
    }
  },
  methods: {
    getBorderClass() {
      const borderClasses = {
        indigo: 'border-indigo-800 group-hover:border-indigo-600',
        blue: 'border-blue-800 group-hover:border-blue-600',
        purple: 'border-purple-800 group-hover:border-purple-600',
        green: 'border-green-800 group-hover:border-green-600',
        pink: 'border-pink-800 group-hover:border-pink-600',
        cyan: 'border-cyan-800 group-hover:border-cyan-600',
        red: 'border-red-800 group-hover:border-red-600',
        orange: 'border-orange-800 group-hover:border-orange-600',
        yellow: 'border-yellow-800 group-hover:border-yellow-600'
      };
      return borderClasses[this.color] || borderClasses.indigo;
    },
    getIconClass() {
      const iconClasses = {
        indigo: 'text-indigo-400 group-hover:text-indigo-300',
        blue: 'text-blue-400 group-hover:text-blue-300',
        purple: 'text-purple-400 group-hover:text-purple-300',
        green: 'text-green-400 group-hover:text-green-300',
        pink: 'text-pink-400 group-hover:text-pink-300',
        cyan: 'text-cyan-400 group-hover:text-cyan-300',
        red: 'text-red-400 group-hover:text-red-300',
        orange: 'text-orange-400 group-hover:text-orange-300',
        yellow: 'text-yellow-400 group-hover:text-yellow-300'
      };
      return iconClasses[this.color] || iconClasses.indigo;
    }
  }
}
</script>

<style scoped>
.tech-badge-wrapper {
  display: inline-flex;
}
</style>
