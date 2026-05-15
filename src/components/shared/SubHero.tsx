import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Theme = 'std' | 'koi' | 'ai' | 'dash'

type CTA = {
  label: string
  to?: string
  href?: string
  external?: boolean
  variant?: 'primary' | 'ghost'
}

type Pill = {
  label: string
  color: 'pink' | 'blue' | 'purple' | 'green'
}

type Props = {
  theme: Theme
  eyebrow: ReactNode
  eyebrowColor?: 'pink' | 'blue'
  title: ReactNode
  lede: ReactNode
  maid?: string
  ctas?: CTA[]
  pills?: Pill[]
  side?: ReactNode
  primaryStyle?: 'pink' | 'blue'
}

export function SubHero({
  theme,
  eyebrow,
  eyebrowColor = 'pink',
  title,
  lede,
  maid,
  ctas,
  pills,
  side,
  primaryStyle = 'pink',
}: Props) {
  const primaryGradient =
    primaryStyle === 'blue'
      ? {
          background: 'linear-gradient(135deg, #00AEEC, #0984e3)',
          boxShadow: '0 8px 24px rgba(0,174,236,0.4)',
        }
      : undefined

  return (
    <header className={`sub-hero sub-hero-bg-${theme}`}>
      <div className="sub-hero-inner">
        <div>
          <div className={`eyebrow ${eyebrowColor === 'blue' ? 'blue' : ''}`}>
            <span className="dot" />
            {eyebrow}
          </div>
          <h1>{title}</h1>
          <p className="lede">{lede}</p>
          {maid && <p className="maid">{maid}</p>}

          {ctas && (
            <div className="hero-ctas">
              {ctas.map((c) => {
                const cls = `btn ${c.variant === 'ghost' ? 'btn-ghost' : 'btn-primary'}`
                const style = c.variant === 'ghost' ? undefined : primaryGradient
                if (c.to) {
                  return (
                    <Link key={c.label} to={c.to} className={cls} style={style}>
                      {c.label}
                    </Link>
                  )
                }
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.external ? '_blank' : undefined}
                    rel={c.external ? 'noreferrer' : undefined}
                    className={cls}
                    style={style}
                  >
                    {c.label}
                  </a>
                )
              })}
            </div>
          )}

          {pills && (
            <div className="pillrow">
              {pills.map((p) => (
                <span key={p.label} className={`tagpill ${p.color}`}>
                  {p.label}
                </span>
              ))}
            </div>
          )}
        </div>

        {side && <div>{side}</div>}
      </div>
    </header>
  )
}
