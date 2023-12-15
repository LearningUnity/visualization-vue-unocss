<script setup lang="ts">
import ModuleTitle from 'components/ModuleTitle.vue';
</script>

<template>
  <div por w-full>
    <p poa tl-0 opacity-50 z-2>MobiusBand1</p>
    <p poa t-50px w-full text-center fs-12px z-2 c="#1cbafb">
      ● 灰底: content::before/after<br>
      ● 一共分四个弧形, 每个弧形135°, 设置可见区域为上/下半圆, 通过clip-path隐藏不需要显示的部分<br>      
    </p>
    <div class="container">
      <ModuleTitle i18nTitle="page.cssDynamicEffect.richDynamicEffect.mobiusLoopBar" />
      <div class="content">
        <div class="leftTop">
          <div />
        </div>
        <div class="leftBottom">
          <div />
        </div>
        <div class="rightTop">
          <div />
        </div>
        <div class="rightBottom">
          <div />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 360px;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  position: relative;

  $circleWidth: 154px;
  $borderWidth: 16px;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &::before,
    &::after {
      content: "";
      width: $circleWidth;
      height: $circleWidth;
      border-radius: 50%;
      border: $borderWidth solid #57606f;
      box-sizing: border-box;
      position: relative;
      z-index: 1;
    }

    &::after {
      left: -$borderWidth;
    }

    div {
      width: $circleWidth;
      height: $circleWidth;
      position: absolute;
      left: 0;
      // 裁剪上半部分 (0 0 左上角, 100% 0 右上角, 100% 50% 右边中点, 0 50% 左边中点)
      clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
      z-index: 2;

      div {
        width: $circleWidth;
        height: $circleWidth;
        box-sizing: border-box;
        border-width: $borderWidth;
        border-style: solid;
        border-color: #ff6b81 #ff6b81 transparent transparent;
        border-radius: 50%;
        transform: rotate(135deg);
        animation: roll 4s linear infinite;
      }
    }

    .leftBottom {
      // 旋转180°
      transform: scale(-1, -1);

      div {
        animation-delay: 3s;
      }
    }

    .rightTop {
      // 旋转90°
      transform: translateX(calc(100% - $borderWidth)) scale(-1, 1);

      div {
        animation-delay: 2s;
      }
    }

    .rightBottom {
      // 旋转270°
      transform: translateX(calc(100% - $borderWidth)) scale(1, -1);

      div {
        animation-delay: 1s;
      }
    }
  }

  @keyframes roll {

    50%,
    100% {
      transform: rotate(495deg);
    }
  }
}
</style>