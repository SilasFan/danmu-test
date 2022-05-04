<script lang="ts" setup>
import {FlattedDanmaku} from '../core/types';
import {computed} from 'vue';
import {UserColorMap} from './utils';

const props = defineProps<{ danmaku: FlattedDanmaku }>();

const userStyle = computed(() => {
  return {
    color: UserColorMap.get(props.danmaku.user.vip),
  };
});
</script>

<template>
  <div class="danmaku-container">
    <div
      class="danmaku-user"
      :style="userStyle"
    >
      {{ danmaku.user.name }}：
    </div>
    <div class="danmaku-content">
      {{ danmaku.textContent }}
    </div>
  </div>
</template>

<style>
.danmaku-container {
  margin: 5px 0;
  display: flex;
  align-items: flex-end;
}

.danmaku-user {
  font-weight: bold;
}
</style>
