import { useState, useRef, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useUIStore } from '../../stores/uiStore'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const LATEST_CASES = [
  {
    number: '01',
    category: 'Enterprise Software Engineering',
    title: 'Bespoke ERP & Inventory Management System',
    tags: ['NodeJS Core', 'React Admin', 'Postgres SQL'],
    metric: '99.9% Uptime',
    color: '#FF5C1A',
  },
  {
    number: '02',
    category: 'Web Applications & Portals',
    title: 'Re-engineering Hospital Booking Flow & Portals',
    tags: ['Next.js App', 'Patient Portal', 'Speed SEO'],
    metric: '+32% Bookings',
    color: '#00C896',
  },
  {
    number: '03',
    category: 'Workflow Automation & AI',
    title: 'Automating E-Commerce Order Processing Sync Loops',
    tags: ['n8n Engine', 'Slack Alerts', 'Inventory Sync'],
    metric: '99.4% Acc.',
    color: '#FFCC00',
  },
  {
    number: '04',
    category: 'Custom Web Dashboards',
    title: 'Real-time Server Traffic & Latency Analytics Monitor',
    tags: ['Astro Frontend', 'API WebSockets', 'Cloudflare CDN'],
    metric: '12ms Latency',
    color: '#3B82F6',
  },
]

export function LatestCases() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { setBookingModalOpen } = useUIStore()
  
  const containerRef = useRef<HTMLDivElement>(null)
  const rowsRef = useRef<HTMLDivElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)

  const containerRect = useRef<{ left: number; top: number }>({ left: 0, top: 0 })

  const updateContainerOffset = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      containerRect.current = {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
      }
    }
  }

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    updateContainerOffset()

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateContainerOffset)
    }

    setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).ScrollTrigger) {
        (window as any).ScrollTrigger.refresh()
      }
      updateContainerOffset()
    }, 100)

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateContainerOffset)
      }
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<Element>('.case-row')
      rows.forEach((row) => {
        gsap.from(row, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        })
      })

      if (!previewRef.current || !containerRef.current) return
      const previewEl = previewRef.current
      const containerEl = containerRef.current

      updateContainerOffset()
      gsap.set(previewEl, { x: 0, y: 0 })

      const xTo = gsap.quickTo(previewEl, 'x', { duration: 0.15, ease: 'power2.out' })
      const yTo = gsap.quickTo(previewEl, 'y', { duration: 0.15, ease: 'power2.out' })

      let isFirstMove = true

      const handleMove = (e: globalThis.MouseEvent) => {
        const x = e.pageX - containerRect.current.left
        const y = e.pageY - containerRect.current.top
        
        if (isFirstMove) {
          gsap.set(previewEl, { x: x + 20, y: y - 90 })
          xTo(x + 20)
          yTo(y - 90)
          isFirstMove = false
        } else {
          xTo(x + 20)
          yTo(y - 90)
        }
      }

      const handleMouseLeave = () => {
        isFirstMove = true
      }

      containerEl.addEventListener('mousemove', handleMove)
      containerEl.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        containerEl.removeEventListener('mousemove', handleMove)
        containerEl.removeEventListener('mouseleave', handleMouseLeave)
      }
    }, containerRef)

    return () => ctx.revert()
  }, [mounted])

  // GSAP animation for preview visibility
  useEffect(() => {
    if (!mounted || !previewRef.current) return
    
    if (isVisible && hoveredIdx !== null) {
      gsap.to(previewRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    } else {
      gsap.to(previewRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.2,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }
  }, [isVisible, hoveredIdx, mounted])

  return (
    <section
      ref={containerRef}
      style={{
        background: '#FFFFFF',
        padding: '120px 0 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
      id="latest-cases"
    >
      <div className="container-wide">
        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 80,
          borderBottom: '1px solid var(--border)',
          paddingBottom: 40,
        }} className="latest-header-split">
          <div>
            <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 10, fontFamily: 'JetBrains Mono' }}>
              05 — Live Case Studies
            </span>
            <h2 style={{
              fontFamily: 'Bricolage Grotesque',
              fontSize: 'clamp(32px, 4.5vw, 60px)',
              fontWeight: 900,
              color: 'var(--text-h)',
              letterSpacing: '-0.04em',
              margin: 0,
              lineHeight: 1.05,
              textTransform: 'uppercase',
            }}>
              Latest Work Outcomes
            </h2>
          </div>

          <button
            onClick={() => setBookingModalOpen(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#F1F0EC',
              border: '1px solid #E5E2DA',
              color: 'var(--text-h)',
              padding: '12px 24px',
              borderRadius: 999,
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 700,
              transition: 'all 240ms var(--ease-out)',
              fontFamily: 'Inter',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--text-h)'
              e.currentTarget.style.color = '#FFFFFF'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#F1F0EC'
              e.currentTarget.style.color = 'var(--text-h)'
            }}
          >
            Initiate Project Brief <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Case Rows */}
        <div
          ref={rowsRef}
          style={{ display: 'flex', flexDirection: 'column' }}
          onMouseLeave={() => {
            setHoveredIdx(null)
            setIsVisible(false)
          }}
        >
          {LATEST_CASES.map((item, idx) => {
            const isHovered = hoveredIdx === idx

            return (
              <div
                key={idx}
                onClick={() => setBookingModalOpen(true)}
                onMouseEnter={() => {
                  setHoveredIdx(idx)
                  setIsVisible(true)
                  updateContainerOffset()
                }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr auto',
                  alignItems: 'center',
                  gap: 32,
                  padding: '36px 12px',
                  borderBottom: '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all 300ms cubic-bezier(0.2, 1, 0.3, 1)',
                  position: 'relative',
                }}
                className="case-row"
              >
                {/* Asymmetric Hover background glow */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(90deg, ${item.color}08 0%, transparent 80%)`,
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 300ms ease',
                  pointerEvents: 'none',
                  borderRadius: 16,
                }} />

                {/* Case Serial */}
                <span style={{
                  fontFamily: 'JetBrains Mono',
                  fontSize: 13,
                  fontWeight: 800,
                  color: isHovered ? item.color : 'var(--text-muted)',
                  transition: 'color 240ms',
                  flexShrink: 0,
                }}>
                  {item.number}
                </span>

                {/* Case Info Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontFamily: 'JetBrains Mono',
                  }}>
                    {item.category}
                  </span>

                  <h3 style={{
                    fontFamily: 'Bricolage Grotesque',
                    fontWeight: 800,
                    fontSize: 'clamp(18px, 2.2vw, 26px)',
                    color: 'var(--text-h)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.25,
                    margin: 0,
                    transition: 'color 240ms',
                  }}>
                    {item.title}
                  </h3>

                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: isHovered ? item.color : 'var(--text-muted)',
                        border: `1px solid ${isHovered ? item.color + '33' : 'var(--border)'}`,
                        borderRadius: 999,
                        padding: '3px 10px',
                        transition: 'all 240ms',
                        fontFamily: 'JetBrains Mono',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* KPI Outcome Circle & Trigger */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexShrink: 0 }} className="case-row-right">
                  <div style={{
                    background: isHovered ? item.color : '#F1F0EC',
                    color: isHovered ? '#FFFFFF' : 'var(--text-h)',
                    borderRadius: 999,
                    padding: '8px 18px',
                    fontSize: 13,
                    fontWeight: 800,
                    fontFamily: 'JetBrains Mono',
                    transition: 'all 300ms cubic-bezier(0.2, 1, 0.3, 1)',
                    whiteSpace: 'nowrap',
                    boxShadow: isHovered ? `0 8px 16px ${item.color}25` : 'none',
                  }}>
                    {item.metric}
                  </div>

                  <div style={{
                    width: 46,
                    height: 46,
                    borderRadius: '50%',
                    border: '1.5px solid var(--border)',
                    background: isHovered ? 'var(--text-h)' : 'transparent',
                    color: isHovered ? '#FFFFFF' : 'var(--text-h)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 300ms cubic-bezier(0.2, 1, 0.3, 1)',
                    flexShrink: 0,
                    transform: isHovered ? 'rotate(-45deg)' : 'rotate(0deg)',
                  }}>
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action Button */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 64,
        }}>
          <button
            onClick={() => setBookingModalOpen(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'var(--text-h)',
              color: '#FFFFFF',
              borderRadius: 999,
              padding: '16px 36px',
              fontSize: 15,
              fontWeight: 700,
              cursor: 'pointer',
              border: 'none',
              transition: 'all 240ms var(--ease-out)',
              fontFamily: 'Inter',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--brand)'
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(255,92,26,0.25)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--text-h)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Claim Your Free Technical Consultation <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {/* Floating HTML/CSS Dashboard Preview */}
      <div
        ref={previewRef}
        className="hover-image-preview-container"
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          zIndex: 50,
          overflow: 'hidden',
          borderRadius: 16,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.45)',
          left: 0,
          top: 0,
          width: 280,
          height: 180,
          background: '#0E0D0A',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          opacity: 0,
          transform: 'scale(0.8)',
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 16, overflow: 'hidden' }}>
          {/* Mockup 1: Case 01 (Orange) */}
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: hoveredIdx === 0 ? 1 : 0,
            transform: `scale(${hoveredIdx === 0 ? 1 : 1.1})`,
            transition: 'opacity 250ms cubic-bezier(0.25, 1, 0.5, 1), transform 250ms cubic-bezier(0.25, 1, 0.5, 1)',
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255, 255, 255, 0.4)', fontFamily: 'JetBrains Mono' }}>
                DATABASE INTEGRATION
              </span>
              <span style={{ fontSize: 9, background: 'rgba(255, 92, 26, 0.15)', color: '#FF5C1A', border: '1px solid rgba(255, 92, 26, 0.3)', padding: '1px 5px', borderRadius: 4, fontWeight: 700 }}>99.9% UPTIME</span>
            </div>
            
            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', margin: '12px 0 8px', height: 60, position: 'relative' }}>
              <svg width="100%" height="100%" viewBox="0 0 248 60" fill="none" style={{ position: 'absolute', bottom: 0, left: 0 }}>
                <path
                  d="M0,50 Q40,45 80,30 T160,25 T248,5"
                  fill="none"
                  stroke="#FF5C1A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 300,
                    strokeDashoffset: hoveredIdx === 0 ? 0 : 300,
                    transition: 'stroke-dashoffset 1.5s cubic-bezier(0.2, 1, 0.3, 1) 0.1s',
                  }}
                />
                <path
                  d="M0,50 Q40,45 80,30 T160,25 T248,5 L248,60 L0,60 Z"
                  fill="url(#orange-grad)"
                  opacity="0.15"
                />
                <defs>
                  <linearGradient id="orange-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF5C1A" />
                    <stop offset="100%" stopColor="#FF5C1A" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              
              <div style={{
                position: 'absolute',
                right: 0,
                top: 2,
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#FF5C1A',
                boxShadow: '0 0 12px #FF5C1A',
              }} className="pulse-yellow-dot" />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}>SYSTEM METRIC</span>
                <span style={{ fontSize: 20, fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em', fontFamily: 'Bricolage Grotesque', marginTop: 2 }}>
                  99.9% <span style={{ fontSize: 12, fontWeight: 500, color: '#FF5C1A' }}>Core Uptime</span>
                </span>
              </div>
              <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255, 255, 255, 0.3)', fontFamily: 'JetBrains Mono' }}>
                LIVE RUN //
              </span>
            </div>
          </div>

          {/* Mockup 2: Case 02 (Teal) */}
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: hoveredIdx === 1 ? 1 : 0,
            transform: `scale(${hoveredIdx === 1 ? 1 : 1.1})`,
            transition: 'opacity 250ms cubic-bezier(0.25, 1, 0.5, 1), transform 250ms cubic-bezier(0.25, 1, 0.5, 1)',
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255, 255, 255, 0.4)', fontFamily: 'JetBrains Mono' }}>
                PATIENT BOOKING FLOW
              </span>
              <span style={{ fontSize: 9, background: 'rgba(0, 200, 150, 0.15)', color: '#00C896', border: '1px solid rgba(0, 200, 150, 0.3)', padding: '1px 5px', borderRadius: 4, fontWeight: 700 }}>
                OPTIMIZED
              </span>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6, margin: '8px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ flex: 1, height: 10, background: 'rgba(0, 200, 150, 0.1)', borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{
                    width: hoveredIdx === 1 ? '100%' : '0%',
                    height: '100%',
                    background: 'rgba(0, 200, 150, 0.6)',
                    transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
                  }} />
                </div>
                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', width: 60, fontFamily: 'JetBrains Mono', textAlign: 'right' }}>VISITS 100%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ flex: 1, height: 10, background: 'rgba(0, 200, 150, 0.1)', borderRadius: 2, overflow: 'hidden', margin: '0 8px' }}>
                  <div style={{
                    width: hoveredIdx === 1 ? '68%' : '0%',
                    height: '100%',
                    background: 'rgba(0, 200, 150, 0.8)',
                    transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
                  }} />
                </div>
                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', width: 60, fontFamily: 'JetBrains Mono', textAlign: 'right' }}>CLICKS 68%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ flex: 1, height: 10, background: 'rgba(0, 200, 150, 0.1)', borderRadius: 2, overflow: 'hidden', margin: '0 16px' }}>
                  <div style={{
                    width: hoveredIdx === 1 ? '32%' : '0%',
                    height: '100%',
                    background: '#00C896',
                    transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
                  }} />
                </div>
                <span style={{ fontSize: 9, color: '#00C896', width: 60, fontFamily: 'JetBrains Mono', fontWeight: 700, textAlign: 'right' }}>BOOKINGS 32%</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}>WEB PLATFORM FLOW</span>
                <span style={{ fontSize: 20, fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em', fontFamily: 'Bricolage Grotesque', marginTop: 2 }}>
                  +32% <span style={{ fontSize: 12, fontWeight: 500, color: '#00C896' }}>Booking Rate</span>
                </span>
              </div>
              <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255, 255, 255, 0.3)', fontFamily: 'JetBrains Mono' }}>
                PATIENT PORTAL
              </span>
            </div>
          </div>

          {/* Mockup 3: Case 03 (Yellow) */}
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: hoveredIdx === 2 ? 1 : 0,
            transform: `scale(${hoveredIdx === 2 ? 1 : 1.1})`,
            transition: 'opacity 250ms cubic-bezier(0.25, 1, 0.5, 1), transform 250ms cubic-bezier(0.25, 1, 0.5, 1)',
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255, 255, 255, 0.4)', fontFamily: 'JetBrains Mono' }}>
                n8n AUTOMATION ROUTING
              </span>
              <span style={{ fontSize: 9, background: 'rgba(255, 204, 0, 0.15)', color: '#FFCC00', border: '1px solid rgba(255, 204, 0, 0.3)', padding: '1px 5px', borderRadius: 4, fontWeight: 700 }}>
                AUTOMATED
              </span>
            </div>

            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, margin: '8px 0' }}>
              <div style={{
                width: 60,
                height: 36,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}>
                <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>WEBHOOK</span>
                <span style={{ fontSize: 8, color: '#FFFFFF', fontWeight: 700 }}>Order In</span>
              </div>
              
              <svg width="24" height="8" style={{ overflow: 'visible' }}>
                <line x1="0" y1="4" x2="24" y2="4" stroke={hoveredIdx === 2 ? '#FFCC00' : 'rgba(255,255,255,0.1)'} strokeWidth="1.5" strokeDasharray="4 2" />
              </svg>

              <div style={{
                width: 60,
                height: 36,
                background: 'rgba(255, 204, 0, 0.05)',
                border: '1px solid rgba(255, 204, 0, 0.25)',
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                position: 'relative',
              }}>
                <span style={{ fontSize: 7, color: '#FFCC00', fontWeight: 800 }}>SYNC BOT</span>
                <span style={{ fontSize: 8, color: '#FFFFFF', fontWeight: 700 }}>Update Stock</span>
                <div style={{
                  position: 'absolute',
                  top: -2,
                  right: -2,
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#FFCC00',
                }} className="pulse-yellow-dot" />
              </div>

              <svg width="24" height="8" style={{ overflow: 'visible' }}>
                <line x1="0" y1="4" x2="24" y2="4" stroke={hoveredIdx === 2 ? '#FFCC00' : 'rgba(255,255,255,0.1)'} strokeWidth="1.5" />
              </svg>

              <div style={{
                width: 60,
                height: 36,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}>
                <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>ACTION</span>
                <span style={{ fontSize: 8, color: '#FFFFFF', fontWeight: 700 }}>Ship Notify</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}>SYNC METRIC</span>
                <span style={{ fontSize: 20, fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em', fontFamily: 'Bricolage Grotesque', marginTop: 2 }}>
                  99.4% <span style={{ fontSize: 12, fontWeight: 500, color: '#FFCC00' }}>Sync Accuracy</span>
                </span>
              </div>
              <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255, 255, 255, 0.3)', fontFamily: 'JetBrains Mono' }}>
                n8n WORKFLOW //
              </span>
            </div>
          </div>

          {/* Mockup 4: Case 04 (Blue) */}
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: hoveredIdx === 3 ? 1 : 0,
            transform: `scale(${hoveredIdx === 3 ? 1 : 1.1})`,
            transition: 'opacity 250ms cubic-bezier(0.25, 1, 0.5, 1), transform 250ms cubic-bezier(0.25, 1, 0.5, 1)',
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255, 255, 255, 0.4)', fontFamily: 'JetBrains Mono' }}>
                SERVER NETWORK PERFORMANCE
              </span>
              <span style={{ fontSize: 9, background: 'rgba(59, 130, 246, 0.15)', color: '#3B82F6', border: '1px solid rgba(59, 130, 246, 0.3)', padding: '1px 5px', borderRadius: 4, fontWeight: 700 }}>
                CLOUD BENCHMARK
              </span>
            </div>

            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, margin: '8px 0' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 6, padding: '6px 8px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>API RESPONSE</span>
                <span style={{ fontSize: 10, color: '#FFFFFF', fontWeight: 800, marginTop: 2 }}>12ms Latency</span>
                <div style={{ width: '100%', height: 3, background: 'rgba(59, 130, 246, 0.2)', borderRadius: 1, marginTop: 4, overflow: 'hidden' }}>
                  <div style={{ width: hoveredIdx === 3 ? '95%' : '0%', height: '100%', background: '#3B82F6', transition: 'width 0.8s ease 0.1s' }} />
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 6, padding: '6px 8px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>PAGE LOAD SPEED</span>
                <span style={{ fontSize: 10, color: '#FFFFFF', fontWeight: 800, marginTop: 2 }}>+200% Speed</span>
                <div style={{ width: '100%', height: 3, background: 'rgba(59, 130, 246, 0.2)', borderRadius: 1, marginTop: 4, overflow: 'hidden' }}>
                  <div style={{ width: hoveredIdx === 3 ? '90%' : '0%', height: '100%', background: '#3B82F6', transition: 'width 0.8s ease 0.2s' }} />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}>API LOAD TEST</span>
                <span style={{ fontSize: 20, fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em', fontFamily: 'Bricolage Grotesque', marginTop: 2 }}>
                  12ms <span style={{ fontSize: 12, fontWeight: 500, color: '#3B82F6' }}>API Response Time</span>
                </span>
              </div>
              <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255, 255, 255, 0.3)', fontFamily: 'JetBrains Mono' }}>
                CDN: OK //
              </span>
            </div>
          </div>

          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'gradient',
            backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)',
            pointerEvents: 'none',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes pulse-yellow {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 204, 0, 0.7);
          }
          70% {
            box-shadow: 0 0 0 6px rgba(255, 204, 0, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 204, 0, 0);
          }
        }
        .pulse-yellow-dot {
          animation: pulse-yellow 1.5s infinite;
        }
      `}</style>
    </section>
  )
}
