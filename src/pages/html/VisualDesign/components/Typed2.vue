<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

/** 错误信息 */
interface IErrorInfo {
  /** 开始错误的索引 */
  index: number;
  /** 错误的字符数组 */
  errorLetters: string[];
  /** 正确的字符数组 */
  // correctLetters: string[];
  /** 错误长度 */
  errorLength: number;
  /** 是否已经开始排错 */
  isStart: boolean;
}

// 最终显示的文本
const finalText = 'Legends never die';
// 每隔100ms更新一次
const perMs = 100;
// 出错次数
const errorTimes = 3;
// 排错最长长度
const errorMaxLength = 5;
// 排错最短长度
const errorMinLength = 3;

const finalTextArr = ref<string[]>([]);
const curTextArr = ref<string[]>([]);
const errorInfoArr = ref<IErrorInfo[]>([]);
// 显示的文本
const curText = ref(finalText)

// 定时器句柄
const itHandle = ref();
// 点击按钮
const onBtnClick = () => {
  clearInterval(itHandle.value);
  finalTextArr.value = finalText.split('');
  curTextArr.value = [];

  // 生成错误信息
  errorInfoArr.value = [];
  let finalTextArrLength = finalTextArr.value.length;
  let errorTimesTemp = errorTimes;
  while (errorTimesTemp > 0) {
    let errorIndex = Math.floor(Math.random() * finalTextArrLength);
    let errorInfo = errorInfoArr.value.find(item => item.index === errorIndex);
    if (errorInfo) {
      // 如果已经存在, 则跳过
      continue;
    }
    let errorLength = Math.min(
      Math.max(Math.floor(Math.random() * errorMaxLength) + 1, errorMinLength),
      finalTextArrLength - errorIndex
    );
    let errorLetters = [];
    // let correctLetters = [];
    for (let i = 0; i < errorLength; i++) {
      errorLetters.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
      // correctLetters.push(finalTextArr.value[errorIndex + i]);
    }
    errorInfoArr.value.push({
      index: errorIndex,
      errorLetters: errorLetters,
      // correctLetters,
      errorLength,
      isStart: false
    });
    errorTimesTemp--;
  }
  // 根据索引从小到大排序
  errorInfoArr.value.sort((a, b) => a.index - b.index);
  // console.log(JSON.stringify(errorInfoArr.value));

  itHandle.value = setInterval(() => {
    if (curTextArr.value.length === finalTextArrLength && errorInfoArr.value.length === 0) {
      clearInterval(itHandle.value);
      return;
    }
    let curIndex = curTextArr.value.length;
    // 判断是否有错误信息, 如果有, 则判断是否已经开始排错, 
    // 如果没有, 则错误信息内的索引, 将错误信息内的错误字符按索引赋值给curTextArr
    // 如果已经开始排错, 每个循环剔除一个curTextArr的错误字符, 直到索引等于错误信息的初始索引, 将错误信息移除
    if (errorInfoArr.value.length > 0) {
      let errorInfo = errorInfoArr.value[0];
      if (!errorInfo.isStart) {
        // 还未开始排错
        if (curIndex < errorInfo.index) {
          curTextArr.value.push(finalTextArr.value.shift() as string);
        } else if (curIndex < errorInfo.index + errorInfo.errorLength) {
          // 如果curIndex在错误信息的索引范围内, 则将错误信息内的错误字符按索引赋值给curTextArr
          curTextArr.value.push(errorInfo.errorLetters[curIndex - errorInfo.index]);
        } else if (curIndex === errorInfo.index + errorInfo.errorLength) {
          curTextArr.value.push(errorInfo.errorLetters[curIndex - errorInfo.index]);
          errorInfo.isStart = true;
        }
      } else {
        // 已经开始排错
        let lastIndex = curIndex - 1;
        if (lastIndex > errorInfo.index) {
          // 删除错误字符
          curTextArr.value.pop();
        } else {
          curTextArr.value.pop();
          errorInfoArr.value.shift();
        }
      }
    } else {
      curTextArr.value.push(finalTextArr.value.shift() as string);
    }
    curText.value = curTextArr.value.join('');
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
    <!-- src\pages\html\VisualDesign\components\Typed2.vue -->
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