import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Almagro San Miguel - Actor profesional'
export const contentType = 'image/png'
export const size = {
  width: 1200,
  height: 630,
}

export default function TwitterImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        padding: '60px 68px',
        background: 'linear-gradient(135deg, #020617 0%, #000000 55%, #111827 100%)',
        color: 'white',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          border: '1px solid rgba(250, 204, 21, 0.20)',
          borderRadius: 28,
          padding: '44px 48px',
          background: 'rgba(2, 6, 23, 0.68)',
          boxShadow: '0 20px 80px rgba(0, 0, 0, 0.35)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            maxWidth: 780,
          }}
        >
          <span
            style={{
              display: 'flex',
              color: '#fde68a',
              fontSize: 24,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: 2,
            }}
          >
            Actor profesional
          </span>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 1.04,
            }}
          >
            <span style={{ fontSize: 78, fontWeight: 700 }}>Almagro</span>
            <span style={{ fontSize: 78, fontWeight: 700, color: '#facc15' }}>
              San Miguel
            </span>
          </div>

          <p
            style={{
              display: 'flex',
              margin: 0,
              fontSize: 32,
              color: '#cbd5e1',
              lineHeight: 1.28,
            }}
          >
            Portfolio con experiencia en series, cine, teatro y materiales profesionales
            para casting y prensa.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 26,
            color: '#94a3b8',
          }}
        >
          <span>@almagroSM</span>
          <span>almagrosanmiguel.com</span>
        </div>
      </div>
    </div>,
    size
  )
}
