import type { ReactNode } from 'react'

type Props = {
  num: ReactNode
  title: ReactNode
  desc: ReactNode
  variant?: 'std'
  extras?: ReactNode
}

export function Step({ num, title, desc, variant, extras }: Props) {
  return (
    <div className={`step ${variant ?? ''}`.trim()}>
      <div className="stepnum">{num}</div>
      <div>
        <h4>{title}</h4>
        <div className="stepdesc">{desc}</div>
        {extras && <div className="extras">{extras}</div>}
      </div>
    </div>
  )
}

export function StepList({ children }: { children: ReactNode }) {
  return <div className="steplist">{children}</div>
}
