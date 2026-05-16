import { type CastMember, MAID } from './cast'

/** 渐变 + 首字头像。className 传上下文尺寸类(.ava / .av / .lava …) */
export function Ava({ m, className = '' }: { m: CastMember; className?: string }) {
  return (
    <div className={`lava ${className}`} style={{ background: m.grad }} aria-hidden>
      {m.letter}
    </div>
  )
}

/** 恶魔兔头像 —— 虚构角色立绘(非真实用户) */
export function MaidAva({ className = '' }: { className?: string }) {
  return <img className={`maid-ava ${className}`} src={MAID.avatar} alt="恶魔兔" />
}
