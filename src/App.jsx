import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Background from './components/Background'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Background />
        <Contact />
      </main>
      <footer className="border-t border-border px-6 py-10 md:px-8">
        <p className="mx-auto max-w-3xl text-sm text-muted">
          &copy; {new Date().getFullYear()} Arav Narwal
        </p>
      </footer>
    </>
  )
}
