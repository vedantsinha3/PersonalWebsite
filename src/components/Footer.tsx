import { SiGithub, SiLinkedin } from 'react-icons/si'
import { HiArrowUp } from 'react-icons/hi'

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container flex flex-col items-center justify-between gap-6 md:h-16 md:flex-row">
        <p className="text-sm text-neutral-400">
          © {new Date().getFullYear()} Vedant Sinha. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/vedantsinha3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-neutral-300 transition-colors hover:text-white"
          >
            <SiGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/vedantsinha3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-300 transition-colors hover:text-white"
          >
            <SiLinkedin size={20} />
          </a>

          {/* Vertical divider */}
          <div className="h-6 w-px bg-white/10" aria-hidden="true" />

          <a
            href="#home"
            aria-label="Go to top of page"
            className="group flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-sm text-neutral-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            Back to Top
            <HiArrowUp className="transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer