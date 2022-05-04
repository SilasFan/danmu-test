<script setup lang="ts">
import {onBeforeUnmount, onMounted} from 'vue';
import {DanmakuService} from '../core';
import {useDanmaku} from '../store/Danmaku';
import {DanmakuPush, FlattedDanmaku} from '../core/types';
import DanmakuItem from '../render/DanmakuItem.vue';

const service = new DanmakuService();
const danmakuStore = useDanmaku();
const {
        danmakuList,
        pushDanmaku,
        clearDanmakuList,
      } = danmakuStore;
onMounted(() => {
  service.initService(22389319);
  service.on(DanmakuPush, (danmaku: FlattedDanmaku) => {
    pushDanmaku(danmaku);
  });
});

onBeforeUnmount(() => {
  clearDanmakuList();
});
</script>

<template>
  <DanmakuItem
    v-for="dan in danmakuList"
    :key="dan.count"
    :danmaku="dan"
  />
</template>

<style scoped>

</style>
