<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <!-- Visitantes -->
        <div class="glass-card p-6 flex flex-col">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-medium text-white">Visitantes</h3>
                <div class="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
            </div>
            <div class="flex items-end justify-between">
                <div v-if="!isLoading" class="text-3xl font-bold text-white">{{ stats.visitors.total }}</div>
                <div v-else class="text-3xl font-bold text-white animate-pulse">--</div>
                <div v-if="!isLoading"
                    :class="`text-sm font-medium ${stats.visitors.change >= 0 ? 'text-green-400' : 'text-red-400'} flex items-center`">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            :d="stats.visitors.change >= 0 ? 'M5 10l7-7m0 0l7 7m-7-7v18' : 'M19 14l-7 7m0 0l-7-7m7 7V3'" />
                    </svg>
                    {{ Math.abs(stats.visitors.change) }}%
                </div>
            </div>
            <div class="text-zinc-400 text-sm mt-2">vs. período anterior</div>
        </div>

        <!-- Vistas de página -->
        <div class="glass-card p-6 flex flex-col">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-medium text-white">Vistas de página</h3>
                <div class="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                </div>
            </div>
            <div class="flex items-end justify-between">
                <div v-if="!isLoading" class="text-3xl font-bold text-white">{{ stats.pageViews.total }}</div>
                <div v-else class="text-3xl font-bold text-white animate-pulse">--</div>
                <div v-if="!isLoading"
                    :class="`text-sm font-medium ${stats.pageViews.change >= 0 ? 'text-green-400' : 'text-red-400'} flex items-center`">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            :d="stats.pageViews.change >= 0 ? 'M5 10l7-7m0 0l7 7m-7-7v18' : 'M19 14l-7 7m0 0l-7-7m7 7V3'" />
                    </svg>
                    {{ Math.abs(stats.pageViews.change) }}%
                </div>
            </div>
            <div class="text-zinc-400 text-sm mt-2">vs. período anterior</div>
        </div>

        <!-- Proyectos vistos -->
        <div class="glass-card p-6 flex flex-col">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-medium text-white">Proyectos vistos</h3>
                <div class="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                </div>
            </div>
            <div class="flex items-end justify-between">
                <div v-if="!isLoading" class="text-3xl font-bold text-white">{{ stats.projects.total }}</div>
                <div v-else class="text-3xl font-bold text-white animate-pulse">--</div>
                <div v-if="!isLoading"
                    :class="`text-sm font-medium ${stats.projects.change >= 0 ? 'text-green-400' : 'text-red-400'} flex items-center`">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            :d="stats.projects.change >= 0 ? 'M5 10l7-7m0 0l7 7m-7-7v18' : 'M19 14l-7 7m0 0l-7-7m7 7V3'" />
                    </svg>
                    {{ Math.abs(stats.projects.change) }}%
                </div>
            </div>
            <div class="text-zinc-400 text-sm mt-2">vs. período anterior</div>
        </div>

        <!-- Descargas CV -->
        <div class="glass-card p-6 flex flex-col">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-medium text-white">Descargas CV</h3>
                <div class="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
            </div>
            <div class="flex items-end justify-between">
                <div v-if="!isLoading" class="text-3xl font-bold text-white">{{ stats.cvDownloads.total }}</div>
                <div v-else class="text-3xl font-bold text-white animate-pulse">--</div>
                <div v-if="!isLoading"
                    :class="`text-sm font-medium ${stats.cvDownloads.change >= 0 ? 'text-green-400' : 'text-red-400'} flex items-center`">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            :d="stats.cvDownloads.change >= 0 ? 'M5 10l7-7m0 0l7 7m-7-7v18' : 'M19 14l-7 7m0 0l-7-7m7 7V3'" />
                    </svg>
                    {{ Math.abs(stats.cvDownloads.change) }}%
                </div>
            </div>
            <div class="text-zinc-400 text-sm mt-2">vs. período anterior</div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'StatsCards',
    props: {
        stats: {
            type: Object,
            required: true
        },
        isLoading: {
            type: Boolean,
            default: false
        }
    }
});
</script>