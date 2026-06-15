'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote: "Partnering with Hermes Studio was a game-changer for our clinic operations. They built a custom patient booking platform and automated our reminders, reducing slot gaps by 90% and boosting patient engagement in under 60 days.",
    name: "Dr. Sarah Mitchell",
    role: "Founder & CEO",
    company: "Smith Dental Clinic",
    location: "London, UK",
    result: "90% Automation",
  },
  {
    quote: "Their custom ERP and automated inventory syncing workflows saved us over 40 hours of manual labor per week. Our operations run smoothly, and our system latency has decreased dramatically.",
    name: "James Cooper",
    role: "Managing Director",
    company: "AutoCare Plus Group",
    location: "Sydney, Australia",
    result: "40 hrs/wk Saved",
  },
  {
    quote: "Hermes Studio built our web platform with Astro and Tailwind CSS. The speed is phenomenal, boosting our organic search traffic by 150% in three months. No more relying on slow, generic templates.",
    name: "Emma Nguyen",
    role: "Executive Director",
    company: "Little Explorers Academy",
    location: "Toronto, Canada",
    result: "+150% Traffic",
  },
  {
    quote: "We commissioned Hermes Studio to develop custom microservices and automated n8n workflows for our logistics CRM. The performance has been bulletproof, handling over 50,000 requests per day without a single hitch.",
    name: "Ahmed Al-Farsi",
    role: "Head of Engineering",
    company: "Luxe Home Interiors",
    location: "Dubai, UAE",
    result: "50k reqs/day",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex(prev => (prev + 1) % TESTIMONIALS.length)
  }

  const prevSlide = () => {
    setActiveIndex(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <section
      style={{
        background: '#FFFFFF',
        padding: '120px 0 100px',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border)',
      }}
      id="testimonials"
    >
      <div className="container-wide">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.35fr 0.65fr',
            gap: 60,
            alignItems: 'flex-start',
          }}
          className="testimonials-split"
        >
          {/* LEFT COLUMN: Eyebrow, Subtext & Giant Quote Symbol */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                04 — Client Testimonials
              </span>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 18,
                fontWeight: 400,
                color: 'rgba(10, 10, 10, 0.38)',
                lineHeight: 1.5,
                margin: '16px 0 0',
              }}>
                We help fast-growing brands across the UK, US, UAE, Australia, Canada, and Germany scale with high-performance web systems, custom software, and workflow automation.
              </p>
            </div>
            
            {/* Giant quote mark symbol */}
            <div style={{
              fontSize: 180,
              fontFamily: "'Times New Roman', Georgia, serif",
              lineHeight: 0.1,
              color: 'var(--brand)',
              opacity: 0.15,
              fontWeight: 900,
              marginTop: 40,
              userSelect: 'none',
            }}>
              “
            </div>
          </div>

          {/* RIGHT COLUMN: Slider Content & Navigation Controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }} className="testimonials-slider-content">
            <p style={{
              fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
              fontSize: 'clamp(22px, 2.5vw, 36px)',
              fontWeight: 600,
              lineHeight: 1.25,
              color: '#000000',
              letterSpacing: '-0.02em',
              margin: 0,
            }}>
              "{TESTIMONIALS[activeIndex].quote}"
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, borderTop: '1px solid var(--border)', paddingTop: 32 }}>
              {/* Author Info */}
              <div>
                <h4 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text-h)', margin: '0 0 4px' }}>
                  {TESTIMONIALS[activeIndex].name}
                </h4>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 600, margin: 0 }}>
                  {TESTIMONIALS[activeIndex].role} • <span style={{ color: 'var(--text-h)' }}>{TESTIMONIALS[activeIndex].company}</span> ({TESTIMONIALS[activeIndex].location})
                </p>
              </div>

              {/* Slider Selector Arrows & Metrics */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="testimonials-controls">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>VERIFIED SYSTEM RESULT</span>
                  <span style={{ fontSize: 18, fontWeight: 900, fontFamily: 'Bricolage Grotesque', color: 'var(--brand)', marginTop: 4 }}>
                    {TESTIMONIALS[activeIndex].result}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: 10 }}>
                  <button
                    onClick={prevSlide}
                    aria-label="Previous quote"
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
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Next quote"
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
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-split { grid-template-columns: 1fr !important; gap: 40px !important; }
          .testimonials-controls { width: 100% !important; justify-content: space-between !important; margin-top: 12px; }
        }
      `}</style>
    </section>
  )
}
