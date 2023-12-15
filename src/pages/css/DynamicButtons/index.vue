/**
 * 动效按钮
 */
<script setup lang="ts">
import GridContent from 'components/GridContent/index.vue';
import GridBox from 'components/GridContent/GridBox.vue';
import TiltButton from './components/TiltButton.vue';
import RotateBgButton from "./components/RotateBgButton.vue";
import IconMoveButton from './components/IconMoveButton.vue';
import NeonButton from './components/NeonButton.vue';
import BorderAnimationButton from "./components/BorderAnimationButton.vue";
import BorderAnimationButton2 from "./components/BorderAnimationButton2.vue";
import TranslateBgButton from "./components/TranslateBgButton.vue";
import RoundedGradientButton from "./components/RoundedGradientButton.vue";
import MirrorSideButton from "./components/MirrorSideButton.vue";
import ShakeButton from "./components/ShakeButton.vue";
import Skew3DButton from "./components/Skew3DButton.vue";
import HoverCircleButton from "./components/HoverCircleButton.vue";
import PunkEffectButton from "./components/PunkEffectButton.vue";
import PunkEffectButton2 from "./components/PunkEffectButton2.vue";
import BirdButton from "./components/BirdButton.vue";
import ObliqueLineButton from "./components/ObliqueLineButton.vue";
import LightningBorderButton from "./components/LightningBorderButton.vue";

const rowSpace = 4;
const colSpace = 4;
const gridboxList = [
  { element: RotateBgButton },
  { element: IconMoveButton },
  { element: NeonButton },
  { element: BorderAnimationButton },
  { element: BorderAnimationButton2 },
  { element: TranslateBgButton },
  { element: RoundedGradientButton },
  { element: MirrorSideButton },
  { element: ShakeButton },
  { element: Skew3DButton },
  { element: HoverCircleButton },
  { element: PunkEffectButton },
  { element: PunkEffectButton2 },
  { element: BirdButton },
  { element: ObliqueLineButton },
  { element: LightningBorderButton },
];
</script>

<template>
  <div fwsc>
    <div por fccc w-204px h-220px ml-8px mr-2px my-8px overflow-hidden bdr-rd-10px bdr-w-3px bdr-s-solid bdr-c="#35a2fd26"
      bg-linear-gradient="to-right,#04182c,#000c17,#04182c" v-for="(item, index) in gridboxList" :key="index">
      <p poa t-10px w-150px break-all text-center>{{ item.element.__file?.split('/').pop() }}</p>
      <component :is="item.element"> </component>
      <div v-if="index === 0" poa b-10px w-full>
        <p w-full text-center fs-13px>圆形径向渐变 <br> 每帧调整 background-position</p>
      </div>
      <div v-else-if="index === 1" poa b-10px w-full>
        <p w-full text-center fs-13px>按钮 &:hover{svg{animation}} <br> svg图片 keyframes 3段动画</p>
      </div>
      <div v-else-if="index === 2" poa b-10px w-full>
        <p w-full text-center fs-13px>:hover <br> box-shadow </p>
      </div>
      <div v-else-if="index === 3" poa b-0px w-full>
        <p w-full text-center fs-13px>
          ::before,上右边框; after,下左边框 <br>
          &:hover, 两个边框动画 <br>
          height 0.5s ease-out 0.5s; 高度形变使用0.5s, 延迟0.5s执行
        </p>
      </div>
      <div v-else-if="index === 4" poa b-0px w-full>
        <p w-full text-center fs-13px>
          ::before,上右边框; after,下左边框 <br>
          &:hover, 两个边框动画 <br>
          before/after 动画同时进行, 不延迟处理
        </p>
      </div>
      <div v-else-if="index === 5" poa b-10px w-full>
        <p w-full text-center fs-13px>
          背景由2种颜色组成, 一半一半 <br>
          背景size大小为200%, 按钮的2倍 <br>
          初始pos为100%,hover时为0%
        </p>
      </div>
      <div v-else-if="index === 6" poa b-10px w-full>
        <p w-full text-center fs-13px>
          transition: border-radius 1s <br>
          hover: bottom-right-radius 50px <br>
          hover: top-left-radius 50px
        </p>
      </div>
      <div v-else-if="index === 7" poa b-10px w-full>
        <p w-full text-center fs-13px>
          ::after 绘制黑条, 旋转-45° <br>
          :hover 改变位置
        </p>
      </div>
      <div v-else-if="index === 8" poa b-10px w-full>
        <p w-full text-center fs-13px>
          animation: 1.2s ease 1s infinite normal none running shake;
        </p>
      </div>
      <div v-else-if="index === 9" poa b-10px w-full>
        <p w-full text-center fs-13px>
          before/after 绘制左侧面/底面 <br>
          :hover translate(8px,-8px) <br>
          添加 box-shadow 
        </p>
      </div>
      <div v-else-if="index === 10" poa b-10px w-full>
        <p w-full text-center fs-13px>
          before 在按钮外绘制小白球 <br>
          :hover 获取鼠标位置 <br>
          设置小白球位置及大小
        </p>
      </div>
      <div v-else-if="index === 11" poa b-10px w-full>
        <p w-full text-center fs-13px>
          after 设置闪现效果 <br>
          动画: clip-path + animation steps <br>
          :hover 执行动画
        </p>
      </div>
      <div v-else-if="index === 12" poa b-10px w-full>
        <p w-full text-center fs-13px>
          同上 <br>
          新增 text-shadow, 添加文字阴影
        </p>
      </div>
      <div v-else-if="index === 13" poa b-0px w-full>
        <p w-full text-center fs-13px>
          文字间距: letter-spacing <br>
          背景山: 矩形背景+clip-path <br>
          箭头: 矩形背景+clip-path <br>
          sleep: 高度+border-radius
        </p>
      </div>
      <div v-else-if="index === 14" poa b-10px w-full>
        <p w-full text-center fs-13px>
          新增 span 显示边框 <br>
          span::after 作为遮罩并旋转 <br>
          :hover放大 span::after, 修改bgc
        </p>
      </div>
      <div v-else-if="index === 15" poa b-10px w-full>
        <p w-full text-center fs-13px>
          path标签的 d 属性, 绘制抖动线条 <br>
          line1类对第一条线过滤优化处理 <br>
        </p>
      </div>
    </div>
    <div fccc w-204px h-220px ml-8px mr-2px my-8px overflow-hidden bdr-rd-10px bdr-w-3px bdr-s-solid bdr-c="#35a2fd26"
      bg-linear-gradient="to-right,#04182c,#000c17,#04182c">
      <component :is="LightningBorderButton" @click="console.log(111)"></component>
    </div>
    <LightningBorderButton w-204px h-220px @click="console.log(222)"> </LightningBorderButton>
  </div>
</template>

<style scoped lang="scss">
.container {
  box-sizing: border-box;
  width: 100%;
  min-height: 100%;
  background-image: linear-gradient(135deg, #224141, #162a2a);
  padding: 2px 4px 4px;

  .box {
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000c17dd;
    border: 3px solid $buttonColor2;
    border-radius: 10px;
    overflow: hidden;
  }

  .box1 {
    .btn {
      width: $dynamicButtonsWidth;
      height: $dynamicButtonsHeight;
      margin: 20px;

      button {
        .btnText {
          font-size: 22px;
          font-weight: 400 !important;
        }
      }
    }
  }
}
</style>