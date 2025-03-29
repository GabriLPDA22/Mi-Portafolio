<template>
    <div class="glass-card p-6">
        <h3 class="text-lg font-medium text-white mb-6">{{ title }}</h3>
        <div class="h-80">
            <div v-if="isLoading" class="h-full flex items-center justify-center">
                <div class="w-12 h-12 border-t-2 border-b-2 border-indigo-500 rounded-full animate-spin"></div>
            </div>
            <div v-else class="h-full w-full">
                <!-- El div donde se renderizará el gráfico -->
                <div :id="chartId" class="h-full w-full" ref="chartContainer"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, watch, ref } from 'vue';

export default defineComponent({
    name: 'ChartCard',
    props: {
        title: {
            type: String,
            required: true
        },
        chartId: {
            type: String,
            required: true
        },
        isLoading: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const chartContainer = ref(null);

        // Emitir evento render cuando el componente es montado
        onMounted(() => {
            if (!props.isLoading) {
                emit('render');
            }
        });

        // Observar cambios en isLoading para renderizar cuando los datos estén listos
        watch(() => props.isLoading, (newVal, oldVal) => {
            if (oldVal === true && newVal === false) {
                // Solo emitir el evento cuando isLoading cambia de true a false
                setTimeout(() => {
                    emit('render');
                }, 100); // Pequeño retraso para asegurar que el DOM está listo
            }
        });

        return {
            chartContainer
        };
    }
});
</script>