function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Vedant Sinha. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="https://github.com/vedantsinha3" target="_blank" className="text-neutral-300 hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/vedantsinha3" target="_blank" className="text-neutral-300 hover:text-white">LinkedIn</a>
          <a href="#contact" className="text-neutral-300 hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

