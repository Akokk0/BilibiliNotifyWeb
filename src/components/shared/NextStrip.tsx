import { Link } from 'react-router-dom'

export type NextEntry = {
  label: string
  title: string
  to: string
}

export function NextStrip({ entries }: { entries: NextEntry[] }) {
  return (
    <div className="pagestrip">
      {entries.map((e) => (
        <Link key={e.to} to={e.to}>
          <div>
            <div className="lbl">{e.label}</div>
            <div className="tl">{e.title}</div>
          </div>
          <div className="arrow">→</div>
        </Link>
      ))}
    </div>
  )
}
