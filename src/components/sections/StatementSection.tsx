import { useState } from 'react'
import { Sparkles, Compass, TrendingUp, ArrowUpRight, Cpu } from 'lucide-react'
import { useUIStore } from '../../stores/uiStore'

const GRAPH_NODES = {
  Acquisition: {
    title: 'Software & Web Engineering',
    desc: 'Structuring lightning-fast Astro/Next.js platforms, custom databases, and robust REST/GraphQL APIs with clean-code design patterns.',
    color: 'var(--yellow)',
    subLabels: [
      { text: 'Astro & React', x: 160, y: 15, delay: 0 },
      { text: 'Custom APIs', x: 100, y: 35, delay: 0.1 },
      { text: 'Database Design', x: 220, y: 35, delay: 0.2 }
    ]
  },
  Optimization: {
    title: 'System & Cloud Operations',
    desc: 'Deploying secure production applications to AWS and Vercel with automatic failover, CI/CD pipelines, and active 24/7 monitoring.',
    color: 'var(--orange)',
    subLabels: [
      { text: 'AWS & Vercel', x: 300, y: 40, delay: 0 },
      { text: 'Docker CI/CD', x: 310, y: 120, delay: 0.1 },
      { text: 'Uptime Monitors', x: 230, y: 120, delay: 0.2 }
    ]
  },
  Automation: {
    title: 'Workflow Automation & AI',
    desc: 'Deploying custom automation scripts, n8n/Zapier integration flows, and conversational AI agents to streamline business operations.',
    color: 'var(--red)',
    subLabels: [
      { text: 'n8n & Zapier', x: 35, y: 175, delay: 0 },
      { text: 'AI Chatbots', x: 45, y: 285, delay: 0.1 },
      { text: 'Custom Scripts', x: 155, y: 275, delay: 0.2 }
    ]
  },
}

const BRAND_LOGOS = [
  {
    name: 'n8n',
    icon: () => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="22" height="22" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="12" style={{ color: 'var(--text-h)' }}>
          <circle cx="20" cy="50" r="10" fill="currentColor" />
          <circle cx="80" cy="20" r="10" fill="currentColor" />
          <circle cx="80" cy="80" r="10" fill="currentColor" />
          <line x1="20" y1="50" x2="80" y2="20" />
          <line x1="20" y1="50" x2="80" y2="80" />
        </svg>
        <span style={{ fontSize: 16, fontWeight: 900, fontFamily: 'Bricolage Grotesque', letterSpacing: '-0.04em', color: 'var(--text-h)', textTransform: 'uppercase' }}>n8n</span>
      </div>
    )
  },
  {
    name: 'OpenAI',
    icon: () => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--text-h)' }}>
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
        </svg>
        <span style={{ fontSize: 16, fontWeight: 900, fontFamily: 'Bricolage Grotesque', letterSpacing: '-0.04em', color: 'var(--text-h)', textTransform: 'uppercase' }}>OpenAI</span>
      </div>
    )
  },
  {
    name: 'Zapier',
    icon: () => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="22" height="22" viewBox="0 0 100 100" fill="currentColor" style={{ color: 'var(--text-h)' }}>
          <circle cx="50" cy="50" r="11" />
          <circle cx="50" cy="16" r="11" />
          <circle cx="50" cy="84" r="11" />
          <circle cx="16" cy="50" r="11" />
          <circle cx="84" cy="50" r="11" />
        </svg>
        <span style={{ fontSize: 16, fontWeight: 900, fontFamily: 'Bricolage Grotesque', letterSpacing: '-0.04em', color: 'var(--text-h)', textTransform: 'uppercase' }}>Zapier</span>
      </div>
    )
  },
  {
    name: 'Claude',
    icon: () => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-h)' }}>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span style={{ fontSize: 16, fontWeight: 900, fontFamily: 'Bricolage Grotesque', letterSpacing: '-0.04em', color: 'var(--text-h)', textTransform: 'uppercase' }}>Claude</span>
      </div>
    )
  },
  {
    name: 'GitHub',
    icon: () => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--text-h)' }}>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
        <span style={{ fontSize: 16, fontWeight: 900, fontFamily: 'Bricolage Grotesque', letterSpacing: '-0.04em', color: 'var(--text-h)', textTransform: 'uppercase' }}>GitHub</span>
      </div>
    )
  },
  {
    name: 'Vercel',
    icon: () => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--text-h)' }}>
          <path d="M24 22.525H0L12 1.475z"/>
        </svg>
        <span style={{ fontSize: 16, fontWeight: 900, fontFamily: 'Bricolage Grotesque', letterSpacing: '-0.04em', color: 'var(--text-h)', textTransform: 'uppercase' }}>Vercel</span>
      </div>
    )
  },
  {
    name: 'Supabase',
    icon: () => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--text-h)' }}>
          <path d="M21.36 11.23L13 2.1c-.8-.87-2.2-.3-2.2.87v4.67c0 .4-.32.73-.72.73H3.64c-.88 0-1.4.98-.92 1.72l8.36 12.83c.8.87 2.2.3 2.2-.87v-4.67c0-.4.32-.73.72-.73h6.44c.88 0 1.4-.98.92-1.72z"/>
        </svg>
        <span style={{ fontSize: 16, fontWeight: 900, fontFamily: 'Bricolage Grotesque', letterSpacing: '-0.04em', color: 'var(--text-h)', textTransform: 'uppercase' }}>Supabase</span>
      </div>
    )
  },
  {
    name: 'Docker',
    icon: () => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--text-h)' }}>
          <path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-2.917 0h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-2.916 0h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H8.15c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-2.916 0h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H5.234c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-2.916 0h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H2.318c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm2.916-2.916h2.119c.102 0 .186-.084.186-.186V5.857c0-.102-.084-.186-.186-.186H5.234c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm2.916 0h2.119c.102 0 .186-.084.186-.186V5.857c0-.102-.084-.186-.186-.186H8.15c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm2.916 0h2.119c.102 0 .186-.084.186-.186V5.857c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm2.917-2.916h2.119c.102 0 .186-.084.186-.186V2.94c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM23.99 12.18c-.424-2.825-2.885-3.415-4.412-3.415-.17 0-.314.008-.433.025v2.136c.118-.008.246-.017.398-.017.975 0 2.254.407 2.458 1.84.093.636-.025 1.543-.72 2.052l-.026.017-.025-.017c-.44-.305-1.127-.729-2.738-.729H2.13v.83c0 4.893 4.145 5.86 6.01 5.86h8.773c5.366 0 7.078-4.527 7.078-8.702z"/>
        </svg>
        <span style={{ fontSize: 16, fontWeight: 900, fontFamily: 'Bricolage Grotesque', letterSpacing: '-0.04em', color: 'var(--text-h)', textTransform: 'uppercase' }}>Docker</span>
      </div>
    )
  }
]

export function StatementSection() {
  const [activeNode, setActiveNode] = useState<keyof typeof GRAPH_NODES>('Optimization')
  const { setBookingModalOpen } = useUIStore()

  return (
    <section
      style={{
        background: '#FFFFFF',
        padding: '120px 0 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
      id="about"
    >
      <div className="container-wide">
        {/* Header Block */}
        <div style={{ marginBottom: 60 }}>
          <p className="text-eyebrow" style={{ marginBottom: 16 }}>02 — About Us</p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 24,
            marginBottom: 20,
          }} className="about-title-row">
            <h2 style={{
              fontFamily: 'Bricolage Grotesque',
              fontSize: 'clamp(28px, 4.5vw, 56px)',
              fontWeight: 800,
              color: 'var(--text-h)',
              letterSpacing: '-0.03em',
              margin: 0,
              lineHeight: 1.1,
            }}>
              Precision <span style={{
                background: 'linear-gradient(135deg, var(--brand) 0%, var(--orange) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>Engineering</span> Architecture
            </h2>

            <button
              onClick={() => setBookingModalOpen(true)}
              className="slide-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                background: '#F1F0EC',
                border: '1px solid #E5E2DA',
                color: 'var(--text-h)',
                padding: '12px 24px',
                borderRadius: 999,
                cursor: 'pointer',
                overflow: 'hidden',
                height: 48,
                position: 'relative',
                transition: 'all 300ms var(--ease-out)',
                fontSize: 14,
                fontWeight: 700,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--text-h)'
                e.currentTarget.style.color = '#FFFFFF'
                const circle = e.currentTarget.querySelector('.slide-btn-circle') as HTMLElement
                if (circle) {
                  circle.style.background = '#FFFFFF'
                  circle.style.color = 'var(--text-h)'
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#F1F0EC'
                e.currentTarget.style.color = 'var(--text-h)'
                const circle = e.currentTarget.querySelector('.slide-btn-circle') as HTMLElement
                if (circle) {
                  circle.style.background = 'var(--text-h)'
                  circle.style.color = '#FFFFFF'
                }
              }}
            >
              <span className="slide-btn-text-wrap" style={{ display: 'flex', flexDirection: 'column', height: 20, overflow: 'hidden' }}>
                <span className="slide-btn-text-item" style={{ display: 'block', height: 20, lineHeight: '20px', transition: 'transform 300ms var(--ease-out)' }}>Become a Client</span>
                <span className="slide-btn-text-item" style={{ display: 'block', height: 20, lineHeight: '20px', transition: 'transform 300ms var(--ease-out)' }}>Become a Client</span>
              </span>
              <div
                className="slide-btn-circle"
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  background: 'var(--text-h)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 300ms var(--ease-out)',
                }}
              >
                <ArrowUpRight size={12} />
              </div>
            </button>
          </div>

          <div style={{ width: '100%', height: 1, background: 'var(--border)', marginBottom: 28 }} />
          
          <div style={{ display: 'flex', gap: 40, flexDirection: 'row', alignItems: 'flex-start' }} className="strategy-header-split">
            <p style={{
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              fontWeight: 600,
              color: 'var(--text-body)',
              lineHeight: 1.5,
              flex: 1.2,
              margin: 0,
              letterSpacing: '-0.01em',
            }}>
              Robust codebase design, transparent delivery checkpoints, and automated business workflows are how we build digital products that scale without operational overhead.
            </p>
            <div style={{ flex: 0.8 }} />
          </div>
        </div>

        {/* Main Grid: Left Stats, Right Node Graph */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: 64,
          alignItems: 'center',
          marginBottom: 80,
        }} className="strategy-main-grid">
          
          {/* LEFT: Asymmetric Stats Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>
              STUDIO BY THE NUMBERS // ENGINEERING IMPACT
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '36px 20px',
            }} className="stats-cards-grid">
              
              {/* Card 1 */}
              <div className="stats-card-premium" style={{
                borderRadius: 24,
                padding: '28px 24px',
                position: 'relative',
                overflow: 'hidden',
                minHeight: 160,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <div>
                  <span style={{ fontSize: 36, fontWeight: 900, color: 'var(--text-h)', fontFamily: 'Bricolage Grotesque', letterSpacing: '-0.02em' }}>85+</span>
                  <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-h)', margin: '6px 0 2px' }}>Platforms Shipped</p>
                  <p style={{ fontSize: 11.5, color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>Web apps, automations & portals</p>
                </div>
                <div style={{ position: 'absolute', bottom: -5, right: -5, width: 70, height: 70, opacity: 0.85 }}>
                  <svg width="70" height="70" viewBox="0 0 100 100" style={{ overflow: 'visible' }}>
                    <defs>
                      <linearGradient id="gyro-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--orange-light)" />
                        <stop offset="100%" stopColor="var(--brand)" />
                      </linearGradient>
                      <linearGradient id="gyro-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--yellow)" />
                        <stop offset="100%" stopColor="var(--orange)" />
                      </linearGradient>
                      <radialGradient id="gyro-sphere-grad" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor="#FFD60A" />
                        <stop offset="60%" stopColor="var(--brand)" />
                        <stop offset="100%" stopColor="#993300" />
                      </radialGradient>
                    </defs>
                    <ellipse cx="50" cy="50" rx="40" ry="12" fill="none" stroke="url(#gyro-grad-1)" strokeWidth="5" transform="rotate(-30 50 50)" style={{ animation: 'rotate-text 6s linear infinite', transformOrigin: 'center' }} />
                    <ellipse cx="50" cy="50" rx="28" ry="8" fill="none" stroke="url(#gyro-grad-2)" strokeWidth="4.5" transform="rotate(45 50 50)" style={{ animation: 'rotate-text 4s linear infinite reverse', transformOrigin: 'center' }} />
                    <circle cx="50" cy="50" r="14" fill="url(#gyro-sphere-grad)" style={{ filter: 'drop-shadow(0 6px 12px rgba(255,92,26,0.35))' }} />
                  </svg>
                </div>
              </div>

              {/* Card 2 */}
              <div className="stats-card-premium" style={{
                borderRadius: 24,
                padding: '28px 24px',
                position: 'relative',
                overflow: 'hidden',
                minHeight: 160,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <div>
                  <span style={{ fontSize: 36, fontWeight: 900, color: 'var(--text-h)', fontFamily: 'Bricolage Grotesque', letterSpacing: '-0.02em' }}>180k+</span>
                  <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-h)', margin: '6px 0 2px' }}>Code Commits</p>
                  <p style={{ fontSize: 11.5, color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>Structured Git deployment logs</p>
                </div>
                <div style={{ position: 'absolute', bottom: -5, right: -5, width: 70, height: 70, opacity: 0.85 }}>
                  <svg width="70" height="70" viewBox="0 0 100 100" style={{ overflow: 'visible' }}>
                    <defs>
                      <linearGradient id="spring-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FF8D5C" />
                        <stop offset="50%" stopColor="var(--brand)" />
                        <stop offset="100%" stopColor="var(--red)" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 50 15 C 20 15, 20 30, 50 30 C 80 30, 80 45, 50 45 C 20 45, 20 60, 50 60 C 80 60, 80 75, 50 75 C 20 75, 20 90, 50 90"
                      fill="none"
                      stroke="url(#spring-grad)"
                      strokeWidth="7"
                      strokeLinecap="round"
                      style={{ animation: 'bounce-spring 2s ease-in-out infinite alternate', transformOrigin: 'bottom center' }}
                    />
                  </svg>
                </div>
              </div>

              {/* Card 3 */}
              <div className="stats-card-premium" style={{
                borderRadius: 24,
                padding: '28px 24px',
                position: 'relative',
                overflow: 'hidden',
                minHeight: 160,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <div>
                  <span style={{ fontSize: 36, fontWeight: 900, color: 'var(--text-h)', fontFamily: 'Bricolage Grotesque', letterSpacing: '-0.02em' }}>99.9%</span>
                  <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-h)', margin: '6px 0 2px' }}>Client Satisfaction</p>
                  <p style={{ fontSize: 11.5, color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>Verified tech project reviews</p>
                </div>
                <div style={{ position: 'absolute', bottom: -5, right: -5, width: 70, height: 70, opacity: 0.85 }}>
                  <svg width="70" height="70" viewBox="0 0 100 100" style={{ overflow: 'visible' }}>
                    <defs>
                      <radialGradient id="compass-plate" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="70%" stopColor="#F1F0EC" />
                        <stop offset="100%" stopColor="#D5D2C8" />
                      </radialGradient>
                      <linearGradient id="needle-north" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF8D5C" />
                        <stop offset="100%" stopColor="var(--brand)" />
                      </linearGradient>
                      <linearGradient id="needle-south" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D5D2C8" />
                        <stop offset="100%" stopColor="#9E9B90" />
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="42" fill="url(#compass-plate)" stroke="var(--border)" strokeWidth="2" style={{ filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.06))' }} />
                    <circle cx="50" cy="50" r="34" fill="none" stroke="rgba(10,10,10,0.04)" strokeWidth="1.5" strokeDasharray="2 3" />
                    <g style={{ animation: 'spin-needle 4s ease-in-out infinite', transformOrigin: '50px 50px' }}>
                      <polygon points="50,16 57,50 50,45" fill="url(#needle-north)" />
                      <polygon points="50,16 43,50 50,45" fill="#FF8D5C" />
                      <polygon points="50,84 57,50 50,55" fill="url(#needle-south)" />
                      <polygon points="50,84 43,50 50,55" fill="#B5B2A8" />
                      <circle cx="50" cy="50" r="4" fill="#FFFFFF" stroke="var(--text-h)" strokeWidth="1.5" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Card 4 */}
              <div className="stats-card-premium" style={{
                borderRadius: 24,
                padding: '28px 24px',
                position: 'relative',
                overflow: 'hidden',
                minHeight: 160,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <div>
                  <span style={{ fontSize: 36, fontWeight: 900, color: 'var(--text-h)', fontFamily: 'Bricolage Grotesque', letterSpacing: '-0.02em' }}>99.99%</span>
                  <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-h)', margin: '6px 0 2px' }}>Server Uptime</p>
                  <p style={{ fontSize: 11.5, color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>AWS & Cloud DevOps benchmark</p>
                </div>
                <div style={{ position: 'absolute', bottom: -5, right: -5, width: 70, height: 70, opacity: 0.85 }}>
                  <svg width="70" height="70" viewBox="0 0 100 100" style={{ overflow: 'visible' }}>
                    <defs>
                      <radialGradient id="tennis-base" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor="#FFF3A8" />
                        <stop offset="60%" stopColor="#FFCC00" />
                        <stop offset="100%" stopColor="#B28F00" />
                      </radialGradient>
                    </defs>
                    <g style={{ animation: 'rotate-text 6s linear infinite', transformOrigin: '50px 50px' }}>
                      <circle cx="50" cy="50" r="40" fill="url(#tennis-base)" style={{ filter: 'drop-shadow(0 8px 16px rgba(178,143,0,0.25))' }} />
                      <path d="M 20,50 Q 50,20 80,50" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
                      <path d="M 20,50 Q 50,80 80,50" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
                    </g>
                  </svg>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Concentric circle node-graph selector */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }} className="strategy-graph-block">
            <div style={{ position: 'relative', width: 320, height: 320 }} className="concentric-graph-container">
              
              <svg width="320" height="320" style={{ overflow: 'visible' }}>
                <defs>
                  <linearGradient id="radar-sweep-grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="rgba(255, 92, 26, 0.12)" />
                    <stop offset="100%" stopColor="rgba(255, 92, 26, 0)" />
                  </linearGradient>
                </defs>

                {/* Radar Sweep Line & Area */}
                <g style={{ transformOrigin: '160px 160px', animation: 'radar-sweep 8s linear infinite' }}>
                  <line x1="160" y1="160" x2="160" y2="20" stroke="rgba(255, 92, 26, 0.25)" strokeWidth="1.5" />
                  <polygon points="160,160 160,20 185,25" fill="url(#radar-sweep-grad)" />
                </g>

                {/* Background circles */}
                <circle cx="160" cy="160" r="140" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="160" cy="160" r="100" fill="none" stroke="var(--border)" strokeWidth="1" />
                <circle cx="160" cy="160" r="60" fill="none" stroke="var(--border)" strokeWidth="1" />
                
                {/* Connectors */}
                <line x1="160" y1="160" x2="280" y2="80" stroke="var(--border)" strokeWidth="1.5" />
                <line x1="160" y1="160" x2="70" y2="230" stroke="var(--border)" strokeWidth="1.5" />
                <line x1="160" y1="160" x2="160" y2="60" stroke="var(--border)" strokeWidth="1.5" />

                {/* Radar Sub-lines */}
                {activeNode === 'Acquisition' && (
                  <>
                    <line x1="160" y1="60" x2="160" y2="15" stroke="var(--yellow)" strokeWidth="1.5" strokeDasharray="2 2" className="animate-pulse" />
                    <line x1="160" y1="60" x2="100" y2="35" stroke="var(--yellow)" strokeWidth="1.5" strokeDasharray="2 2" className="animate-pulse" />
                    <line x1="160" y1="60" x2="220" y2="35" stroke="var(--yellow)" strokeWidth="1.5" strokeDasharray="2 2" className="animate-pulse" />
                  </>
                )}
                {activeNode === 'Optimization' && (
                  <>
                    <line x1="280" y1="80" x2="300" y2="40" stroke="var(--orange)" strokeWidth="1.5" strokeDasharray="2 2" className="animate-pulse" />
                    <line x1="280" y1="80" x2="310" y2="120" stroke="var(--orange)" strokeWidth="1.5" strokeDasharray="2 2" className="animate-pulse" />
                    <line x1="280" y1="80" x2="230" y2="120" stroke="var(--orange)" strokeWidth="1.5" strokeDasharray="2 2" className="animate-pulse" />
                  </>
                )}
                {activeNode === 'Automation' && (
                  <>
                    <line x1="70" y1="230" x2="30" y2="190" stroke="var(--red)" strokeWidth="1.5" strokeDasharray="2 2" className="animate-pulse" />
                    <line x1="70" y1="230" x2="50" y2="270" stroke="var(--red)" strokeWidth="1.5" strokeDasharray="2 2" className="animate-pulse" />
                    <line x1="70" y1="230" x2="130" y2="270" stroke="var(--red)" strokeWidth="1.5" strokeDasharray="2 2" className="animate-pulse" />
                  </>
                )}

                {/* Nodes */}
                <g
                  style={{ cursor: 'pointer' }}
                  onClick={() => setActiveNode('Acquisition')}
                  onMouseEnter={() => setActiveNode('Acquisition')}
                >
                  <circle cx="160" cy="60" r="14" fill={activeNode === 'Acquisition' ? 'var(--yellow)' : '#FFFFFF'} stroke="var(--yellow)" strokeWidth="3" />
                  <circle cx="160" cy="60" r="4" fill={activeNode === 'Acquisition' ? '#FFFFFF' : 'var(--yellow)'} />
                </g>

                <g
                  style={{ cursor: 'pointer' }}
                  onClick={() => setActiveNode('Optimization')}
                  onMouseEnter={() => setActiveNode('Optimization')}
                >
                  <circle cx="280" cy="80" r="14" fill={activeNode === 'Optimization' ? 'var(--orange)' : '#FFFFFF'} stroke="var(--orange)" strokeWidth="3" />
                  <circle cx="280" cy="80" r="4" fill={activeNode === 'Optimization' ? '#FFFFFF' : 'var(--orange)'} />
                </g>

                <g
                  style={{ cursor: 'pointer' }}
                  onClick={() => setActiveNode('Automation')}
                  onMouseEnter={() => setActiveNode('Automation')}
                >
                  <circle cx="70" cy="230" r="14" fill={activeNode === 'Automation' ? 'var(--red)' : '#FFFFFF'} stroke="var(--red)" strokeWidth="3" />
                  <circle cx="70" cy="230" r="4" fill={activeNode === 'Automation' ? '#FFFFFF' : 'var(--red)'} />
                </g>

                <text x="160" y="90" textAnchor="middle" fill="var(--text-h)" fontSize="9.5" fontWeight="800" letterSpacing="0.05em" fontFamily="JetBrains Mono" style={{ pointerEvents: 'none', userSelect: 'none' }}>ENGINEERING</text>
                <text x="240" y="125" textAnchor="middle" fill="var(--text-h)" fontSize="9.5" fontWeight="800" letterSpacing="0.05em" fontFamily="JetBrains Mono" style={{ pointerEvents: 'none', userSelect: 'none' }}>CLOUD OPS</text>
                <text x="110" y="200" textAnchor="middle" fill="var(--text-h)" fontSize="9.5" fontWeight="800" letterSpacing="0.05em" fontFamily="JetBrains Mono" style={{ pointerEvents: 'none', userSelect: 'none' }}>AUTOMATION</text>
              </svg>

              {/* Fanned Out Sub-labels */}
              {GRAPH_NODES[activeNode].subLabels.map((sub, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    position: 'absolute',
                    top: sub.y,
                    left: sub.x,
                    background: '#FFFFFF',
                    border: `1.5px solid ${GRAPH_NODES[activeNode].color}`,
                    color: 'var(--text-h)',
                    fontSize: 9,
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: 999,
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 5,
                    animation: `fade-in-scale 300ms cubic-bezier(0.16, 1, 0.3, 1) both`,
                    animationDelay: `${sub.delay}s`
                  }}
                  className="sub-radar-label"
                >
                  {sub.text}
                </div>
              ))}
            </div>

            {/* Explanatory description card of active node */}
            <div style={{
              width: '100%',
              maxWidth: 360,
              background: 'var(--bg-surface)',
              borderRadius: 16,
              padding: '20px 24px',
              border: `1px solid ${GRAPH_NODES[activeNode].color}`,
              boxShadow: '0 8px 24px rgba(10,10,10,0.02)',
              minHeight: 110,
              transition: 'all 240ms',
            }}>
              <h4 style={{ fontFamily: 'Bricolage Grotesque', fontWeight: 800, fontSize: 16, color: 'var(--text-h)', margin: '0 0 6px', display: 'flex', alignItems: 'center', gap: 8 }}>
                {activeNode === 'Acquisition' && <Cpu size={16} color="var(--brand)" />}
                {activeNode === 'Optimization' && <TrendingUp size={16} color="var(--orange)" />}
                {activeNode === 'Automation' && <Sparkles size={16} color="var(--red)" />}
                {GRAPH_NODES[activeNode].title}
              </h4>
              <p style={{ fontSize: 13, color: 'var(--text-body)', lineHeight: 1.5, margin: 0 }}>
                {GRAPH_NODES[activeNode].desc}
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Full-Screen Client Logos Ticker */}
      <div style={{ width: '100vw', position: 'relative', marginTop: 80, overflow: 'hidden' }} id="ticker">
        <div className="ticker-wrap" style={{ 
          display: 'flex', 
          overflow: 'hidden', 
          width: '100%',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          background: '#FFFFFF',
        }}>
          <div className="ticker-inner animate-marquee" style={{ display: 'flex', gap: 0, alignItems: 'center', width: 'max-content' }}>
            {[...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, idx) => {
              const Icon = brand.icon
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 240,
                    height: 100,
                    borderRight: '1px solid var(--border)',
                    color: 'var(--text-h)',
                    opacity: 0.8,
                    userSelect: 'none',
                    transition: 'opacity 200ms',
                  }}
                  className="ticker-logo-box"
                >
                  <Icon />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        .stats-card-premium {
          background: var(--bg-card);
          border: 1px solid var(--border);
          transition: all 350ms var(--ease-spring);
        }
        .stats-cards-grid > div:nth-child(1) {
          transform: rotate(-1.5deg) translateY(4px);
        }
        .stats-cards-grid > div:nth-child(2) {
          transform: rotate(1.2deg) translateY(-8px);
        }
        .stats-cards-grid > div:nth-child(3) {
          transform: rotate(-1deg) translateY(-3px);
        }
        .stats-cards-grid > div:nth-child(4) {
          transform: rotate(1.8deg) translateY(6px);
        }
        .stats-cards-grid > div:hover {
          background: linear-gradient(135deg, #FFFDF9 0%, #FFF8EC 100%) !important;
          border-color: var(--brand) !important;
          transform: translateY(-8px) scale(1.03) rotate(0deg) !important;
          box-shadow: 0 16px 40px var(--brand-glow-md) !important;
          z-index: 10;
        }
        @keyframes bounce-spring {
          0% { transform: scaleY(0.75); }
          100% { transform: scaleY(1.15); }
        }
        @keyframes spin-needle {
          0% { transform: rotate(0deg); }
          35% { transform: rotate(185deg); }
          50% { transform: rotate(175deg); }
          70% { transform: rotate(190deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes radar-sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .slide-btn:hover .slide-btn-text-item {
          transform: translateY(-20px);
        }
        @keyframes marquee {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes fade-in-scale {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @media (max-width: 900px) {
          .strategy-header-split { flex-direction: column !important; gap: 16px !important; }
          .strategy-main-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .strategy-graph-block { margin-top: 24px; }
        }
        @media (max-width: 480px) {
          .stats-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
