<template>
    <img :src="`https://img.shields.io/badge/${encodeURIComponent(name)}-${color}.svg?style=for-the-badge&logo=${logo}&logoColor=white`"
        :alt="name" class="tech-icon hover:scale-110 transition-transform duration-200">
</template>

<script>
export default {
    name: 'TechnologyBadge',
    props: {
        name: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        logo: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.tech-icon {
    height: 28px;
    width: auto;
}
</style>