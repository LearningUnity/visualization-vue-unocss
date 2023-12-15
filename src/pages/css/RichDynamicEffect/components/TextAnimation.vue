
<script setup lang="ts">
import ModuleTitle from "components/ModuleTitle.vue";
</script>

<template>
  <div por w-full>
    <p poa tl-0 opacity-50 z-2>TextAnimation</p>
    <p poa t-50px w-full text-center fs-12px z-2 c="#1cbafb">
      ● p样式灰色, p::before 写了一个高亮的文本, 做动画显示 <br>
      ● 回退动画: 90% → width: 100%; 100% → width: 0; <br>
    </p>
    <div class="container">
      <ModuleTitle i18nTitle="page.cssDynamicEffect.richDynamicEffect.luminousText" />
      <p data-text="♠ CSS Animation ♣">♠ CSS Animation ♣</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 100px 0 60px;
  background-color: #000;
  position: relative;

  .container p {
    font-size: 64px;
    font-weight: 500;
    color: #222;
    position: relative;

    &::before {
      content: attr(data-text);
      position: absolute;
      color: #fff;
      overflow: hidden;
      white-space: nowrap;
      border-right: 4px solid #fff;
      animation: move 8s linear infinite;
      filter: drop-shadow(0 0 20px #fff) drop-shadow(0 0 50px #fff);
    }

    @keyframes move {

      0%,
      10%,
      100% {
        width: 0;
      }

      70%,
      90% {
        width: 100%;
      }
    }
  }
}
</style>