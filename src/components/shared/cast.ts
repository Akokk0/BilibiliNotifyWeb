/**
 * 全站复用的虚构 UP 主班底 —— 名字、UID、粉丝数、头像全部虚构,
 * 不对应任何真实 B 站用户。头像统一用「渐变 + 首字」,无图片文件。
 */
export type CastMember = {
  id: string
  /** 虚构 UP 主名 */
  name: string
  /** 头像首字 */
  letter: string
  /** 头像渐变 */
  grad: string
  /** 虚构 UID */
  uid: string
  /** 虚构粉丝数(展示用) */
  fans: string
  /** 领域标签 */
  area: string
  /** 虚构直播间号 */
  room: string
}

export const CAST = {
  chenfeng: {
    id: 'chenfeng',
    name: '晨风UP主',
    letter: '晨',
    grad: 'linear-gradient(135deg,#FB7299,#e84393)',
    uid: '10028601',
    fans: '12.4万',
    area: '编程开发',
    room: '100286',
  },
  yinyue: {
    id: 'yinyue',
    name: '银月喵',
    letter: '银',
    grad: 'linear-gradient(135deg,#a29bfe,#6c5ce7)',
    uid: '10028602',
    fans: '38.7万',
    area: '虚拟主播',
    room: '100287',
  },
  pixel: {
    id: 'pixel',
    name: '像素老张',
    letter: '像',
    grad: 'linear-gradient(135deg,#00AEEC,#0984e3)',
    uid: '10028603',
    fans: '205.1万',
    area: '沙盒游戏',
    room: '100288',
  },
  shanhai: {
    id: 'shanhai',
    name: '山海食研所',
    letter: '山',
    grad: 'linear-gradient(135deg,#55efc4,#00b894)',
    uid: '10028604',
    fans: '56.3万',
    area: '美食',
    room: '100289',
  },
  laomao: {
    id: 'laomao',
    name: '战术老猫',
    letter: '战',
    grad: 'linear-gradient(135deg,#ff9f43,#ee5253)',
    uid: '10028605',
    fans: '173.9万',
    area: 'FPS竞技',
    room: '100290',
  },
  moyu: {
    id: 'moyu',
    name: '摸鱼电波',
    letter: '摸',
    grad: 'linear-gradient(135deg,#48dbfb,#0abde3)',
    uid: '10028606',
    fans: '8.9万',
    area: '生活',
    room: '100291',
  },
} satisfies Record<string, CastMember>

export const CAST_LIST: CastMember[] = Object.values(CAST)

/** AI 女仆人格(虚构),非真实用户。头像为虚构角色立绘 */
export const MAID = {
  name: '恶魔兔',
  avatar: '/uploads/b_d9b298aa5a7577f3d5bd7a19b7f69669.jpg',
  grad: 'linear-gradient(135deg,#FB7299,#a29bfe)',
}
