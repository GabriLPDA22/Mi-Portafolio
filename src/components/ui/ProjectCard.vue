<!-- ProjectCard.vue -->
<template>
    <div class="group bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 hover:border-indigo-500/30 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full">
      <!-- Imagen del proyecto con overlay de degradado -->
      <div class="relative overflow-hidden h-52">
        <img :src="project.image" :alt="project.title" class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" />
        
        <!-- Overlay de degradado -->
        <div :class="`absolute inset-0 bg-gradient-to-t ${project.gradient || 'from-indigo-600 to-purple-600'} opacity-70 mix-blend-multiply`"></div>
        
        <!-- Título sobre la imagen -->
        <div class="absolute bottom-0 left-0 right-0 p-4">
          <h3 class="text-xl font-bold text-white">{{ project.title }}</h3>
        </div>
      </div>
      
      <!-- Contenido de la tarjeta -->
      <div class="p-5 flex flex-col flex-grow">
        <p class="text-zinc-400 mb-4 flex-grow">{{ project.description }}</p>
        
        <!-- Tecnologías utilizadas -->
        <div class="mb-5">
          <h4 class="text-sm font-semibold text-zinc-300 mb-3">Tecnologías:</h4>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tech in project.technologies" 
              :key="tech.name"
              :class="`${tech.color} text-xs py-1 px-2 rounded-full font-medium flex items-center gap-1`"
            >
              <i :class="`fab fa-${tech.icon}`" v-if="tech.icon"></i>
              {{ tech.name }}
            </span>
          </div>
        </div>
        
        <!-- Enlaces del proyecto -->
        <div class="flex flex-wrap gap-3">
          <a 
            v-for="(link, index) in project.links" 
            :key="index"
            :href="link.url" 
            target="_blank"
            class="flex items-center gap-1.5 text-zinc-400 hover:text-indigo-400 transition-colors"
          >
            <i :class="`fas fa-${link.icon || 'link'}`"></i>
            <span class="text-sm">{{ link.label || link.text }}</span>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectCard',
    props: {
      project: {
        type: Object,
        required: true
      }
    }
  };
  </script>