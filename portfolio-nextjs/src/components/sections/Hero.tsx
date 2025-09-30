'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Code2, Rocket, Download } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      mouseX.set((clientX - innerWidth / 2) / 50)
      mouseY.set((clientY - innerHeight / 2) / 50)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const rotateX = useTransform(mouseYSpring, [-1, 1], [5, -5])
  const rotateY = useTransform(mouseXSpring, [-1, 1], [-5, 5])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950"
    >
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-500 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [null, Math.random() * 0.5 + 0.2, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      {/* Grid background with animation */}
      <motion.div 
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.2, 0]) }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem]" 
      />

      {/* Gradient blobs */}
      <motion.div
        style={{ x: mouseXSpring, y: mouseYSpring }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        style={{ x: useTransform(mouseXSpring, (x) => -x), y: useTransform(mouseYSpring, (y) => -y) }}
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div 
        style={{ opacity, scale }}
        className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left content */}
        <div className="space-y-8 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/30 backdrop-blur-sm mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-4 h-4 text-primary-400" />
              </motion.div>
              <span className="text-sm font-semibold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Disponible para Freelance
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-dark-400 text-lg mb-4 font-medium"
            >
              👋 Hola, soy
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-none"
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent"
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              >
                Gabriel
              </motion.span>
              <br />
              <motion.span
                className="inline-block bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent"
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              >
                Saiz
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3 mb-8"
            >
              <motion.div 
                className="flex items-center gap-3 text-xl md:text-2xl font-bold text-white"
                whileHover={{ x: 10 }}
              >
                <Code2 className="w-6 h-6 text-primary-400" />
                Full-Stack Developer
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 text-xl md:text-2xl font-bold text-white"
                whileHover={{ x: 10 }}
              >
                <Rocket className="w-6 h-6 text-accent-400" />
                Cybersecurity Student
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-dark-300 leading-relaxed mb-8 max-w-xl"
            >
              Transformo ideas en{' '}
              <span className="text-primary-400 font-bold">experiencias digitales excepcionales</span>.
              Cursando{' '}
              <span className="text-accent-400 font-bold">Máster en Ciberseguridad</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(14, 165, 233, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 text-white font-bold text-lg shadow-2xl shadow-primary-500/30 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Ver Proyectos
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, borderColor: '#0ea5e9' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl bg-dark-800/50 backdrop-blur-sm text-white font-bold text-lg border-2 border-dark-700 transition-all"
              >
                Hablemos
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 pt-8"
            >
              {[
                { icon: Github, href: '#', color: 'hover:bg-white hover:text-dark-900' },
                { icon: Linkedin, href: '#', color: 'hover:bg-[#0A66C2]' },
                { icon: Mail, href: '#', color: 'hover:bg-primary-500' }
              ].map(({ icon: Icon, href, color }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 rounded-2xl bg-dark-800/50 backdrop-blur-sm border border-dark-700 text-dark-300 transition-all ${color}`}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Right - Photo with mask */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative order-1 lg:order-2 flex justify-center"
        >
          <motion.div
            style={{ y }}
            className="relative w-full max-w-md lg:max-w-lg"
          >
            {/* Glow effect */}
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-[3rem] blur-3xl opacity-30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />

            {/* Photo with custom mask */}
            <div className="relative aspect-square">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <clipPath id="heroMask">
                    <path d="M200,10 C300,10 390,100 390,200 C390,250 370,290 340,320 L320,360 L280,380 L200,390 L120,380 L80,360 L60,320 C30,290 10,250 10,200 C10,100 100,10 200,10 Z" />
                  </clipPath>
                  <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="50%" stopColor="#d946ef" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                </defs>
                <image
                  href="/images/Yo.webp"
                  x="0"
                  y="0"
                  width="400"
                  height="400"
                  clipPath="url(#heroMask)"
                  preserveAspectRatio="xMidYMid slice"
                />
                <path
                  d="M200,10 C300,10 390,100 390,200 C390,250 370,290 340,320 L320,360 L280,380 L200,390 L120,380 L80,360 L60,320 C30,290 10,250 10,200 C10,100 100,10 200,10 Z"
                  fill="none"
                  stroke="url(#borderGradient)"
                  strokeWidth="4"
                />
              </svg>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-bold shadow-2xl"
              >
                <Code2 className="w-5 h-5" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-gradient-to-r from-accent-600 to-accent-500 text-white text-sm font-bold shadow-2xl"
              >
                <Rocket className="w-5 h-5" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-dark-500 cursor-pointer"
        >
          <span className="text-xs font-semibold uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary-500/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-primary-500 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}