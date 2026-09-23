<!-- src/components/ui/MouseParallaxEffect.vue -->
<template>
    <div ref="container" class="mouse-parallax-container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <div class="mouse-parallax-content" :style="contentStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MouseParallaxEffect',
    props: {
        intensity: {
            type: Number,
            default: 0.05
        },
        perspective: {
            type: Number,
            default: 1000
        },
        enableRotation: {
            type: Boolean,
            default: true
        },
        resetOnLeave: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            mouseX: 0,
            mouseY: 0,
            translateX: 0,
            translateY: 0,
            rotateX: 0,
            rotateY: 0,
            centerX: 0,
            centerY: 0,
            isHovering: false
        }
    },
    computed: {
        contentStyle() {
            const transforms = [];

            // Apply translations
            transforms.push(`translate3d(${this.translateX}px, ${this.translateY}px, 0)`);

            // Apply rotations if enabled
            if (this.enableRotation) {
                transforms.push(`rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg)`);
            }

            return {
                transform: transforms.join(' '),
                transformStyle: 'preserve-3d',
                perspective: `${this.perspective}px`,
                transition: this.isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
            };
        }
    },
    mounted() {
        // Calculate the center of the container
        this.updateCenter();
        window.addEventListener('resize', this.updateCenter);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateCenter);
    },
    methods: {
        updateCenter() {
            if (!this.$refs.container) return;

            const rect = this.$refs.container.getBoundingClientRect();
            this.centerX = rect.left + rect.width / 2;
            this.centerY = rect.top + rect.height / 2;
        },

        handleMouseMove(e) {
            this.isHovering = true;
            this.updateCenter();

            // Calculate mouse position relative to center
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Calculate the distance from center (normalized from -1 to 1)
            const distanceX = (mouseX - this.centerX) / (window.innerWidth / 2);
            const distanceY = (mouseY - this.centerY) / (window.innerHeight / 2);

            // Apply intensity to control movement amount
            this.translateX = distanceX * (100 * this.intensity);
            this.translateY = distanceY * (100 * this.intensity);

            // Apply rotation if enabled
            if (this.enableRotation) {
                this.rotateX = -distanceY * (20 * this.intensity);
                this.rotateY = distanceX * (20 * this.intensity);
            }
        },

        handleMouseLeave() {
            if (this.resetOnLeave) {
                this.isHovering = false;
                this.translateX = 0;
                this.translateY = 0;
                this.rotateX = 0;
                this.rotateY = 0;
            }
        }
    }
}
</script>

<style scoped>
.mouse-parallax-container {
    position: relative;
    overflow: visible;
}

.mouse-parallax-content {
    will-change: transform;
}
</style>