import { useRef, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useUIStore } from '../../stores/uiStore'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const CASES = [
  {
    category: 'Enterprise Software Engineering',
    title: 'Custom ERP & Inventory Management Portal',
    tags: ['NodeJS Backend', 'React Dashboards', 'PostgreSQL Sync'],
    bgColor: '#0D0F11',
    Visual: () => (
      <svg width="100%" height="100%" viewBox="0 0 400 500" style={{ position: 'absolute', inset: 0 }}>
        {/* Device Mockup Outline */}
        <rect x="90" y="70" width="220" height="420" rx="36" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />
        <rect x="100" y="80" width="200" height="400" rx="28" fill="#111317" />
        
        {/* Notch */}
        <rect x="160" y="86" width="80" height="18" rx="9" fill="#000000" />
        
        {/* Download icon animating */}
        <g transform="translate(200, 190)">
          <circle r="45" fill="none" stroke="#FF5C1A" strokeWidth="1.5" style={{ opacity: 0.2, animation: 'pulse-ring 2.5s infinite' }} />
          <circle r="30" fill="none" stroke="#FF5C1A" strokeWidth="1.5" style={{ opacity: 0.4, animation: 'pulse-ring 2.5s infinite 0.8s' }} />
          <circle r="20" fill="rgba(255,92,26,0.15)" />
          
          <path d="M-6,-8 L6,-8 L6,0 L12,0 L0,12 L-12,0 L-6,0 Z" fill="#FF5C1A" style={{ animation: 'bounce-arrow 1.6s infinite' }} />
        </g>

        {/* Install Progress Bar */}
        <rect x="130" y="270" width="140" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
        <rect x="130" y="270" width="140" height="8" rx="4" fill="#FF5C1A" style={{ animation: 'fill-progress 3.5s infinite cubic-bezier(0.4, 0, 0.2, 1)' }} />
        <text x="200" y="305" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="JetBrains Mono">SYNCING DB...</text>
        
        {/* Country tags */}
        <rect x="115" y="340" width="80" height="26" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="155" y="357" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11" fontWeight="700" fontFamily="Inter">API V2 ⚡</text>

        <rect x="205" y="340" width="80" height="26" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="245" y="357" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11" fontWeight="700" fontFamily="Inter">PORTAL 💻</text>

        {/* Big Metric overlay */}
        <text x="200" y="50" textAnchor="middle" fill="#FFFFFF" fontSize="38" fontWeight="900" fontFamily="Bricolage Grotesque">99.9%</text>
        
        <style>{`
          @keyframes pulse-ring {
            0% { transform: scale(0.5); opacity: 0.8; }
            100% { transform: scale(1.4); opacity: 0; }
          }
          @keyframes bounce-arrow {
            0%, 100% { transform: translateY(-3px); }
            50% { transform: translateY(3px); }
          }
          @keyframes fill-progress {
            0% { width: 0px; }
            80%, 100% { width: 140px; }
          }
        `}</style>
      </svg>
    ),
  },
  {
    category: 'High-Performance Web Platforms',
    title: 'Hospital Management & Booking Portal Flow',
    tags: ['Next.js App', 'Patient Portal', 'Speed SEO'],
    bgColor: 'linear-gradient(135deg, #0A0B0D 0%, #1A1200 100%)',
    Visual: () => (
      <svg width="100%" height="100%" viewBox="0 0 400 500" style={{ position: 'absolute', inset: 0 }}>
        {/* Funnel Shapes shifted left */}
        <polygon points="40,110 240,110 190,210 90,210" fill="rgba(255,92,26,0.12)" stroke="rgba(255,92,26,0.25)" strokeWidth="1.5" />
        <polygon points="90,220 190,220 165,310 115,310" fill="rgba(255,92,26,0.08)" stroke="rgba(255,92,26,0.2)" strokeWidth="1.5" />
        <polygon points="115,320 165,320 150,390 130,390" fill="rgba(255,92,26,0.05)" stroke="rgba(255,92,26,0.15)" strokeWidth="1.5" />
        
        {/* Dotted Connector Lines */}
        <line x1="215" y1="160" x2="260" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="177.5" y1="265" x2="260" y2="265" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="157.5" y1="355" x2="260" y2="355" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />

        {/* Metric Labels on the right */}
        <g transform="translate(270, 0)">
          {/* Awareness */}
          <text y="152" fill="rgba(255,255,255,0.4)" fontSize="9" fontWeight="800" fontFamily="JetBrains Mono" letterSpacing="0.05em">VISITORS</text>
          <text y="172" fill="#FFFFFF" fontSize="18" fontWeight="900" fontFamily="Bricolage Grotesque">120,000</text>
          
          {/* Leads */}
          <text y="257" fill="rgba(255,255,255,0.4)" fontSize="9" fontWeight="800" fontFamily="JetBrains Mono" letterSpacing="0.05em">BOOKINGS</text>
          <text y="277" fill="#FFFFFF" fontSize="18" fontWeight="900" fontFamily="Bricolage Grotesque">14,200</text>
          
          {/* Sales */}
          <text y="347" fill="rgba(255,92,26,0.5)" fontSize="9" fontWeight="800" fontFamily="JetBrains Mono" letterSpacing="0.05em">COMPLETED 🎯</text>
          <text y="367" fill="#FF5C1A" fontSize="20" fontWeight="900" fontFamily="Bricolage Grotesque">99.2%</text>
        </g>
        
        {/* Falling Lead Circles */}
        <circle r="4.5" fill="#FFCC00" style={{ animation: 'funnel-drop-1 4s infinite linear' }} />
        <circle r="5" fill="#FF5C1A" style={{ animation: 'funnel-drop-2 4s infinite linear 1.2s' }} />
        <circle r="3.5" fill="#00C896" style={{ animation: 'funnel-drop-3 4s infinite linear 2.4s' }} />

        {/* Big Metric overlay */}
        <text x="200" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="38" fontWeight="900" fontFamily="Bricolage Grotesque">+32% BOOKINGS</text>
        
        <g transform="translate(140, 440)">
          <rect x="-60" y="0" width="120" height="34" rx="17" fill="rgba(255,92,26,0.12)" stroke="rgba(255,92,26,0.25)" strokeWidth="1" />
          <text x="0" y="21" textAnchor="middle" fill="#FF5C1A" fontSize="10" fontWeight="800" fontFamily="JetBrains Mono">PATIENT SYSTEM</text>
        </g>

        <style>{`
          @keyframes funnel-drop-1 {
            0% { cx: 140px; cy: 60px; opacity: 0; }
            10% { opacity: 1; }
            40% { cx: 140px; cy: 160px; }
            70% { cx: 140px; cy: 270px; }
            90% { cx: 140px; cy: 360px; opacity: 1; }
            95%, 100% { cx: 140px; cy: 420px; opacity: 0; }
          }
          @keyframes funnel-drop-2 {
            0% { cx: 110px; cy: 60px; opacity: 0; }
            10% { opacity: 1; }
            40% { cx: 125px; cy: 160px; }
            70% { cx: 135px; cy: 270px; }
            90% { cx: 140px; cy: 360px; opacity: 1; }
            95%, 100% { cx: 140px; cy: 420px; opacity: 0; }
          }
          @keyframes funnel-drop-3 {
            0% { cx: 170px; cy: 60px; opacity: 0; }
            10% { opacity: 1; }
            40% { cx: 155px; cy: 160px; }
            70% { cx: 145px; cy: 270px; }
            90% { cx: 140px; cy: 360px; opacity: 1; }
            95%, 100% { cx: 140px; cy: 420px; opacity: 0; }
          }
        `}</style>
      </svg>
    ),
  },
  {
    category: 'Workflow Automation & AI',
    title: 'E-Commerce Order Processing Sync Loops',
    tags: ['n8n Engine', 'Slack Alerts', 'Inventory Sync'],
    bgColor: '#0D0F11',
    Visual: () => (
      <svg width="100%" height="100%" viewBox="0 0 400 500" style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <pattern id="grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />

        {/* Automation Workflow Nodes */}
        <path d="M 80 180 L 160 180 L 160 300 L 240 300 M 240 300 L 320 300 L 320 420" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="6 6" />
        <path d="M 80 180 L 160 180 L 160 300 L 240 300 M 240 300 L 320 300 L 320 420" fill="none" stroke="#FFCC00" strokeWidth="2.5" strokeDasharray="12 100" style={{ animation: 'flow-dash 5s infinite linear' }} />
        
        {/* Node 1: Capture */}
        <g transform="translate(80, 180)">
          <circle r="22" fill="#111317" stroke="#FFCC00" strokeWidth="2" />
          <circle r="6" fill="#FFCC00" className="animate-pulse" />
          <text y="-32" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="700" fontFamily="JetBrains Mono">ORDER CAP</text>
        </g>

        {/* Node 2: DB Sync */}
        <g transform="translate(160, 300)">
          <circle r="22" fill="#111317" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" style={{ animation: 'node-glow-1 3s infinite alternate' }} />
          <circle r="6" fill="#00C896" />
          <text x="34" y="4" textAnchor="start" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="700" fontFamily="JetBrains Mono">STOCK SYNC</text>
        </g>

        {/* Node 3: Nurture */}
        <g transform="translate(320, 420)">
          <circle r="22" fill="#111317" stroke="#FF5C1A" strokeWidth="2" />
          <circle r="6" fill="#FF5C1A" className="animate-pulse" />
          <text y="-32" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="700" fontFamily="JetBrains Mono">SHIPPING</text>
        </g>

        {/* Floating checkmarks */}
        <g transform="translate(240, 150)">
          <g style={{ animation: 'float-item 4s infinite ease-in-out' }}>
            <rect x="0" y="0" width="125" height="34" rx="8" fill="rgba(0, 200, 150, 0.08)" stroke="rgba(0, 200, 150, 0.3)" strokeWidth="1.5" />
            <text x="62.5" y="21" textAnchor="middle" fill="#00C896" fontSize="9" fontWeight="800" fontFamily="Inter">✓ AUTOMATED SLIP</text>
          </g>
        </g>
        
        <g transform="translate(50, 340)">
          <g style={{ animation: 'float-item 4s infinite ease-in-out 2s' }}>
            <rect x="0" y="0" width="105" height="34" rx="8" fill="rgba(255, 204, 0, 0.08)" stroke="rgba(255, 204, 0, 0.3)" strokeWidth="1.5" />
            <text x="52.5" y="21" textAnchor="middle" fill="#FFCC00" fontSize="9" fontWeight="800" fontFamily="Inter">⚙ SLACK MONIT</text>
          </g>
        </g>

        {/* Big Metric overlay */}
        <text x="200" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="38" fontWeight="900" fontFamily="Bricolage Grotesque">99.4% ACC.</text>

        <style>{`
          @keyframes flow-dash {
            to { strokeDashoffset: -200px; }
          }
          @keyframes float-item {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }
          @keyframes node-glow-1 {
            0% { stroke: rgba(255,255,255,0.2); }
            100% { stroke: #00C896; }
          }
        `}</style>
      </svg>
    ),
  },
  {
    category: 'Custom Analytics Dashboards',
    title: 'Real-time Server Traffic & Latency Analytics',
    tags: ['Astro Frontend', 'API WebSockets', 'Cloudflare CDN'],
    bgColor: 'linear-gradient(135deg, #0A0B0D 0%, #001A0D 100%)',
    Visual: () => (
      <svg width="100%" height="100%" viewBox="0 0 400 500" style={{ position: 'absolute', inset: 0 }}>
        {/* Grid lines */}
        {[120, 180, 240, 300, 360].map((y, idx) => (
          <line key={idx} x1="40" y1={y} x2="360" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        ))}

        {/* Growing Bars */}
        {[{x:60,h:50,c:'rgba(255,255,255,0.08)'},{x:120,h:90,c:'rgba(255,255,255,0.1)'},{x:180,h:150,c:'rgba(255,92,26,0.3)'},{x:240,h:210,c:'rgba(255,92,26,0.5)'},{x:300,h:270,c:'rgba(255,92,26,0.8)'}].map((b,i) => (
           <rect
             key={i}
             x={b.x - 15}
             y={400 - b.h}
             width="30"
             height={b.h}
             rx="6"
             fill={b.c}
             style={{
               animation: 'grow-bar 2.5s infinite alternate ease-in-out',
               transformOrigin: 'bottom',
               transformBox: 'fill-box',
             }}
           />
        ))}

        {/* Month labels */}
        {['M1','M2','M3','M4','M5'].map((m,i) => (
          <text key={i} x={60+i*60} y={425} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="11" fontWeight="700" fontFamily="JetBrains Mono">{m}</text>
        ))}

        {/* Big Metric overlay */}
        <text x="200" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="38" fontWeight="900" fontFamily="Bricolage Grotesque">12ms LATENCY</text>

        <style>{`
          @keyframes grow-bar {
            0% { transform: scaleY(0.4); }
            100% { transform: scaleY(1); }
          }
        `}</style>
      </svg>
    ),
  },
]

export function PortfolioSection() {
  const { setBookingModalOpen } = useUIStore()
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<Element>('.portfolio-case-card')
      cards.forEach((card) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    }, gridRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      style={{
        background: '#FFFFFF',
        padding: '120px 0 100px',
        position: 'relative',
      }}
      id="portfolio"
    >
      <div style={{ width: '100%', maxWidth: 1600, margin: '0 auto', padding: '0 40px' }}>
        
        {/* Header Block */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 72 }} className="portfolio-header-split">
          <div style={{ maxWidth: 580 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'JetBrains Mono' }}>
              04 — Case Archive
            </span>
            <h2 style={{
              fontFamily: 'Bricolage Grotesque',
              fontSize: 'clamp(28px, 4.5vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: 'var(--text-h)',
              letterSpacing: '-0.03em',
              margin: '12px 0 0',
              textTransform: 'uppercase',
            }}>
              Proven Product Outcomes
            </h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 12 }} className="portfolio-header-right">
            <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-h)' }}>Zero guesswork. Full production pipelines.</span>
            <button
              onClick={() => setBookingModalOpen(true)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--brand)',
                fontSize: 14,
                fontWeight: 700,
                cursor: 'pointer',
                textAlign: 'left',
                padding: '4px 0',
                textDecoration: 'underline',
                width: 'max-content',
              }}
            >
              Schedule System Briefing →
            </button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div ref={gridRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 40,
        }} className="portfolio-masonry-grid">
          {CASES.map((item, idx) => {
            const Visual = item.Visual
            const getColSpan = (index: number) => {
              const row = Math.floor(index / 2)
              if (row % 2 === 0) {
                return index % 2 === 0 ? 'span 7' : 'span 5'
              } else {
                return index % 2 === 0 ? 'span 5' : 'span 7'
              }
            }
            return (
              <div
                key={idx}
                className="portfolio-case-card"
                onClick={() => setBookingModalOpen(true)}
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 32,
                  overflow: 'hidden',
                  position: 'relative',
                  height: 'clamp(380px, 38vw, 620px)',
                  gridColumn: getColSpan(idx),
                  cursor: 'pointer',
                  transition: 'all 400ms cubic-bezier(0.2, 1, 0.3, 1)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-8px)'
                  el.style.borderColor = 'var(--brand)'
                  el.style.boxShadow = '0 24px 64px var(--brand-glow-md)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(0)'
                  el.style.borderColor = 'var(--border)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Visual Canvas (SVG Background) */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: item.bgColor,
                  overflow: 'hidden',
                }}>
                  {Visual ? <Visual /> : null}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0) 60%)',
                      pointerEvents: 'none',
                      zIndex: 1,
                    }}
                  />
                </div>

                {/* Bottom Card Info Bar */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 24,
                    left: 24,
                    right: 24,
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    borderRadius: '24px',
                    padding: '16px 20px 16px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    zIndex: 2,
                    border: '1px solid var(--border)',
                    boxShadow: '0 8px 30px rgba(10,10,10,0.06)',
                  }}
                  className="portfolio-item-info-pill"
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: '80%' }}>
                    <span style={{ fontSize: 10, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'JetBrains Mono' }}>
                      {item.category}
                    </span>
                    <h3 style={{
                      fontFamily: 'Bricolage Grotesque',
                      fontWeight: 800,
                      fontSize: 'clamp(14px, 1.6vw, 19px)',
                      color: 'var(--text-h)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.25,
                      margin: 0,
                    }}>
                      {item.title}
                    </h3>
                  </div>

                  {/* Stretched Link Arrow */}
                  <div
                    className="portfolio-item-arrow"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: '#F1F0EC',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-h)',
                      transition: 'all 300ms cubic-bezier(0.2, 1, 0.3, 1)',
                      flexShrink: 0,
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .portfolio-case-card:hover .portfolio-item-arrow {
          background: var(--brand) !important;
          color: #FFFFFF !important;
          transform: rotate(45deg) scale(1.05);
        }
        @media (max-width: 900px) {
          .portfolio-header-split { flex-direction: column !important; gap: 24px !important; }
          .portfolio-masonry-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .portfolio-case-card { grid-column: auto !important; height: 420px !important; }
          .portfolio-item-info-pill { padding: 12px 12px 12px 20px !important; border-radius: 20px !important; }
        }
      `}</style>
    </section>
  )
}
