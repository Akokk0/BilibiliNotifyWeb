import { useHead } from '@unhead/react'
import { Link } from 'react-router-dom'
import { C, Codeblock, K, N, P, S, V, Y } from '../components/shared/Codeblock'
import { FAQ, type FAQItem } from '../components/shared/FAQ'
import { NextStrip } from '../components/shared/NextStrip'
import { Step, StepList } from '../components/shared/Step'
import { SubHero } from '../components/shared/SubHero'

const ENV_VARS = [
  {
    k: 'BN_HOST',
    desc: <>服务监听地址</>,
    def: '0.0.0.0',
  },
  {
    k: 'BN_PORT',
    desc: <>HTTP 端口(同时承载 WS 升级)</>,
    def: '8787',
  },
  {
    k: 'BN_DATA_DIR',
    desc: (
      <>
        运行时状态目录,<b>声明为 Docker volume</b>,必须挂出来
      </>
    ),
    def: '/data',
  },
  {
    k: 'BN_CHROME_PATH',
    desc: <>puppeteer-core 用的浏览器二进制路径;未配置时卡片推送自动退化为文字</>,
    def: '/usr/bin/chromium',
  },
  {
    k: 'BN_WEB_DIST',
    desc: <>React Dashboard 静态文件目录</>,
    def: '/app/web-dist',
  },
  {
    k: 'BN_LOG_LEVEL',
    desc: <>日志等级 fatal / error / warn / info / debug / trace / silent</>,
    def: 'info',
  },
  {
    k: 'BN_DASHBOARD_USER',
    desc: (
      <>
        Dashboard basic-auth 用户名;未设 + 非 loopback host 会 <b>fail-closed 拒绝启动</b>
      </>
    ),
    def: '—',
  },
  {
    k: 'BN_DASHBOARD_PASS',
    desc: <>Dashboard basic-auth 密码</>,
    def: '—',
  },
  {
    k: 'BN_COOKIE_KEY',
    desc: (
      <>
        B 站 cookie 加密密钥;不设的话首次启动自动生成到 <code>/data/secrets/master.key</code>
      </>
    ),
    def: '自动生成',
  },
  {
    k: 'BN_CONFIG',
    desc: <>指向另一个 yaml/json 配置文件</>,
    def: '—',
  },
  {
    k: 'BN_ALLOW_NO_AUTH',
    desc: (
      <>
        强制允许未配 auth 启动(自担风险,反代层已经有别的鉴权时用);设为 <code>1</code> 生效
      </>
    ),
    def: '—',
  },
]

const FAQS: FAQItem[] = [
  {
    q: '必须有公网 IP / 域名吗?',
    a: (
      <>
        不需要。Dashboard 只是本机 8787,OneBot 走容器内部网络。要远程访问再套层 Caddy / nginx 反代 +
        HTTPS 即可,basic-auth 是 Standalone 自带的。
      </>
    ),
  },
  {
    q: 'B 站 cookie 安全吗?',
    a: (
      <>
        登录 cookie 由 <code>BN_COOKIE_KEY</code>(AES-256)加密落地到 <code>/data/state</code>。
        秘钥首次启动自动生成在 <code>/data/secrets/master.key</code>,把 <code>/data</code> 备份就好,
        <b>不要</b>把秘钥单独传到任何地方。
      </>
    ),
  },
  {
    q: '推送卡片为什么没图?',
    a: (
      <>
        两种情况。一是完全没设 <code>BN_CHROME_PATH</code> —— 服务启动有
        warning,卡片自动退化为文字推送。 二是设了但路径不对 / 字体回退失败。镜像里{' '}
        <code>BN_CHROME_PATH=/usr/bin/chromium</code> 已经预装; 自部署的话确认它存在 + 装 CJK
        字体(noto-cjk、wqy-zenhei 之类)。
      </>
    ),
  },
  {
    q: '能同时跑 Koishi 版本吗?',
    a: (
      <>
        能。两端的业务核心是同一套 <code>@bilibili-notify/*</code>,但它们各自维护自己的状态(cookie /
        订阅清单);同时跑只是浪费 B 站 cookie 配额,不会冲突。一般二选一就行。
      </>
    ),
  },
  {
    q: '怎么备份 / 迁移?',
    a: (
      <>
        停容器 → 打包 <code>/data</code> 整个目录 → 在新机器解压 → 跑同样的 docker run(注意{' '}
        <code>BN_COOKIE_KEY</code> 不变)。完事。
      </>
    ),
  },
  {
    q: '改 yaml 要重启吗?',
    a: (
      <>
        bootstrap 阶段的配置(端口、dataDir、cookieKey)改完要重启容器。运行时配置(订阅、推送目标、AI
        设置)走 Dashboard 改,<code>config-changed</code> 事件触发引擎热重载,不用重启。
      </>
    ),
  },
]

export function Standalone() {
  useHead({ title: 'Standalone 使用 · Bilibili Notify' })

  return (
    <>
      <SubHero
        theme="std"
        eyebrowColor="blue"
        eyebrow="STANDALONE · DOCKER FIRST"
        title={
          <>
            一条 <span className="accent-blue">docker run</span>,
            <br />把<span className="accent-pink"> 推送服务</span>跑起来。
          </>
        }
        lede={
          <>
            预构建镜像里塞好了 Hono 后端 + React Dashboard + apt-installed Chromium —— 不用
            nginx,不用 Koishi,一个容器一卷 <code className="inline-pkg">/data</code>,开箱即用。
          </>
        }
        maid="主人,环境变量我都写好默认值啦 (｡•̀ᴗ-)✧"
        primaryStyle="blue"
        ctas={[
          { label: '三步跑起来', href: '#quickstart' },
          { label: '先看看 Dashboard', to: '/dashboard', variant: 'ghost' },
        ]}
        pills={[
          { label: 'Docker · GHCR', color: 'blue' },
          { label: 'Hono · Node 20', color: 'purple' },
          { label: 'puppeteer-core', color: 'green' },
          { label: 'OneBot · Webhook', color: 'pink' },
        ]}
        side={
          <Codeblock title="~ — bash">
            <C># 拉镜像 + 一条 docker run 起服务</C>
            {'\n'}
            <P>$</P> <K>docker pull</K> ghcr.io/akokk0/bilibili-notify:latest
            {'\n\n'}
            <P>$</P> <K>docker run</K> <K>-d</K> \{'\n'}
            {'    '}
            <K>--name</K> <S>bilibili-notify</S> \{'\n'}
            {'    '}
            <K>-p</K> <N>8787</N>:<N>8787</N> \{'\n'}
            {'    '}
            <K>-v</K> <S>{`"$(pwd)/data:/data"`}</S> \{'\n'}
            {'    '}
            <K>-e</K> <V>BN_DASHBOARD_USER</V>=<S>admin</S> \{'\n'}
            {'    '}
            <K>-e</K> <V>BN_DASHBOARD_PASS</V>=<S>{`'change-me'`}</S> \{'\n'}
            {'    '}ghcr.io/akokk0/bilibili-notify:latest
            {'\n\n'}
            <C># 打开浏览器</C>
            {'\n'}
            <P>$</P> open http://localhost:<N>8787</N>
          </Codeblock>
        }
      />

      <section className="docsec" id="quickstart">
        <div className="docsec-inner">
          <div className="section-label">快速开始</div>
          <h2>三步起服务。</h2>
          <p className="lede">
            推荐 docker compose;如果只想试试,前面 Hero 那条 <code>docker run</code> 也够用。
          </p>

          <StepList>
            <Step
              variant="std"
              num={1}
              title={
                <>
                  准备 <code>bn.config.yaml</code> 和数据目录
                </>
              }
              desc={
                <>
                  创建一个工作目录,把 <code>apps/server/bn.config.example.yaml</code> 复制为{' '}
                  <code>bn.config.yaml</code>,按机器情况改一改 <code>server.port</code> /{' '}
                  <code>cookieEncryptionKey</code>。或者全部留空,跑起来用 ENV 覆盖也行。
                </>
              }
              extras={
                <Codeblock title="bn.config.yaml">
                  <Y>server</Y>:{'\n'}
                  {'  '}
                  <Y>host</Y>: <S>{`"0.0.0.0"`}</S>
                  {'\n'}
                  {'  '}
                  <Y>port</Y>: <N>8787</N>
                  {'\n'}
                  <Y>dataDir</Y>: <S>{`"/data"`}</S>
                  {'\n'}
                  <Y>cookieEncryptionKey</Y>: <S>{`"<留空走 BN_COOKIE_KEY,或自动生成>"`}</S>
                  {'\n'}
                  <Y>dashboardAuth</Y>:{'\n'}
                  {'  '}
                  <Y>user</Y>: <S>{`"admin"`}</S>
                  {'\n'}
                  {'  '}
                  <Y>pass</Y>: <S>{`"change-me"`}</S>
                </Codeblock>
              }
            />
            <Step
              variant="std"
              num={2}
              title="用 docker-compose 启动"
              desc={
                <>
                  如果同时想跑 NapCat(QQ OneBot),仓库的{' '}
                  <code>apps/docker-compose.example.yaml</code> 里已经有 sidecar
                  block,复制过来取消注释即可。
                </>
              }
              extras={
                <Codeblock title="docker-compose.yaml">
                  <Y>services</Y>:{'\n'}
                  {'  '}
                  <Y>bilibili-notify</Y>:{'\n'}
                  {'    '}
                  <Y>image</Y>: <S>ghcr.io/akokk0/bilibili-notify:latest</S>
                  {'\n'}
                  {'    '}
                  <Y>ports</Y>: [<S>{`"8787:8787"`}</S>]{'\n'}
                  {'    '}
                  <Y>volumes</Y>:{'\n'}
                  {'      '}- <S>./data:/data</S>
                  {'\n'}
                  {'      '}- <S>./bn.config.yaml:/app/apps/server/bn.config.yaml:ro</S>
                  {'\n'}
                  {'    '}
                  <Y>environment</Y>:{'\n'}
                  {'      '}
                  <V>BN_DASHBOARD_USER</V>: <S>admin</S>
                  {'\n'}
                  {'      '}
                  <V>BN_DASHBOARD_PASS</V>: <S>{`"change-me"`}</S>
                  {'\n'}
                  {'    '}
                  <Y>restart</Y>: <S>unless-stopped</S>
                  {'\n\n'}
                  <C># 然后启动</C>
                  {'\n'}
                  <C># $ docker compose up -d</C>
                </Codeblock>
              }
            />
            <Step
              variant="std"
              num={3}
              title="浏览器打开 Dashboard,扫码登录"
              desc={
                <>
                  打开 <code>{`http://<host>:8787`}</code>,basic-auth 用第二步的 user/pass。
                  进入「系统 / 扫码登录」,手机 B 站扫一下,凭证就被 AES 加密落到{' '}
                  <code>/data/state</code> 里。 然后去「订阅 UP 主」加 UID,去「推送目标」配 OneBot /
                  Webhook,完事。
                </>
              }
            />
          </StepList>
        </div>
      </section>

      <section className="docsec" style={{ background: 'var(--bn-deploy-bg)' }}>
        <div className="docsec-inner">
          <div className="section-label">环境变量</div>
          <h2>
            所有配置都能用 <code>BN_*</code> 覆盖。
          </h2>
          <p className="lede">
            启动时按 CLI → ENV → <code>bn.config.yaml</code> → 默认值 的顺序合并,在 docker / k8s
            里用 ENV 注最舒服。
          </p>

          <div className="kvtable">
            <div className="row head">
              <div>环境变量</div>
              <div>用途</div>
              <div>默认值</div>
            </div>
            {ENV_VARS.map((v) => (
              <div key={v.k} className="row">
                <div className="k">{v.k}</div>
                <div className="desc">{v.desc}</div>
                <div className="def">{v.def}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="docsec">
        <div className="docsec-inner">
          <div className="section-label">推送目标 · OneBot</div>
          <h2>接 QQ?跑个 NapCat sidecar。</h2>
          <p className="lede">
            Standalone 自己实现了 OneBot v11 client,配上 NapCat / Lagrange 当 server 就能下发到 QQ。
            官方 example compose 已经有 sidecar block,复制过来就行。
          </p>

          <StepList>
            <Step
              variant="std"
              num="A"
              title="把 NapCat 加进 docker-compose"
              desc={
                <>
                  取消 <code>apps/docker-compose.example.yaml</code> 里 napcat 块的注释。 打开{' '}
                  <code>{`http://<host>:6099`}</code> NapCat WebUI,扫码登录 / 设置 access token、
                  确认 OneBot HTTP server 跑在 <code>3000</code>。
                </>
              }
            />
            <Step
              variant="std"
              num="B"
              title="在 Dashboard 新建推送目标"
              desc={
                <>
                  打开「推送目标 / 新建」,平台选 <span className="inline">onebot</span>,
                  <code>baseUrl</code> 填 <code>http://napcat:3000</code>(容器内主机名),
                  <code>accessToken</code> 跟 NapCat 那边对齐,<code>scope</code> 选 group 并填群号。
                  <b>点「测试」</b>,看到 ✓ 就保存。
                </>
              }
            />
            <Step
              variant="std"
              num="C"
              title="在订阅 UP 主里把目标挂上去"
              desc={
                <>
                  「订阅 UP 主 / 编辑」每条 UID,分别为 <code>live</code> / <code>liveEnd</code> /{' '}
                  <code>dynamic</code> / <code>superchat</code> 等 routing key 勾上刚才那个 OneBot
                  目标。 保存。等一会儿就有推送了。
                </>
              }
            />
          </StepList>
        </div>
      </section>

      <section className="docsec" id="ai-setup" style={{ background: 'var(--bn-gallery-bg)' }}>
        <div className="docsec-inner">
          <div className="section-label">配置 AI 智能女仆</div>
          <h2>让女仆有自己的性格。</h2>
          <p className="lede">
            Dashboard 的「智能女仆」页面对应 <code>GlobalConfig.defaults.ai</code>,改完 PATCH 一次{' '}
            <code>/api/globals</code> 即生效。
          </p>

          <StepList>
            <Step
              num={1}
              title="填模型连接"
              desc={
                <>
                  <code>apiKey</code> · <code>baseURL</code>(OpenAI 兼容即可,DeepSeek / 智谱 /
                  OneAPI 都行) · <code>model</code>(如 <code>deepseek-chat</code> /{' '}
                  <code>gpt-4o-mini</code>)。日志等级可选给 AI 单独开个 debug。
                </>
              }
            />
            <Step
              num={2}
              title="挑预设 或 自定义人格"
              desc={
                <>
                  预设里挑一个(<code>preset</code>),或者切到 <b>custom</b> 自己写: <code>name</code>
                  (女仆名)· <code>addressUser</code>(怎么称呼主人)· <code>addressSelf</code>(自称)·{' '}
                  <code>traits</code>(性格描述)· <code>catchphrase</code>(口癖)·{' '}
                  <code>customBase</code>(custom 时的核心人设)· <code>extraPrompt</code>
                  (额外提示词)。{' '}
                  <Link
                    to="/ai"
                    style={{
                      color: 'var(--bn-pink)',
                      borderBottom: '1px solid currentColor',
                      textDecoration: 'none',
                    }}
                  >
                    看「恶魔兔」是怎么配的 →
                  </Link>
                </>
              }
            />
            <Step
              num={3}
              title="调推送时机"
              desc={
                <>
                  <code>dynamicPrompt</code> 决定动态推送怎么吐槽;<code>liveSummaryPrompt</code>{' '}
                  决定下播总结的语气。可以加约束(字数、避免 emoji、不复读 UP 文案等)。
                </>
              }
            />
          </StepList>

          <div style={{ marginTop: 30, textAlign: 'center' }}>
            <Link to="/ai" className="btn btn-primary">
              看 4 个真实生成案例
            </Link>
          </div>
        </div>
      </section>

      <section className="docsec">
        <div className="docsec-inner">
          <div className="section-label">常见问题</div>
          <h2>FAQ</h2>
          <FAQ items={FAQS} />
        </div>
      </section>

      <section className="docsec" style={{ background: 'var(--bn-deploy-bg)' }}>
        <div className="docsec-inner">
          <h2>下一步</h2>
          <NextStrip
            entries={[
              { label: '看 UI', title: 'Dashboard 里都有啥功能 →', to: '/dashboard' },
              { label: '效果', title: 'AI 女仆生成的案例 →', to: '/ai' },
            ]}
          />
        </div>
      </section>
    </>
  )
}
