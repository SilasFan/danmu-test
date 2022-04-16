<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {DanmakuService} from '../core';

const count = ref(0);
onMounted(() => {
  const service = new DanmakuService();
  service.initService(22886883);
});
</script>

<template>
  <div>hello</div>
  <div>hi {{ count }}</div>
</template>

<style scoped>

</style>
