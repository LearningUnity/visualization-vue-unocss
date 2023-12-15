<template>
  <div por w-full>
    <!-- src\pages\html\VisualDesign\components\AnnulusLoading.vue -->
    <div poa t-20px w-full text-center c="#fff">
      由7个半圆组成, 边框设置实现, animation-delay 延迟播放动画
    </div>
    <div class="annulusLoading" fccc w-full h-360px>
      <div class="content" por w-200px cursor-pointer>
        <div class="item1" />
        <div class="item2" />
        <div class="item3" />
        <div class="item4" />
        <div class="item5" />
        <div class="item6" />
        <div class="item7" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.annulusLoading {
  // width: 100%;
  // height: 360px;
  // display: flex;
  // justify-content: center;
  // align-items: center;

  $width: 200px;
  $height: 100px;
  $gap: 15px;

  .content {
    // width: $width;
    // height: $height;
    // margin-top: -$height;
    // position: relative;
    // cursor: pointer;

    .item {
      border: 5px solid;
      // 圆角半径 [圆角水平半径/圆角垂直半径]  top-left(50% 100%) top-right bottom-right bottom-left
      border-radius: 50% 50% 0 0/100% 100% 0 0;
      border-bottom: none;
      position: absolute;
      bottom: 0;
      // 0.11 1.3 曲线的起点和终点 0.85 0.22 曲线的控制点
      animation: rotate 2s cubic-bezier(0.11, 0.85, 0.22, 1.3) infinite;
      transform-origin: 50% 100%;
      transition: all 0.5s;
    }

    .item1 {
      @extend .item;
      border-color: #e94545;
      $width1: $width;
      width: $width1;
      height: calc($width1 / 2);
      left: calc(50% - $width1 / 2);
    }

    .item2 {
      @extend .item;
      border-color: #eb8f34;
      $width2: calc($width - $gap * 2);
      width: $width2;
      height: calc($width2 / 2);
      left: calc(50% - $width2 / 2);
      animation-delay: -60ms;
    }

    .item3 {
      @extend .item;
      border-color: #eecf69;
      $width3: calc($width - $gap * 2 * 2);
      width: $width3;
      height: calc($width3 / 2);
      left: calc(50% - $width3 / 2);
      animation-delay: calc(-60ms * 2);
    }

    .item4 {
      @extend .item;
      border-color: #215221;
      $width4: calc($width - $gap * 2 * 3);
      width: $width4;
      height: calc($width4 / 2);
      left: calc(50% - $width4 / 2);
      animation-delay: calc(-60ms * 3);
    }

    .item5 {
      @extend .item;
      border-color: #87bb80;
      $width5: calc($width - $gap * 2 * 4);
      width: $width5;
      height: calc($width5 / 2);
      left: calc(50% - $width5 / 2);
      animation-delay: calc(-60ms * 4);
    }

    .item6 {
      @extend .item;
      border-color: #87ceeb;
      $width6: calc($width - $gap * 2 * 5);
      width: $width6;
      height: calc($width6 / 2);
      left: calc(50% - $width6 / 2);
      animation-delay: calc(-60ms * 5);
    }

    .item7 {
      @extend .item;
      border-color: #c393eb;
      $width7: calc($width - $gap * 2 * 6);
      width: $width7;
      height: calc($width7 / 2);
      left: calc(50% - $width7 / 2);
      animation-delay: calc(-60ms * 6);
    }

    &:hover {
      .item {
        filter: brightness(1.5);
        animation-play-state: paused;
      }
    }

    @keyframes rotate {

      0%,
      25% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>