import { PaperPlane } from './icons'

const STEPS = [
  {
    n: '1',
    title: (
      <>
        在 Koishi 插件市场搜索 <code>bilibili-notify</code>
      </>
    ),
    desc: (
      <>
        安装 <code>koishi-plugin-bilibili-notify</code>{' '}
        核心包，以及需要的子插件（直播、动态、图片渲染等）。
      </>
    ),
  },
  {
    n: '2',
    title: '打开控制台「扫码登录」',
    desc: '用 B 站 App 扫一下二维码，登录凭证本地加密存储。',
  },
  {
    n: '3',
    title: '配置订阅，保存生效',
    desc: (
      <>
        在插件配置页的 <code>subs</code> 填写 UP 主 UID 和推送目标，保存即自动加载。
      </>
    ),
  },
]

const COMMANDS = ['bili list', 'bili ll', 'bili dyn <uid>', 'sys restart']

const SUBSCRIBED = [
  { uid: '1194210119', name: '兔月眠子' },
  { uid: '194484313', name: 'Asaki' },
  { uid: '686127', name: '籽岷' },
  { uid: '1629347259', name: '08' },
]

const STATUS = [
  { uid: '1194210119', name: '兔月眠子', live: false },
  { uid: '194484313', name: 'Asaki', live: true },
  { uid: '686127', name: '籽岷', live: false },
  { uid: '1629347259', name: '08', live: false },
]

export function Quickstart() {
  return (
    <section className="section" id="quickstart">
      <div className="section-inner">
        <div className="section-label">快速开始</div>
        <h2>三步开跑。</h2>
        <p className="lede">
          假设你已经有了一个跑起来的 Koishi 实例。如果还没有，先去{' '}
          <a
            href="https://koishi.chat/"
            target="_blank"
            rel="noreferrer"
            className="text-bn-pink border-bn-pink border-b no-underline"
          >
            koishi.chat
          </a>{' '}
          瞅一眼。安装后，直接在 SNS（Discord / QQ / Telegram）里和机器人对话即可。
        </p>

        <div className="qs-grid">
          <div className="qs-steps">
            {STEPS.map((step) => (
              <div key={step.n} className="qs-step">
                <div className="num">{step.n}</div>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}

            <div className="qs-tip">
              <div className="head">💡 常用指令（需 authority ≥ 3）</div>
              <div className="row">
                {COMMANDS.map((c) => (
                  <code key={c}>{c}</code>
                ))}
              </div>
            </div>
          </div>

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
                  {SUBSCRIBED.map((s) => (
                    <div key={s.uid} className="sns-line">
                      <span className="sns-uid">[UID:{s.uid}]</span>「{s.name}」
                      <span className="sns-tag sns-tag-d">已订阅动态</span>
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
                  {STATUS.map((s) => (
                    <div key={s.uid} className="sns-line">
                      <span className="sns-uid">[UID:{s.uid}]</span>「{s.name}」
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
        </div>
      </div>
    </section>
  )
}
