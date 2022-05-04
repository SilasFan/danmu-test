// constants
export const DanmakuWSOpen = 'DanmakuWSOpen';  // live ws open event name
export const DanmakuPush = 'DanmakuPush';   // push flatted danmaku event name

// 0为普通用用户，1为总督，2为提督，3为舰长
export enum VIPTYPE {
    Normal,
    Viceroy,
    Admiral,
    Captain
}

export interface FlattedDanmaku {
    count: number;
    textContent: string;
    user: {
        uid: string;
        name: string;
        vip: VIPTYPE;
        medalName: string;
        medalLevel: number;
    };

    [key: string]: any;
}

export interface DanmakuPlugin {
    (danmaku: FlattedDanmaku): FlattedDanmaku | null;
}
