import {defineStore} from 'pinia';
import {ref} from 'vue';
import {FlattedDanmaku} from '../core/types';

export const useDanmaku = defineStore('danmaku', () => {
    const danmakuList = ref<FlattedDanmaku[]>([]);
    const listLimit = ref(200);
    const shiftNum = ref(20);

    const setLimit = (limit: number, shiftNumber: number) => {
        listLimit.value = limit;
        shiftNum.value = shiftNumber || Math.floor(limit / 10);
    };

    const shiftList = () => {
      for (let i = 0; i < shiftNum.value; i++) {
          danmakuList.value.shift();
      }
    };
    const pushDanmaku = (danmaku: FlattedDanmaku) => {
        if (danmakuList.value.length >= listLimit.value) shiftList();
        danmakuList.value.push(danmaku);
    };
    const clearDanmakuList = () => {
        danmakuList.value = [];
    };

    return {
        danmakuList,
        pushDanmaku,
        clearDanmakuList,
        setLimit,
    };
});
