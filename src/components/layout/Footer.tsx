import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ArrowUp } from 'lucide-react'
import { useUIStore } from '../../stores/uiStore'

export function Footer() {
  const { setBookingModalOpen } = useUIStore()
  const footerRef = useRef<HTMLElement>(null)
  const [isFixed, setIsFixed] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Dynamic shutter reveal height sync
  useEffect(() => {
    const syncHeight = () => {
      const footer = footerRef.current
      const mainContent = document.querySelector('.main-content-shutter') as HTMLElement
      if (mainContent) {
        if (footer) {
          const checkFixed = window.innerWidth >= 1025 // Preserve fixed shutter reveal on all desktop viewports
          setIsFixed(checkFixed)
          if (checkFixed) {
            // Subtract 75px offset to ensure the shutter reveal stops before hitting the floating navbar
            mainContent.style.marginBottom = `${footer.offsetHeight - 75}px`
          } else {
            mainContent.style.marginBottom = '0px'
          }
        } else {
          mainContent.style.marginBottom = '0px'
        }
      }
    }

    syncHeight()
    window.addEventListener('resize', syncHeight)
    
    // Check again after fonts / images are loaded
    const timeoutId = setTimeout(syncHeight, 500)

    return () => {
      window.removeEventListener('resize', syncHeight)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <footer
      ref={footerRef}
      style={{
        background: '#0B0C0E', // Premium Slate Dark Footer
        color: '#F8FAFC',
        padding: '100px 0 40px',
        borderRadius: '40px 40px 0 0',
        position: isFixed ? 'fixed' : 'relative',
        bottom: isFixed ? 0 : undefined,
        left: isFixed ? 0 : undefined,
        width: '100%',
        zIndex: isFixed ? 1 : 11, // Place above main content shutter (which is zIndex: 10) if relative
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Glow highlight */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '10%',
        right: '10%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255, 92, 26, 0.15) 30%, rgba(255, 92, 26, 0.15) 70%, transparent)',
      }} />

      <div className="container-wide">

        {/* Top split block */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: 60,
          marginBottom: 80,
          alignItems: 'flex-start',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          paddingBottom: 64,
        }} className="footer-cta-split">

          <div>
            <span style={{
              fontSize: 11,
              fontWeight: 800,
              color: 'var(--brand)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              fontFamily: 'JetBrains Mono',
              display: 'block',
              marginBottom: 16,
            }}>
              Ready to build custom solutions?
            </span>
            <h2 style={{
              fontFamily: 'Bricolage Grotesque',
              fontSize: 'clamp(32px, 4.2vw, 64px)',
              fontWeight: 900,
              lineHeight: 1.0,
              color: '#FFFFFF',
              letterSpacing: '-0.04em',
              margin: '0 0 24px',
              textTransform: 'uppercase',
            }}>
              Let's create something<br />remarkable together.
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, maxWidth: 460, margin: '0 0 32px' }}>
              Custom software that streamlines operations, fast websites that rank, and smart automations that run 24/7.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                onClick={() => setBookingModalOpen(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'var(--brand)',
                  color: '#FFFFFF',
                  padding: '14px 28px',
                  borderRadius: 999,
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: 700,
                  border: 'none',
                  transition: 'all 240ms var(--ease-out)',
                  fontFamily: 'Inter',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#FF7A3D'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,92,26,0.3)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--brand)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Book Discovery Call <ArrowUpRight size={14} />
              </button>
              <a
                href="https://wa.me/8801322466032"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'rgba(255,255,255,0.03)',
                  color: '#FFFFFF',
                  padding: '14px 28px',
                  borderRadius: 999,
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: 700,
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 240ms var(--ease-out)',
                  textDecoration: 'none',
                  fontFamily: 'Inter',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--brand)'
                  e.currentTarget.style.background = 'rgba(255,92,26,0.05)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                }}
              >
                +880 1322-466032
              </a>
            </div>
          </div>

          {/* Clutch Verification Badge */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            alignItems: 'flex-end',
          }} className="footer-badge-wrap">
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 20,
              padding: '20px 28px',
              textAlign: 'center',
              boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
            }}>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', fontWeight: 800, marginBottom: 6, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono' }}>RATED ON</div>
              <div style={{ fontFamily: 'Bricolage Grotesque', fontSize: 20, fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em' }}>Clutch</div>
              <div style={{ display: 'flex', gap: 3, justifyContent: 'center', marginTop: 6 }}>
                {[1,2,3,4,5].map(s => (
                  <span key={s} style={{ fontSize: 14, color: '#FFCC00' }}>★</span>
                ))}
              </div>
              <div style={{ fontSize: 13, fontWeight: 800, color: '#FFFFFF', marginTop: 8 }}>5.0 / Gold Partner</div>
            </div>
          </div>
        </div>

        {/* Footer Navigation columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: 40,
          marginBottom: 60,
        }} className="footer-nav-grid">

          {/* Brand block */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <svg width="22" height="22" viewBox="0 0 100 100" fill="var(--brand)" style={{ display: 'inline-block' }}>
                <path d="M22 24h10v22h36V24h10v52H68V58H32v18H22z" />
                <path d="M6 36 L22 30 L22 56 Z" opacity="0.85" />
                <path d="M94 36 L78 30 L78 56 Z" opacity="0.85" />
              </svg>
              <span style={{
                fontFamily: 'Bricolage Grotesque',
                fontWeight: 900,
                fontSize: 22,
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                textTransform: 'uppercase',
              }}>
                Hermes Studio
              </span>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, maxWidth: 260, margin: 0 }}>
              Premium software engineering and workflow automation agency serving businesses worldwide.
            </p>
            <div style={{ display: 'flex', gap: 8, marginTop: 24, flexWrap: 'wrap' }}>
              {['Dhaka', 'Chittagong', 'Sylhet'].map((loc) => (
                <span key={loc} style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 8,
                  padding: '4px 10px',
                  fontSize: 10,
                  fontWeight: 800,
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'JetBrains Mono',
                }}>{loc}</span>
              ))}
            </div>
          </div>

          {/* Services Nav */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#FFFFFF', marginBottom: 20, fontFamily: 'JetBrains Mono' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, padding: 0 }}>
              {[
                { label: 'Custom Software Development', href: '#services' },
                { label: 'Workflow Automation & AI', href: '#services' },
                { label: 'High-Performance Websites', href: '#services' },
                { label: 'Performance Marketing', href: '#services' },
              ].map(link => {
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 160ms', fontWeight: 500 }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--brand)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Company Nav */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#FFFFFF', marginBottom: 20, fontFamily: 'JetBrains Mono' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, padding: 0 }}>
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Portfolio Cases', href: '#portfolio' },
                { label: 'Reviews', href: '#testimonials' },
              ].map(link => {
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 160ms', fontWeight: 500 }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--brand)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Connect Nav */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#FFFFFF', marginBottom: 20, fontFamily: 'JetBrains Mono' }}>
              Connect
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, padding: 0 }}>
              {[
                { label: 'Facebook', href: 'https://facebook.com' },
                { label: 'LinkedIn', href: 'https://linkedin.com' },
                { label: 'GitHub', href: 'https://github.com' },
              ].map(social => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4, transition: 'color 160ms', fontWeight: 500 }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--brand)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    {social.label} <span style={{ fontSize: 12 }}>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright block */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 24,
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>
            © Hermes Studio {new Date().getFullYear()}. All rights reserved.{' '}
            <a href="#privacy" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy Policy</a>
          </p>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#FFFFFF',
              cursor: 'pointer',
              width: 44,
              height: 44,
              borderRadius: '50%',
              justifyContent: 'center',
              transition: 'all 240ms',
              flexShrink: 0,
            }}
            aria-label="Back to top"
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--brand)'
              e.currentTarget.style.borderColor = 'var(--brand)'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-cta-split { grid-template-columns: 1fr !important; }
          .footer-badge-wrap { align-items: flex-start !important; }
          .footer-nav-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 640px) {
          .footer-nav-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </footer>
  )
}
