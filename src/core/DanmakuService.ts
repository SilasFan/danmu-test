import {KeepLiveWS} from 'bilibili-live-ws/browser';
import {EventEmitter} from 'events';
import {DanmakuPlugin, DanmakuWSOpen, FlattedDanmaku, VIPTYPE} from './types';

const flatDanmaku = (raw: any): FlattedDanmaku => {
    return {
        textContent: raw[1],
        user: {
            name: raw[2][1],
            vip: raw[3][10] as VIPTYPE,
            medalName: raw[3][1],
            medalLevel: raw[3][0],
        },
    };
};

export class DanmakuService extends EventEmitter {
    live: KeepLiveWS | null = null;
    danmakuPlugins: DanmakuPlugin[] = [];

    constructor() {
        super();
    }

    public initService(roomid: number) {
        this.live = new KeepLiveWS(roomid);
        this.live.on('open', () => {
            console.log('ws open');
            this.emit(DanmakuWSOpen);
        });

        this.live.on('DANMU_MSG', (data) => {
            const { info, } = data;
            console.log(flatDanmaku(info));
        });
    }

    public useDanmakuPlugin(plugin: DanmakuPlugin) {
        this.danmakuPlugins.push(plugin);
        return this;
    }
}
