// constants
export const DanmakuWSOpen = 'DanmakuWSOpen';  // live ws open event name

// 0为普通用用户，1为总督，2为提督，3为舰长
export enum VIPTYPE {
    Normal,
    Viceroy,
    Admiral,
    Captain
}

export interface FlattedDanmaku {
    textContent: string;
    user: {
      name: string;
      vip: VIPTYPE;
      medalName: string;
      medalLevel: number;
    };
}

export interface DanmakuPlugin {
    (danmaku: FlattedDanmaku): FlattedDanmaku;
}
