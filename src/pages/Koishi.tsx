import { useHead } from '@unhead/react'
import type { ReactNode } from 'react'
import {
  ClockIcon,
  FormIcon,
  HomeIcon,
  ListIcon,
  PackageIcon,
  PaperPlane,
  PulseIcon,
  QrIcon,
  SparkIcon,
  SwapIcon,
  UserIcon,
} from '../components/icons'
import { CAST } from '../components/shared/cast'
import { FAQ, type FAQItem } from '../components/shared/FAQ'
import { NextStrip } from '../components/shared/NextStrip'
import { Step, StepList } from '../components/shared/Step'
import { SubHero } from '../components/shared/SubHero'

type PluginRow = {
  name: string
  desc: string
  gradient: string
  badge?: { label: string; tone: 'pink' | 'mute' }
  icon: ReactNode
}

const PLUGINS: PluginRow[] = [
  {
    name: 'bilibili-notify',
    desc: 'core · 扫码登录 + 订阅管理',
    gradient: 'linear-gradient(135deg, #FB7299, #e84393)',
    badge: { label: '必装', tone: 'pink' },
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <title>core</title>
        <circle cx="8" cy="8" r="6" />
        <circle cx="8" cy="8" r="3" />
        <circle cx="8" cy="8" r="1" fill="white" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'bilibili-notify-live',
    desc: '直播 WS · SC · 大航海',
    gradient: 'linear-gradient(135deg, #ff7675, #d63031)',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <title>live</title>
        <circle cx="8" cy="10.5" r="1.6" fill="white" stroke="none" />
        <path d="M5.2 8a4 4 0 0 1 5.6 0" />
        <path d="M2.8 5.5a8 8 0 0 1 10.4 0" />
      </svg>
    ),
  },
  {
    name: 'bilibili-notify-dynamic',
    desc: '动态轮询 cron',
    gradient: 'linear-gradient(135deg, #a29bfe, #6c5ce7)',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <title>dynamic</title>
        <path d="M1 8h2l2-5 2.5 6 2-4 1.5 3H15" />
      </svg>
    ),
  },
  {
    name: 'bilibili-notify-image',
    desc: 'puppeteer 渲染卡片',
    gradient: 'linear-gradient(135deg, #4ebcec, #b494e5)',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <title>image</title>
        <rect x="1.5" y="3" width="13" height="10" rx="1.5" />
        <circle cx="5" cy="6.5" r="1.2" fill="white" stroke="none" />
        <path d="M1.5 11.5l3-3 2.5 2 2.5-2 4 4" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    name: 'bilibili-notify-advanced-subscription',
    desc: '高级订阅 schema',
    gradient: 'linear-gradient(135deg, #fdcb6e, #e17055)',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <title>advanced subscription</title>
        <path d="M1.5 4.5H14.5" />
        <path d="M1.5 8H14.5" />
        <path d="M1.5 11.5H14.5" />
        <circle cx="11" cy="4.5" r="2" fill="white" stroke="none" />
        <circle cx="5" cy="8" r="2" fill="white" stroke="none" />
        <circle cx="9" cy="11.5" r="2" fill="white" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'bilibili-notify-ai',
    desc: '智能女仆 · 直播总结',
    gradient: 'linear-gradient(135deg, #18191C, #2d3436)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="white" aria-hidden="true">
        <title>ai</title>
        <path d="M8 1.5L9.2 6.3L14 7.5L9.2 8.7L8 13.5L6.8 8.7L2 7.5L6.8 6.3Z" />
        <circle cx="13.2" cy="3.5" r="1.2" opacity="0.85" />
      </svg>
    ),
  },
]

const CONSOLE_FEATURES = [
  {
    ic: <QrIcon />,
    icBg: 'linear-gradient(135deg, #FB7299, #e84393)',
    title: '扫码登录',
    desc: '打开 B 站 App 扫一下就好,登录凭证由核心包 AES 加密本地存。',
  },
  {
    ic: <FormIcon />,
    icBg: 'linear-gradient(135deg, #00AEEC, #0984e3)',
    title: '可视化订阅',
    desc: 'Koishi 标准 Schema 表单:UP 主 UID、推送目标、消息类型,所见即所得。',
  },
  {
    ic: <PulseIcon />,
    icBg: 'linear-gradient(135deg, #a29bfe, #6c5ce7)',
    title: '状态实时显示',
    desc: (
      <>
        登录状态、订阅数量、推送日志,配 <code>@koishijs/plugin-status</code> 看更细。
      </>
    ),
  },
  {
    ic: <SwapIcon />,
    icBg: 'linear-gradient(135deg, #fdcb6e, #e17055)',
    title: '复用 Koishi 适配器',
    desc: 'Discord / QQ / Telegram / Lark / Slack…… Koishi 装了哪个适配,bilibili-notify 就能往哪儿推。',
  },
] satisfies Array<{ ic: ReactNode; icBg: string; title: string; desc: ReactNode }>

const SUBS = [
  { uid: CAST.chenfeng.uid, name: CAST.chenfeng.name, live: false },
  { uid: CAST.yinyue.uid, name: CAST.yinyue.name, live: true },
  { uid: CAST.pixel.uid, name: CAST.pixel.name, live: false },
  { uid: CAST.laomao.uid, name: CAST.laomao.name, live: true },
]

const FAQS: FAQItem[] = [
  {
    q: '必须装齐 6 个包吗?',
    a: (
      <>
        不需要。只想要动态推送:装 <code>core + dynamic</code>;想要直播:再加 <code>live</code>;
        想要漂亮卡片:再加 <code>image</code>;想要 AI 总结:再加 <code>ai</code>。
      </>
    ),
  },
  {
    q: '推送到哪个聊天平台?',
    a: (
      <>
        Koishi 自己的适配器决定。你装了 <code>@koishijs/plugin-adapter-discord</code> 就能推
        Discord; 装了 <code>onebot</code> 就能推 QQ。Bilibili Notify 不关心是哪个平台。
      </>
    ),
  },
  {
    q: '和 Standalone 同时跑会怎样?',
    a: (
      <>
        两端的业务核心是同一套 <code>@bilibili-notify/*</code> 包,但它们各自维护自己的 B 站 cookie。
        同时跑只会浪费 cookie 配额,不会冲突。一般二选一更省心。
      </>
    ),
  },
  {
    q: '订阅 / 推送目标怎么改?',
    a: (
      <>
        直接在 Koishi 控制台 / 插件配置 / bilibili-notify 的 <code>subs</code> 字段改,
        <b>保存即热加载</b>。<code>SubscriptionStore</code> 会发 diff 事件,引擎自己 reconcile, 不用
        restart。
      </>
    ),
  },
  {
    q: '推送没图,只有纯文本?',
    a: (
      <>
        <code>koishi-plugin-bilibili-notify-image</code> 的 peer-dep 是{' '}
        <code>koishi-plugin-puppeteer</code>。Koishi 里先装它(并配好 chromium 路径),image 包就会用{' '}
        <code>ctx.puppeteer</code> 渲染卡片。否则只能拿纯文本。
      </>
    ),
  },
  {
    q: '想从 Koishi 迁移到 Standalone?',
    a: (
      <>
        两端共享同一套业务核心,但状态文件格式不同(Koishi 用 DB / 配置,Standalone 用{' '}
        <code>/data/state/*.json</code>)。先在 Standalone 重扫码 + 重新填一遍订阅就行。 GitHub Issue
        跟踪一个迁移工具,TBD。
      </>
    ),
  },
]

export function Koishi() {
  useHead({ title: 'Koishi 使用 · Bilibili Notify' })

  return (
    <>
      <SubHero
        theme="koi"
        eyebrow="KOISHI · 6 个子插件"
        title={
          <>
            装进现有 <span className="accent-pink">Koishi</span>,
            <br />和 你的<span className="accent-blue"> 机器人</span>合体。
          </>
        }
        lede={
          <>
            6 个独立 npm 包按需组合,复用 Koishi 自己的 Discord / QQ / Telegram 适配器和控制台。
            想接哪个聊天平台都行,毕竟那是 Koishi 的强项。
          </>
        }
        maid="主人,女仆已经在插件市场等您选啦 (｡•̀ᴗ-)✧"
        ctas={[
          { label: '三步安装', href: '#quickstart' },
          {
            label: '还没用 Koishi?',
            href: 'https://koishi.chat/',
            external: true,
            variant: 'ghost',
          },
        ]}
        pills={[
          { label: 'koishi-plugin-*', color: 'pink' },
          { label: '控制台扫码登录', color: 'blue' },
          { label: 'Discord / QQ / Telegram', color: 'purple' },
          { label: 'bili list / ll', color: 'green' },
        ]}
        side={<PluginMarketMock />}
      />

      <section className="docsec" id="quickstart">
        <div className="docsec-inner">
          <div className="section-label">快速开始</div>
          <h2>三步开跑。</h2>
          <p className="lede">
            前提:你已经有一个跑起来的 Koishi 实例。还没有的话,先去{' '}
            <a
              href="https://koishi.chat/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: 'var(--bn-pink)',
                borderBottom: '1px solid currentColor',
                textDecoration: 'none',
              }}
            >
              koishi.chat
            </a>{' '}
            瞅一眼。
          </p>

          <StepList>
            <Step
              num={1}
              title={
                <>
                  插件市场搜 <code>bilibili-notify</code>
                </>
              }
              desc={
                <>
                  装核心包 <code>koishi-plugin-bilibili-notify</code>,再按需勾上 <code>-live</code>{' '}
                  / <code>-dynamic</code> / <code>-image</code> / <code>-ai</code> /{' '}
                  <code>-advanced-subscription</code>。核心轻量,子包随你挑。
                </>
              }
            />
            <Step
              num={2}
              title="控制台「扫码登录」"
              desc={
                <>
                  进入 Koishi 控制台「插件配置 / bilibili-notify / 扫码登录」面板,B 站 App
                  扫一下二维码。 登录凭证被 AES 加密落到 Koishi 数据目录,不外泄。
                </>
              }
            />
            <Step
              num={3}
              title={
                <>
                  配置 <code>subs</code>,保存生效
                </>
              }
              desc={
                <>
                  在插件配置页的 <code>subs</code> 表单填 UID + 推送目标(platform / guildId
                  等),保存即自动加载。 或者把 UP 主推到 Koishi 群里,发 <code>bili list</code>{' '}
                  看看现在订阅了谁。
                </>
              }
            />
          </StepList>

          <CommandHint />
        </div>
      </section>

      <section className="docsec" style={{ background: 'var(--bn-gallery-bg)' }}>
        <div className="docsec-inner">
          <div className="section-label">控制台</div>
          <h2>不用写一行配置文件。</h2>
          <p className="lede">
            扫码登录、订阅管理、推送目标 —— 全部在 Koishi 内置控制台的网页 UI 里点完。
          </p>

          <div className="console-split">
            <div className="console-features">
              {CONSOLE_FEATURES.map((f) => (
                <div key={f.title} className="cf">
                  <div className="ic" style={{ background: f.icBg }}>
                    {f.ic}
                  </div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <ConsoleMock />
          </div>
        </div>
      </section>

      <section className="docsec">
        <div className="docsec-inner">
          <div className="section-label">聊天指令</div>
          <h2>群里发一句,女仆秒回。</h2>
          <p className="lede">
            所有指令都在 Koishi 标准命令系统里,默认 authority ≥ 3(管理类 <code>bn.*</code> 需 ≥ 5)。
            把女仆拉进群当群秘,比开 Dashboard 还快。
          </p>

          <SnsChatMock />
        </div>
      </section>

      <section className="docsec" style={{ background: 'var(--bn-deploy-bg)' }}>
        <div className="docsec-inner">
          <div className="section-label">常见问题</div>
          <h2>FAQ</h2>
          <FAQ items={FAQS} />
        </div>
      </section>

      <section className="docsec">
        <div className="docsec-inner">
          <h2>下一步</h2>
          <NextStrip
            entries={[
              { label: '替代方案', title: '改用 Standalone 看看? →', to: '/standalone' },
              { label: '效果', title: 'AI 女仆都能说出啥 →', to: '/ai' },
            ]}
          />
        </div>
      </section>
    </>
  )
}

function PluginMarketMock() {
  return (
    <div
      style={{
        background: 'var(--bn-bg-card-soft)',
        borderRadius: 18,
        border: '1px solid var(--bn-border-subtle)',
        padding: 22,
        boxShadow: '0 24px 50px rgba(20,30,80,0.12)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 14,
        }}
      >
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--bn-text-primary)' }}>
          Koishi 插件市场
        </div>
        <div
          style={{
            fontSize: 11,
            fontFamily: 'var(--bn-font-mono)',
            color: 'var(--bn-text-secondary)',
          }}
        >
          搜索: <span style={{ color: 'var(--bn-pink)' }}>bilibili-notify</span>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {PLUGINS.map((p, i) => {
          const isCore = i === 0
          return (
            <div
              key={p.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '10px 12px',
                background: isCore ? 'rgba(251,114,153,0.06)' : 'transparent',
                border: `1px solid ${isCore ? 'rgba(251,114,153,0.2)' : 'var(--bn-border-subtle)'}`,
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: p.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {p.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: 'var(--bn-text-primary)',
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: 'var(--bn-text-secondary)',
                    fontFamily: 'var(--bn-font-mono)',
                  }}
                >
                  {p.desc}
                </div>
              </div>
              {p.badge && (
                <div
                  style={{
                    fontSize: 10.5,
                    padding: '3px 8px',
                    borderRadius: 999,
                    background:
                      p.badge.tone === 'pink' ? 'rgba(251,114,153,0.15)' : 'rgba(0,0,0,0.06)',
                    color: p.badge.tone === 'pink' ? 'var(--bn-pink)' : 'var(--bn-text-tertiary)',
                    fontWeight: 700,
                  }}
                >
                  {p.badge.label}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function CommandHint() {
  const commands = ['bili list', 'bili ll', 'bili dyn <uid>', 'bili live <uid>', 'bn restart']
  return (
    <div
      style={{
        marginTop: 22,
        padding: '22px 26px',
        background: 'linear-gradient(135deg, rgba(251,114,153,0.08), rgba(0,174,236,0.06))',
        borderRadius: 16,
        border: '1px dashed rgba(251,114,153,0.30)',
      }}
    >
      <div
        style={{
          fontSize: 13,
          fontWeight: 700,
          color: 'var(--bn-pink)',
          marginBottom: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <SparkIcon />
        常用聊天指令(普通指令需 authority ≥ 3,<code>bn.*</code> 需 ≥ 5)
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {commands.map((c) => (
          <code
            key={c}
            style={{
              fontFamily: 'var(--bn-font-mono)',
              fontSize: 12,
              background: 'var(--bn-bg-card-soft)',
              padding: '6px 12px',
              borderRadius: 6,
              border: '1px solid var(--bn-border-subtle)',
              color: 'var(--bn-text-primary)',
            }}
          >
            {c}
          </code>
        ))}
      </div>
      <div
        style={{
          fontSize: 12,
          color: 'var(--bn-text-tertiary)',
          marginTop: 12,
          lineHeight: 1.6,
        }}
      >
        <code>bili list</code> 查所有订阅状态;<code>bili ll</code> 只看哪些在播;{' '}
        <code>bili dyn</code> 抓单条动态;<code>bn restart</code> 重新加载订阅(管理员)。
      </div>
    </div>
  )
}

function ConsoleMock() {
  return (
    <div className="kc-window">
      <div className="kc-chrome">
        <div className="kc-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="kc-tabs">
          <div className="kc-tab active">
            <span
              className="kc-tab-ic"
              style={{ background: 'linear-gradient(135deg,#FB7299,#00AEEC)' }}
            />
            Koishi 控制台
          </div>
        </div>
        <div className="kc-url">localhost:5140 / bilibili-notify</div>
      </div>
      <div className="kc-app">
        <aside className="kc-sidebar">
          <div className="kc-brand">
            <div className="kc-logo" />
            <span>Koishi</span>
          </div>
          <div className="kc-navgroup">主菜单</div>
          <div className="kc-navitem">
            <HomeIcon />
            欢迎
          </div>
          <div className="kc-navitem">
            <UserIcon />
            联系人
          </div>
          <div className="kc-navitem active">
            <ListIcon />
            插件配置
          </div>
          <div className="kc-navitem">
            <PackageIcon />
            插件市场
          </div>
          <div className="kc-navitem">
            <ClockIcon />
            日志
          </div>
          <div className="kc-navgroup" style={{ marginTop: 18 }}>
            Bilibili Notify
          </div>
          <div className="kc-navitem kc-pink">
            <QrIcon />
            扫码登录
          </div>
          <div className="kc-navitem">
            <FormIcon />
            订阅管理
          </div>
        </aside>
        <main className="kc-main">
          <div className="kc-breadcrumb">
            插件配置 <span>›</span> bilibili-notify <span>›</span> <b>扫码登录</b>
          </div>
          <div className="kc-card">
            <div className="kc-userhero">
              <div className="kc-userhero-bg" />
              <div className="kc-userhero-overlay">
                <div className="kc-ava" />
                <div className="kc-userinfo">
                  <div className="kc-username">晨风UP主</div>
                  <div className="kc-tags">
                    <span className="kc-tag kc-tag-vip">大会员</span>
                    <span className="kc-tag kc-tag-lv">Lv6</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="kc-cardbody">
              <div className="kc-sign">主人,您已成功登录 B 站啦 (〃´-`〃)♡</div>
              <div className="kc-statgrid">
                <div className="kc-stat">
                  <div className="kc-stat-label">订阅 UP</div>
                  <div className="kc-stat-val">
                    23<span>位</span>
                  </div>
                </div>
                <div className="kc-stat">
                  <div className="kc-stat-label">今日推送</div>
                  <div className="kc-stat-val">
                    147<span>条</span>
                  </div>
                </div>
                <div className="kc-stat">
                  <div className="kc-stat-label">运行状态</div>
                  <div className="kc-stat-val kc-stat-ok">
                    <span className="kc-pulse" />
                    运行中
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="kc-formcard">
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
              }}
            >
              <div className="kc-form-title">订阅 UP 主</div>
              <div style={{ fontSize: 11, color: 'var(--bn-text-secondary)' }}>
                已订阅 {SUBS.length} 位
              </div>
            </div>
            <div className="kc-form-desc">每一项都可单独开关动态 / 直播推送。</div>
            <div
              style={{
                overflow: 'hidden',
                borderRadius: 8,
                border: '1px solid var(--bn-border-subtle)',
                background: 'var(--bn-bg-card-soft)',
              }}
            >
              {SUBS.map((s, i, arr) => (
                <div
                  key={s.uid}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '8px 12px',
                    fontSize: 12,
                    borderBottom: i < arr.length - 1 ? '1px solid var(--bn-border-subtle)' : 'none',
                  }}
                >
                  <span
                    style={{
                      color: 'var(--bn-text-secondary)',
                      fontFamily: 'var(--bn-font-mono)',
                    }}
                  >
                    UID {s.uid}
                  </span>
                  <span style={{ color: 'var(--bn-text-primary)', fontWeight: 700 }}>{s.name}</span>
                  <span style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
                    <span
                      style={{
                        borderRadius: 4,
                        background: 'rgba(0,174,236,0.12)',
                        padding: '1px 6px',
                        fontSize: 10,
                        fontWeight: 700,
                        color: '#0096cc',
                      }}
                    >
                      动态
                    </span>
                    <span
                      style={{
                        borderRadius: 4,
                        background: 'rgba(251,114,153,0.12)',
                        padding: '1px 6px',
                        fontSize: 10,
                        fontWeight: 700,
                        color: 'var(--bn-pink)',
                      }}
                    >
                      直播
                    </span>
                  </span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 8, textAlign: 'right' }}>
              <span style={{ fontSize: 11, color: 'var(--bn-pink)', fontWeight: 700 }}>
                + 添加订阅
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function SnsChatMock() {
  return (
    <div className="sns">
      <div className="sns-head">
        <div className="sns-head-ava" />
        <div>
          <div className="sns-head-name">Bilibili Notify Bot</div>
          <div className="sns-head-meta">
            <span className="sns-online" />
            在线 · 私信
          </div>
        </div>
        <div className="sns-head-actions">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="sns-body">
        <div className="sns-day">— 今天 —</div>

        <div className="sns-msg sns-out">
          <div className="sns-bubble sns-bubble-out">bili list</div>
          <div className="sns-ava sns-ava-me" />
        </div>

        <div className="sns-msg sns-in">
          <div className="sns-ava sns-ava-bot" />
          <div className="sns-bubble sns-bubble-in">
            {SUBS.map((s) => (
              <div key={s.uid} className="sns-line">
                <span className="sns-uid">[UID:{s.uid}]</span> 「{s.name}」{' '}
                <span className="sns-tag sns-tag-d">已订阅动态</span>{' '}
                <span className="sns-tag sns-tag-l">已订阅直播</span>
              </div>
            ))}
          </div>
        </div>

        <div className="sns-msg sns-out">
          <div className="sns-bubble sns-bubble-out">bili ll</div>
          <div className="sns-ava sns-ava-me" />
        </div>

        <div className="sns-msg sns-in">
          <div className="sns-ava sns-ava-bot" />
          <div className="sns-bubble sns-bubble-in">
            {SUBS.map((s) => (
              <div key={s.uid} className="sns-line">
                <span className="sns-uid">[UID:{s.uid}]</span> 「{s.name}」{' '}
                {s.live ? (
                  <span className="sns-status sns-on">
                    <span className="sns-on-dot" />
                    正在直播
                  </span>
                ) : (
                  <span className="sns-status sns-off">未开播</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="sns-typing">
          <div className="sns-ava sns-ava-bot" />
          <div className="sns-typing-bubble">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className="sns-input">
        <div className="sns-input-box">输入指令…</div>
        <button type="button" className="sns-send" aria-label="send">
          <PaperPlane />
        </button>
      </div>
    </div>
  )
}
