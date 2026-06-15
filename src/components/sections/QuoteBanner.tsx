const MARQUEE_WORDS = ['CODE', 'SCALE', 'API', 'CLOUD', 'DEV', 'DATABASE', 'GIT', 'UPTIME', 'VERCEL', 'DOCKER', 'AUTOMATE', 'AI']
const DUPLICATED_WORDS_LEFT = [...MARQUEE_WORDS, ...MARQUEE_WORDS]
const DUPLICATED_WORDS_RIGHT = [...MARQUEE_WORDS.reverse(), ...MARQUEE_WORDS]

export function QuoteBanner() {
  return (
    <section
      style={{
        background: '#FFFFFF',
        padding: '120px 0',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background card slider track scrolling infinitely */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(-3deg)',
          width: '130%',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          opacity: 0.05,
          pointerEvents: 'none',
          zIndex: 0,
        }}
        className="quote-bg-slider"
      >
        {/* Row 1 - scrolling left */}
        <div style={{ display: 'flex', gap: 20, width: 'max-content', animation: 'quote-marquee-left 45s linear infinite' }}>
          {DUPLICATED_WORDS_LEFT.map((word, i) => (
            <div
              key={`left-${i}`}
              style={{
                width: 150,
                height: 84,
                borderRadius: 16,
                border: '2px solid var(--text-h)',
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: 18,
                fontFamily: 'Bricolage Grotesque',
                color: 'var(--text-h)',
                letterSpacing: '-0.02em',
              }}
            >
              {word}
            </div>
          ))}
        </div>
        {/* Row 2 - scrolling right */}
        <div style={{ display: 'flex', gap: 20, width: 'max-content', animation: 'quote-marquee-right 45s linear infinite' }}>
          {DUPLICATED_WORDS_RIGHT.map((word, i) => (
            <div
              key={`right-${i}`}
              style={{
                width: 150,
                height: 84,
                borderRadius: 16,
                border: '2px solid var(--text-h)',
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: 18,
                fontFamily: 'Bricolage Grotesque',
                color: 'var(--text-h)',
                letterSpacing: '-0.02em',
              }}
            >
              {word}
            </div>
          ))}
        </div>
      </div>

      <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
        {/* Capsule Pill Banner */}
        <div
          style={{
            background: '#F4F3EF',
            borderRadius: '130px',
            padding: '60px 48px',
            border: '1px solid #E5E2DA',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(10,10,10,0.02)',
          }}
          className="quote-capsule"
        >
          <div className="noise-overlay" style={{ opacity: 0.04 }} />

          <h3
            style={{
              fontFamily: 'Bricolage Grotesque',
              fontSize: 'clamp(22px, 3.8vw, 44px)',
              fontWeight: 800,
              lineHeight: 1.35,
              color: '#1E293B',
              letterSpacing: '-0.03em',
              margin: 0,
              maxWidth: 950,
              position: 'relative',
              zIndex: 1,
              display: 'inline-flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              rowGap: 16,
              columnGap: 12,
            }}
          >
            <span>Numbers don&apos;t lie</span>
            
            {/* Embedded Spline Chart Badge */}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#FFFFFF',
                border: '1.5px solid var(--border)',
                borderRadius: 16,
                padding: '4px 10px',
                height: 36,
                verticalAlign: 'middle',
                boxShadow: '0 4px 12px rgba(10,10,10,0.03)',
                transform: 'rotate(-2deg)',
                transition: 'all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
              }}
              className="spline-chart-badge"
              onMouseEnter={e => e.currentTarget.style.transform = 'rotate(2deg) scale(1.08)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'rotate(-2deg)'}
            >
              <svg width="38" height="18" viewBox="0 0 38 18" fill="none" style={{ overflow: 'visible' }}>
                <path
                  d="M 2 14 Q 8 3, 14 11 T 26 5 T 36 2"
                  fill="none"
                  stroke="var(--brand)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="36" cy="2" r="3.5" fill="#FFFFFF" stroke="var(--brand)" strokeWidth="2.5">
                  <animate attributeName="r" values="3.5;5;3.5" dur="1.5s" repeatCount="indefinite" />
                </circle>
              </svg>
            </span>

            <span>so we use software Science</span>

            {/* Embedded Node Network Badge */}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#FFFFFF',
                border: '1.5px solid var(--border)',
                borderRadius: 16,
                padding: '4px 10px',
                height: 36,
                verticalAlign: 'middle',
                boxShadow: '0 4px 12px rgba(10,10,10,0.03)',
                transform: 'rotate(3deg)',
                transition: 'all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
              }}
              className="node-network-badge"
              onMouseEnter={e => e.currentTarget.style.transform = 'rotate(-3deg) scale(1.08)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'rotate(3deg)'}
            >
              <svg width="40" height="18" viewBox="0 0 40 18" fill="none" style={{ overflow: 'visible' }}>
                <line x1="8" y1="9" x2="20" y2="4" stroke="var(--text-muted)" strokeWidth="1.2" strokeOpacity="0.4" />
                <line x1="8" y1="9" x2="20" y2="14" stroke="var(--text-muted)" strokeWidth="1.2" strokeOpacity="0.4" />
                <line x1="20" y1="4" x2="32" y2="9" stroke="var(--text-muted)" strokeWidth="1.2" strokeOpacity="0.4" />
                <line x1="20" y1="14" x2="32" y2="9" stroke="var(--text-muted)" strokeWidth="1.2" strokeOpacity="0.4" />
                
                <circle cx="8" cy="9" r="3" fill="#00C896">
                  <animate attributeName="r" values="3;4;3" dur="1.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="20" cy="4" r="3" fill="var(--brand)">
                  <animate attributeName="r" values="3;4;3" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
                </circle>
                <circle cx="20" cy="14" r="3" fill="var(--brand)">
                  <animate attributeName="r" values="3;4;3" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
                </circle>
                <circle cx="32" cy="9" r="4" fill="#FFCC00">
                  <animate attributeName="r" values="4;5;4" dur="2s" begin="0.9s" repeatCount="indefinite" />
                </circle>
              </svg>
            </span>

            <span>to engineer</span>
            <span className="gradient-text-brand-warm" style={{ fontWeight: 900 }}>calculated growth</span>
          </h3>
        </div>
      </div>

      <style>{`
        @keyframes quote-marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes quote-marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @media (max-width: 768px) {
          .quote-capsule {
            border-radius: 28px !important;
            padding: 40px 24px !important;
          }
        }
      `}</style>
    </section>
  )
}
