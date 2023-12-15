
<script setup lang="ts">
import ModuleTitle from 'components/ModuleTitle.vue';
</script>

<template>
  <div por w-full>
    <p poa tl-0 opacity-50 z-2>TankShaking</p>
    <p poa t-50px w-full text-center fs-12px z-2 c="#1cbafb">
      ● 瓶子 + 瓶盖(瓶子::before) + 水 + 水波(水::before) <br>
      ● 瓶子摇晃动画: 摇晃瓶子: transform: rotate(0→15→0→-15→0) <br>
      ● 水摇晃+颜色动画: 
      1. 摇晃水: transform: rotate(0→-15→0→15→0); (角度与瓶子正好相反) <br>
      2. 颜色变化: filter: drop-shadow(0 0 50px #41c1fb) hue-rotate(0deg→360deg) <br>
      ● 底部影子div+左右移动动画 <br>
    </p>
    <div class="container">
      <ModuleTitle i18nTitle="page.cssDynamicEffect.richDynamicEffect.tankShaking" />
      <div class="content">
        <div class="bottle">
          <div class="water" />
        </div>
        <div class="bottleBottom" />
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
  padding-top: 120px;
  position: relative;

  $bottleWidth: 200px;

  .content {
    display: flex;
    flex-direction: column;
    position: relative;

    .bottle {
      width: $bottleWidth;
      height: $bottleWidth;
      background-color: #ffffff1a;
      border-radius: 50%;
      position: relative;
      animation: animate 2s linear infinite;
      transform-origin: bottom center;
      z-index: 2;

      &::before {
        content: "";
        position: absolute;
        top: -5px;
        left: 50%;
        width: calc($bottleWidth / 2);
        height: calc($bottleWidth / 5);
        border-radius: 50%;
        transform: translate(-50%);
        background-color: #505250;
        box-shadow: 0 calc($bottleWidth / 30) 5px #000;
      }

      .water {
        position: absolute;
        top: 50%;
        bottom: 10px;
        left: 10px;
        right: 10px;
        background-color: #41c1fb;
        border-bottom-left-radius: calc($bottleWidth / 2);
        border-bottom-right-radius: calc($bottleWidth / 2);
        animation: animate2 2s linear infinite;
        transform-origin: top center;

        &::before {
          content: "";
          width: 100%;
          height: 20px;
          background-color: #0da2e7;
          border-radius: 50%;
          position: absolute;
          top: -10px;
          left: 0;
        }
      }
    }

    .bottleBottom {
      position: absolute;
      top: calc(100% - 66px);
      left: 50%;
      width: $bottleWidth;
      height: 30px;
      background-color: rgba(0, 0, 0, 0.5);
      transform: translateX(-50%);
      border-radius: 50%;
      animation: move 2s linear infinite;
    }
  }

  @keyframes animate {
    0% {
      transform: rotate(0);
    }

    25% {
      transform: rotate(15deg);
    }

    50% {
      transform: rotate(0);
    }

    75% {
      transform: rotate(-15deg);
    }

    100% {
      transform: rotate(0);
    }
  }

  @keyframes animate2 {
    0% {
      transform: rotate(0);
      filter: drop-shadow(0 0 50px #41c1fb) hue-rotate(0deg);
    }

    25% {
      transform: rotate(-15deg);
    }

    50% {
      transform: rotate(0);
    }

    75% {
      transform: rotate(15deg);
    }

    100% {
      transform: rotate(0);
      filter: drop-shadow(0 0 50px #41c1fb) hue-rotate(360deg);
    }
  }

  @keyframes move {
    0% {
      transform: translateX(-50%);
    }

    25% {
      transform: translateX(calc(-50% + $bottleWidth / 10));
    }

    50% {
      transform: translateX(-50%);
    }

    75% {
      transform: translateX(calc(-50% - $bottleWidth / 10));
    }

    100% {
      transform: translateX(-50%);
    }
  }
}
</style>