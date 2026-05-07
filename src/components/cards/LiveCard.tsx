type Props = {
  width?: number
  title?: string
  upName?: string
  duration?: string
  popularity?: string
  category?: string
  liveLabel?: string
  coverHeight?: number
  popularityLabel?: string
}

export function LiveCard({
  width = 320,
  title = '今天来玩原神！抽卡直播～',
  upName = '晨风UP主',
  duration = '开播 1小时20分钟',
  popularity = '人气：32,145',
  category = '分区：单机游戏',
  liveLabel = '● LIVE · 1080p',
  coverHeight = 130,
  popularityLabel = '直播中',
}: Props) {
  return (
    <div className="bn-wrap" style={{ width }}>
      <div className="bn-card">
        <div className="relative px-4 pt-4">
          <div
            className="relative w-full overflow-hidden rounded-lg bg-[linear-gradient(135deg,#FB7299_0%,#00AEEC_100%)]"
            style={{ height: coverHeight }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.35),transparent_60%)]" />
            <div className="absolute bottom-2.5 left-3.5 text-xs font-bold text-white/85">
              {liveLabel}
            </div>
          </div>
          <div className="absolute top-7 right-7 flex h-6 items-center rounded-xl bg-[#FF6699] px-2.5 text-xs font-bold text-white">
            {popularityLabel}
          </div>
        </div>
        <div className="flex items-center gap-2.5 px-4 pt-3.5 pb-2.5">
          <div className="size-11 shrink-0 rounded-full border-[3px] border-white bg-[linear-gradient(135deg,#FB7299,#e84393)] shadow-[0_4px_8px_rgba(0,0,0,0.2)]" />
          <div>
            <div className="text-bn-text-primary text-base font-bold">{upName}</div>
            <div className="mt-0.5 text-xs text-[#999]">{duration}</div>
          </div>
        </div>
        <div className="text-bn-text-primary px-4 pb-2.5 text-[17px] font-bold">{title}</div>
        <div className="mx-4 h-px bg-black/6" />
        <div className="flex justify-between px-4 py-2.5 text-[13px] text-[#666]">
          <span>{popularity}</span>
          <span>{category}</span>
        </div>
      </div>
    </div>
  )
}
