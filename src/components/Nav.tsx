import { ArrowRightSmall } from './icons'

const LINKS = [
  { href: '#features', label: '功能' },
  { href: '#gallery', label: '推送卡片' },
  { href: '#console', label: '控制台' },
  { href: '#quickstart', label: '快速开始' },
  { href: 'https://github.com/Akokk0/bilibili-notify', label: 'GitHub', external: true },
]

export function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="nav-brand">
        <img src="/logo-icon.png" alt="Bilibili Notify" />
        Bilibili Notify
        <span className="sub">/ for Koishi</span>
      </a>
      <div className="nav-links">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
      <a href="#quickstart" className="nav-cta">
        安装插件
        <ArrowRightSmall stroke="white" />
      </a>
    </nav>
  )
}
