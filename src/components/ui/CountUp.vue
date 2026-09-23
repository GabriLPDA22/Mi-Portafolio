<template>
  <span ref="countupEl">{{ displayValue }}</span>
</template>

<script>
import { ref, onMounted, watch } from 'vue'

export default {
  name: 'CountUp',
  props: {
    end: {
      type: Number,
      required: true
    },
    duration: {
      type: Number,
      default: 2
    },
    decimals: {
      type: Number,
      default: 0
    },
    start: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const displayValue = ref(props.start)
    const countupEl = ref(null)

    const formatNumber = (num) => {
      return num.toFixed(props.decimals)
    }

    const startAnimation = () => {
      let startTimestamp = null
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / (props.duration * 1000), 1)

        displayValue.value = formatNumber(
          progress * (props.end - props.start) + props.start
        )

        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }

      window.requestAnimationFrame(step)
    }

    onMounted(() => {
      // Usar Intersection Observer para iniciar la animación cuando sea visible
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startAnimation()
            observer.disconnect()
          }
        },
        { threshold: 0.1 }
      )

      if (countupEl.value) {
        observer.observe(countupEl.value)
      }
    })

    watch(() => props.end, () => {
      startAnimation()
    })

    return {
      displayValue,
      countupEl
    }
  }
}
</script>
