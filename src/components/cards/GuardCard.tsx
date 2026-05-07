import type { CSSProperties } from 'react'

type Props = {
  width?: number
  gradStart: string
  gradEnd: string
  wrapPadding?: number
  topBadge: string
  bottomBadge: string
  message: string
  textColor?: string
  /** "wide" mirrors the gallery card with the GUARD side strip; "compact" is the hero stack card. */
  variant?: 'wide' | 'compact'
}

type GuardStyle = CSSProperties & { '--c1': string; '--c2': string }

export function GuardCard({
  width = 360,
  gradStart,
  gradEnd,
  wrapPadding = 12,
  topBadge,
  bottomBadge,
  message,
  textColor,
  variant = 'wide',
}: Props) {
  const style: GuardStyle = {
    width,
    padding: wrapPadding,
    background: 'linear-gradient(to right bottom, var(--c1), var(--c2))',
    '--c1': gradStart,
    '--c2': gradEnd,
  }
  const textColorStyle = { color: textColor ?? gradEnd }

  const Avatar = ({ size }: { size: number }) => (
    <div
      className="shrink-0 rounded-full bg-[linear-gradient(135deg,var(--c1),var(--c2))]"
      style={{ width: size, height: size }}
    />
  )
  const Badge = ({ children }: { children: React.ReactNode }) => (
    <div className="rounded-[25px] bg-[var(--c1)] px-2.5 py-[3px] text-[11px] font-bold text-white">
      {children}
    </div>
  )

  if (variant === 'compact') {
    return (
      <div className="bn-wrap" style={style}>
        <div className="rounded-[10px] bg-white/75 p-3 shadow-[0_4px_8px_rgba(0,0,0,0.2)] backdrop-blur-md">
          <div className="mb-2.5 flex gap-2.5">
            <Avatar size={54} />
            <div className="flex flex-col gap-1">
              <Badge>{topBadge}</Badge>
              <Badge>{bottomBadge}</Badge>
            </div>
          </div>
          <div
            className="text-[13px] leading-[1.45] font-bold whitespace-pre-line italic"
            style={textColorStyle}
          >
            {message}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bn-wrap" style={style}>
      <div className="flex h-40 overflow-hidden rounded-[10px] bg-white/75 shadow-[0_4px_8px_rgba(0,0,0,0.2)] backdrop-blur-md">
        <div className="flex flex-1 flex-col justify-between p-3.5">
          <div className="flex gap-2.5">
            <Avatar size={64} />
            <div className="mt-1 flex flex-col gap-1.5">
              <Badge>{topBadge}</Badge>
              <Badge>{bottomBadge}</Badge>
            </div>
          </div>
          <div
            className="text-sm leading-[1.4] font-bold whitespace-pre-line italic"
            style={textColorStyle}
          >
            {message}
          </div>
        </div>
        <div className="flex w-[130px] items-center justify-center rounded-r-[10px] bg-[linear-gradient(135deg,#fdcb6e,#e17055)] text-[11px] font-bold text-white/60">
          GUARD
        </div>
      </div>
    </div>
  )
}
