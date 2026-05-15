import { Link, NavLink } from 'react-router-dom'
import { ArrowRightSmall } from './icons'

const PAGE_LINKS = [
  { to: '/', label: '总览', end: true },
  { to: '/dashboard', label: 'Web Dashboard' },
  { to: '/standalone', label: 'Standalone 使用' },
  { to: '/koishi', label: 'Koishi 使用' },
  { to: '/ai', label: 'AI 女仆' },
]

export function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-brand">
        <img src="/logo-icon.png" alt="Bilibili Notify" />
        Bilibili Notify
      </Link>
      <div className="nav-links">
        {PAGE_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => (isActive ? 'is-active' : undefined)}
          >
            {link.label}
          </NavLink>
        ))}
        <a href="https://github.com/Akokk0/bilibili-notify" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
      <Link to="/#deploy" className="nav-cta">
        选择部署方式
        <ArrowRightSmall stroke="white" />
      </Link>
    </nav>
  )
}
