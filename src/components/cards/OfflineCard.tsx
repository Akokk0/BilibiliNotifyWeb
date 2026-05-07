type Props = {
  width?: number
  upName?: string
  duration?: string
  title?: string
  totalViewers?: string
  peakPopularity?: string
}

export function OfflineCard({
  width = 320,
  upName = '晨风UP主',
  duration = '直播时长 3小时02分钟',
  title = '今天来玩原神！抽卡直播～',
  totalViewers = '累计观看：89,234',
  peakPopularity = '峰值人气：45.2万',
}: Props) {
  return (
    <div
      className="bn-wrap bg-[linear-gradient(to_right_bottom,#b2bec3,#dfe6e9)]"
      style={{ width }}
    >
      <div className="bn-card">
        <div className="relative px-4 pt-4">
          <div className="h-[120px] w-full rounded-lg bg-[linear-gradient(135deg,#636e72,#b2bec3)]" />
          <div className="absolute top-7 right-7 flex h-6 items-center rounded-xl bg-[#aaa] px-2.5 text-xs font-bold text-white">
            已下播
          </div>
        </div>
        <div className="flex items-center gap-2.5 px-4 pt-3.5 pb-2.5">
          <div className="size-11 shrink-0 rounded-full border-[3px] border-white bg-[linear-gradient(135deg,#636e72,#b2bec3)] shadow-[0_4px_8px_rgba(0,0,0,0.2)]" />
          <div>
            <div className="text-bn-text-primary text-base font-bold">{upName}</div>
            <div className="mt-0.5 text-xs text-[#999]">{duration}</div>
          </div>
        </div>
        <div className="text-bn-text-primary px-4 pb-2.5 text-[17px] font-bold">{title}</div>
        <div className="mx-4 h-px bg-black/[0.06]" />
        <div className="flex justify-between px-4 py-2.5 text-[13px] text-[#666]">
          <span>{totalViewers}</span>
          <span>{peakPopularity}</span>
        </div>
      </div>
    </div>
  )
}
