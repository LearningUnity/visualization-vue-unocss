<script setup lang="ts">
import ModuleTitle from "components/ModuleTitle.vue";
</script>

<template>
  <div por w-full>
    <p poa tl-0 opacity-50 z-2>WaveFont</p>
    <p poa t-50px w-full text-center fs-12px z-2 c="#1cbafb">
      ● 分为顶层River与底层River <br>
      ● 底层River: 蓝色描边的字; color: transparent; -webkit-text-stroke: 1px #03a9f4; <br>
      ● 下层River: 字体颜色为蓝色, clip-path 隐藏无需显示的部分 <br>
      动画调整 clip-path 造成波浪效果; animation: wave 3s ease-in-out infinite; <br>
    </p>
    <div class="container">
      <ModuleTitle i18nTitle="page.cssDynamicEffect.richDynamicEffect.wavyText" />
      <h2 class="firstText">River</h2>
      <h2 class="lastText">River</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 600px;
  display: flex;
  flex: 1;
  position: relative;
  padding-top: 180px;

  @mixin text {
    position: absolute;
    top: calc(50% + 20px);
    left: 50%;
    font-size: 22vw;
    font-weight: 600;
    transform: translate(-50%, -50%);
  }

  .firstText {
    @include text;
    color: transparent;
    -webkit-text-stroke: 1px #03a9f4;
  }

  .lastText {
    @include text;
    color: #03a9f4;
    animation: wave 3s ease-in-out infinite;
  }

  @keyframes wave {

    0%,
    100% {
      clip-path: polygon(0% 47%,
          10% 48%,
          28% 54%,
          54% 50%,
          50% 61%,
          84% 59%,
          100% 52%,
          100% 100%,
          0% 100%);
    }

    50% {
      clip-path: polygon(0% 60%,
          16% 65%,
          34% 66%,
          51% 62%,
          67% 50%,
          84% 45%,
          100% 46%,
          100% 100%,
          0% 100%);
    }
  }
}
</style>