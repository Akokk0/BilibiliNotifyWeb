import type { ReactNode } from 'react'
import { DynamicCard } from './cards/DynamicCard'
import { GuardCard } from './cards/GuardCard'
import { LiveCard } from './cards/LiveCard'
import { OfflineCard } from './cards/OfflineCard'
import { SuperChatCard } from './cards/SuperChatCard'
import { WordcloudCard } from './cards/WordcloudCard'

type Item = {
  key: string
  caption: string
  meta: string
  node: ReactNode
}

const GalleryThumbStrip = () => (
  <div className="grid grid-cols-3 gap-1">
    <div className="aspect-square rounded bg-[linear-gradient(135deg,#a29bfe,#6c5ce7)]" />
    <div className="aspect-square rounded bg-[linear-gradient(135deg,#74b9ff,#0984e3)]" />
    <div className="aspect-square rounded bg-[linear-gradient(135deg,#a8e6cf,#88d8b0)]" />
  </div>
)

const ITEMS: Item[] = [
  {
    key: 'live',
    caption: '直播开播',
    meta: 'live-start',
    node: (
      <LiveCard
        width={320}
        coverHeight={130}
        liveLabel="● LIVE · 原神直播中"
        popularityLabel="直播中"
      />
    ),
  },
  {
    key: 'dynamic',
    caption: '动态推送',
    meta: 'dynamic',
    node: (
      <DynamicCard width={320}>
        <GalleryThumbStrip />
      </DynamicCard>
    ),
  },
  {
    key: 'sc-3',
    caption: 'Super Chat · Lv3 梦幻紫',
    meta: '¥100',
    node: (
      <SuperChatCard
        width={260}
        amount="¥100"
        duration="5分钟"
        badgeLabel="🌸 樱花粉丝"
        message="主播加油！你的直播真的太好看了，一直支持你！"
        gradStart="#a29bfe"
        gradEnd="#6c5ce7"
      />
    ),
  },
  {
    key: 'sc-6',
    caption: 'Super Chat · Lv6 传说红',
    meta: '¥2000',
    node: (
      <SuperChatCard
        width={260}
        amount="¥2000"
        duration="2小时"
        badgeLabel="👑 传说至尊"
        message="十年老粉，从0到百万，见证你的每一步！"
        gradStart="#ff7675"
        gradEnd="#d63031"
      />
    ),
  },
  {
    key: 'guard',
    caption: '大航海 · 总督',
    meta: 'guard-governor',
    node: (
      <GuardCard
        width={360}
        wrapPadding={12}
        gradStart="#f2a053"
        gradEnd="#ef5f5f"
        topBadge="新晋总督"
        bottomBadge="晨风UP主"
        message={'"新晋总督"加入\n"晨风UP主"大航海舰队！'}
      />
    ),
  },
  {
    key: 'wordcloud',
    caption: '弹幕词云',
    meta: 'live-summary',
    node: <WordcloudCard />,
  },
  {
    key: 'offline',
    caption: '下播通知',
    meta: 'live-end',
    node: <OfflineCard />,
  },
]

export function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="section-inner">
        <div className="section-label">推送卡片</div>
        <h2>一套设计语言，六种场景。</h2>
        <p className="lede">磨砂玻璃 + 渐变背景 + 圆角 12px，像素级还原 B 站观感。横向滑动查看 →</p>

        <div className="gallery-scroll">
          {ITEMS.map((item) => (
            <div key={item.key} className="gallery-item">
              {item.node}
              <div className="caption">
                <b>{item.caption}</b>
                <span className="dot-sep" />
                {item.meta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
