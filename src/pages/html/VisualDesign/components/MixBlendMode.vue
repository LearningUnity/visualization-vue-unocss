<template>
  <div w-full>
    <!-- src\pages\html\VisualDesign\components\MixBlendMode.vue -->
    <div class="container" fccc w-full h-360px bg-linear-gradient="to-right, #04182C, #000c17, #04182C">
      <div class="content" por w-600px h-160px bg-linear-gradient="45,#000-0,#000-50,#fff-50"
        un-after="content-[quoted:Hello_World] poa t-p-50 l-p-50 fs-56px whitespace-nowrap mix-blend-difference"
        un-after-c="#fff" un-after-translate-x="-14%" un-after-translate-y="-50%" un-after-animate-helloworld>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// .container {
//   width: 100%;
//   height: 360px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-image: linear-gradient(to right, #04182C, #000c17, #04182C);

//   .content {
//     width: 600px;
//     height: 160px;
//     background-image: linear-gradient(45deg, #000 0, #000 50%, #fff 50%);
//     position: relative;

//     &::after {
//       animation-name: move;
//       content: "Hello World";
//       position: absolute;
//       white-space: nowrap;
//       top: 50%;
//       left: 50%;
//       font-size: 56px;
//       transform: translate(-14%, -50%);
//       color: #fff;
//       mix-blend-mode: difference;
//       animation: move 5s infinite linear;
//     }

//     @keyframes move {
//       0% {
//         transform: translate(-14%, -50%);
//       }

//       50% {
//         transform: translate(-86%, -50%);
//       }

//       100% {
//         transform: translate(-14%, -50%);
//       }
//     }
//   }
// }
</style>