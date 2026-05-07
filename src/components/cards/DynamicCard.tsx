import type { ReactNode } from 'react'

type Props = {
  width?: number
  upName?: string
  upNameColor?: string
  timestamp?: string
  topic?: string
  topicColor?: string
  content?: string
  variant?: 'simple' | 'rich'
  children?: ReactNode
}

export function DynamicCard({
  width = 320,
  upName = '晨风UP主',
  upNameColor = '#FB7299',
  timestamp = '刚刚 · 2026-04-21 20:00',
  topic = 'Minecraft · 游戏',
  topicColor = '#00AEEC',
  content = '今天挖了一整天的钻石，终于凑齐了一整套钻石装备！感谢大家的陪伴 (●‘◡‘●)',
  variant = 'rich',
  children,
}: Props) {
  const isSimple = variant === 'simple'

  return (
    <div className="bn-wrap" style={{ width }}>
      <div className="bn-card">
        <div className="flex items-center gap-3 px-4 pt-3.5 pb-3">
          <div
            className={`shrink-0 rounded-full border-[3px] border-white bg-[linear-gradient(135deg,#a29bfe,#6c5ce7)] shadow-[0_4px_8px_rgba(0,0,0,0.2)] ${
              isSimple ? 'size-[46px]' : 'size-[52px]'
            }`}
          />
          <div>
            <div
              className={`font-bold ${isSimple ? 'text-[15px]' : 'text-[17px]'}`}
              style={{ color: upNameColor }}
            >
              {upName}
            </div>
            <div className={`mt-0.5 text-[#999] ${isSimple ? 'text-[11px]' : 'text-xs'}`}>
              {timestamp}
            </div>
          </div>
        </div>
        <div className="mx-4 h-px bg-black/6" />

        {isSimple ? (
          <div className="px-4 py-2.5">
            <div
              className="mb-2 inline-flex items-center gap-1 text-xs font-bold"
              style={{ color: topicColor }}
            >
              <span
                className="inline-block size-[11px] rounded-full"
                style={{ background: topicColor }}
              />
              {topic}
            </div>
            <div className="text-[13px] leading-[1.6] text-[#18191C]">{content}</div>
          </div>
        ) : (
          <div className="flex flex-col gap-2.5 px-4 py-3">
            <div
              className="flex items-center gap-1.5 text-[13px] font-bold"
              style={{ color: topicColor }}
            >
              <span className="inline-block size-3.5 rounded" style={{ background: topicColor }} />
              {topic}
            </div>
            <div className="text-sm leading-[1.6] text-[#18191C]">{content}</div>
            {children}
          </div>
        )}

        <div className="mx-4 h-px bg-black/6" />
        <div
          className={`flex justify-around px-4 text-[#999] ${
            isSimple ? 'py-2.5 text-xs' : 'py-3 text-[13px]'
          }`}
        >
          <span>↗ 234</span>
          <span>💬 1,240</span>
          <span>👍 8,432</span>
        </div>
      </div>
    </div>
  )
}
