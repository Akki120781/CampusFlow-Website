import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Sparkles, X } from 'lucide-react'

export function Brand({ dark = false }) {
  return (
    <a className={`brand ${dark ? 'brand-dark' : ''}`} href="#top" aria-label="CampusFlow home">
      <span className="brand-symbol" aria-hidden="true">
        <i /><i /><i />
      </span>
      <span className="brand-name">CampusFlow</span>
    </a>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 40) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`site-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        <Brand />

        {/* EtherealX-inspired Live Telemetry Pill (Desktop) */}
        <div className="header-telemetry-badge">
          <span className="telemetry-live-dot" />
          <span className="telemetry-text">ACADEMIC SESSION 2026-27 ACTIVE // IND</span>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`main-nav ${open ? 'main-nav-open' : ''}`} aria-label="Main navigation">
          <a href="#product" onClick={closeMenu}>Interactive Demo</a>
          <a href="#modules" onClick={closeMenu}>Modules</a>
          <a href="#flows" onClick={closeMenu}>Workflows</a>
          <a href="#for-everyone" onClick={closeMenu}>Who It Helps</a>
          <a href="#questions" onClick={closeMenu}>FAQ</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            <span>Book School Demo</span>
            <ArrowUpRight size={15} />
          </a>
        </nav>
      </div>
    </header>
  )
}
