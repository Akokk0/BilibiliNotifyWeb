import { ClockIcon, FormIcon, HomeIcon, ListIcon, PackageIcon, QrIcon, UserIcon } from './icons'

const FEATURES = [
  {
    ic: '⚡',
    icBg: 'linear-gradient(135deg, var(--bn-pink), #e84393)',
    title: '扫码登录',
    desc: '打开 B 站 App 扫一下就好，登录凭证本地加密存储，绝不外泄。',
  },
  {
    ic: '✓',
    icBg: 'linear-gradient(135deg, #00AEEC, #0984e3)',
    title: '表单式订阅配置',
    desc: '在插件配置页填写 UP 主 UID、推送目标和消息类型，保存即生效。',
  },
  {
    ic: '◎',
    icBg: 'linear-gradient(135deg, #a29bfe, #6c5ce7)',
    title: '状态实时显示',
    desc: '登录状态、订阅数量、推送日志，一切尽在侧边栏面板中。',
  },
]

export function Console() {
  return (
    <section id="console">
      <div className="section-inner">
        <div className="console-split">
          <div>
            <div className="section-label">控制台</div>
            <h2>
              在 Koishi 控制台
              <br />
              管理一切。
            </h2>
            <p className="lede">
              扫码登录、订阅配置、状态查看 —— 全部在网页 UI 中完成，不用写一行配置文件。
            </p>

            <div className="console-features">
              {FEATURES.map((f) => (
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
          </div>

          <div className="kc-window">
            <div className="kc-chrome">
              <div className="kc-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="kc-tabs">
                <div className="kc-tab active">
                  <span className="kc-tab-ic bg-[linear-gradient(135deg,#FB7299,#00AEEC)]" />
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
                <div className="kc-navgroup mt-[18px]">Bilibili Notify</div>
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
                    <div className="kc-sign">主人，您已成功登录 B 站啦 (〃´-`〃)♡</div>
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
                  <div className="flex items-baseline justify-between">
                    <div className="kc-form-title">订阅 UP 主</div>
                    <div className="text-[11px] text-bn-text-secondary">已订阅 4 位</div>
                  </div>
                  <div className="kc-form-desc">每一项都可单独开关动态 / 直播推送。</div>
                  <div className="overflow-hidden rounded-lg border border-black/5 bg-white">
                    {[
                      { uid: '1194210119', name: '兔月眠子' },
                      { uid: '194484313', name: 'Asaki' },
                      { uid: '686127', name: '籽岷' },
                      { uid: '1629347259', name: '08' },
                    ].map((s, i, arr) => (
                      <div
                        key={s.uid}
                        className={`flex items-center gap-2.5 px-3 py-2 text-[12px] ${
                          i < arr.length - 1 ? 'border-b border-black/[0.04]' : ''
                        }`}
                      >
                        <span className="text-bn-text-secondary font-mono">UID {s.uid}</span>
                        <span className="text-bn-text-primary font-bold">{s.name}</span>
                        <span className="ml-auto flex gap-1">
                          <span className="rounded bg-[#00AEEC]/12 px-1.5 py-px text-[10px] font-bold text-[#0096cc]">
                            动态
                          </span>
                          <span className="rounded bg-bn-pink/12 px-1.5 py-px text-[10px] font-bold text-bn-pink">
                            直播
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 text-right">
                    <span className="text-[11px] text-bn-pink font-bold">+ 添加订阅</span>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
