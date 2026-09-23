<template>
    <div class="glass-card p-6">
        <h3 class="text-lg font-medium text-white mb-6">{{ title }}</h3>
        <div v-if="isLoading" class="h-64 flex items-center justify-center">
            <div class="w-12 h-12 border-t-2 border-b-2 border-indigo-500 rounded-full animate-spin"></div>
        </div>
        <div v-else class="flex justify-center items-center h-64">
            <div class="w-48 h-48 relative">
                <svg viewBox="0 0 100 100" class="w-full h-full">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#27272a" stroke-width="10" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#6366f1" stroke-width="10" stroke-dasharray="283"
                        :stroke-dashoffset="283 - (cvDownloads.percentage * 283) / 100" transform="rotate(-90 50 50)" />
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                    <div class="text-4xl font-bold text-white">{{ cvDownloads.total }}</div>
                    <div class="text-zinc-400">descargas</div>
                </div>
            </div>
        </div>
        <div class="flex justify-between text-zinc-400 text-sm mt-4">
            <div>Meta: {{ cvDownloads.goal }} descargas</div>
            <div>{{ cvDownloads.percentage }}% completado</div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CvDownloadsCard',
    props: {
        title: {
            type: String,
            required: true
        },
        cvDownloads: {
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