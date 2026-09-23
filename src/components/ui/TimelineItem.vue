<template>
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"
            :class="{ 'animate-pulse bg-yellow-500': isActive }">
        </div>

        <time class="mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80">
            {{ date }}
        </time>

        <h3 class="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mt-2">
            {{ title }}
        </h3>

        <p class="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
            {{ description }}
        </p>

        <slot></slot>
    </li>
</template>

<script>
export default {
    name: 'TimelineItem',
    props: {
        date: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
@keyframes pulse {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.8;
        transform: scale(1.1);
    }
}

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>