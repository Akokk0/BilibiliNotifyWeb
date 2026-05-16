import type { CSSProperties, ReactNode } from 'react'

type Feature = {
  key: string
  badge: string
  title: ReactNode
  desc: ReactNode
  pkg: string
  width: 'w2' | 'w3' | 'w6'
  gradient: string
  className?: string
  variant?: 'ai'
}

const FEATURES: Feature[] = [
  {
    key: 'live',
    badge: 'LIVE · WebSocket',
    title: (
      <>
        直播监听
        <br />
        弹幕收集 · 词云 · AI 总结
      </>
    ),
    desc: (
      <>
        基于 <b>blive-message-listener</b> 的 WebSocket 长连接,
        开播毫秒级推送。SC、大航海实时捕获,下播后自动生成词云与 AI 总结,断线自动重连。
      </>
    ),
    pkg: 'koishi-plugin-bilibili-notify-live',
    width: 'w3',
    gradient: 'linear-gradient(135deg, #ff7675 0%, #d63031 100%)',
  },
  {
    key: 'dynamic',
    badge: 'DYNAMIC · Cron',
    title: (
      <>
        动态轮询
        <br />
        过滤 · 渲染
      </>
    ),
    desc: 'Cron 定时抓取,文字、视频、专栏、转发全类型覆盖。内置去重过滤,命中后直接交给 image 渲染成推送卡片。',
    pkg: 'koishi-plugin-bilibili-notify-dynamic',
    width: 'w3',
    gradient: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)',
  },
  {
    key: 'image',
    badge: 'IMAGE · Vue SSR',
    title: (
      <>
        通知卡片
        <br />
        渲染引擎
      </>
    ),
    desc: 'Vue SSR + UnoCSS 服务端渲染,Chromium 截图输出高清卡片,CJK 字体与 emoji 自动回退。',
    pkg: 'koishi-plugin-bilibili-notify-image',
    width: 'w2',
    gradient: 'linear-gradient(135deg, #4ebcec 0%, #b494e5 100%)',
  },
  {
    key: 'push',
    badge: 'PUSH',
    title: (
      <>
        推送分发
        <br />
        多目标路由
      </>
    ),
    desc: '接收渲染好的卡片,按订阅规则路由到 OneBot、Webhook 等多个下发目标,支持精细的 routing-key 配置。',
    pkg: '@bilibili-notify/push',
    width: 'w2',
    gradient: 'linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)',
  },
  {
    key: 'subscription',
    badge: 'SUBSCRIPTION',
    title: (
      <>
        订阅管理
        <br />
        精细路由规则
      </>
    ),
    desc: '统一管理 UP 主订阅列表与推送目标的映射,按 UID、消息类型、目标平台精细配置,保存即热重载。',
    pkg: '@bilibili-notify/subscription',
    width: 'w2',
    gradient: 'linear-gradient(135deg, #00b894 0%, #00cec9 100%)',
  },
  {
    key: 'ai',
    badge: 'AI · 智能女仆',
    title: '让大模型替你"看"完整场直播。',
    desc: (
      <>
        接入任意 OpenAI 兼容接口（DeepSeek / 智谱 / OneAPI
        皆可）,自动生成直播总结、弹幕聚合、高光时刻提取。主人回家以后,女仆已经把精华帮您打包好了
        (*´∀`)~♡
      </>
    ),
    pkg: 'koishi-plugin-bilibili-notify-ai',
    width: 'w6',
    gradient: 'linear-gradient(135deg, #18191c 0%, #2d3436 100%)',
    className: 'f-ai',
    variant: 'ai',
  },
  {
    key: 'api',
    badge: 'API',
    title: (
      <>
        B 站 API
        <br />
        封装层
      </>
    ),
    desc: 'axios + cookie-jar + cron,统一封装 B 站接口调用,处理登录凭证刷新与请求签名。',
    pkg: '@bilibili-notify/api',
    width: 'w2',
    gradient: 'linear-gradient(135deg, #0984e3 0%, #00aeec 100%)',
  },
  {
    key: 'storage',
    badge: 'STORAGE',
    title: (
      <>
        运行时
        <br />
        状态存储
      </>
    ),
    desc: '统一的持久化层,管理 cookie、订阅状态、推送日志等运行时数据,对上层业务模块透明。',
    pkg: '@bilibili-notify/storage',
    width: 'w2',
    gradient: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
  },
  {
    key: 'internal',
    badge: 'INTERNAL',
    title: (
      <>
        共享类型
        <br />
        与工具
      </>
    ),
    desc: '基于 Zod 定义的共享 schema、类型声明与工具函数 —— 所有上层模块的基础依赖。',
    pkg: '@bilibili-notify/internal',
    width: 'w2',
    gradient: 'linear-gradient(135deg, #636e72 0%, #2d3436 100%)',
  },
]

export function Features() {
  return (
    <section className="section" id="features">
      <div className="section-inner">
        <div className="section-label">业务模块</div>
        <h2>九个核心模块,双端共用。</h2>
        <p className="lede">
          对外的 Koishi 插件以 <code className="inline-pkg">koishi-plugin-bilibili-notify*</code>{' '}
          发布,内部能力包以 <code className="inline-pkg">@bilibili-notify/*</code> 发布 ——
          同一套代码,既驱动 Standalone 后端,也驱动 Koishi 插件,两条部署路径。
        </p>

        <div className="feat-grid">
          {FEATURES.map((f) => (
            <FeatureCard key={f.key} feature={f} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature: f }: { feature: Feature }) {
  const style: CSSProperties = { background: f.gradient }
  const className = ['feat', f.width, f.className].filter(Boolean).join(' ')

  if (f.variant === 'ai') {
    return (
      <article className={className} style={style}>
        <div className="feat-ai-row">
          <div className="flex-1">
            <span className="badge">{f.badge}</span>
            <h3 className="max-w-[560px]">{f.title}</h3>
            <p className="max-w-[560px]">{f.desc}</p>
          </div>
          <div className="feat-ai-summary">
            <div className="h"># 本场直播总结</div>
            今天主要游玩《黑神话:悟空》,完成
            <br />
            第二回通关,弹幕高光:
            <br />
            "这个boss太帅了"×238
            <br />
            <span className="meta">生成耗时 2.4s · 1,240 tokens</span>
          </div>
        </div>
        <div className="pkg mt-5">{f.pkg}</div>
      </article>
    )
  }

  return (
    <article className={className} style={style}>
      <div>
        <span className="badge">{f.badge}</span>
        <h3>{f.title}</h3>
        <p>{f.desc}</p>
      </div>
      <div className="pkg">{f.pkg}</div>
    </article>
  )
}
