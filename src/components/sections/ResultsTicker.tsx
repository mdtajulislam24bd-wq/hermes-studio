import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const TICKER_1 = [
  { text: '99.99% Core Uptime', client: 'Prime Digital, Dhaka', highlight: true },
  { text: 'Custom Web Architectures', highlight: false },
  { text: '320+ Dev Ops Hours Saved', client: 'Lanka Finance, Chittagong', highlight: true },
  { text: 'Production-Grade AI Agents', highlight: false },
  { text: '12ms API Latency', client: 'Pathao Logistics Sync', highlight: true },
  { text: 'Engineering-First Culture', highlight: false },
  { text: '85+ Platforms Shipped', highlight: true },
  { text: 'Websites · Automations · Custom Software', highlight: false },
]

const TICKER_2 = [
  { text: 'Custom Web Apps', highlight: false },
  { text: 'Workflow Automation', highlight: true },
  { text: 'Astro.js & Next.js Platforms', highlight: false },
  { text: 'Database Architectures', highlight: false },
  { text: 'Cloud Infrastructure CI/CD', highlight: true },
  { text: 'AI Chatbots & Agents', highlight: false },
  { text: 'High-Performance REST APIs', highlight: true },
  { text: 'Clean Code Standards', highlight: false },
]

function TickerItem({ text, client, highlight }: { text: string; client?: string; highlight: boolean }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      padding: '0 64px',
      flexShrink: 0,
    }}>
      <span style={{
        fontFamily: highlight ? 'JetBrains Mono' : 'Inter',
        fontWeight: highlight ? 700 : 500,
        fontSize: highlight ? 24 : 20,
        color: highlight ? 'var(--brand)' : 'rgba(10,10,10,0.4)',
        letterSpacing: highlight ? '-0.02em' : '0.05em',
        textTransform: highlight ? 'none' : 'uppercase',
        whiteSpace: 'nowrap',
      }}>
        {text}
      </span>
      {client && (
        <span style={{
          fontSize: 16,
          color: 'rgba(10,10,10,0.3)',
          fontStyle: 'italic',
          whiteSpace: 'nowrap',
        }}>
          {client}
        </span>
      )}
      {/* Dot separator */}
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(10,10,10,0.1)', flexShrink: 0 }} />
    </div>
  )
}

export function ResultsTicker() {
  const track1Ref = useRef<HTMLDivElement>(null)
  const track2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tracks = [track1Ref.current, track2Ref.current]
    const anims: gsap.core.Tween[] = []

    tracks.forEach((track, i) => {
      if (!track) return
      const w = track.scrollWidth / 2
      const duration = 30 + i * 8
      const tween = gsap.to(track, {
        x: i % 2 === 0 ? -w : w,
        duration,
        ease: 'none',
        repeat: -1,
        ...(i % 2 === 1 && { x: -w }),
      })
      if (i === 1) {
        gsap.set(track, { x: -w / 2 })
      }
      anims.push(tween)

      track.parentElement?.addEventListener('mouseenter', () => tween.pause())
      track.parentElement?.addEventListener('mouseleave', () => tween.play())
    })

    return () => anims.forEach(a => a.kill())
  }, [])

  const repeated1 = [...TICKER_1, ...TICKER_1, ...TICKER_1]
  const repeated2 = [...TICKER_2, ...TICKER_2, ...TICKER_2]

  return (
    <div style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '52px 0',
      overflow: 'hidden',
    }}>
      {/* Row 1 — left to right */}
      <div className="ticker-wrap" style={{ marginBottom: 24 }}>
        <div ref={track1Ref} className="ticker-inner">
          {repeated1.map((item, i) => (
            <TickerItem key={i} {...item} />
          ))}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="ticker-wrap">
        <div ref={track2Ref} className="ticker-inner">
          {repeated2.map((item, i) => (
            <TickerItem key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
