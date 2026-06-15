import { useRef, useEffect } from 'react'
import { useUIStore } from '../../stores/uiStore'
import { ArrowRight, Server, Activity, Shield, Terminal } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function SmartDevelopment() {
  const { setBookingModalOpen } = useUIStore()
  const sectionRef = useRef<HTMLDivElement>(null)
  
  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const card3Ref = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  const scrollToPortfolio = () => {
    const el = document.querySelector('#portfolio')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // GSAP ScrollTrigger Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animate text
      gsap.from(textRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        },
      })

      // Asymmetric stagger entrance for cards
      const cards = [card1Ref.current, card2Ref.current, card3Ref.current]
      cards.forEach((card, idx) => {
        if (!card) return
        gsap.from(card, {
          y: 80 + idx * 40,
          opacity: 0,
          scale: 0.95,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#0B0C0E',
        padding: '100px 24px',
        margin: '0 24px',
        borderRadius: '40px',
        position: 'relative',
        overflow: 'hidden',
        color: '#FFFFFF',
      }}
      id="smart-campaigns"
      className="noise-overlay"
    >
      {/* Background ambient glows */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '50vw',
        height: '50vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,92,26,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-15%',
        left: '-5%',
        width: '45vw',
        height: '45vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,200,150,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header Eyebrow Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          paddingBottom: 32,
          marginBottom: 64,
        }} className="smart-title-wrapper">
          <div>
            <span style={{
              fontSize: 12,
              fontWeight: 700,
              color: 'var(--brand)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              display: 'block',
              marginBottom: 10,
              fontFamily: 'JetBrains Mono',
            }}>
              03 — Development Operations
            </span>
            <h2 style={{
              fontFamily: 'Bricolage Grotesque',
              fontSize: 'clamp(32px, 4.5vw, 60px)',
              fontWeight: 900,
              color: '#FFFFFF',
              letterSpacing: '-0.04em',
              margin: 0,
              lineHeight: 1.05,
              textTransform: 'uppercase',
            }}>
              Automated Cloud Pipelines<br />
              <span style={{
                background: 'linear-gradient(135deg, var(--brand) 0%, #FFCC00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>Built For Maximum Performance</span>
            </h2>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(255,92,26,0.08)',
            border: '1px solid rgba(255,92,26,0.2)',
            borderRadius: 999,
            padding: '8px 18px',
            flexShrink: 0,
            fontFamily: 'JetBrains Mono',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--brand)', display: 'inline-block', boxShadow: '0 0 10px var(--brand)' }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--brand)' }}>CI/CD Builds Online</span>
          </div>
        </div>

        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: 64,
          alignItems: 'center',
        }} className="smart-main-grid">

          {/* LEFT: Text & Capabilities */}
          <div ref={textRef} style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            <p style={{
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.6,
              margin: 0,
              letterSpacing: '-0.01em',
            }}>
              Deploy production codebases with zero-downtime integrations. We construct automated workflows linking Docker-based microservices to high-speed databases and distributed API servers.
            </p>

            {/* Structured service metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }} className="smart-stats-grid">
              {[
                { label: 'Avg Latency', value: '12ms', color: 'var(--brand)' },
                { label: 'Build Time', value: '45s', color: '#00C896' },
                { label: 'Core Uptime', value: '99.99%', color: '#FFCC00' },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 16,
                    padding: '20px 16px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: 26, fontWeight: 900, fontFamily: 'Bricolage Grotesque', color: stat.color, letterSpacing: '-0.03em', marginBottom: 2 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 800, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'JetBrains Mono' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive growth categories */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['AWS Cloud', 'Docker Containers', 'CI/CD Pipelines', 'API Gateway', 'Serverless Functions', 'Uptime Audits'].map((tag, i) => (
                <span key={i} style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.5)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 999,
                  padding: '6px 14px',
                  fontFamily: 'JetBrains Mono',
                  letterSpacing: '-0.02em',
                  transition: 'all 200ms',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--brand)'
                    e.currentTarget.style.borderColor = 'rgba(255,92,26,0.3)'
                    e.currentTarget.style.background = 'rgba(255,92,26,0.05)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 14 }} className="smart-cta-buttons">
              <button
                onClick={scrollToPortfolio}
                style={{
                  background: 'transparent',
                  border: '1.5px solid rgba(255,255,255,0.15)',
                  color: '#FFFFFF',
                  borderRadius: 999,
                  padding: '14px 28px',
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 240ms',
                  fontFamily: 'Inter',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#FFFFFF'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                Explore Cases
              </button>
              <button
                onClick={() => setBookingModalOpen(true)}
                style={{
                  background: 'var(--brand)',
                  border: '1.5px solid var(--brand)',
                  color: '#FFFFFF',
                  borderRadius: 999,
                  padding: '14px 28px',
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  transition: 'all 240ms',
                  fontFamily: 'Inter',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#FF7A3D'
                  e.currentTarget.style.borderColor = '#FF7A3D'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,92,26,0.3)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--brand)'
                  e.currentTarget.style.borderColor = 'var(--brand)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Book Tech Consultation <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* RIGHT: Overlapping Dashboard Cards */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 20 }} className="smart-dashboard-wrap">
            
            {/* Card 1: Cloud Uptime Engine */}
            <div
              ref={card1Ref}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 24,
                padding: '28px',
                width: '90%',
                height: 196,
                alignSelf: 'flex-start',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
              }}
            >
              <div style={{ display: 'flex', justifyContext: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Server size={16} style={{ color: 'var(--brand)' }} />
                  <span style={{ fontSize: 11, fontFamily: 'JetBrains Mono', fontWeight: 800, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>CLOUD SERVICES BENCHMARK</span>
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--brand)', fontFamily: 'JetBrains Mono', marginLeft: 'auto' }}>Uptime: 99.99%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 32, fontWeight: 900, fontFamily: 'Bricolage Grotesque' }}>99.99%</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#00C896' }}>↑ +0.02% load limit</span>
              </div>
              {/* SVG Area Chart */}
              <div style={{ height: 40, width: '100%', marginTop: 10 }}>
                <svg width="100%" height="40" viewBox="0 0 260 40" style={{ overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="miniChartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M 0 35 Q 30 20 60 25 T 120 10 T 180 20 T 260 5 L 260 40 L 0 40 Z" fill="url(#miniChartGrad)" />
                  <path d="M 0 35 Q 30 20 60 25 T 120 10 T 180 20 T 260 5" fill="none" stroke="var(--brand)" strokeWidth="2" />
                  <circle cx="260" cy="5" r="3" fill="var(--brand)" />
                  <circle cx="260" cy="5" r="6" fill="none" stroke="var(--brand)" strokeWidth="1" className="animate-pulse" />
                </svg>
              </div>
            </div>

            {/* Card 2: API Flow Stream */}
            <div
              ref={card2Ref}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 24,
                padding: '28px',
                width: '90%',
                height: 196,
                alignSelf: 'center',
                boxShadow: '0 20px 48px rgba(0,0,0,0.2)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Activity size={16} style={{ color: '#00C896' }} />
                  <span style={{ fontSize: 11, fontFamily: 'JetBrains Mono', fontWeight: 800, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>API REQUESTS / RUNTIME</span>
                </div>
                <span style={{ fontSize: 11, fontWeight: 800, color: '#00C896', background: 'rgba(0,200,150,0.08)', padding: '3px 8px', borderRadius: 999, fontFamily: 'JetBrains Mono', marginLeft: 'auto' }}>LATENCY: 12ms</span>
              </div>
              
              {/* Funnel SVG representation */}
              <div style={{ position: 'relative', height: 100, width: '100%' }}>
                <svg width="100%" height="100%" viewBox="0 0 340 100" style={{ overflow: 'visible' }}>
                  <path d="M 10 20 Q 80 20 120 50" fill="none" stroke="rgba(255,92,26,0.2)" strokeWidth="1.5" />
                  <path d="M 10 50 Q 80 50 120 50" fill="none" stroke="rgba(0,200,150,0.2)" strokeWidth="1.5" />
                  <path d="M 10 80 Q 80 80 120 50" fill="none" stroke="rgba(255,204,0,0.2)" strokeWidth="1.5" />
                  
                  <circle cx="50" cy="20" r="2.5" fill="var(--brand)" />
                  <circle cx="80" cy="50" r="2.5" fill="#00C896" />
                  <circle cx="60" cy="80" r="2.5" fill="#FFCC00" />
                  
                  <rect x="120" y="32" width="80" height="36" rx="8" fill="#111318" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <text x="160" y="54" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="800" fontFamily="JetBrains Mono">API GATEWAY</text>

                  <path d="M 200 50 L 260 50" fill="none" stroke="var(--brand)" strokeWidth="2" strokeDasharray="4 4" />

                  <rect x="260" y="32" width="70" height="36" rx="8" fill="#FF5C1A" />
                  <text x="295" y="54" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="800" fontFamily="JetBrains Mono">DB SYNC</text>
                </svg>
              </div>
            </div>

            {/* Card 3: Microservices Active */}
            <div
              ref={card3Ref}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 24,
                padding: '28px',
                width: '90%',
                height: 196,
                alignSelf: 'flex-end',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Shield size={16} style={{ color: '#FFCC00' }} />
                  <span style={{ fontSize: 11, fontFamily: 'JetBrains Mono', fontWeight: 800, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>SERVICES SECURITY AUDIT</span>
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#00C896', fontFamily: 'JetBrains Mono', marginLeft: 'auto' }}>SECURE SSL</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                  <span style={{ fontSize: 32, fontWeight: 900, fontFamily: 'Bricolage Grotesque' }}>32</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--brand)' }}>Live Microservices</span>
                </div>
                <div style={{ position: 'relative', width: 44, height: 44 }}>
                  <svg width="44" height="44" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#FFCC00" strokeWidth="3" strokeDasharray="100" strokeDashoffset="20" strokeLinecap="round" transform="rotate(-90 18 18)" />
                  </svg>
                  <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 900, color: '#FFCC00', fontFamily: 'JetBrains Mono' }}>OK</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .smart-title-wrapper { flex-direction: column !important; gap: 20px !important; }
          .smart-main-grid { grid-template-columns: 1fr !important; gap: 54px !important; }
          .smart-stats-grid { grid-template-columns: 1fr 1fr 1fr !important; }
          .smart-cta-buttons { flex-wrap: wrap !important; }
          .smart-cta-buttons button { flex: 1 !important; justify-content: center !important; }
          .smart-dashboard-wrap { max-width: 100% !important; align-items: center !important; }
          .smart-dashboard-wrap > div { width: 100% !important; align-self: center !important; }
        }
        @media (max-width: 480px) {
          .smart-stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
