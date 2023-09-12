<script setup lang="ts">
import chooseArea from './components/choose-area.vue'
import timeArea from './components/time-area.vue';
import customArea from './components/custom-area.vue';
</script>

<template>
  <h1 class="title">火锅计时器</h1>
  <choose-area />
  <custom-area></custom-area>
  <time-area></time-area>
</template>

<style scoped lang="scss">
.title {
  text-align: center;
}
</style>
