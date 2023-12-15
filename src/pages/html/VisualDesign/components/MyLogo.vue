<script setup lang="ts">
const list = new Array(3).fill(0);
</script>

<template>
  <div por w-full>
    <!-- src\pages\html\VisualDesign\components\MyLogo.vue -->
    <div poaxc t-20px c="#fff">由4个部分组成, 左上矩形--中间背景大圆--中间小圆--底部小矩形</div>
    <div class="container" frcc flex-1 w-full h-360px bgc="#000">
      <div v-for="(_, index) in list" :key="index" :class="`box${index + 1}`">
        <div class="leftTopRect" />
        <div class="circle" />
        <div class="middleRect" />
        <div class="bottomRect" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  // width: 100%;
  // height: 360px;
  // display: flex;
  // flex: 1;
  // justify-content: center;
  // align-items: center;
  $backgroundColor: #000;
  // background-color: $backgroundColor;

  $logoWidth: 100px;

  @mixin box($logoColor) {
    width: $logoWidth;
    height: $logoWidth;
    position: relative;

    .leftTopRect {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: calc($logoWidth / 2);
      height: calc($logoWidth / 2);
      background-color: $logoColor;
      z-index: 1;
    }

    .circle {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 50%;
      width: $logoWidth;
      height: $logoWidth;
      background-color: $logoColor;
      z-index: 2;
    }

    .middleRect {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 20%;
      width: calc($logoWidth / 3);
      height: calc($logoWidth / 3);
      margin: 0 auto;
      background-color: $backgroundColor;
      border-radius: 50%;
      z-index: 2;
    }

    .bottomRect {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      width: calc($logoWidth / 3);
      height: calc($logoWidth / 3);
      border-radius: 4px;
      margin: 0 auto;
      background-color: $backgroundColor;
      z-index: 2;
    }
  }

  .box1 {
    @include box(#10a19d);
  }

  .box2 {
    @include box(#d23369);
    margin-left: 50px;
  }

  .box3 {
    @include box(#393e46);
    margin-left: 50px;
  }
}
</style>
