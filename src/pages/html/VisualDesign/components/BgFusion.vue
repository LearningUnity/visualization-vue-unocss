<template>
  <div por w-full>
    <!-- src\pages\html\VisualDesign\components\BgFusion.vue -->
    <div poaxc t-20px z-10 c="#fff">filter: contrast 方式实现(-webkit)</div>
    <div class="container" por fccc flex-1 w-full h-360px contrast-1000 bgc="#000"
      un-before="content-empty poa l-p-50 t-p-50 mt--65px ml--150px bdr-rd-50 wh-130px blur-5px" un-before-bgc="yellow"
      un-after="content-empty poa r-p-50 t-p-50 mt--45px mr--110px bdr-rd-50 wh-90px blur-5px" un-after-bgc="red" />
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
  // background-color: #000;
  // position: relative;
  // filter: contrast(10);

  &::before {
    // content: "";
    // position: absolute;
    // width: 130px;
    // height: 130px;
    // border-radius: 50%;
    // left: 50%;
    // top: 50%;
    // margin-top: -65px;
    // margin-left: -150px;
    // background-color: yellow;
    // filter: blur(5px);
    animation: moveToRight 5s linear infinite;
  }

  &::after {
    // content: "";
    // position: absolute;
    // width: 90px;
    // height: 90px;
    // border-radius: 50%;
    // right: 50%;
    // top: 50%;
    // margin-top: -45px;
    // margin-right: -110px;
    // background-color: red;
    // filter: blur(5px);
    animation: moveToLeft 5s linear infinite;
  }

  @keyframes moveToRight {
    50% {
      margin-left: 0px;
    }
  }

  @keyframes moveToLeft {
    50% {
      margin-right: 0px;
    }
  }
}
</style>