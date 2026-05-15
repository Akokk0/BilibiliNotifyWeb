import type { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

export function Codeblock({ title, children }: Props) {
  return (
    <div className="codeblock">
      <div className="codeblock-head">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="title">{title}</span>
      </div>
      <pre>{children}</pre>
    </div>
  )
}

type TokenProps = { children: ReactNode }

export const C = ({ children }: TokenProps) => <span className="c-c">{children}</span>
export const P = ({ children }: TokenProps) => <span className="c-p">{children}</span>
export const K = ({ children }: TokenProps) => <span className="c-k">{children}</span>
export const S = ({ children }: TokenProps) => <span className="c-s">{children}</span>
export const N = ({ children }: TokenProps) => <span className="c-n">{children}</span>
export const V = ({ children }: TokenProps) => <span className="c-v">{children}</span>
export const Y = ({ children }: TokenProps) => <span className="c-y">{children}</span>
