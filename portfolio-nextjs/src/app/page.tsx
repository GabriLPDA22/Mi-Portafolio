import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Recognitions from '@/components/sections/Recognitions'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Recognitions />
      <Experience />
      <Contact />
    </>
  )
}