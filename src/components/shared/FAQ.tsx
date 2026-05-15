import type { ReactNode } from 'react'

export type FAQItem = {
  q: string
  a: ReactNode
}

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="faq">
      {items.map((it) => (
        <div key={it.q} className="faq-item">
          <div className="faq-q">{it.q}</div>
          <div className="faq-a">{it.a}</div>
        </div>
      ))}
    </div>
  )
}
