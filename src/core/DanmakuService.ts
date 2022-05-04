import {KeepLiveWS} from 'bilibili-live-ws/browser';
import {EventEmitter} from 'events';
import {DanmakuPlugin, DanmakuPush, DanmakuWSOpen, FlattedDanmaku, VIPTYPE} from './types';

const flatDanmaku = (raw: any, count: number): FlattedDanmaku => {
    return {
        count,
        textContent: raw[1],
        user: {
            uid: raw[2][0],
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
    composedPlugins: DanmakuPlugin | null = null;
    danmakuCount = 0;

    constructor() {
        super();
    }

    public initService(roomid: number) {
        this.composePlugins();
        this.live = new KeepLiveWS(roomid);
        this.live.on('open', () => {
            console.log('ws open');
            this.emit(DanmakuWSOpen);
        });

        this.live.on('DANMU_MSG', (data) => {
            this.danmakuCount++;
            const { info, } = data;
            console.log(info);
            const danmaku = (this.composedPlugins as DanmakuPlugin)(flatDanmaku(info, this.danmakuCount));
            if(danmaku) this.emit(DanmakuPush, danmaku);
            console.log(danmaku);
        });
    }

    public useDanmakuPlugin(plugin: DanmakuPlugin) {
        this.danmakuPlugins.push(plugin);
        return this;
    }

    private composePlugins() {
        this.composedPlugins = (danmaku: FlattedDanmaku | null): FlattedDanmaku | null => {
            for(const plugin of this.danmakuPlugins) {
                if(!danmaku) return null;
                danmaku = plugin(danmaku);
            }
            return danmaku;
        };
    }
}
