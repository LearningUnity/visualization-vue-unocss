<script setup lang="ts">
import { onUnmounted } from 'vue';
import { ref } from 'vue';

// 最终显示的文本
const finalText = 'Hello World';
// 1900ms内完成
const totalMs = 1900;
// 每隔100ms更新一次
const perMs = 100;
// 显示的文本
const curText = ref(finalText)
// 生成更新的文本
const generateUpdateTexts = () => {
  const resultArr = [];
  const finalArr = finalText.split('');
  console.log(finalArr)
  const finalArrLength = finalArr.length;
  const totalTimes = Math.ceil(totalMs / perMs);
  const del = totalTimes - finalArrLength >= 0 ? totalTimes - finalArrLength : 0;
  for (let i = 0; i < totalTimes; i++) {
    let tempArr = [];
    for (let j = 0; j < finalArrLength; j++) {
      let finalItem = finalArr[j];
      if (finalItem === ' ') {
        // 空格不变
        tempArr.push(' ');
      } else {
        if (i === totalTimes - 1) {
          // 最后一次循环, 保证最终结果与目标结果一致
          tempArr.push(finalItem);
        } else {
          if (i > del && j < i - del) {
            tempArr.push(finalItem);
          } else {
            // 从26个小写字母中随机取一个
            const randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
            // 如果finalItem是大写字母, 则将randomLetter转换为大写字母
            if (finalItem === finalItem.toUpperCase()) {
              tempArr.push(randomLetter.toUpperCase());
            } else {
              tempArr.push(randomLetter);
            }
          }
        }
      }
    }
    resultArr.push(tempArr);
  }
  return resultArr;
}
// 定时器句柄
const itHandle = ref();
// 点击按钮
const onBtnClick = () => {
  clearInterval(itHandle.value);
  let resultArr = generateUpdateTexts();
  console.log(resultArr)
  let index = 0;
  itHandle.value = setInterval(() => {
    if (index === resultArr.length) {
      clearInterval(itHandle.value);
      return;
    }
    curText.value = resultArr[index].join('');
    index++;
  }, perMs)
};
onUnmounted(() => {
  itHandle.value && clearInterval(itHandle.value);
})
</script>

<template>
  <div w-full>
    <!-- src\pages\html\VisualDesign\components\SwitchingText.vue -->
    <div fccc w-full h-360px bg-linear-gradient="to-right,#04182C, #000c17, #04182C">
      <p fs-50px fw-bold>{{ curText }}</p>
      <a-button type="primary" mt-40px @click="onBtnClick">
        Once Again
      </a-button>
    </div>
  </div>
</template>
  
<style scoped lang="scss">
// .container {
//   width: 100%;
//   height: 360px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-image: linear-gradient(to right, #04182C, #000c17, #04182C);

//   .content {
//     span {
//       font-size: 50px;
//       font-weight: bold;
//     }
//   }

//   .btn {
//     margin-top: 40px;
//   }
// }
</style>