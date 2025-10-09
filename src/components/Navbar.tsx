import { useEffect, useState } from 'react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

// A new component for the animated hamburger/close icon
function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
      <path d="M3 12h18" className={`transition-transform duration-300 ease-in-out ${open ? 'scale-x-0' : ''}`} style={{ transformOrigin: 'center' }} />
      <path d="M3 6h18" className={`transition-transform duration-300 ease-in-out ${open ? 'rotate-45 translate-y-[6px]' : ''}`} style={{ transformOrigin: 'center' }} />
      <path d="M3 18h18" className={`transition-transform duration-300 ease-in-out ${open ? '-rotate-45 translate-y-[-6px]' : ''}`} style={{ transformOrigin: 'center' }} />
    </svg>
  )
}


function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Initialize from URL hash if present
    const initialHash = window.location.hash.replace('#', '')
    if (initialHash) setActive(initialHash)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).id
            if (id) setActive(id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    navItems.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10 transition-shadow ${scrolled ? 'shadow-lg shadow-black/10' : ''}`}>
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-white">
          Vedant Sinha
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden gap-2 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative rounded-full px-3 py-1.5 text-sm transition-colors duration-200 ${
                active === item.id
                  ? 'bg-white/10 text-white'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
              aria-current={active === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${open ? 'max-h-96 border-t border-white/10' : 'max-h-0'}`}>
        <div className="bg-neutral-950/90">
          <div className="container py-3 flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-md px-3 py-2 transition-colors ${
                  active === item.id ? 'bg-white/5 text-white' : 'text-neutral-300 hover:text-white'
                }`}
                aria-current={active === item.id ? 'page' : undefined}
                onClick={() => {
                  setActive(item.id)
                  setOpen(false)
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar