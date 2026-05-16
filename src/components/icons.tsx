import type { SVGProps } from 'react'

export function ArrowRightSmall(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
      <title>arrow</title>
      <path
        d="M1 5h7m0 0L5 2m3 3L5 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" {...props}>
      <title>arrow</title>
      <path
        d="M2 6h8m0 0L6.5 2.5M10 6 6.5 9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function GitHub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" {...props}>
      <title>GitHub</title>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

export function PaperPlane(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="white" {...props}>
      <title>send</title>
      <path d="M2 2l12 6-12 6 2-6z" />
    </svg>
  )
}

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" {...props}>
      <title>home</title>
      <path d="M8 1l7 6v8H9v-5H7v5H1V7z" />
    </svg>
  )
}

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" {...props}>
      <title>user</title>
      <circle cx="8" cy="5" r="3" />
      <path d="M2 14c0-3 3-5 6-5s6 2 6 5z" />
    </svg>
  )
}

export function ListIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" {...props}>
      <title>list</title>
      <path d="M3 3h10v2H3zM3 7h10v2H3zM3 11h10v2H3z" />
    </svg>
  )
}

export function PackageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" {...props}>
      <title>package</title>
      <path d="M8 2L2 5v6l6 3 6-3V5z" />
    </svg>
  )
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" {...props}>
      <title>clock</title>
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function QrIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" {...props}>
      <title>qr code</title>
      <rect x="2" y="2" width="12" height="12" rx="2" />
    </svg>
  )
}

export function FormIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" {...props}>
      <title>form</title>
      <path d="M2 4h12v8H2z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function LikeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" {...props}>
      <title>like</title>
      <path
        d="M5 7v6H3V7zm2 0l2.2-4.4a1.4 1.4 0 0 1 2.6.9L11 6h2.6a1.4 1.4 0 0 1 1.37 1.7l-1 4.6A1.4 1.4 0 0 1 12.6 13.4H7z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CommentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" {...props}>
      <title>comment</title>
      <path
        d="M2.5 4.5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7l-3 2.5V10.5H4.5a2 2 0 0 1-2-2z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ShareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" {...props}>
      <title>share</title>
      <path
        d="M11.5 5.5 14 3m0 0v3m0-3h-3M14 3 7 10M6 4H4a1.5 1.5 0 0 0-1.5 1.5v6A1.5 1.5 0 0 0 4 13h6a1.5 1.5 0 0 0 1.5-1.5V9.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ImageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" {...props}>
      <title>image</title>
      <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="6" cy="6.5" r="1.1" fill="currentColor" />
      <path
        d="M3 12l3.5-3.5L9 11l2-2 3 3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SparkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" {...props}>
      <title>spark</title>
      <path d="M8 1.5l1.5 4 4 1.5-4 1.5L8 12.5 6.5 8.5l-4-1.5 4-1.5z" />
      <path opacity="0.6" d="M12.5 10l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" />
    </svg>
  )
}

export function PulseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" {...props}>
      <title>status</title>
      <path
        d="M1.5 8h3l2-4.5L9.5 12 11.5 8h3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SwapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" {...props}>
      <title>swap</title>
      <path
        d="M3 5.5h9m0 0L9.5 3M12 5.5 9.5 8M13 10.5H4m0 0L6.5 8M4 10.5 6.5 13"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CrownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" {...props}>
      <title>crown</title>
      <path d="M2 5.2l3 2.3L8 3l3 4.5 3-2.3-1.1 6.8H3.1zM3 13h10v1.5H3z" />
    </svg>
  )
}

export function DiamondIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" {...props}>
      <title>diamond</title>
      <path
        d="M4.5 2.5h7l2.5 4-6 7.5-6-7.5zM2 6.5h12M6 2.5 5 6.5l3 5 3-5-1-4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function FlowerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" {...props}>
      <title>flower</title>
      <circle cx="8" cy="4" r="2.1" />
      <circle cx="8" cy="12" r="2.1" />
      <circle cx="4" cy="8" r="2.1" />
      <circle cx="12" cy="8" r="2.1" />
      <circle cx="8" cy="8" r="1.7" opacity="0.55" />
    </svg>
  )
}

export function TargetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" {...props}>
      <title>target</title>
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="8" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="8" cy="8" r="0.9" fill="currentColor" />
    </svg>
  )
}

export function LightbulbIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" {...props}>
      <title>lightbulb</title>
      <path d="M8 1.5a4.5 4.5 0 0 0-3 7.8V11h6V9.3a4.5 4.5 0 0 0-3-7.8zM6 12h4v1.2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z" />
    </svg>
  )
}
