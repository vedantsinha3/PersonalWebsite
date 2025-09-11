import Navbar from './components/Navbar'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import Experience from './components/Experience.tsx'
import Projects from './components/Projects.tsx'
// import Diagrams from './components/Diagrams.tsx'
import Timeline from './components/Timeline.tsx'
import Education from './components/Education.tsx'
import Skills from './components/Skills.tsx'
// import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'

function App() {
  return (
    <div className="min-h-dvh">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        {/* <Diagrams /> */}  
        <Timeline />
        <Education />
        <Skills />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
