import { Link } from 'react-router-dom'

function DockerIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <title>standalone</title>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <title>koishi</title>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function ArrowIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <title>arrow</title>
      <path
        d="M2 7h9m0 0L7 3.5M11 7 7 10.5"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Deploy() {
  return (
    <section className="section" id="deploy">
      <div className="section-inner">
        <div className="section-label">部署方式</div>
        <h2>选一条路,五分钟起服务。</h2>
        <p className="lede">两套方案共用同一套推送内核和卡片渲染引擎,按你的使用场景选一个就好。</p>

        <div className="deploy-grid">
          <Link to="/standalone" className="deploy-card blue">
            <div className="ic">
              <DockerIcon />
            </div>
            <div className="eyebrow">Standalone · Docker First</div>
            <div className="title">
              一条 docker run
              <br />
              跑起来
            </div>
            <div className="desc">
              预构建镜像内置 Hono 后端 + React Dashboard + Chromium,不依赖 Koishi,一个容器搞定。
            </div>
            <div className="cta">
              查看部署文档
              <ArrowIcon color="#00aeec" />
            </div>
          </Link>

          <Link to="/koishi" className="deploy-card pink">
            <div className="ic">
              <ChatIcon />
            </div>
            <div className="eyebrow">Koishi Plugin</div>
            <div className="title">
              已有 Koishi?
              <br />
              装个插件就行
            </div>
            <div className="desc">
              在 Koishi 插件市场搜索安装,控制台扫码登录,天然支持 Discord、QQ、Telegram 多平台下发。
            </div>
            <div className="cta">
              查看安装指南
              <ArrowIcon color="#fb7299" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
