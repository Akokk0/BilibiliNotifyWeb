type Word = {
  text: string
  size: number
  color: string
  top: number
  left: number
  rotate?: number
}

const WORDS: Word[] = [
  { text: '牛蛙', size: 38, color: '#5b21b6', top: 50, left: 95 },
  { text: 'awsl', size: 26, color: '#7c3aed', top: 15, left: 55 },
  { text: 'yyds', size: 24, color: '#0891b2', top: 95, left: 155 },
  { text: '哈哈哈', size: 18, color: '#8b5cf6', top: 18, left: 175 },
  { text: '破防', size: 16, color: '#6366f1', top: 70, left: 25 },
  { text: '笑死', size: 16, color: '#0d9488', top: 100, left: 220 },
  { text: '好家伙', size: 14, color: '#4338ca', top: 115, left: 75 },
  { text: '栓Q', size: 12, color: '#a855f7', top: 8, left: 195 },
  { text: '?', size: 14, color: '#a855f7', top: 58, left: 245 },
  { text: '雷军', size: 12, color: '#9333ea', top: 122, left: 200 },
]

type Props = {
  width?: number
  total?: string
  topN?: number
}

export function WordcloudCard({ width = 320, total = '本场弹幕：4,832', topN = 10 }: Props) {
  return (
    <div
      className="bn-wrap"
      style={{
        width,
        background: 'linear-gradient(to right bottom, #b494e5, #4ebcec)',
      }}
    >
      <div className="bn-card">
        <div className="flex items-center gap-2 px-4 pt-3.5 pb-2.5 text-[15px] font-bold text-bn-text-primary">
          <span>🎯</span>
          弹幕词云
        </div>
        <div className="mx-4 h-px bg-black/6" />
        <div className="relative mx-auto h-[160px] w-[280px]">
          {WORDS.map((w) => (
            <span
              key={w.text}
              className="absolute font-bold whitespace-nowrap"
              style={{
                top: w.top,
                left: w.left,
                fontSize: w.size,
                color: w.color,
                transform: w.rotate ? `rotate(${w.rotate}deg)` : undefined,
              }}
            >
              {w.text}
            </span>
          ))}
        </div>
        <div className="mx-4 h-px bg-black/6" />
        <div className="flex justify-between px-4 py-2.5 text-[13px] text-[#666]">
          <span>{total}</span>
          <span>词频 Top {topN}</span>
        </div>
      </div>
    </div>
  )
}
