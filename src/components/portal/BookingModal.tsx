import { useState } from 'react'
import { X, MessageSquare } from 'lucide-react'
import { useUIStore } from '../../stores/uiStore'

export function BookingModal() {
  const { bookingModalOpen, setBookingModalOpen } = useUIStore()
  const [subject, setSubject] = useState('Project Consultation / Become a Client')
  const [message, setMessage] = useState('')

  if (!bookingModalOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!subject.trim() || !message.trim()) return

    // Compile WhatsApp message text
    const formattedText = `Hello Hermes Studio!\n\n*Subject:* ${subject}\n*Details:* ${message}`
    const url = `https://wa.me/8801322466032?text=${encodeURIComponent(formattedText)}`
    
    // Open in a new tab/window
    window.open(url, '_blank')
    
    // Close modal
    setBookingModalOpen(false)
    setMessage('')
  }

  const handleClose = () => {
    setBookingModalOpen(false)
    setMessage('')
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
    >
      {/* Backdrop */}
      <div
        onClick={handleClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10, 10, 10, 0.4)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      />

      {/* Modal Container */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: 24,
          border: '1px solid var(--border)',
          width: '100%',
          maxWidth: 540,
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          zIndex: 1,
          boxShadow: '0 30px 70px rgba(0,0,0,0.12)',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 300ms var(--ease-spring)',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '24px 32px 16px',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--orange)' }} />
            <h3 style={{ fontFamily: 'Bricolage Grotesque', fontWeight: 800, fontSize: 20, color: 'var(--text-h)', margin: 0 }}>
              Become a Client
            </h3>
          </div>
          <button
            onClick={handleClose}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 4,
              borderRadius: '50%',
              transition: 'background 180ms',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-surface)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <p style={{ fontSize: 14, color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
            Fill in your request below to chat with our engineering team directly on WhatsApp. We will redirect you to start the conversation immediately.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-h)' }}>Subject *</label>
            <input
              type="text"
              required
              value={subject}
              onChange={e => setSubject(e.target.value)}
              placeholder="e.g. Website development or Custom software inquiry"
              style={{
                background: '#FFFFFF',
                borderRadius: 10,
                border: '1px solid var(--border)',
                padding: '11px 14px',
                fontSize: 14,
                outline: 'none',
                fontFamily: 'inherit'
              }}
              onFocus={e => e.target.style.borderColor = 'var(--brand)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-h)' }}>Your Message *</label>
            <textarea
              required
              rows={5}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Tell us about your project requirements, budget, timeline, or current bottlenecks..."
              style={{
                background: '#FFFFFF',
                borderRadius: 10,
                border: '1px solid var(--border)',
                padding: '11px 14px',
                fontSize: 14,
                outline: 'none',
                resize: 'none',
                fontFamily: 'inherit',
                lineHeight: 1.5
              }}
              onFocus={e => e.target.style.borderColor = 'var(--brand)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '12px 20px',
              fontSize: 14,
              fontWeight: 700,
              gap: 8,
              marginTop: 8
            }}
          >
            Chat on WhatsApp <MessageSquare size={15} />
          </button>
        </form>
      </div>
    </div>
  )
}
