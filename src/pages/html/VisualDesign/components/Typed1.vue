<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// 最终显示的文本
const finalText = 'Legends never die';
// 每隔100ms更新一次
const perMs = 100;
const finalTextArr = ref<string[]>([]);
const curTextArr = ref<string[]>([]);
// 显示的文本
const curText = ref(finalText)

// 定时器句柄
const itHandle = ref();
// 点击按钮
const onBtnClick = () => {
  // 将 curTextArr 数组内的元素转移到 finalTextArr
  // finalTextArr.value = finalText.split('');
  // curTextArr.value = [];
  clearInterval(itHandle.value);
  let curTextArrLength = curTextArr.value.length;
  for (let i = 0; i < curTextArrLength; i++) {
    finalTextArr.value.unshift(curTextArr.value.pop() as string);
  }
  let index = 0;
  let finalTextArrLength = finalTextArr.value.length;
  itHandle.value = setInterval(() => {
    if (index === finalTextArrLength) {
      clearInterval(itHandle.value);
      return;
    }
    curTextArr.value.push(finalTextArr.value.shift() as string);
    curText.value = curTextArr.value.join('');
    index++;
  }, perMs)
};

onMounted(() => {
  finalTextArr.value = finalText.split('');
})

onUnmounted(() => {
  finalTextArr.value = [];
  curTextArr.value = [];
  itHandle.value && clearInterval(itHandle.value);
})
</script>

<template>
  <div w-full>
    <!-- src\pages\html\VisualDesign\components\Typed1.vue -->
    <div fccc w-full h-360px bg-linear-gradient="to-right,#04182C, #000c17, #04182C">
      <p h-54px lh-48px text-center whitespace-nowrap fs-44px fw-500>{{ curText }}</p>
      <a-button type="primary" mt-80px @click="onBtnClick">
        Once Again
      </a-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
// .container {
// width: 100%;
// height: 360px;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// background-image: linear-gradient(to right, #04182C, #000c17, #04182C);

// p {
//   font-size: 44px;
//   font-weight: 500;
//   height: 54px;
//   line-height: 48px;
//   text-align: center;
//   white-space: nowrap;
// }

// .btn {
//   margin-top: 80px;
// }
// }
</style>