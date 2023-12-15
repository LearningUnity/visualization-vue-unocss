<script setup lang="ts">
import ModuleTitle from 'components/ModuleTitle.vue';
</script>

<template>
  <div por w-full>
    <p poa tl-0 opacity-50 z-2>TextOutlineAnimation2</p>
    <p poa t-50px w-full text-center fs-12px z-2 c="#1cbafb">
      ● 1个svg, 执行文字边的动画<br>
      ● 初始: 根据文字设置 设置线段长度 与 线段间距 <br>
      ● 动画: 设置线段偏移位置 = 线段长度+线段间距 <br>
    </p>
    <div class="container">
      <ModuleTitle i18nTitle="page.cssDynamicEffect.richDynamicEffect.textLineLoop" />
      <div class="content">
        <svg>
          <!-- 被重用的元素id -->
          <symbol id="text">
            <text text-anchor="middle" x="50%" y="80%">
              求佛
            </text>
          </symbol>
          <!-- <use> 元素可以复制和重用其他元素。xlink:href 属性用于指定要复制的元素的 ID。 -->
          <use xlink:href="#text" class="text"></use>
          <use xlink:href="#text" class="text"></use>
          <use xlink:href="#text" class="text"></use>
          <use xlink:href="#text" class="text"></use>
          <use xlink:href="#text" class="text"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 380px;
  display: flex;
  justify-content: center;
  position: relative;

  $color1: #b80c09;
  $color2: #fffc31;
  $color3: #d5f2e3;
  $color4: #03f7eb;
  $color5: #b91372;
  $animationTime: 6s;
  $dottedLineLength: 60;
  $dottedLineSpace: 300;
  $delaySpace: -1.2s;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 210px;

    svg {
      width: 400px;
      height: 260px;
      display: flex;
      justify-content: center;
      align-items: center;

      .text {
        fill: none;
        stroke: #fff;
        stroke-width: 4px;
        // 设置线段长度 与 线段间距
        stroke-dasharray: $dottedLineLength $dottedLineSpace;
        animation: stroke $animationTime linear infinite;

        &:nth-of-type(1) {
          stroke: $color1;
        }

        &:nth-of-type(2) {
          stroke: $color2;
          animation-delay: $delaySpace;
        }

        &:nth-of-type(3) {
          stroke: $color3;
          animation-delay: $delaySpace * 2;
        }

        &:nth-of-type(4) {
          stroke: $color4;
          animation-delay: $delaySpace * 3;
        }

        &:nth-of-type(5) {
          stroke: $color5;
          animation-delay: $delaySpace * 4;
        }
      }
    }
  }

  @keyframes stroke {
    to {
      // 线段开始位置 = 线段长度 + 线段间距
      stroke-dashoffset: $dottedLineLength + $dottedLineSpace;
    }
  }
}
</style>