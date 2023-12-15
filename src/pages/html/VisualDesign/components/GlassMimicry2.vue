<template>
  <div w-full>
    <!-- src\pages\html\VisualDesign\components\GlassMimicry2.vue -->
    <div por w-full h-560px
      bg-radial-gradient="circle-at-60-90,#31689f,transparent-60/circle-at-20px-20px,#31689f80,transparent-25/#182336">
      <!-- 卡片 -->
      <div poa tl-0 rb-0 m-auto w-260px h-400px text-center overflow-hidden bdr-rd-20px z-10 c="#ffffff80" rotate-20
        bdr-b="1px,solid,#ffffff40" bdr-r="1px,solid,#ffffff40"
        shadow="-10px,-10px,20px,#00000020/10px,10px,20px,#ffffff10"
        un-after="content-empty poa tl-0 rb-0 m--20px bdr-rd-20px blur-10px z--1"
        un-after-bg-linear-gradient='to-top-left,#5A95CF70,#3A4C6390'>
        <h1 mt-50px>TiKi Platinum</h1>
        <h2 mt-160px>6228 8076 2232 8768</h2>
        <h3 mt-20px pl-60px text-left uppercase>van conf banck</h3>
        <h4 mt-10px pl-60px text-left>03 / 29</h4>
      </div>
      <!-- 圆形 -->
      <div poa l-p-50 b-20px wh-160px bdr-rd-80px bg-linear-gradient="to-top-left,#8775f6,#4fa3eb"></div>
      <!-- 矩形 -->
      <div poa r-p-50 t-20px wh-160px bdr-rd-20px bg-linear-gradient="to-top-left,#8774F990,#4BA2ED90"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// .container {
//   width: 100%;
//   height: 560px;
//   background: radial-gradient(circle at 60% 90%,
//       rgba(46, 103, 161, 1),
//       transparent 60%),
//     radial-gradient(circle at 20px 20px,
//       rgba(46, 103, 161, 0.8),
//       transparent 25%),
//     #182336;
//   position: relative;

//   .card {
//     width: 260px;
//     height: 400px;
//     position: absolute;
//     left: 0;
//     right: 0;
//     top: 0;
//     bottom: 0;
//     margin: auto;
//     z-index: 10;
//     color: rgba(255, 255, 255, 0.8);
//     text-align: center;
//     border-bottom: 1px solid rgba(255, 255, 255, 0.4);
//     border-right: 1px solid rgba(255, 255, 255, 0.4);
//     box-shadow: -10px -10px 20px rgba(0, 0, 0, 0.2),
//       10px 10px 20px rgba(255, 255, 255, 0.1);
//     border-radius: 20px;
//     transform: rotate(20deg);
//     overflow: hidden;

//     &::after {
//       content: "";
//       position: absolute;
//       left: 0;
//       right: 0;
//       top: 0;
//       bottom: 0;
//       border-radius: 20px;
//       background-image: linear-gradient(to top left,
//           rgba(90, 149, 207, 0.7),
//           rgba(58, 76, 99, 0.9));
//       z-index: -1;
//       filter: blur(10px);
//       margin: -20px;
//     }

//     h1 {
//       margin-top: 50px;
//     }

//     h2 {
//       margin-top: 160px;
//     }

//     h3,
//     h4 {
//       padding-left: 60px;
//       text-align: left;
//     }

//     h3 {
//       margin-top: 20px;
//       text-transform: uppercase;
//     }

//     h4 {
//       margin-top: 10px;
//     }
//   }

//   .circle {
//     width: 160px;
//     height: 160px;
//     position: absolute;
//     left: 50%;
//     bottom: 20px;
//     background-image: linear-gradient(to top left,
//         rgb(135, 116, 249),
//         rgb(75, 162, 237));
//     border-radius: 80px;
//   }

//   .rect {
//     width: 160px;
//     height: 160px;
//     position: absolute;
//     right: 50%;
//     top: 20px;
//     background-image: linear-gradient(to top left,
//         rgba(135, 116, 249, 0.9),
//         rgba(75, 162, 237, 0.9));
//     border-radius: 20px;
//   }
// }
</style>