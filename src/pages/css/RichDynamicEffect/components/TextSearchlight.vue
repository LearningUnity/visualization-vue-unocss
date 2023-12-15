
<script setup lang="ts">
import ModuleTitle from "components/ModuleTitle.vue";
</script>

<template>
  <div por w-full>
    <p poa tl-0 opacity-50 z-2>TextSearchlight</p>
    <p poa t-50px w-full text-center fs-12px z-2 c="#1cbafb">
      ● before多彩文字: background-image + background-clip: text <br>
      ● clip-path: 创建一个剪切区域, 定义元素可见部分; <br>
      ● clip-path: ellipse(60px 60px at 0% 50%); <br>
      ellipse--椭圆 (水平半径 垂直半径 at 椭圆中心x点(位于宽度0%) 椭圆中心y点(位于高度50%)); <br>
    </p>
    <div class="container">
      <ModuleTitle i18nTitle="page.cssDynamicEffect.richDynamicEffect.searchlightText" />
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
    font-family: "SourceHanSansCN-Bold" !important;
    font-weight: 700;
    color: #222;
    position: relative;

    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      background-image: linear-gradient(to right,
          rgb(236, 72, 153),
          rgb(239, 68, 68),
          rgb(234, 179, 8));
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      clip-path: ellipse(60px 60px at 0% 50%);
      animation: move 8s ease-in-out infinite;
    }
  }

  @keyframes move {
    50% {
      clip-path: ellipse(60px 60px at 100% 50%);
    }

    100% {
      clip-path: ellipse(60px 60px at 0% 50%);
    }
  }
}
</style>