import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.scss'
import Navigation from '@/components/Navigation'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gabriel Saiz - Desarrollador Web Full Stack',
  description: 'Portfolio de Gabriel Saiz. Desarrollador Web especializado en Vue.js, TypeScript, React Native y Symfony. Estudiante de DAW creando experiencias digitales modernas.',
  keywords: ['Gabriel Saiz', 'Desarrollador Web', 'Full Stack', 'Vue.js', 'TypeScript', 'React Native', 'Portfolio'],
  authors: [{ name: 'Gabriel Saiz' }],
  openGraph: {
    title: 'Gabriel Saiz - Desarrollador Web Full Stack',
    description: 'Portfolio de Gabriel Saiz. Desarrollador Web especializado en crear aplicaciones modernas y experiencias digitales.',
    url: 'https://gabrielcodes.dev',
    siteName: 'Gabriel Saiz Portfolio',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased">
        <Navigation />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}