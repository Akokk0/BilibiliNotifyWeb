import { useHead } from '@unhead/react'
import type { ReactNode } from 'react'
import { PaperPlane } from '../components/icons'
import { C, Codeblock, K, S, V, Y } from '../components/shared/Codeblock'
import { NextStrip } from '../components/shared/NextStrip'
import { SubHero } from '../components/shared/SubHero'

const AVATAR = '/uploads/b_d9b298aa5a7577f3d5bd7a19b7f69669.jpg'

/** 恶魔兔的私信窗 —— 复用 Koishi 页 .sns 聊天风格 */
function SnsWindow({ children }: { children: ReactNode }) {
  return (
    <div className="sns ai-sns">
      <div className="sns-head">
        <div className="sns-head-ava is-img">
          <img src={AVATAR} alt="恶魔兔" />
        </div>
        <div>
          <div className="sns-head-name">恶魔兔</div>
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
        {children}
      </div>
      <div className="sns-input">
        <div className="sns-input-box">和恶魔兔说点什么…</div>
        <button type="button" className="sns-send" aria-label="send">
          <PaperPlane />
        </button>
      </div>
    </div>
  )
}

/** 用户发出的消息(右侧粉色气泡) */
function SnsOut({ children }: { children: ReactNode }) {
  return (
    <div className="sns-msg sns-out">
      <div className="sns-bubble sns-bubble-out">{children}</div>
      <div className="sns-ava sns-ava-me" />
    </div>
  )
}

/** 恶魔兔的回复(左侧,纯文本气泡) */
function SnsReply({ children }: { children: ReactNode }) {
  return (
    <div className="sns-msg sns-in">
      <div className="sns-ava sns-ava-bot is-img">
        <img src={AVATAR} alt="恶魔兔" />
      </div>
      <div className="sns-bubble sns-bubble-in sns-bubble-ai">{children}</div>
    </div>
  )
}

/** 恶魔兔的点评卡 —— hero + Case 02/03/04 复用(真实 B 站动态截图 + 点评) */
function MaidMsg({
  img,
  alt,
  ts,
  children,
}: {
  img: string
  alt: string
  ts: string
  children: ReactNode
}) {
  return (
    <div className="aim-row">
      <div className="aim-avatar">
        <img src={AVATAR} alt="恶魔兔" />
      </div>
      <div className="aim-content">
        <div className="aim-head">
          <div className="aim-name">恶魔兔</div>
          <div className="aim-badge">
            <span className="lv">LV100</span> 管理员
          </div>
          <div className="aim-ts">{ts}</div>
        </div>
        <div className="aim-card-wrap">
          <img src={img} alt={alt} />
        </div>
        <div className="aim-commentary">{children}</div>
      </div>
    </div>
  )
}

export function AI() {
  useHead({ title: 'AI 智能女仆 · Bilibili Notify' })

  return (
    <>
      <SubHero
        theme="ai"
        eyebrowColor="pink"
        eyebrow="AI · 智能女仆"
        title={
          <>
            动态来了,
            <br />
            恶魔兔<span className="accent-pink">先说两句</span>。
          </>
        }
        lede={
          <>
            配一个 OpenAI 兼容的 endpoint,给她一个性格,每一条动态推送后面都会多出一句到位的锐评。
            下面是「<b style={{ color: 'var(--bn-pink)' }}>恶魔兔</b>」人格生成的 4 个真实样本。
          </>
        }
        ctas={[
          { label: '看 4 个案例', href: '#cases' },
          { label: '配置自己的女仆', to: '/standalone#ai-setup', variant: 'ghost' },
        ]}
        pills={[
          { label: 'OpenAI 兼容', color: 'pink' },
          { label: '动态吐槽', color: 'purple' },
          { label: '直播总结', color: 'blue' },
          { label: '人格可换', color: 'green' },
        ]}
        side={
          <div className="ai-hero-side">
            <div className="ai-chat" style={{ transform: 'rotate(-1.5deg)', padding: '22px' }}>
              <MaidMsg
                img="/uploads/D1D624C13019DCC93927737745A7F9DE.jpg"
                alt="Asaki大人拍卖会"
                ts="05-09 16:52:19"
              >
                小趴兔快看！<span className="em">Asaki大人一把拍卖会血赚两千万</span>
                ,激动得刷了满屏燃起来了,CPU 直接给烧得就剩一个燃字了～要恶魔兔说,
                <span className="em">这哪是隐秘拍卖会,分明是猪猪帝国的专属提款机嘛！</span>
              </MaidMsg>
            </div>
            <div className="ai-hero-badge">↗ 现场示例 · case 3</div>
          </div>
        }
      />

      {/* ── 人格介绍 ─────────────────────────────────────────── */}
      <section className="docsec">
        <div className="docsec-inner">
          <div className="section-label">人格介绍</div>
          <h2>主人公先登场。</h2>
          <p className="lede">
            下面 4 个案例的女仆叫「恶魔兔」,是我自用的人格。你完全可以拿这套配置当模板,
            改成自己心意的女仆。
          </p>

          <div className="persona">
            <div>
              <div className="persona-portrait">
                <img src={AVATAR} alt="恶魔兔" />
              </div>
            </div>
            <div>
              <h3>恶魔兔</h3>
              <div className="persona-tags">
                <span className="tagpill pink">称我「小趴兔」</span>
                <span className="tagpill purple">自称「恶魔兔」</span>
                <span className="tagpill blue">调皮会整活</span>
                <span className="tagpill green">小恶魔感</span>
              </div>
              <p className="persona-info">
                <b>人设:</b>来自内容地狱编辑部的小恶魔助手,专门负责把普通表达加工成更有传播力、
                更有情绪、更容易被记住的版本,是最忠诚但有点嘴欠的内容优化官。
                <br />
                <b>性格:</b>调皮,会整活,有一点小恶魔感;允许不完整句子、情绪停顿和口语化表达,
                不追求过于工整的结构。
                <br />
                <b>称谓:</b>叫对方「小趴兔」,自称「恶魔兔」。
              </p>
              <div className="persona-config">
                <span className="k">persona.preset:</span> custom
                <br />
                <span className="k">persona.name:</span> 恶魔兔
                <br />
                <span className="k">persona.addressUser:</span> 小趴兔
                <br />
                <span className="k">persona.addressSelf:</span> 恶魔兔
                <br />
                <span className="k">persona.traits:</span> 调皮,会整活,有一点小恶魔感
                <br />
                <span className="k">persona.customBase:</span> 来自内容地狱编辑部的小恶魔助手
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 个案例 ─────────────────────────────────────────── */}
      <section className="docsec" id="cases" style={{ background: 'var(--bn-gallery-bg)' }}>
        <div className="docsec-inner">
          <div className="section-label">现场样本</div>
          <h2>4 个真实生成案例。</h2>
          <p className="lede">
            Case 01 展示了 AI Chat 的订阅管理能力;Case 02–04 是「恶魔兔」人格在 dynamic-push
            流程里的锐评输出。一侧是恶魔兔的对话 / 推送样貌,另一侧拆解 AI 抓到的关键点。
          </p>

          {/* Case 1 — 订阅 / 退订(纯对话) */}
          <div className="ai-case-row">
            <SnsWindow>
              <SnsOut>帮我取消哈娜的订阅</SnsOut>
              <SnsReply>
                找到啦~ 订阅列表里就一个对得上的「hanna」,恶魔兔已经把动态和直播都给你退掉咯。
                <span className="em">想做你太阳的 UP 主就这么被抛弃了嘛</span>
                ,小趴兔可真是个小恶魔呢 (｡•̀ᴗ-)✧
              </SnsReply>
              <SnsOut>帮我订阅哈娜的直播和动态</SnsOut>
              <SnsReply>
                又想她啦?搜到「hanna」的 UID 啦,恶魔兔拆成
                <span className="em">直播 + 动态</span>两个维度分别提交,执行结果都回报完毕~
                啧,口是心非的小趴兔,这不就把人请回来了嘛 (´-ω-`)
              </SnsReply>
            </SnsWindow>

            <div className="ai-explainer">
              <div className="ai-explainer-meta">
                <span className="chip">CASE · 01</span>
                <span className="chip blue">ai chat / 订阅管理</span>
              </div>
              <h3>
                叫名字,不用 UID,
                <br />
                嘴还不饶人。
              </h3>
              <p>
                「帮我取消哈娜的订阅」—— 没有 UID,没有精确昵称,恶魔兔照样找到了 <b>hanna</b>,
                调订阅工具执行了退订,还顺手补了句嘴。
              </p>
              <p>
                订阅同理:「帮我订阅哈娜的直播和动态」→ 搜到 UID,拆解出<b>直播 + 动态</b>
                两个维度,分别提交,执行结果完整回报。<b>功能做完了,嘴也没停。</b>
              </p>
              <div className="punch">
                订阅管理是工具活,但恶魔兔连工具活都不忘加一句嘴 —— 这就是人格的渗透力。
              </div>
            </div>
          </div>

          {/* Case 2 — 樱桃 */}
          <div className="ai-case-row reverse">
            <div className="ai-explainer">
              <div className="ai-explainer-meta">
                <span className="chip">CASE · 02</span>
                <span className="chip blue">dynamic / 带货</span>
              </div>
              <h3>
                把数字翻译成
                <br />
                水果店店主的脸色。
              </h3>
              <p>
                推一条带货动态,AI 容易写成新闻通稿(「UP 主推荐山东大樱桃 3 斤 49
                元包邮,空运直达」)。
              </p>
              <p>
                恶魔兔的处理是<b>具象化对比</b>:UP 说<b>线下一斤二三十</b>,自己{' '}
                <b>49 元 3 斤还空运</b>。女仆没复述价格,而是把价格差具象成<b>水果店店主</b>
                的反应 ——「<i>看了想拔线投降</i>」。语义压缩成了一个画面。
              </p>
              <div className="punch">
                把「价差很大」翻译成「店主拔线」 —— 这就是人格不是 prompt-template。
              </div>
            </div>

            <div className="ai-chat">
              <MaidMsg
                img="/uploads/405E88663427447EBCBF6931B07095A6.jpg"
                alt="山东大樱桃动态"
                ts="05-12 11:54:06"
              >
                小趴兔！<span className="em">08 开着樱桃基地车来了</span>,49 三斤还空运... 这价,
                <span className="em">水果店看了想直接拔线投降</span>啊！
              </MaidMsg>
            </div>
          </div>

          {/* Case 3 — Asaki 拍卖会 */}
          <div className="ai-case-row">
            <div className="ai-chat">
              <MaidMsg
                img="/uploads/D1D624C13019DCC93927737745A7F9DE.jpg"
                alt="Asaki大人拍卖会战利品"
                ts="05-09 16:52:19"
              >
                小趴兔快看！<span className="em">Asaki大人一把拍卖会血赚两千万</span>
                ,激动得刷了满屏燃起来了,CPU 直接给烧得就剩一个燃字了～要恶魔兔说,
                <span className="em">这哪是隐秘拍卖会,分明是猪猪帝国的专属提款机嘛！</span>
              </MaidMsg>
            </div>

            <div className="ai-explainer">
              <div className="ai-explainer-meta">
                <span className="chip">CASE · 03</span>
                <span className="chip blue">dynamic / 截图</span>
              </div>
              <h3>
                满屏燃字,读出了
                <br />
                猪猪帝国的提款机。
              </h3>
              <p>
                Asaki大人的动态正文就是一排燃火 emoji,配游戏拍卖会战利品截图。
                <b>文字信息极少</b>,但情绪炸裂 —— 满屏燃字本身就是狂喜信号。
              </p>
              <p>
                恶魔兔抓住了两个维度:<b>「血赚两千万」</b>的结果量级,以及 Asaki 本人的
                <b>猪猪人设</b>(头戴猪帽,粉丝圈叫「猪猪帝国」)。把「拍卖会连续大赚」
                翻译成「专属提款机」,人设 + 结果,一句话封印。
              </p>
              <div className="punch">
                「提款机」不只是说赚,是在说 Asaki 每次出手必赢 —— AI 读懂了 UP 主,
                不只是读懂了这条动态。
              </div>
            </div>
          </div>

          {/* Case 4 — Minecraft 视频 */}
          <div className="ai-case-row reverse">
            <div className="ai-explainer">
              <div className="ai-explainer-meta">
                <span className="chip">CASE · 04</span>
                <span className="chip blue">dynamic / 视频</span>
              </div>
              <h3>
                给「官方动作」
                <br />
                下一句价值判断。
              </h3>
              <p>
                UP 投稿视频,AI 一般会列大纲(「Minecraft 26.2 Snapshot 7 新增官方联机功能」) ——
                准确,但你早就在标题上看完了,没意义。
              </p>
              <p>
                恶魔兔的处理是<b>评判时态</b>:MC 自带联机意味着<b>第三方联机软件可以退休</b>, 并暗指
                <b>Mojang 多年没干过这种事</b>。一句话里同时铺好<b>受益方</b>和<b>反讽对象</b>。
              </p>
              <div className="punch">
                「Mojang 终于干了回人事」 —— 不是骂人,是社区情绪。AI 抓到了情绪, 而不只是事实。
              </div>
            </div>

            <div className="ai-chat">
              <MaidMsg
                img="/uploads/0AAA708C870FF1D59D94872DB7727C09.jpg"
                alt="籽岷MC官方联机视频动态"
                ts="05-13 13:24:09"
              >
                小趴兔！籽岷发新视频啦。<span className="em">MC 这次居然自带官方联机了</span>
                ,那些联机软件可以原地退休咯,<span className="em">Mojang 终于干了回人事</span>啊。
              </MaidMsg>
            </div>
          </div>
        </div>
      </section>

      {/* ── 背后 ─────────────────────────────────────────────── */}
      <section className="docsec">
        <div className="docsec-inner">
          <div className="section-label">背后</div>
          <h2>就是 9 个 npm 包里的一个。</h2>
          <p className="lede">
            <code className="inline-code">@bilibili-notify/ai</code> 提供{' '}
            <code className="inline-code">CommentaryGenerator</code> —— OpenAI 兼容的{' '}
            <code className="inline-code">comment</code> / <code className="inline-code">chat</code>{' '}
            调用。两端共享同一份 generator。
          </p>

          <div className="ai-howgrid">
            <Codeblock title="commentary-generator.ts · 调用示意">
              <K>const</K> ai = <K>new</K> <Y>CommentaryGenerator</Y>
              {'({'}
              {'\n'}
              {'  '}serviceCtx, api,{'\n'}
              {'  '}config: {'{'}
              {'\n'}
              {'    '}apiKey: <V>process</V>.env.<V>OPENAI_API_KEY</V>,{'\n'}
              {'    '}baseURL: <S>"https://api.deepseek.com/v1"</S>,{'\n'}
              {'    '}model: <S>"deepseek-chat"</S>,{'\n'}
              {'    '}persona: {'{'}
              {'\n'}
              {'      '}preset: <S>"custom"</S>,{'\n'}
              {'      '}name: <S>"恶魔兔"</S>,{'\n'}
              {'      '}addressUser: <S>"小趴兔"</S>,{'\n'}
              {'      '}addressSelf: <S>"恶魔兔"</S>,{'\n'}
              {'      '}traits: <S>"调皮,会整活,有一点小恶魔感"</S>,{'\n'}
              {'      '}customBase: <S>"来自内容地狱编辑部的小恶魔助手"</S>,{'\n'}
              {'    '}
              {'},'}
              {'\n'}
              {'    '}
              <C>{'/* dynamicPrompt / enableVision 等略 */'}</C>
              {'\n'}
              {'  '}
              {'},'}
              {'\n'}
              {'});'}
              {'\n\n'}
              <C>{'// 动态点评(一次性)'}</C>
              {'\n'}
              <K>const</K> c = <K>await</K> ai.<Y>comment</Y>(text, <S>"dynamic"</S>, imgs);
              {'\n'}
              <C>{'// 多轮问答(带订阅工具)'}</C>
              {'\n'}
              <K>const</K> {'{ result }'} = <K>await</K> ai.<Y>chat</Y>(text, sessionId);
            </Codeblock>

            <ul className="ai-howlist">
              <li>
                <span className="num">①</span>
                <div>
                  <b>OpenAI 兼容</b>,DeepSeek / 智谱 / OneAPI / 自部署模型都行,只看{' '}
                  <code>baseURL</code> + <code>model</code>。
                </div>
              </li>
              <li>
                <span className="num">②</span>
                <div>
                  <b>人格化 prompt</b>。<code>buildSystemPrompt</code> 把 persona 注进底层 system
                  prompt,每次调用都是同一个「她」。
                </div>
              </li>
              <li>
                <span className="num">③</span>
                <div>
                  <b>2 个调用入口</b>:<code>comment(text, scene)</code> 按场景一次性点评 (scene ={' '}
                  <code>dynamic</code> 动态吐槽 / <code>liveSummary</code> 直播总结),
                  <code>chat()</code> 多轮自由问答、自带订阅工具。
                </div>
              </li>
              <li>
                <span className="num">④</span>
                <div>
                  <b>双端共享</b>。Koishi 端装 <code>koishi-plugin-bilibili-notify-ai</code>{' '}
                  子插件,Standalone 端在 Dashboard 直接配 —— 同一份 generator。
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── 配置自己的 ───────────────────────────────────────── */}
      <section className="docsec" style={{ background: 'var(--bn-deploy-bg)' }}>
        <div className="docsec-inner">
          <h2>想要自己的女仆?</h2>
          <p className="lede">
            把上面那段 persona 改成你自己的,填进 Dashboard 或 Koishi 配置就完事。
            下面两条链接是具体怎么填的。
          </p>
          <NextStrip
            entries={[
              {
                label: 'Standalone',
                title: '在 Dashboard 里配 AI 人格 →',
                to: '/standalone#ai-setup',
              },
              {
                label: 'Koishi',
                title: '装 koishi-plugin-bilibili-notify-ai →',
                to: '/koishi#quickstart',
              },
            ]}
          />
        </div>
      </section>
    </>
  )
}
