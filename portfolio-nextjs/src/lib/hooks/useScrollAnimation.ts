import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

type MarginType = `${number}px` | `${number}%`

interface UseScrollAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
  margin?: MarginType
}

/**
 * Hook para detectar cuando un elemento entra en viewport
 * Retorna ref y estado de visibilidad
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.1, triggerOnce = true, margin = '0px' as const } = options
  
  const ref = useRef<T>(null)
  const isInView = useInView(ref, {
    once: triggerOnce,
    amount: threshold,
    margin
  })

  return { ref, isInView }
}

/**
 * Hook para obtener progreso de scroll (0-1)
 */
export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const computeProgress = () => {
      const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalScrollableHeight <= 0) {
        setScrollProgress(1)
        return
      }
      const progress = window.scrollY / totalScrollableHeight
      setScrollProgress(Math.min(Math.max(progress, 0), 1))
    }

    const handleScroll = () => {
      // Use rAF to avoid flooding state updates during fast scrolling
      requestAnimationFrame(computeProgress)
    }

    const handleResize = () => {
      requestAnimationFrame(computeProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    computeProgress()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return scrollProgress
}