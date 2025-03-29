<template>
    <div class="glass-card p-6">
        <h3 class="text-lg font-medium text-white mb-6">{{ title }}</h3>
        <div v-if="isLoading" class="h-64 flex items-center justify-center">
            <div class="w-12 h-12 border-t-2 border-b-2 border-indigo-500 rounded-full animate-spin"></div>
        </div>
        <div v-else class="overflow-auto max-h-96">
            <table class="min-w-full">
                <thead>
                    <tr>
                        <th class="text-left py-2 px-4 text-zinc-400 font-medium">Evento</th>
                        <th class="text-right py-2 px-4 text-zinc-400 font-medium">Hora</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(event, index) in events" :key="index" class="border-t border-zinc-800">
                        <td class="py-3 px-4 text-white">{{ event.name }}</td>
                        <td class="py-3 px-4 text-right text-zinc-400">{{ event.time }}</td>
                    </tr>
                    <tr v-if="events.length === 0" class="border-t border-zinc-800">
                        <td colspan="2" class="py-4 px-4 text-center text-zinc-400">No hay eventos registrados</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'EventsTable',
    props: {
        title: {
            type: String,
            required: true
        },
        events: {
            type: Array,
            default: () => []
        },
        isLoading: {
            type: Boolean,
            default: false
        }
    }
});
</script>