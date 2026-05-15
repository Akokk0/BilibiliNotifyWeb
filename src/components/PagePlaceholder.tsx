import { useHead } from '@unhead/react'
import { Link } from 'react-router-dom'

type Props = {
  label: string
  title: string
  lede: string
  documentTitle: string
}

export function PagePlaceholder({ label, title, lede, documentTitle }: Props) {
  useHead({ title: documentTitle })
  return (
    <section className="page-placeholder">
      <div className="label">{label}</div>
      <h1>{title}</h1>
      <p>{lede}</p>
      <Link to="/" className="btn btn-primary">
        回到总览
      </Link>
    </section>
  )
}
