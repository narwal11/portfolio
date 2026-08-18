import { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Background', href: '#background' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b ${
        scrolled ? 'border-border bg-bg' : 'border-transparent bg-bg'
      }`}
    >
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 md:px-8">
        <a href="#hero" className="text-base text-text transition-colors hover:text-sea">
          Arav Narwal
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-muted transition-colors hover:text-sea"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block h-px w-5 bg-text transition-transform duration-200 ${
              menuOpen ? 'translate-y-1.5 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-text transition-opacity duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-text transition-transform duration-200 ${
              menuOpen ? '-translate-y-1.5 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-border bg-bg md:hidden">
          <ul className="px-6 py-2">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={handleNavClick}
                  className="block py-3 text-sm text-muted transition-colors hover:text-sea"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
