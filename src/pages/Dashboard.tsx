import { useHead } from '@unhead/react'
import type { ReactNode } from 'react'
import { SparkIcon } from '../components/icons'
import { Ava } from '../components/shared/Ava'
import { C, Codeblock, S, Y } from '../components/shared/Codeblock'
import { CAST, type CastMember } from '../components/shared/cast'
import { NextStrip } from '../components/shared/NextStrip'
import { SubHero } from '../components/shared/SubHero'

type Feat = { variant?: string; icon: ReactNode; h4: string; p: string }

const FEATS: Feat[] = [
  {
    variant: 'std',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>概览</title>
        <rect x="2.5" y="2.5" width="6.5" height="6.5" rx="1.2" />
        <rect x="11" y="2.5" width="6.5" height="6.5" rx="1.2" />
        <rect x="2.5" y="11" width="6.5" height="6.5" rx="1.2" />
        <rect x="11" y="11" width="6.5" height="6.5" rx="1.2" />
      </svg>
    ),
    h4: '概览 Dashboard',
    p: '登录状态 · 在播 UP · 今日推送 · 粉丝数变化 · 异常告警,一屏看完。',
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>订阅 UP 主</title>
        <circle cx="8" cy="7" r="3.2" />
        <path d="M2.5 17.5c0-3 2.5-5.2 5.5-5.2s5.5 2.2 5.5 5.2" />
        <line x1="14.5" y1="4.5" x2="18" y2="4.5" />
        <line x1="16.25" y1="2.75" x2="16.25" y2="6.25" />
      </svg>
    ),
    h4: '订阅 UP 主',
    p: '添加 UID、切换直播 / 动态开关、为不同消息类型挑推送目标。',
  },
  {
    variant: 'std',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>推送目标</title>
        <path d="M17.5 2.5L9 10" />
        <path d="M17.5 2.5l-5.5 15-3-7-7-3z" />
      </svg>
    ),
    h4: '推送目标',
    p: 'OneBot v11 / Webhook / Web 通知三种平台适配,新建即测试。',
  },
  {
    variant: 'purple',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>推送历史</title>
        <path d="M3.5 5.5A7.5 7.5 0 1 1 3 10.5" />
        <path d="M3 3v3.5h3.5" />
        <path d="M10 6v5l3 2" />
      </svg>
    ),
    h4: '推送历史',
    p: '按天 jsonl 归档,每条带 UP 主头像 / 用户名快照,retentionDays 自动清理。',
  },
  {
    variant: 'purple',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>高级规则</title>
        <path d="M2.5 4h15l-5.5 6.5v6L8 14.5v-4z" />
      </svg>
    ),
    h4: '高级规则',
    p: '按消息类型 / 关键词 / 时段做更精细的路由 transformer。',
  },
  {
    variant: 'gold',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>卡片渲染</title>
        <rect x="2.5" y="3.5" width="15" height="13" rx="2" />
        <circle cx="7" cy="8" r="1.5" />
        <path d="M3 15l4.5-4.5L11 14l3-3 3 3" />
      </svg>
    ),
    h4: '卡片渲染 · 样式',
    p: '用 puppeteer-core 现场预览推送卡片,调字体回退、调色。',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <title>智能女仆</title>
        <path d="M10 1.5l1.6 4.4 4.4 1.6-4.4 1.6L10 13.5l-1.6-4.4L4 7.5l4.4-1.6z" />
        <path opacity="0.65" d="M15.5 11.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" />
      </svg>
    ),
    h4: '智能女仆',
    p: 'API Key · baseURL · model · 人格 · 预设。配置完直接生成总结测一下。',
  },
  {
    variant: 'std',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>系统</title>
        <circle cx="10" cy="10" r="2.6" />
        <path d="M10 1.5v2.5M10 16v2.5M18.5 10H16M4 10H1.5M16.36 3.64l-1.77 1.77M5.41 14.59l-1.77 1.77M16.36 16.36l-1.77-1.77M5.41 5.41L3.64 3.64" />
      </svg>
    ),
    h4: '系统',
    p: '日志等级 / 模块 override · 健康检查 · 后端心跳。',
  },
]

type Act = { when: string; m: CastMember; kind: '开播' | '下播' | '动态'; detail: string }

// 「开播」事件的 UP 就是「正在直播」面板那 3 位(战术老猫 / 像素老张 / 银月喵),
// 与「● 3 人在播」「正在直播 3/6」口径一致;其余是下播 / 动态历史事件。
const ACTS: Act[] = [
  { when: '1分钟前', m: CAST.laomao, kind: '开播', detail: '开始直播:今晚冲个段位,顺便陪你们摸鱼' },
  {
    when: '8分钟前',
    m: CAST.chenfeng,
    kind: '动态',
    detail: '发布新动态:这周更新计划排好了,周三见',
  },
  { when: '15分钟前', m: CAST.yinyue, kind: '开播', detail: '开始直播:睡前杂谈,来听点碎碎念~' },
  { when: '42分钟前', m: CAST.moyu, kind: '下播', detail: '结束直播,本场 1小时22分23秒' },
  { when: '56分钟前', m: CAST.pixel, kind: '开播', detail: '开始直播:新版本生电主城开工!' },
  { when: '2小时前', m: CAST.shanhai, kind: '下播', detail: '结束直播,本场 48分1秒' },
]

export function Dashboard() {
  useHead({ title: 'Web Dashboard · Bilibili Notify' })

  return (
    <>
      <SubHero
        theme="dash"
        eyebrowColor="blue"
        eyebrow="STANDALONE · WEB DASHBOARD"
        primaryStyle="blue"
        title={
          <>
            一个 <span className="accent-blue">SPA</span>,
            <br />
            统管<span className="accent-pink"> B 站推送</span>的一切。
          </>
        }
        lede={
          <>
            Hono 后端 + React 18 + Tailwind 4 + tanstack-query + zustand 自建的现代后台。
            扫码登录、订阅 UP 主、推送目标、历史回放、AI 人格、卡片样式 ——
            全在一个浏览器标签里搞定。
          </>
        }
        maid="主人,控制台都给您铺好啦 (◕‿◕)"
        ctas={[
          { label: '看部署方法', to: '/standalone' },
          { label: '看 AI 女仆效果', to: '/ai', variant: 'ghost' },
        ]}
        pills={[
          { label: 'React 18 + Vite', color: 'blue' },
          { label: 'Tailwind 4 @theme', color: 'purple' },
          { label: 'tanstack-query', color: 'green' },
          { label: 'WebSocket Live', color: 'pink' },
        ]}
        side={
          <div className="hero-prop">
            <div className="bn-dash">
              <div className="bn-dash-head">
                <div className="bn-dash-head-l">
                  <div className="bn-dash-head-logo" />
                  <div>
                    <div className="bn-dash-head-title">
                      女仆值班室 · Bilibili Notify 综合管理中心
                    </div>
                    <div className="bn-dash-head-sub">
                      当前账号 <b>Bilibili-Notify</b> 已登录
                    </div>
                  </div>
                </div>
                <div className="bn-dash-head-pill">
                  <span className="d" />
                  推送服务运行中
                </div>
              </div>

              <div className="bn-dash-nav">
                <span className="on">概览</span>
                <span>
                  订阅 UP 主<span className="ct">6</span>
                </span>
                <span>
                  推送目标<span className="ct">1</span>
                </span>
                <span>推送历史</span>
                <span>高级规则</span>
                <span>卡片渲染·样式</span>
                <span>智能女仆</span>
                <span>系统</span>
              </div>

              <div className="bn-dash-grid">
                <div className="bn-dash-card acc-pink">
                  <div className="lbl pink">● 正在直播</div>
                  <div className="v">
                    3<small>/6</small>
                  </div>
                </div>
                <div className="bn-dash-card acc-blue">
                  <div className="lbl blue">已启用订阅</div>
                  <div className="v">
                    6<small>/6</small>
                  </div>
                </div>
                <div className="bn-dash-card">
                  <div className="lbl">今日推送</div>
                  <div className="v">
                    7<small>次</small>
                  </div>
                </div>
                <div className="bn-dash-card acc-red">
                  <div className="lbl red">推送失败</div>
                  <div className="v">
                    1<small>次</small>
                  </div>
                </div>
              </div>

              <div className="bn-dash-2col">
                <div className="bn-dash-panel">
                  <div className="bn-dash-panel-title">
                    <div>
                      正在直播
                      <span className="sub">实时刷新</span>
                    </div>
                    <span className="live-cnt">● 3 人在播</span>
                  </div>
                  <div className="bn-dash-uprow">
                    <Ava m={CAST.laomao} className="ava" />
                    <div className="nm">
                      <div className="n">
                        {CAST.laomao.name}
                        <span className="area">{CAST.laomao.area}</span>
                      </div>
                      <div className="t">今晚冲个段位,顺便陪你们摸鱼</div>
                    </div>
                    <div className="pop">◉ 1.4万</div>
                  </div>
                  <div className="bn-dash-uprow">
                    <Ava m={CAST.pixel} className="ava" />
                    <div className="nm">
                      <div className="n">
                        {CAST.pixel.name}
                        <span className="area">{CAST.pixel.area}</span>
                      </div>
                      <div className="t">新版本生电主城开工!</div>
                    </div>
                    <div className="pop">◉ 6.8万</div>
                  </div>
                  <div className="bn-dash-uprow">
                    <Ava m={CAST.yinyue} className="ava" />
                    <div className="nm">
                      <div className="n">
                        {CAST.yinyue.name}
                        <span className="area">{CAST.yinyue.area}</span>
                      </div>
                      <div className="t">睡前杂谈,来听点碎碎念~</div>
                    </div>
                    <div className="pop">◉ 2125</div>
                  </div>
                </div>

                <div className="bn-dash-panel">
                  <div className="bn-dash-panel-title">
                    粉丝数变化
                    <span className="right">起点 · 24h · 7d</span>
                  </div>
                  <div className="bn-dash-fanstable">
                    <div className="h l">UP主</div>
                    <div className="h">起点</div>
                    <div className="h">24h</div>
                    <div className="h">7d</div>
                    <div className="u">
                      <Ava m={CAST.pixel} className="lava" />
                      <span className="n">{CAST.pixel.name}</span>
                    </div>
                    <div className="d up">+12,840</div>
                    <div className="d up">+2,160</div>
                    <div className="d up">+9,470</div>
                    <div className="u">
                      <Ava m={CAST.laomao} className="lava" />
                      <span className="n">{CAST.laomao.name}</span>
                    </div>
                    <div className="d up">+9,510</div>
                    <div className="d up">+1,740</div>
                    <div className="d up">+6,920</div>
                    <div className="u">
                      <Ava m={CAST.yinyue} className="lava" />
                      <span className="n">{CAST.yinyue.name}</span>
                    </div>
                    <div className="d up">+2,070</div>
                    <div className="d up">+318</div>
                    <div className="d up">+1,160</div>
                    <div className="u">
                      <Ava m={CAST.moyu} className="lava" />
                      <span className="n">{CAST.moyu.name}</span>
                    </div>
                    <div className="d down">−210</div>
                    <div className="d down">−12</div>
                    <div className="d down">−47</div>
                  </div>
                </div>
              </div>

              <div className="bn-dash-ai">
                <div className="orb">
                  <SparkIcon />
                </div>
                <div>
                  <b>AI 直播洞察 · {CAST.laomao.name}</b>{' '}
                  正在直播,建议在结束后推送总结到游戏交流群一
                </div>
                <span className="more">查看完整总结 →</span>
              </div>
            </div>
            <div className="dash-hero-badge">/api</div>
          </div>
        }
      />

      {/* ── 8 页导览 ─────────────────────────────────────────── */}
      <section className="docsec">
        <div className="docsec-inner">
          <div className="section-label">导航</div>
          <h2>8 个页面,覆盖运营全流程。</h2>
          <p className="lede">
            所有路由都是 React Router 的本地 SPA,切换不重载页面;后台一条 WebSocket (
            <code className="inline-code">/ws</code>)持续推 4 个频道
            <code className="inline-code">auth</code> /{' '}
            <code className="inline-code">push-events</code> /{' '}
            <code className="inline-code">log</code> / <code className="inline-code">state</code>
            ,每个页面的列表实时刷新。
          </p>

          <div className="iconfeats">
            {FEATS.map((f) => (
              <div key={f.h4} className={`iconfeat ${f.variant ?? ''}`}>
                <div className="ic">{f.icon}</div>
                <h4>{f.h4}</h4>
                <p>{f.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 实时性 ───────────────────────────────────────────── */}
      <section className="docsec" style={{ background: 'var(--bn-features-bg)' }}>
        <div className="docsec-inner">
          <div className="ai-howgrid">
            <div>
              <div className="section-label">实时性</div>
              <h2>
                开播一秒,
                <br />
                女仆 UI 就<span className="accent-pink">动</span>了。
              </h2>
              <p className="lede">
                不用刷新、不用轮询。后端 <code className="inline-code">push-events</code>{' '}
                频道一来事件, 列表里那一行立刻跳出来;粉丝数涨一个,数字就往上走。整个 Dashboard
                就像一面在替你盯着的屏幕。
              </p>
              <div className="pillrow">
                <span className="tagpill pink">开播 · 下播</span>
                <span className="tagpill green">粉丝 ± 计数</span>
                <span className="tagpill blue">动态推送</span>
                <span className="tagpill purple">Super Chat / 大航海</span>
              </div>
            </div>

            <div className="actfeed">
              <div className="actfeed-head">
                <div>
                  <div className="ttl">最近推送活动</div>
                  <div className="sub">时间轴视图</div>
                </div>
                <span className="all">查看全部</span>
              </div>
              <div className="actfeed-body">
                {ACTS.map((a) => (
                  <div key={a.when} className="actrow">
                    <div className="when">{a.when}</div>
                    <div className="dot" />
                    <Ava m={a.m} className="av" />
                    <div className="msg">
                      <span className="kind">{a.kind}</span>
                      <b>{a.m.name}</b>
                      <span>
                        {' '}
                        · {a.detail}
                        {a.kind === '开播' ? ` · live.bilibili.com/${a.m.room}` : ''}
                      </span>
                    </div>
                    <div className="deliver">
                      <span className="to">→ BN测试群</span>
                      <span className="ok">已送达</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 粉丝时序追踪 ─────────────────────────────────────── */}
      <section className="docsec">
        <div className="docsec-inner">
          <div className="section-label">粉丝数据时序追踪</div>
          <h2>
            每个订阅 UP 的粉丝走向
            <br />
            都被悄悄记下。
          </h2>
          <p className="lede">
            从订阅那一刻起到现在、过去 24 小时、过去 7 天 —— 三段时间窗的<b>增减</b>
            同时看。涨了多少、掉了多少,一眼了然。
          </p>

          <div className="fans-list">
            <div className="fans-list-head">
              <div>
                <h3>粉丝数变化</h3>
                <div className="subt">
                  <span>自订阅起点</span>
                  <span className="dot-sep" />
                  <span>近 24h</span>
                  <span className="dot-sep" />
                  <span>近 7d</span>
                </div>
              </div>
              <span className="pill-count">6 位订阅</span>
            </div>

            {[
              { m: CAST.pixel, s: ['+12,840', 'up'], h24: ['+2,160', 'up'], d7: ['+9,470', 'up'] },
              { m: CAST.laomao, s: ['+9,510', 'up'], h24: ['+1,740', 'up'], d7: ['+6,920', 'up'] },
              { m: CAST.shanhai, s: ['+3,180', 'up'], h24: ['+205', 'up'], d7: ['+1,540', 'up'] },
              { m: CAST.yinyue, s: ['+2,070', 'up'], h24: ['+318', 'up'], d7: ['+1,160', 'up'] },
              { m: CAST.chenfeng, s: ['+540', 'up'], h24: ['+18', 'up'], d7: ['+96', 'up'] },
              { m: CAST.moyu, s: ['−210', 'down'], h24: ['−12', 'down'], d7: ['−47', 'down'] },
            ].map((r) => (
              <div key={r.m.id} className="fans-list-row">
                <Ava m={r.m} className="ava" />
                <div className="who">
                  <div className="nm">{r.m.name}</div>
                  <div className="fc">
                    <b>{r.m.fans}</b> 粉丝
                  </div>
                </div>
                <div className="col">
                  <div className={`val ${r.s[1]}`}>{r.s[0]}</div>
                  <div className="lbl">起点</div>
                </div>
                <div className="col">
                  <div className={`val ${r.h24[1]}`}>{r.h24[0]}</div>
                  <div className="lbl">24h</div>
                </div>
                <div className="col">
                  <div className={`val ${r.d7[1]}`}>{r.d7[0]}</div>
                  <div className="lbl">7d</div>
                </div>
              </div>
            ))}
          </div>

          <p className="platform-note">
            数据落在 <code>/data/fans/&lt;uid&gt;.jsonl</code>,append-only 时序文件,
            <b>永不丢失</b>。
          </p>
        </div>
      </section>

      {/* ── 推送目标适配 ─────────────────────────────────────── */}
      <section className="docsec" style={{ background: 'var(--bn-gallery-bg)' }}>
        <div className="docsec-inner">
          <div className="section-label">推送目标适配</div>
          <h2>三种平台适配,开箱即用。</h2>
          <p className="lede">不依赖 Koishi,独立后端自己实现的 PushAdapter 工厂。</p>

          <div className="platforms">
            <div className="platform-card">
              <div className="pname">
                <span className="dot" style={{ background: '#00b894' }} />
                OneBot v11
              </div>
              <div className="pdesc">
                最常见的 QQ 路径,搭配 NapCat / Lagrange / go-cqhttp 都行。baseUrl + accessToken
                两个字段配完测一下,目标群 / 私聊都支持。
              </div>
              <div className="pmeta">scope: group | private · NapCat 推荐</div>
            </div>
            <div className="platform-card">
              <div className="pname">
                <span className="dot" style={{ background: '#0096cc' }} />
                Webhook
              </div>
              <div className="pdesc">
                通用 HTTP POST,把推送内容 JSON 送到任意 endpoint。Discord webhook / 飞书 / 钉钉 /
                自建 chat —— 拼一下 payload 转发都成立。
              </div>
              <div className="pmeta">method: POST · headers: 自定义</div>
            </div>
            <div className="platform-card">
              <div className="pname">
                <span className="dot" style={{ background: '#FB7299' }} />
                Web Dashboard
              </div>
              <div className="pdesc">
                最省事的目标 —— 直接在 Dashboard 顶部弹个吐司、历史里看一遍。适合自己一个人用,
                不想配任何外部平台时直接开。
              </div>
              <div className="pmeta">scope: self · 浏览器内</div>
            </div>
          </div>

          <p className="platform-note">
            还有第 4 种 <code>koishi-bot</code> —— 仅 Koishi 端走 Koishi 自己的 bot 实例,
            独立后端不注册它。
          </p>
        </div>
      </section>

      {/* ── 本地数据 ─────────────────────────────────────────── */}
      <section className="docsec">
        <div className="docsec-inner">
          <div className="section-label">本地数据</div>
          <h2>
            所有状态都在 <code className="inline-code">/data</code> 里。
          </h2>
          <p className="lede">
            原子写入(tmpfile + rename),秘钥独立目录,历史按天归档。把{' '}
            <code className="inline-code">/data</code> 备份就万事大吉。
          </p>

          <Codeblock title="/data — Standalone 数据卷布局">
            <C>/data</C>
            {'\n├── '}
            <Y>secrets/</Y>
            {'\n│   ├── '}
            <S>master.key</S>
            {'       '}
            <C># AES-256 主密钥(自动生成)</C>
            {'\n│   └── '}
            <S>cookies.json</S>
            {'     '}
            <C># 保存的 B 站登录 cookie</C>
            {'\n├── '}
            <Y>state/</Y>
            {'\n│   ├── '}
            <S>globals.json</S>
            {'     '}
            <C># GlobalConfig — 全局开关</C>
            {'\n│   ├── '}
            <S>subscriptions.json</S> <C># Subscription[] — 订阅清单</C>
            {'\n│   ├── '}
            <S>targets.json</S>
            {'     '}
            <C># PushTarget[] — 推送目标</C>
            {'\n│   └── '}
            <S>adapters.json</S>
            {'    '}
            <C># 平台适配器实例</C>
            {'\n├── '}
            <Y>fans/</Y>
            {'\n│   ├── '}
            <S>10028603.jsonl</S> <C># 像素老张 粉丝时序</C>
            {'\n│   ├── '}
            <S>10028601.jsonl</S>
            {'     '}
            <C># 晨风UP主 粉丝时序</C>
            {'\n│   └── '}
            <S>...</S>
            {'\n└── '}
            <Y>history/</Y>
            {'\n    ├── '}
            <S>2026-05-09.jsonl</S> <C># 当日推送日志</C>
            {'\n    ├── '}
            <S>2026-05-10.jsonl</S>
            {'\n    └── '}
            <Y>img/</Y>
            {'             '}
            <C># 渲染过的卡片图(带 GC)</C>
          </Codeblock>
        </div>
      </section>

      {/* ── 下一步 ───────────────────────────────────────────── */}
      <section className="docsec" style={{ background: 'var(--bn-deploy-bg)' }}>
        <div className="docsec-inner">
          <h2>下一步</h2>
          <NextStrip
            entries={[
              { label: '部署', title: '看 Standalone 怎么跑起来 →', to: '/standalone' },
              { label: '效果', title: 'AI 女仆会说出什么样的话 →', to: '/ai' },
            ]}
          />
        </div>
      </section>
    </>
  )
}
