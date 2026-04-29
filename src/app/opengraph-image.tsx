import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Almagro San Miguel - Actor profesional'
export const contentType = 'image/png'
export const size = {
  width: 1200,
  height: 630,
}

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        background:
          'radial-gradient(circle at top left, rgba(250,204,21,0.20), transparent 38%), linear-gradient(135deg, #020617 0%, #000000 52%, #111827 100%)',
        color: 'white',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 58%, rgba(0,0,0,0.08) 100%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 14,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              background: '#facc15',
              boxShadow: '0 0 28px rgba(250,204,21,0.65)',
            }}
          />
          <span
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: '#fde68a',
            }}
          >
            Portfolio oficial
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 22,
            maxWidth: 820,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 1.02,
            }}
          >
            <span
              style={{
                fontSize: 82,
                fontWeight: 700,
              }}
            >
              Almagro
            </span>
            <span
              style={{
                fontSize: 82,
                fontWeight: 700,
                color: '#facc15',
              }}
            >
              San Miguel
            </span>
          </div>

          <p
            style={{
              display: 'flex',
              margin: 0,
              fontSize: 34,
              lineHeight: 1.25,
              color: '#cbd5e1',
            }}
          >
            Actor profesional de television, cine y teatro.
          </p>

          <div
            style={{
              display: 'flex',
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            {['La Moderna', 'Prime Video', 'TVE', 'Teatro'].map((item) => (
              <span
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 18px',
                  borderRadius: 9999,
                  fontSize: 26,
                  fontWeight: 600,
                  color: '#f8fafc',
                  background: 'rgba(15, 23, 42, 0.78)',
                  border: '1px solid rgba(250, 204, 21, 0.28)',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#94a3b8',
            fontSize: 26,
          }}
        >
          <span>almagrosanmiguel.com</span>
          <span>13+ anos de trayectoria</span>
        </div>
      </div>
    </div>,
    size
  )
}
