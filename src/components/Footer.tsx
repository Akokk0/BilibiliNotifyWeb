const COLUMNS = [
  {
    title: '插件',
    items: [
      { label: '核心插件', href: '#features' },
      { label: '直播插件', href: '#features' },
      { label: '动态插件', href: '#features' },
      { label: '图片渲染', href: '#features' },
      { label: 'AI 总结', href: '#features' },
    ],
  },
  {
    title: '资源',
    items: [
      { label: 'Koishi 官网', href: 'https://koishi.chat/', external: true },
      { label: 'API 参考', href: 'https://github.com/Akokk0/bilibili-notify', external: true },
      { label: '常见问题', href: 'https://github.com/Akokk0/bilibili-notify', external: true },
      { label: '迁移指南', href: 'https://github.com/Akokk0/bilibili-notify', external: true },
    ],
  },
  {
    title: '社区',
    items: [
      { label: 'GitHub', href: 'https://github.com/Akokk0/bilibili-notify', external: true },
      { label: '交流群 801338523', href: '#' },
      {
        label: 'Issue Tracker',
        href: 'https://github.com/Akokk0/bilibili-notify/issues',
        external: true,
      },
      {
        label: '更新日志',
        href: 'https://github.com/Akokk0/bilibili-notify/releases',
        external: true,
      },
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
          <p>基于 Koishi 的 B 站推送插件生态，模块化、可扩展、美观易用。MIT License。</p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title} className="foot-col">
            <h5>{col.title}</h5>
            <ul>
              {col.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="foot-bottom">
        <div>© 2026 Bilibili Notify · MIT License</div>
        <div>Made with ♡ for all UP 主’s 粉丝</div>
      </div>
    </footer>
  )
}
