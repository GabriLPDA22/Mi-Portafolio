'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Code2, Zap, Rocket, Database, Smartphone, Server, Shield, Cloud } from 'lucide-react'
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation'
import { useEffect, useState, useRef } from 'react'

const stats = [
  { value: 7, suffix: '+', label: 'Proyectos', color: 'from-primary-500 to-primary-600' },
  { value: 1, suffix: '+', label: 'Año Experiencia', color: 'from-accent-500 to-accent-600' },
  { value: 2, suffix: '', label: 'Grados', color: 'from-primary-400 to-primary-500' },
  { value: 1, suffix: '', label: 'Máster', color: 'from-accent-400 to-accent-500' },
]

const skillCategories = [
  {
    name: 'Frontend',
    icon: Code2,
    color: 'from-blue-500 to-blue-600',
    skills: [
      { name: 'HTML5', level: 'Expert' },
      { name: 'CSS3/SCSS', level: 'Expert' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'Vue.js', level: 'Advanced' },
      { name: 'TailwindCSS', level: 'Advanced' },
      { name: 'React', level: 'Intermediate' }
    ]
  },
  {
    name: 'Backend',
    icon: Server,
    color: 'from-purple-500 to-purple-600',
    skills: [
      { name: 'PHP', level: 'Advanced' },
      { name: 'Symfony', level: 'Advanced' },
      { name: 'C#/.NET', level: 'Advanced' },
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'Java', level: 'Intermediate' }
    ]
  },
  {
    name: 'Mobile',
    icon: Smartphone,
    color: 'from-cyan-500 to-cyan-600',
    skills: [
      { name: 'React Native', level: 'Advanced' },
      { name: 'Android', level: 'Intermediate' }
    ]
  },
  {
    name: 'Database',
    icon: Database,
    color: 'from-green-500 to-green-600',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'MySQL', level: 'Advanced' },
      { name: 'SQL', level: 'Advanced' },
      { name: 'Oracle', level: 'Intermediate' }
    ]
  },
  {
    name: 'DevOps & Cloud',
    icon: Cloud,
    color: 'from-orange-500 to-orange-600',
    skills: [
      { name: 'Docker', level: 'Intermediate' },
      { name: 'AWS', level: 'Intermediate' },
      { name: 'GitHub Actions', level: 'Intermediate' },
      { name: 'Kubernetes', level: 'Basic' }
    ]
  },
  {
    name: 'Security',
    icon: Shield,
    color: 'from-red-500 to-red-600',
    skills: [
      { name: 'SecDevOps', level: 'Learning' },
      { name: 'OWASP', level: 'Learning' }
    ]
  }
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const { ref, isInView } = useScrollAnimation({ threshold: 0.5 })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, isInView])

  return (
    <span ref={ref} className="text-6xl md:text-7xl font-black bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
      {count}{suffix}
    </span>
  )
}

export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="about" ref={containerRef} className="relative py-20 md:py-32 bg-dark-900 overflow-hidden">
      {/* Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full blur-[200px]" />
      </motion.div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: 'spring', delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6"
          >
            <Zap className="w-5 h-5 text-primary-400" />
            <span className="text-sm font-bold text-primary-400">Sobre Mí</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Construyendo el{' '}
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
              futuro digital
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-dark-300 max-w-4xl mx-auto leading-relaxed">
            Desarrollador Full-Stack con pasión por crear experiencias digitales excepcionales.
            Cursando <span className="text-accent-400 font-bold">Máster en Ciberseguridad</span>,
            con formación en <span className="text-primary-400 font-bold">Desarrollo Web</span> y{' '}
            <span className="text-primary-400 font-bold">Sistemas Microinformáticos</span>.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity`} />
              <div className="relative bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-3xl p-8 text-center group-hover:border-primary-500/50 transition-all">
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="text-dark-400 text-lg font-semibold mt-3">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="text-3xl md:text-4xl font-black text-white text-center mb-12"
          >
            Stack Tecnológico
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`} />
                <div className="relative bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-6 group-hover:border-primary-500/50 transition-all h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {category.name}
                    </h4>
                  </div>

                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between">
                        <span className="text-dark-200 text-sm">{skill.name}</span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          skill.level === 'Expert' ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20' :
                          skill.level === 'Advanced' ? 'bg-accent-500/10 text-accent-400 border border-accent-500/20' :
                          skill.level === 'Intermediate' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                          skill.level === 'Basic' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                          'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4 }}
          className="text-center mt-20"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold text-lg shadow-2xl shadow-primary-500/30"
          >
            Ver mis proyectos
            <Rocket className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}