<script setup lang="ts">
import { ref } from 'vue';
import { addHours } from "date-fns";
import CountDown from "components/ActivityCountDown/index.vue";
import { initTime } from "components/ActivityCountDown/util";

const timeParams = initTime({
  type: "ms",
  startTime: addHours(new Date(), 2).getTime(),
  serverTime: new Date().getTime(), // 真实项目中应使用后端返回的当前时间
});

const over = ref<boolean>(false);
</script>

<template>
  <div por w-full>
    <!-- src\pages\html\VisualDesign\components\ActivityCountDown.vue -->
    <div poa t-20px w-full text-center z-10 c="#fff">
      <p>此案例通过组件实现, 可改为组合式函数实现, 函数只更新数据, 风格由用户自定</p>
    </div>
    <div class="container">
      <div class="title">
        {{ over ? "活动正在进行中" : "距离活动开始剩余：" }}
      </div>
      <template v-if="!over">
        <CountDown :countParams="timeParams" :overCallback="() => {
          over = true;
        }" style="margin-top: 16px" />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    color: #ccc;
  }
}
</style>