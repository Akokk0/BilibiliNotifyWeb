import type { CSSProperties } from 'react'

type Props = {
  width?: number
  amount: string
  duration: string
  fromName?: string
  toName?: string
  message: string
  badgeLabel: string
  gradStart: string
  gradEnd: string
  wrapPadding?: number
  /** "wide" mirrors gallery proportions (¥36px / 70px avatar). "compact" is the hero stack
   *  card (¥34px / 60px avatar / tighter padding). */
  variant?: 'wide' | 'compact'
}

type SCStyle = CSSProperties & { '--c1': string; '--c2': string }

export function SuperChatCard({
  width = 260,
  amount,
  duration,
  fromName,
  toName = '晨风UP主',
  message,
  badgeLabel,
  gradStart,
  gradEnd,
  wrapPadding = 15,
  variant = 'wide',
}: Props) {
  const style: SCStyle = {
    width,
    padding: wrapPadding,
    background: 'linear-gradient(to right bottom, var(--c1), var(--c2))',
    '--c1': gradStart,
    '--c2': gradEnd,
  }

  const isCompact = variant === 'compact'

  return (
    <div className="bn-wrap" style={style}>
      <div
        className={`flex flex-col items-center rounded-[10px] bg-white/75 shadow-[0_4px_8px_rgba(0,0,0,0.2)] backdrop-blur-md ${
          isCompact ? 'px-[15px] py-[18px]' : 'px-[18px] py-[22px]'
        }`}
      >
        <div
          className={`bg-[linear-gradient(135deg,var(--c1),var(--c2))] bg-clip-text font-bold text-transparent ${
            isCompact ? 'text-[34px] leading-none' : 'text-[36px] leading-none'
          }`}
        >
          {amount}
        </div>
        <div className="mt-[5px] rounded-xl bg-[var(--c1)] px-2.5 py-[3px] text-xs font-bold text-white">
          ⏱ {duration}
        </div>
        <div
          className={`h-px w-full bg-[linear-gradient(to_right,transparent,var(--c1),transparent)] ${
            isCompact ? 'my-3' : 'my-3.5'
          }`}
        />
        <div
          className={`rounded-full bg-[linear-gradient(135deg,var(--c1),var(--c2))] ${
            isCompact ? 'size-[60px]' : 'size-[70px]'
          }`}
        />
        <div
          className={`rounded-[15px] bg-[var(--c1)] font-bold text-white ${
            isCompact ? 'mt-2 px-3 py-1 text-[13px]' : 'mt-2.5 px-3.5 py-[5px] text-[13px]'
          }`}
        >
          {badgeLabel}
        </div>
        <div className={`text-[#666] ${isCompact ? 'mt-[5px] text-[11px]' : 'mt-1.5 text-xs'}`}>
          {fromName ?? `SC to ${toName}`}
        </div>
        <div
          className={`rounded-lg bg-white/50 text-center leading-[1.5] text-[#333] ${
            isCompact ? 'mt-2.5 px-2.5 py-2 text-xs' : 'mt-3 px-3 py-2.5 text-[13px] leading-[1.6]'
          }`}
        >
          {message}
        </div>
      </div>
    </div>
  )
}
