import type { CSSProperties } from 'react'
import { DynamicCard } from './cards/DynamicCard'
import { GuardCard } from './cards/GuardCard'
import { LiveCard } from './cards/LiveCard'
import { SuperChatCard } from './cards/SuperChatCard'
import { ArrowRight, GitHub } from './icons'

type FloatStyle = CSSProperties & { '--r': string }

const STAT_CARDS = [
  { n: '6', l: '模块化插件包' },
  { n: '4+', l: '推送卡片类型' },
  { n: '24/7', l: '不间断监听' },
]

function makeFloat(
  rotate: string,
  delay: string,
  pos: Pick<CSSProperties, 'top' | 'left' | 'right' | 'bottom'>,
  width: number,
): FloatStyle {
  return {
    ...pos,
    width,
    '--r': `rotate(${rotate})`,
    transform: `rotate(${rotate})`,
    animationDelay: delay,
  }
}

export function Hero() {
  const liveStyle = makeFloat('-3deg', '-1s', { top: 20, left: 0 }, 300)
  const scStyle = makeFloat('5deg', '-3s', { top: 30, right: 10 }, 240)
  const dynStyle = makeFloat('4deg', '-5s', { bottom: 40, left: 40 }, 280)
  const guardStyle = makeFloat('-4deg', '-2s', { bottom: 80, right: 30 }, 240)

  return (
    <header className="hero">
      <div className="hero-copy">
        <div className="hero-eyebrow">
          <span className="dot" />
          基于 Koishi 的 B 站推送插件
        </div>
        <h1>
          UP 主一<span className="accent-pink">开播</span>，
          <br />
          机器人马上<span className="wavy accent-blue">叮～</span>
        </h1>
        <p className="hero-sub">
          直播、动态、Super Chat、大航海 —— 全部变成精美的推送卡片， 在 Discord、QQ、Telegram
          里实时送达，不再错过喜爱的UP主的消息。
        </p>
        <p className="hero-maid">主人，让女仆来帮您盯梢吧 (๑•̀ㅂ•́)و✧</p>

        <div className="hero-ctas">
          <a href="#quickstart" className="btn btn-primary">
            立即安装
            <ArrowRight stroke="white" />
          </a>
          <a
            href="https://github.com/Akokk0/bilibili-notify"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            <GitHub />
            查看源码
          </a>
        </div>

        <div className="hero-stats">
          {STAT_CARDS.map((s) => (
            <div key={s.l} className="hero-stat">
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-stage" id="heroStage">
        <div className="float-card" style={liveStyle}>
          <LiveCard
            width={300}
            coverHeight={120}
            liveLabel="● LIVE · 1080p"
            popularityLabel="直播中"
          />
        </div>

        <div className="float-card" style={scStyle}>
          <SuperChatCard
            width={240}
            wrapPadding={15}
            variant="compact"
            amount="¥1000"
            duration="1小时"
            badgeLabel="💎 钻石会员"
            message="生日快乐！永远支持你！"
            gradStart="#fdcb6e"
            gradEnd="#e17055"
          />
        </div>

        <div className="float-card" style={dynStyle}>
          <DynamicCard
            width={280}
            variant="simple"
            upName="Minecraft官方"
            timestamp="刚刚 · 2026-04-21"
            topic="#沙盒游戏"
            content="今天挖了一整天的钻石！终于凑齐了一整套装备 (●‘◡‘●)"
          />
        </div>

        <div className="float-card" style={guardStyle}>
          <GuardCard
            width={240}
            wrapPadding={10}
            variant="compact"
            gradStart="#4ebcec"
            gradEnd="#b494e5"
            topBadge="新晋舰长"
            bottomBadge="星海之光"
            message={'"星海之光"加入\n"晨风UP主"大航海舰队！'}
            textColor="#4ebcec"
          />
        </div>
      </div>

      <svg
        className="absolute top-[15%] left-[45%] z-[1] size-20 opacity-40"
        viewBox="0 0 80 80"
        aria-hidden="true"
      >
        <title>decorative-1</title>
        <circle cx="40" cy="40" r="4" fill="#FB7299" />
      </svg>
      <svg
        className="absolute bottom-[20%] left-1/2 z-[1] size-[120px] opacity-50 [animation:float_9s_ease-in-out_infinite]"
        viewBox="0 0 120 120"
        aria-hidden="true"
      >
        <title>decorative-2</title>
        <path
          d="M60 20 L70 50 L100 60 L70 70 L60 100 L50 70 L20 60 L50 50 Z"
          fill="#00AEEC"
          opacity="0.3"
        />
      </svg>
    </header>
  )
}
