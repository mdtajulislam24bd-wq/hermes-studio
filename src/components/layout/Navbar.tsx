import { useState, useEffect } from 'react'
import { X, ArrowRight, Menu } from 'lucide-react'
import { useUIStore } from '../../stores/uiStore'

const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#services', label: 'Our Services' },
  { href: '#about', label: 'About Us' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#testimonials', label: 'Reviews' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { setBookingModalOpen } = useUIStore()

  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ScrollSpy Section Tracking
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 160 // Offset for navbar height and spacing
      
      // Bottom of the page check (Reviews / Testimonials is at the end)
      const docHeight = document.documentElement.scrollHeight
      const windowHeight = window.innerHeight
      if (window.scrollY + windowHeight >= docHeight - 40) {
        setActiveSection('testimonials')
        return
      }

      // Scan sections
      for (const link of NAV_LINKS) {
        const id = link.href.slice(1)
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScrollSpy, { passive: true })
    handleScrollSpy() // Run once
    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Handle smooth scroll for hashes
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      setMenuOpen(false)
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  };

  return (
    <>
      <nav
        className={`navbar${scrolled ? ' scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 24px',
          background: scrolled ? 'rgba(255, 255, 255, 0.65)' : 'rgba(255, 255, 255, 0.45)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          border: scrolled ? '1px solid rgba(255, 255, 255, 0.55)' : '1px solid rgba(255, 255, 255, 0.35)',
          borderRadius: 999,
          transition: 'all 280ms var(--ease-out)',
          width: 'calc(100% - 48px)',
          maxWidth: 1200,
          boxShadow: scrolled ? '0 12px 32px rgba(10,10,10,0.06), inset 0 1px 0 rgba(255,255,255,0.4)' : 'none',
        }}
      >
        {/* Left: Logo */}
        <a href="/" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
          <div
            style={{
              width: 32,
              height: 32,
              background: 'linear-gradient(135deg, var(--brand) 0%, var(--orange) 100%)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 100 100" fill="#FFFFFF" style={{ display: 'block' }}>
              <path d="M22 24h10v22h36V24h10v52H68V58H32v18H22z" />
              <path d="M6 36 L22 30 L22 56 Z" opacity="0.85" />
              <path d="M94 36 L78 30 L78 56 Z" opacity="0.85" />
            </svg>
          </div>
          <span style={{
            fontFamily: 'Bricolage Grotesque',
            fontWeight: 800,
            fontSize: 18,
            color: 'var(--text-h)',
            letterSpacing: '-0.04em',
          }}>
            hermes studio
          </span>
        </a>

        {/* Center: Desktop Nav Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            background: scrolled ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.55)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            padding: '4px 6px',
            borderRadius: 999,
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            transition: 'all 280ms var(--ease-out)',
          }}
          className="nav-desktop-links"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            const isHovered = hoveredLink === link.href

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: (isActive || isHovered) ? 700 : 600,
                  color: isActive 
                    ? 'var(--brand)' 
                    : isHovered 
                      ? 'var(--text-h)' 
                      : 'var(--text-body)',
                  textDecoration: 'none',
                  transition: 'all 180ms var(--ease-out)',
                  letterSpacing: '-0.01em',
                  background: isActive 
                    ? 'rgba(255, 92, 26, 0.08)' 
                    : isHovered 
                      ? 'rgba(255, 255, 255, 0.8)' 
                      : 'transparent',
                  boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.03)' : 'none',
                }}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        {/* Right: Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Become a Client Button */}
          <button
            onClick={() => setBookingModalOpen(true)}
            className="btn-primary"
            style={{
              padding: '8px 18px',
              fontSize: 13,
              fontWeight: 700,
              borderRadius: 999,
              background: 'var(--brand)',
              color: '#FFFFFF',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              transition: 'all 240ms var(--ease-spring)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'linear-gradient(135deg, var(--orange) 0%, var(--red) 100%)'
              el.style.transform = 'scale(1.04) translateY(-1px)'
              el.style.boxShadow = '0 8px 24px rgba(255, 92, 26, 0.16)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'var(--brand)'
              el.style.transform = 'scale(1) translateY(0)'
              el.style.boxShadow = 'none'
            }}
          >
            + Become a Client
          </button>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              background: 'rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-h)',
              transition: 'all 200ms',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--brand)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <Menu size={16} />
          </button>
        </div>
      </nav>

      {/* Dual-Shutter Menu Drawer Overlay */}
      {mounted && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: 'transparent',
            pointerEvents: menuOpen ? 'auto' : 'none',
            display: 'flex',
            overflow: 'hidden',
          }}
        >
          {/* LEFT SHUTTER (Dark Blue) */}
          <div
            className="shutter-left"
            style={{
              transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
            }}
          >
            {/* Shutter Content: Logo */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  background: 'linear-gradient(135deg, var(--brand) 0%, var(--orange) 100%)',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="22" height="22" viewBox="0 0 100 100" fill="#FFFFFF" style={{ display: 'block' }}>
                    <path d="M22 24h10v22h36V24h10v52H68V58H32v18H22z" />
                    <path d="M6 36 L22 30 L22 56 Z" opacity="0.85" />
                    <path d="M94 36 L78 30 L78 56 Z" opacity="0.85" />
                  </svg>
                </div>
                <span style={{
                  fontFamily: 'Bricolage Grotesque',
                  fontWeight: 800,
                  fontSize: 20,
                  color: '#FFFFFF',
                  letterSpacing: '-0.04em'
                }}>hermes studio</span>
              </div>
            </div>

            {/* Left bottom: Capabilites or Contact Info */}
            <div style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'JetBrains Mono', fontSize: 12, lineHeight: 1.8 }}>
              <span style={{ color: '#FFFFFF', fontWeight: 700, display: 'block', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Presence</span>
              Dhaka, Bangladesh
              <br />
              SOFTWARE & AUTOMATION
            </div>
          </div>

          {/* RIGHT SHUTTER (Light Cream) */}
          <div
            className="shutter-right"
            style={{
              transform: menuOpen ? 'translateY(0)' : 'translateY(100%)',
            }}
          >
            {/* Top row: Close button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  border: '1px solid var(--border)',
                  background: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-h)',
                  transition: 'all 200ms',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--brand)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav links with staggered fade in */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '40px 0' }}>
              {NAV_LINKS.map((link, idx) => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <div
                    key={link.href}
                    style={{
                      opacity: menuOpen ? 1 : 0,
                      transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                      transition: `opacity 500ms var(--ease-out), transform 500ms var(--ease-out)`,
                      transitionDelay: menuOpen ? `${150 + idx * 60}ms` : '0ms',
                      borderBottom: '1px solid rgba(10, 10, 10, 0.05)',
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="shutter-link"
                      style={{
                        fontSize: 'clamp(28px, 4.2vw, 52px)',
                        fontWeight: 800,
                        fontFamily: 'Bricolage Grotesque',
                        color: isActive ? 'var(--brand)' : 'var(--text-h)',
                        textDecoration: 'none',
                        letterSpacing: '-0.04em',
                        lineHeight: 1.15,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 0',
                        transition: 'all 300ms cubic-bezier(0.2, 1, 0.3, 1)',
                      }}
                    >
                      <span>{link.label}</span>
                      <span className="shutter-link-arrow" style={{
                        fontSize: '0.65em',
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateX(0)' : 'translateX(-20px)',
                        transition: 'all 300ms cubic-bezier(0.2, 1, 0.3, 1)',
                        color: 'var(--brand)',
                      }}>
                        ↗
                      </span>
                    </a>
                  </div>
                )
              })}
            </nav>

            {/* Bottom info section */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 500ms var(--ease-out)`,
              transitionDelay: menuOpen ? '500ms' : '0ms',
            }}>
              <div>
                <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>Get in Touch</span>
                <p style={{ margin: '6px 0 0' }}>
                  <a href="https://wa.me/8801322466032" target="_blank" rel="noopener noreferrer" style={{ fontSize: 16, fontWeight: 800, color: 'var(--text-h)', textDecoration: 'none' }}>
                    +880 1322-466032
                  </a>
                </p>
              </div>

              <button
                onClick={() => {
                  setMenuOpen(false)
                  setBookingModalOpen(true)
                }}
                className="btn-primary"
                style={{
                  padding: '12px 28px',
                  borderRadius: 999,
                  fontSize: 14,
                }}
              >
                Become a Client <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .shutter-left {
          position: absolute;
          top: 0;
          left: 0;
          width: 40%;
          height: 100%;
          background: #0A1128;
          transition: transform 600ms cubic-bezier(0.85, 0, 0.15, 1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 60px 40px;
          border-right: 1px solid rgba(255,255,255,0.05);
        }
        .shutter-right {
          position: absolute;
          top: 0;
          right: 0;
          width: 60%;
          height: 100%;
          background: #FFFDF9;
          transition: transform 600ms cubic-bezier(0.85, 0, 0.15, 1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 60px 60px;
          box-shadow: -10px 0 40px rgba(0,0,0,0.03);
        }

        .shutter-link:hover {
          color: var(--brand) !important;
          padding-left: 16px !important;
        }
        .shutter-link:hover .shutter-link-arrow {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }

        @media (max-width: 900px) {
          .nav-desktop-links { display: none !important; }
        }

        @media (max-width: 768px) {
          .shutter-left {
            width: 100%;
            height: 30%;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            padding: 30px 24px;
          }
          .shutter-right {
            width: 100%;
            height: 70%;
            top: 30%;
            right: 0;
            padding: 30px 24px;
          }
        }
      `}</style>
    </>
  )
}
