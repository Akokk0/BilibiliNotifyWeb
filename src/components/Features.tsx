export function Features() {
  return (
    <section className="section" id="features">
      <div className="section-inner">
        <div className="section-label">模块化架构</div>
        <h2>六个独立插件，按需组合。</h2>
        <p className="lede">
          每一块功能都是一个独立的 npm 包，只安装你需要的。核心轻量，订阅灵活，渲染可拔插。
        </p>

        <div className="feat-grid">
          <article className="feat f-core w3">
            <div>
              <span className="badge">CORE · 必装</span>
              <h3>
                核心控制台
                <br />
                扫码登录 + 订阅管理
              </h3>
              <p>
                B 站扫码登录，登录凭证本地加密存储。在 Koishi 控制台填写订阅列表，保存即生效，支持{' '}
                <code className="inline-code">bili list</code>、
                <code className="inline-code">bili ll</code> 等指令查询。
              </p>
            </div>
            <div className="pkg">koishi-plugin-bilibili-notify</div>
          </article>

          <article className="feat f-live w3">
            <div>
              <span className="badge">LIVE · WebSocket</span>
              <h3>直播实时监听</h3>
              <p>
                基于 <b>blive-message-listener</b> 的 WebSocket
                长连接，开播毫秒级推送。SC、大航海、点歌弹幕一并捕获，断线自动重连。
              </p>
            </div>
            <div className="pkg">koishi-plugin-bilibili-notify-live</div>
          </article>

          <article className="feat f-dynamic w2">
            <div>
              <span className="badge">DYNAMIC</span>
              <h3>动态轮询</h3>
              <p>Cron 定时抓取，文字、视频、专栏、转发一网打尽。</p>
            </div>
            <div className="pkg">koishi-plugin-bilibili-notify-dynamic</div>
          </article>

          <article className="feat f-image w2">
            <div>
              <span className="badge">IMAGE</span>
              <h3>Puppeteer 渲染</h3>
              <p>服务端渲染成高清图片卡片，字体 emoji 自动回退。</p>
            </div>
            <div className="pkg">koishi-plugin-bilibili-notify-image</div>
          </article>

          <article className="feat f-sub w2">
            <div>
              <span className="badge">ADVANCED</span>
              <h3>精细订阅</h3>
              <p>按 UP、按群、按频道、按消息类型，配置每一个细节。</p>
            </div>
            <div className="pkg">koishi-plugin-bilibili-notify-advanced-subscription</div>
          </article>

          <article className="feat f-ai w6">
            <div className="feat-ai-row">
              <div className="flex-1">
                <span className="badge">AI · BETA ✨</span>
                <h3 className="max-w-[560px]">让大模型替你"看"完整场直播。</h3>
                <p className="max-w-[560px]">
                  接入 OpenAI 兼容接口，自动生成直播总结、弹幕聚合、高光时刻提取。
                  主人回家以后，女仆已经把直播精华帮您打包好了 (*´∀`)~♡
                </p>
              </div>
              <div className="feat-ai-summary">
                <div className="h"># 本场直播总结</div>
                今天主要游玩《黑神话：悟空》，完成
                <br />
                第二回通关，弹幕高光：
                <br />
                "这个boss太帅了"×238
                <br />
                <span className="meta">生成耗时 2.4s · 1,240 tokens</span>
              </div>
            </div>
            <div className="pkg mt-5">koishi-plugin-bilibili-notify-ai</div>
          </article>
        </div>
      </div>
    </section>
  )
}
