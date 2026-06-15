import { useEffect, useRef } from 'react'
import {
  Code,
  Zap,
  TrendingUp,
  Bot,
  Layers,
  ArrowUpRight,
  Sparkles,
  ArrowRight,
  Server
} from 'lucide-react'
import { useUIStore } from '../../stores/uiStore'
import { gsap } from 'gsap'

// ─── 3D-like Interactive Visual Components for each Capability Card ──────────

function WebPlatformsVisual() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      opacity: 0.9,
    }}>
      <div style={{
        position: 'relative',
        width: 220,
        height: 140,
        transform: 'perspective(600px) rotateY(-16deg) rotateX(12deg)',
        transformStyle: 'preserve-3d',
        transition: 'all 500ms var(--ease-spring)',
      }} className="visual-3d-container">
        {/* Shadow plane */}
        <div style={{
          position: 'absolute',
          bottom: -15,
          left: '10%',
          width: '80%',
          height: 15,
          background: 'rgba(10,10,10,0.05)',
          filter: 'blur(8px)',
          borderRadius: '50%',
          transform: 'translateZ(-10px)',
        }} />

        {/* Back Card (Grid Layout) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 10,
          width: 140,
          height: 95,
          background: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0,0,0,0.05)',
          borderRadius: 12,
          padding: 12,
          boxShadow: '0 8px 24px rgba(0,0,0,0.02)',
          transform: 'translateZ(10px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', gap: 4 }}>
            <div style={{ width: 14, height: 14, borderRadius: '50%', background: 'rgba(10,10,10,0.1)' }} />
            <div style={{ width: 45, height: 6, background: 'rgba(10,10,10,0.06)', borderRadius: 3, marginTop: 4 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 42 }}>
            <div style={{ width: 18, height: 16, background: 'rgba(10,10,10,0.05)', borderRadius: 2 }} />
            <div style={{ width: 18, height: 32, background: 'var(--brand)', borderRadius: 2 }} />
            <div style={{ width: 18, height: 22, background: 'rgba(10,10,10,0.05)', borderRadius: 2 }} />
            <div style={{ width: 18, height: 38, background: 'rgba(10,10,10,0.05)', borderRadius: 2 }} />
          </div>
        </div>

        {/* Front Card (Web Browser Screen) */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          right: 10,
          width: 135,
          height: 105,
          background: '#FFFFFF',
          border: '1px solid rgba(0,0,0,0.05)',
          borderRadius: 12,
          padding: 10,
          boxShadow: '0 16px 36px rgba(0,0,0,0.07)',
          transform: 'translateZ(30px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          transition: 'all 500ms var(--ease-spring)',
        }} className="visual-front-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF5F56' }} />
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#FFBD2E' }} />
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#27C93F' }} />
            <div style={{ width: 60, height: 6, background: 'rgba(10,10,10,0.08)', borderRadius: 3, marginLeft: 4 }} />
          </div>
          <div style={{ flex: 1, background: 'linear-gradient(135deg, #FFF9F2 0%, #FFEFE0 100%)', borderRadius: 6, border: '1px solid rgba(255, 92, 26, 0.06)' }} />
          <div style={{ display: 'flex', gap: 8, fontSize: 8, fontWeight: 800, color: 'rgba(10,10,10,0.4)', fontFamily: 'JetBrains Mono' }}>
            <span style={{ color: 'var(--brand)' }}>99.9% Uptime</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function SearchTrafficVisual() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      overflow: 'hidden',
    }}>
      {/* Wave ripples */}
      <div className="reels-pulse-ring" style={{
        position: 'absolute',
        width: 150,
        height: 150,
        borderRadius: '50%',
        border: '1.5px solid rgba(255,255,255,0.18)',
      }} />
      <div className="reels-pulse-ring" style={{
        position: 'absolute',
        width: 220,
        height: 220,
        borderRadius: '50%',
        border: '1.5px solid rgba(255,255,255,0.08)',
        animationDelay: '1.5s',
      }} />

      {/* Floating phone frame */}
      <div style={{
        position: 'relative',
        width: 100,
        height: 170,
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(8px)',
        border: '1.5px solid rgba(255,255,255,0.22)',
        borderRadius: 18,
        transform: 'perspective(600px) rotateY(16deg) rotateX(10deg) translateZ(10px)',
        boxShadow: '0 20px 45px rgba(0,0,0,0.12), inset 0 1px 2px rgba(255,255,255,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transformStyle: 'preserve-3d',
        transition: 'all 500ms var(--ease-spring)',
      }} className="visual-reels-phone">
        {/* Phone Notch */}
        <div style={{
          position: 'absolute',
          top: 8,
          width: 32,
          height: 5,
          background: 'rgba(255,255,255,0.2)',
          borderRadius: 3,
        }} />

        {/* Glow Chart Icon */}
        <div style={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: '#FFFFFF',
          color: 'var(--brand)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(255, 92, 26, 0.25)',
          transform: 'translateZ(18px)',
          transition: 'all 300ms var(--ease-spring)',
        }} className="reels-play-btn">
          <TrendingUp size={16} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  )
}

function AIAutomationVisual() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
    }}>
      <div style={{
        position: 'relative',
        width: 220,
        height: 150,
        transform: 'perspective(600px) rotateY(-12deg) rotateX(15deg)',
        transformStyle: 'preserve-3d',
        transition: 'all 500ms var(--ease-spring)',
      }} className="visual-ai-container">
        {/* Animated connection lines */}
        <svg style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          overflow: 'visible',
        }}>
          <path d="M 40,75 L 110,40 M 40,75 L 110,110 M 110,40 L 180,75 M 110,110 L 180,75" 
                stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          <path id="flow-path-1" d="M 40,75 L 110,40 L 180,75" stroke="rgba(0, 200, 160, 0.35)" strokeWidth="2" fill="none" />
          <path id="flow-path-2" d="M 40,75 L 110,110 L 180,75" stroke="rgba(255, 92, 26, 0.35)" strokeWidth="2" fill="none" />
        </svg>

        {/* Left Input Node */}
        <div style={{
          position: 'absolute',
          top: 60,
          left: 25,
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
          border: '1.5px solid rgba(255,255,255,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          transform: 'translateZ(10px)',
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFFFFF' }} />
        </div>

        {/* Top Node */}
        <div style={{
          position: 'absolute',
          top: 25,
          left: 95,
          width: 30,
          height: 30,
          borderRadius: '50%',
          background: 'rgba(0, 200, 160, 0.15)',
          border: '1.5px solid #00C896',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 12px rgba(0, 200, 150, 0.25)',
          transform: 'translateZ(15px)',
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00C896' }} />
        </div>

        {/* Bottom Node */}
        <div style={{
          position: 'absolute',
          bottom: 25,
          left: 95,
          width: 30,
          height: 30,
          borderRadius: '50%',
          background: 'rgba(255, 92, 26, 0.15)',
          border: '1.5px solid var(--brand)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 12px rgba(255, 92, 26, 0.25)',
          transform: 'translateZ(15px)',
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--brand)' }} />
        </div>

        {/* Right Output Node (Brain/AI) */}
        <div style={{
          position: 'absolute',
          top: 55,
          right: 20,
          width: 40,
          height: 40,
          borderRadius: 10,
          background: '#FFFFFF',
          color: '#0F172A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
          transform: 'translateZ(25px)',
          transition: 'all 400ms var(--ease-spring)',
        }} className="ai-brain-node">
          <Bot size={18} strokeWidth={2.5} style={{ color: 'var(--brand)' }} />
        </div>
      </div>
    </div>
  )
}

function EmailMarketingVisual() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
    }}>
      <div style={{
        position: 'relative',
        width: 200,
        height: 140,
        transform: 'perspective(600px) rotateX(48deg) rotateZ(-28deg) rotateY(6deg)',
        transformStyle: 'preserve-3d',
      }} className="visual-email-container">
        {/* Shadow plane */}
        <div style={{
          position: 'absolute',
          bottom: -15,
          left: '15%',
          width: '70%',
          height: 18,
          background: 'rgba(0,0,0,0.05)',
          filter: 'blur(10px)',
          borderRadius: '50%',
        }} />

        {/* Envelope back */}
        <div style={{
          position: 'absolute',
          width: 140,
          height: 90,
          background: '#E8E6DF',
          border: '1px solid rgba(0,0,0,0.04)',
          borderRadius: '2px 2px 10px 10px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.01)',
          transformStyle: 'preserve-3d',
        }}>
          {/* Floating message card emerging */}
          <div style={{
            position: 'absolute',
            bottom: 20,
            left: 20,
            width: 100,
            height: 70,
            background: '#FFFFFF',
            border: '1px solid rgba(0,0,0,0.05)',
            borderRadius: 6,
            boxShadow: '0 -8px 20px rgba(0,0,0,0.04)',
            transform: 'translateZ(10px) translateY(-25px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            padding: 8,
            animation: 'float-card-up 4s ease-in-out infinite alternate',
            transition: 'all 500ms var(--ease-spring)',
          }} className="visual-email-letter">
            <div style={{ width: '40%', height: 5, background: 'var(--brand)', borderRadius: 2 }} />
            <div style={{ width: '80%', height: 4, background: 'rgba(0,0,0,0.05)', borderRadius: 2 }} />
            <div style={{ width: '90%', height: 4, background: 'rgba(0,0,0,0.05)', borderRadius: 2 }} />
            <div style={{ width: '60%', height: 4, background: 'rgba(0,0,0,0.05)', borderRadius: 2 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
              <div style={{ width: 14, height: 10, background: 'rgba(0,200,150,0.1)', borderRadius: 2 }} />
              <Sparkles size={8} style={{ color: 'var(--brand)' }} />
            </div>
          </div>
        </div>

        {/* Envelope front fold */}
        <div style={{
          position: 'absolute',
          width: 140,
          height: 90,
          background: '#F0EFEA',
          clipPath: 'polygon(0 0, 70px 50px, 140px 0, 140px 90px, 0 90px)',
          borderRadius: '0 0 10px 10px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.04)',
          transform: 'translateZ(15px)',
        }} />
      </div>
    </div>
  )
}

function DevOpsVisual() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
    }}>
      <div style={{
        position: 'relative',
        width: 200,
        height: 150,
        transform: 'perspective(600px) rotateX(45deg) rotateY(-15deg) rotateZ(10deg)',
        transformStyle: 'preserve-3d',
      }} className="visual-chart-container">
        {/* Isometric Grid Plane */}
        <div style={{
          position: 'absolute',
          width: 160,
          height: 120,
          border: '1px dashed rgba(0,0,0,0.06)',
          background: 'linear-gradient(rgba(0,0,0,0.01) 1px, transparent 1px) 0 0 / 15px 15px, linear-gradient(90deg, rgba(0,0,0,0.01) 1px, transparent 1px) 0 0 / 15px 15px',
          borderRadius: 8,
        }} />

        {/* Bar 1 */}
        <div style={{
          position: 'absolute',
          bottom: 20,
          left: 30,
          width: 24,
          height: 50,
          background: 'rgba(0,0,0,0.04)',
          border: '1px solid rgba(0,0,0,0.05)',
          borderRadius: '4px 4px 0 0',
          transform: 'translateZ(10px)',
          transformStyle: 'preserve-3d',
          transition: 'all 500ms var(--ease-spring)',
        }} className="chart-bar-1">
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgba(0,200,150,0.08), rgba(0,200,150,0.35))',
            borderRadius: '3px 3px 0 0',
          }} />
        </div>

        {/* Bar 2 (Target Highlight) */}
        <div style={{
          position: 'absolute',
          bottom: 20,
          left: 65,
          width: 24,
          height: 85,
          background: 'rgba(255, 92, 26, 0.1)',
          border: '1px solid rgba(255, 92, 26, 0.2)',
          borderRadius: '4px 4px 0 0',
          transform: 'translateZ(15px)',
          transformStyle: 'preserve-3d',
          transition: 'all 500ms var(--ease-spring)',
        }} className="chart-bar-2">
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, var(--brand), var(--brand-light))',
            borderRadius: '3px 3px 0 0',
            boxShadow: '0 5px 15px var(--brand-glow-md)',
          }} />
        </div>

        {/* Bar 3 */}
        <div style={{
          position: 'absolute',
          bottom: 20,
          left: 100,
          width: 24,
          height: 65,
          background: 'rgba(0,0,0,0.04)',
          border: '1px solid rgba(0,0,0,0.05)',
          borderRadius: '4px 4px 0 0',
          transform: 'translateZ(10px)',
          transformStyle: 'preserve-3d',
          transition: 'all 500ms var(--ease-spring)',
        }} className="chart-bar-3">
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgba(10,10,10,0.03), rgba(10,10,10,0.12))',
            borderRadius: '3px 3px 0 0',
          }} />
        </div>

        {/* Floating Speed Label */}
        <div style={{
          position: 'absolute',
          bottom: 110,
          left: 67,
          background: '#0A0A0A',
          color: '#FFFFFF',
          fontSize: 8,
          fontWeight: 800,
          padding: '2px 6px',
          borderRadius: 4,
          fontFamily: 'JetBrains Mono',
          boxShadow: '0 5px 15px rgba(0,0,0,0.12)',
          transform: 'translateZ(25px) rotateX(-10deg)',
          whiteSpace: 'nowrap',
          animation: 'bounce-slow 2s ease-in-out infinite',
        }}>
          +200% SPEED
        </div>
      </div>
    </div>
  )
}

function UIUXClaymorphicVisual() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
    }}>
      <div style={{
        position: 'relative',
        width: 200,
        height: 150,
        transformStyle: 'preserve-3d',
      }} className="visual-claymorphic-container">
        {/* Soft shadow */}
        <div style={{
          position: 'absolute',
          bottom: 12,
          left: '20%',
          width: '60%',
          height: 15,
          background: 'rgba(10,10,10,0.04)',
          filter: 'blur(10px)',
          borderRadius: '50%',
        }} />

        {/* Claymorphic Sphere */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '20%',
          width: 58,
          height: 58,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 35%, #FFA366 0%, #FF5C1A 50%, #B33600 100%)',
          boxShadow: '0 10px 24px rgba(255, 92, 26, 0.22), inset -5px -5px 12px rgba(0,0,0,0.15), inset 5px 5px 8px rgba(255,255,255,0.4)',
          zIndex: 2,
          animation: 'float-sphere 5s ease-in-out infinite alternate',
          transition: 'all 500ms var(--ease-spring)',
        }} className="clay-sphere" />

        {/* Claymorphic Cylinder */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '25%',
          width: 52,
          height: 76,
          borderRadius: 22,
          background: 'linear-gradient(135deg, #7CD2FF 0%, #0088CC 100%)',
          boxShadow: '0 12px 28px rgba(0,136,204,0.18), inset -8px -8px 18px rgba(0,0,0,0.18), inset 5px 5px 8px rgba(255,255,255,0.45)',
          transform: 'rotate(25deg) rotateX(15deg) rotateY(-15deg)',
          zIndex: 1,
          animation: 'float-cylinder 6s ease-in-out infinite alternate-reverse',
          transition: 'all 500ms var(--ease-spring)',
        }} className="clay-cylinder" />

        {/* Small Yellow Cone/Pill */}
        <div style={{
          position: 'absolute',
          bottom: '22%',
          left: '42%',
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #FFE57F 0%, #FFC107 60%, #B78100 100%)',
          boxShadow: '0 8px 18px rgba(255, 193, 7, 0.25), inset -3px -3px 8px rgba(0,0,0,0.2), inset 3px 3px 6px rgba(255,255,255,0.4)',
          zIndex: 3,
          animation: 'float-cone 4s ease-in-out infinite alternate',
          transition: 'all 500ms var(--ease-spring)',
        }} className="clay-cone" />
      </div>
    </div>
  )
}

const SIX_SERVICES = [
  {
    number: '01',
    category: 'CUSTOM WEB DEVELOPMENT',
    title: 'High-Performance Web Platforms',
    Icon: Code,
    desc: 'Fully custom SEO-friendly websites, dashboards, and portals built using Next.js and Astro for maximum speed, security, and conversion rates.',
    tags: ['Astro.js', 'Next.js Platforms', 'React Apps', 'SEO Optimised'],
    bg: '#F5F4F0',
    textColor: '#0A0A0A',
    mutedColor: 'rgba(10, 10, 10, 0.5)',
    arrowBg: '#E6E4DD',
    arrowColor: '#0A0A0A',
    glowColor: 'rgba(10, 10, 10, 0.05)',
    Visual: WebPlatformsVisual
  },
  {
    number: '02',
    category: 'WORKFLOW & AI AUTOMATION',
    title: 'AI Workflows & Operations',
    Icon: Bot,
    desc: 'Custom workflow automations using n8n/Zapier and conversational AI agents designed to save hours of manual operations time and synchronize lead systems.',
    tags: ['n8n Integration', 'Zapier Syncs', 'AI Agents', 'CRM Workflows'],
    bg: 'linear-gradient(135deg, #FF6F3C 0%, #E63E00 100%)',
    textColor: '#FFFFFF',
    mutedColor: 'rgba(255, 255, 255, 0.75)',
    arrowBg: 'rgba(255, 255, 255, 0.15)',
    arrowColor: '#FFFFFF',
    glowColor: 'var(--brand-glow-md)',
    Visual: AIAutomationVisual
  },
  {
    number: '03',
    category: 'CUSTOM SOFTWARE ENGINEERING',
    title: 'Scalable Enterprise Systems',
    Icon: Server,
    desc: 'Custom database applications, REST/GraphQL API systems, and bespoke management systems engineered with clean, scalable, and secure architecture.',
    tags: ['API Development', 'Database Design', 'Node.js Core', 'Supabase Systems'],
    bg: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
    textColor: '#FFFFFF',
    mutedColor: 'rgba(255, 255, 255, 0.65)',
    arrowBg: 'rgba(255, 255, 255, 0.12)',
    arrowColor: '#FFFFFF',
    glowColor: 'rgba(0,0,0,0.3)',
    Visual: WebPlatformsVisual // Shares web dashboard styling
  },
  {
    number: '04',
    category: 'CLOUD DEVOPS & CI/CD',
    title: 'Deployment & Uptime Systems',
    Icon: Zap,
    desc: 'High-performance cloud setup on AWS or Vercel, automated deployment pipelines, and zero-downtime monitoring to ensure server scaling.',
    tags: ['AWS Setup', 'Docker Containers', 'CI/CD Pipelines', '99.99% Uptime'],
    bg: '#FFF5F0',
    textColor: '#0A0A0A',
    mutedColor: 'rgba(10, 10, 10, 0.5)',
    arrowBg: '#EFE2DC',
    arrowColor: '#0A0A0A',
    glowColor: 'rgba(255, 92, 26, 0.05)',
    Visual: DevOpsVisual
  },
  {
    number: '05',
    category: 'GROWTH MARKETING CAMPAIGNS',
    title: 'Digital Performance Marketing',
    Icon: TrendingUp,
    desc: 'Deep funnel tracking, Meta/Google ad campaign management, and user conversion loop optimization to acquire clients predictably.',
    tags: ['Paid Campaigns', 'Google Search Ads', 'Meta Growth', 'CRO Audits'],
    bg: '#EFF1F5',
    textColor: '#0A0A0A',
    mutedColor: 'rgba(10, 10, 10, 0.5)',
    arrowBg: '#E0E2E7',
    arrowColor: '#0A0A0A',
    glowColor: 'rgba(10, 10, 10, 0.03)',
    Visual: EmailMarketingVisual // Shares conversion email/marketing visual
  },
  {
    number: '06',
    category: 'UI/UX & PREMIUM DESIGN SYSTEMS',
    title: 'Premium Product Interface Design',
    Icon: Layers,
    desc: 'Figma mockups, visual brand guidelines, custom claymorphic illustrations, and interactive design systems built to elevate your software product.',
    tags: ['Figma Layouts', 'UX/UI Wireframes', 'Design Systems', 'Claymorphism'],
    bg: '#EFECE6',
    textColor: '#0A0A0A',
    mutedColor: 'rgba(10, 10, 10, 0.5)',
    arrowBg: '#DFDCD5',
    arrowColor: '#0A0A0A',
    glowColor: 'rgba(10, 10, 10, 0.03)',
    Visual: UIUXClaymorphicVisual
  }
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { setBookingModalOpen } = useUIStore()

  useEffect(() => {
    if (!sectionRef.current) return
    const cards = sectionRef.current.querySelectorAll('.service-card-new')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const index = parseInt(el.dataset.index || '0')
            gsap.to(el, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.1,
              ease: 'power2.out',
            })
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1 }
    )

    cards.forEach((card, i) => {
      gsap.set(card, { y: 40, opacity: 0 })
      ;(card as HTMLElement).dataset.index = String(i)
      observer.observe(card)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#FFFFFF',
        padding: '120px 0 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
      id="services"
    >
      <div className="container-wide">
        
        {/* Top Header Block */}
        <div style={{ maxWidth: 960, marginBottom: 72 }}>
          <span style={{
            fontSize: 12,
            fontWeight: 700,
            color: 'var(--brand)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            display: 'block',
            marginBottom: 16,
            fontFamily: 'JetBrains Mono'
          }}>
            01 — Our Capabilities
          </span>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(24px, 3.8vw, 44px)',
            fontWeight: 400,
            lineHeight: 1.15,
            color: 'rgba(10, 10, 10, 0.45)',
            letterSpacing: '-0.025em',
            margin: 0,
          }}>
            We design, engineer, and automate <span style={{ color: 'var(--text-h)', fontWeight: 700 }}>high-performance digital software systems</span> that convert ideas into fast, scalable production realities.
          </p>
        </div>

        {/* 6 Services Cards (3x2 Grid) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px 24px',
        }} className="services-grid">
          {SIX_SERVICES.map((s, i) => {
            const Icon = s.Icon
            const VisualComp = s.Visual
            return (
              <div
                key={i}
                className="service-card-new"
                style={{
                  padding: '40px 32px 32px',
                  border: s.textColor === '#FFFFFF' ? '1px solid rgba(255,255,255,0.15)' : '1px solid var(--border)',
                  borderRadius: 16,
                  background: s.bg,
                  cursor: 'default',
                  transition: 'all 500ms var(--ease-spring)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 600,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'scale(1.025) translateY(-6px)'
                  el.style.borderColor = s.textColor === '#FFFFFF' ? 'rgba(255,255,255,0.45)' : 'var(--brand)'
                  el.style.boxShadow = `0 30px 60px ${s.glowColor}`
                  const arrow = el.querySelector('.service-arrow-btn') as HTMLElement
                  if (arrow) {
                    arrow.style.background = s.textColor === '#FFFFFF' ? '#FFFFFF' : 'var(--brand)'
                    arrow.style.color = s.textColor === '#FFFFFF' ? 'var(--brand)' : '#FFFFFF'
                    arrow.style.transform = 'rotate(45deg)'
                  }
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'scale(1) translateY(0)'
                  el.style.borderColor = s.textColor === '#FFFFFF' ? 'rgba(255,255,255,0.15)' : 'var(--border)'
                  el.style.boxShadow = 'none'
                  const arrow = el.querySelector('.service-arrow-btn') as HTMLElement
                  if (arrow) {
                    arrow.style.background = s.arrowBg
                    arrow.style.color = s.arrowColor
                    arrow.style.transform = 'rotate(0deg)'
                  }
                }}
              >
                {/* Visual Area */}
                <div style={{
                  position: 'absolute',
                  top: '18%',
                  left: 0,
                  width: '100%',
                  height: '45%',
                  pointerEvents: 'none',
                }}>
                  <VisualComp />
                </div>

                {/* Top Content: Number and Category Title */}
                <div style={{ position: 'relative', zIndex: 5, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{
                      fontSize: 12,
                      fontWeight: 800,
                      fontFamily: 'JetBrains Mono',
                      color: s.mutedColor,
                    }}>
                      {s.number}
                    </span>
                    <Icon size={18} strokeWidth={2.2} style={{ color: s.textColor === '#FFFFFF' ? 'rgba(255,255,255,0.6)' : 'var(--brand)', opacity: 0.8 }} />
                  </div>
                  <h3 style={{
                    fontFamily: 'Bricolage Grotesque',
                    fontWeight: 900,
                    fontSize: 24,
                    color: s.textColor,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1,
                    textTransform: 'uppercase',
                    marginTop: 4,
                  }}>
                    {s.category}
                  </h3>
                </div>

                {/* Bottom Content: Title, Description, Tags, and Action */}
                <div style={{ position: 'relative', zIndex: 5, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <div style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: s.textColor,
                      marginBottom: 8,
                      fontFamily: 'Inter',
                    }}>
                      {s.title}
                    </div>
                    <p style={{
                      fontSize: 14,
                      color: s.mutedColor,
                      lineHeight: 1.5,
                      margin: 0,
                      fontWeight: 500,
                    }}>
                      {s.desc}
                    </p>
                  </div>

                  {/* Tags and arrow button row */}
                  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12 }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, maxWidth: '82%' }}>
                      {s.tags.map(tag => (
                        <span key={tag} style={{
                          fontSize: 10,
                          fontWeight: 700,
                          padding: '4px 10px',
                          borderRadius: 999,
                          background: s.textColor === '#FFFFFF' ? 'rgba(255,255,255,0.1)' : '#FFFFFF',
                          color: s.textColor,
                          border: s.textColor === '#FFFFFF' ? '1px solid rgba(255,255,255,0.15)' : '1px solid var(--border)',
                          fontFamily: 'JetBrains Mono',
                          letterSpacing: '-0.02em',
                        }} className="service-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      className="service-arrow-btn"
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: s.arrowBg,
                        color: s.arrowColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 400ms var(--ease-spring)',
                        flexShrink: 0,
                        border: s.textColor === '#FFFFFF' ? '1px solid rgba(255,255,255,0.1)' : 'none',
                      }}
                    >
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* Global CTA button below */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 64 }}>
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
              fontSize: 14,
              fontWeight: 700,
              cursor: 'pointer',
              border: 'none',
              transition: 'all 240ms var(--ease-out)',
              fontFamily: 'Inter',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--brand)'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 16px 40px var(--brand-glow-md)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--text-h)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Schedule a Capabilities Call <ArrowRight size={14} />
          </button>
        </div>

      </div>

      <style>{`
        /* Floating Animations */
        @keyframes float-slow-0 {
          0% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) translateY(-12px) rotate(2deg); }
        }
        @keyframes float-slow-1 {
          0% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) translateY(-15px) rotate(-3deg); }
        }
        @keyframes float-slow-2 {
          0% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) translateY(-10px) rotate(1.5deg); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* 3D Visual hover states */
        .service-card-new:hover .visual-3d-container {
          transform: perspective(600px) rotateY(-8deg) rotateX(16deg) scale(1.04) !important;
        }
        .service-card-new:hover .visual-front-card {
          transform: translateZ(50px) translateY(-4px) !important;
        }
        .service-card-new:hover .visual-reels-phone {
          transform: perspective(600px) rotateY(5deg) rotateX(15deg) translateZ(20px) scale(1.05) !important;
        }
        .service-card-new:hover .reels-play-btn {
          transform: translateZ(30px) scale(1.1) !important;
          box-shadow: 0 10px 30px rgba(255, 92, 26, 0.45) !important;
        }
        .service-card-new:hover .visual-ai-container {
          transform: perspective(600px) rotateY(-2deg) rotateX(20deg) scale(1.05) !important;
        }
        .service-card-new:hover .ai-brain-node {
          transform: translateZ(35px) scale(1.1) !important;
          box-shadow: 0 12px 30px rgba(255,92,26,0.3) !important;
        }
        .service-card-new:hover .visual-email-letter {
          transform: translateZ(25px) translateY(-45px) !important;
        }
        .service-card-new:hover .chart-bar-1 > div {
          height: 70px !important;
          background: linear-gradient(to top, rgba(0,200,150,0.12), rgba(0,200,150,0.6)) !important;
        }
        .service-card-new:hover .chart-bar-2 > div {
          height: 105px !important;
        }
        .service-card-new:hover .chart-bar-3 > div {
          height: 85px !important;
        }
        .service-card-new:hover .clay-sphere {
          transform: translateY(-20px) translateZ(25px) scale(1.1) !important;
        }
        .service-card-new:hover .clay-cylinder {
          transform: rotate(15deg) rotateX(20deg) rotateY(-20deg) translateY(-25px) translateZ(15px) scale(1.08) !important;
        }
        .service-card-new:hover .clay-cone {
          transform: translateY(15px) translateZ(30px) scale(1.12) !important;
        }

        /* Reels and email visuals custom animations */
        .reels-pulse-ring {
          position: absolute;
          animation: pulse-ring-slow 3s linear infinite;
        }
        @keyframes pulse-ring-slow {
          0% { transform: scale(0.6); opacity: 0; }
          50% { opacity: 0.35; }
          100% { transform: scale(1.4); opacity: 0; }
        }

        @keyframes float-sphere {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-12px) rotate(15deg); }
        }
        @keyframes float-cylinder {
          0% { transform: rotate(25deg) rotateX(15deg) rotateY(-15deg) translateY(0px); }
          100% { transform: rotate(25deg) rotateX(15deg) rotateY(-15deg) translateY(-15px); }
        }
        @keyframes float-cone {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(8px) scale(1.05); }
        }
        @keyframes float-card-up {
          0% { transform: translateZ(10px) translateY(-15px); }
          100% { transform: translateZ(10px) translateY(-30px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateZ(25px) rotateX(-10deg) translateY(0px); }
          50% { transform: translateZ(25px) rotateX(-10deg) translateY(-8px); }
        }

        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: 1fr 1fr !important; gap: 20px !important; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
