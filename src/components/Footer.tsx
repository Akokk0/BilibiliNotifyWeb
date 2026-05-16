import { Link } from 'react-router-dom'

type Column = {
  title: string
  items: Array<{ label: string; to: string } | { label: string; href: string; external?: boolean }>
}

const COLUMNS: Column[] = [
  {
    title: '页面',
    items: [
      { label: '总览', to: '/' },
      { label: 'Web Dashboard', to: '/dashboard' },
      { label: 'Standalone 使用', to: '/standalone' },
      { label: 'Koishi 使用', to: '/koishi' },
      { label: 'AI 女仆', to: '/ai' },
    ],
  },
  {
    title: '资源',
    items: [
      { label: 'Koishi 官网', href: 'https://koishi.chat/', external: true },
      { label: 'GitHub', href: 'https://github.com/Akokk0/bilibili-notify', external: true },
    ],
  },
  {
    title: '社区',
    items: [
      {
        label: 'Issues',
        href: 'https://github.com/Akokk0/bilibili-notify/issues',
        external: true,
      },
      { label: '交流群 801338523', href: 'https://qm.qq.com/q/LHYBnlvMmQ', external: true },
    ],
  },
]

export function Footer() {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <div className="foot-brand">
          <div className="wm">
            <img src="/logo-icon.png" alt="" />
            Bilibili Notify
          </div>
          <p>双端 B 站推送方案 —— 部署成独立服务,或作为 Koishi 子插件接入。MIT License。</p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title} className="foot-col">
            <h5>{col.title}</h5>
            <ul>
              {col.items.map((item) => (
                <li key={item.label}>
                  {'to' in item ? (
                    <Link to={item.to}>{item.label}</Link>
                  ) : (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noreferrer' : undefined}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="foot-bottom">
        <div>© 2026 Bilibili Notify · MIT License</div>
        <div>Made with ♡ for all UP 主's 粉丝</div>
      </div>
    </footer>
  )
}
