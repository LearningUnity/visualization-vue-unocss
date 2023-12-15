<template>
  <div por w-full>
    <p poaxc t-10px fs-20px fw-bold z-2 c="#000">视频在文字里播放</p>
    <p poa tl-0 opacity-50 z-2 c="#000">PlayVideoInText</p>
    <p poa t-50px w-full text-center fs-12px z-2 c="#1cbafb">
      ● 在video上铺了一个全屏的p标签 <br>
      ● p标签的文字颜色设置为黑色(#000), 背景颜色设置为白色(#fff) <br>
      ● p标签的mix-blend-mode设置为screen, 表示将p标签与背景色(或下面的元素)混合 <br>
      1. p标签文字的黑色(#000)与video的色值融合, 显示video的色值 <br>
      2. p标签背景色的白色(#fff)与video的色值融合, 显示p标签的背景色(#fff) <br>
    </p>
    <div class="container">
      <video muted autoPlay preload="true" loop x5-video-player-fullscreen="true" x5-playsinline="true" playsInline
        webkit-playsinline="true">
        <source src="/vista.mp4" />
      </video>
      <p>River</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 600px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;

  video {
    width: 100%;
    height: auto;
    // 元素的内容会等比例缩放，直到其宽度和高度完全覆盖其内容框，可能会超出内容框。
    object-fit: cover;
  }

  .container p {
    position: absolute;
    width: 100%;
    height: 600px;
    line-height: 600px;
    left: 0;
    top: 0;
    background-color: #fff;
    font-size: 22vw;
    font-weight: 600;
    text-align: center;
    color: #000;
    mix-blend-mode: screen;
  }
}
</style>