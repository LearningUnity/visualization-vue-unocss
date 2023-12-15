<script setup lang="ts">
const list = new Array(300).fill(0);
</script>

<template>
  <div por w-full h-475px overflow-hidden>
    <!-- src\pages\html\VisualDesign\components\HexagonalMesh.vue -->
    <div poa t-20px w-full text-center z-10 c="#fff">
      <p>300个div, clip-path六边形; 颜色过渡在父节点的after伪元素; 父节点before使用了shape-outside,定义周围元素的形状</p>
      <p>shape-outside Android4.4.4 不支持</p>
    </div>
    <div class="container">
      <div v-for="(_, index) in list" :key="index" class="item" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  $itemWidth: 50px;
  $margin: 4px;
  $perHeight: calc(1.732 * $itemWidth + 4 * $margin - 1px);

  width: 120%;
  height: 120%;
  margin-bottom: calc($itemWidth / -2);
  flex: 1 0 120%;
  transform: translate(-10%, calc($itemWidth / -2));
  position: relative;
  background: #000;
  // font-size必须
  font-size: 0;

  &::before {
    content: "";
    height: 100%;
    width: calc(($itemWidth / 2) + calc($margin / 2));
    // 渐变值
    shape-outside: repeating-linear-gradient(transparent 0,
        transparent 80px,
        #000 80px,
        #000 $perHeight );
    float: left;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg,
        #f44336,
        #ff9800,
        #ffe607,
        #09d7c4,
        #1cbed3,
        #1d8ae2,
        #bc24d6);
    z-index: 1;
    mix-blend-mode: darken;
    animation: change 10s infinite linear;
  }

  .item {
    width: $itemWidth;
    height: calc($itemWidth * 1.1547);
    background: #fff;
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    margin: $margin;
    margin-bottom: calc($margin - $itemWidth * 0.2885);
    display: inline-block;
  }

  @keyframes change {
    100% {
      filter: hue-rotate(360deg);
    }
  }
}
</style>
