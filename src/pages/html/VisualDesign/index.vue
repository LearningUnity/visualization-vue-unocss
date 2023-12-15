/** * 视觉设计 */
<script setup lang="ts">
import useScrollToTop from "hooks/useScrollToTop";
import GridContent from "components/GridContent/index.vue";
import GridBox from "components/GridContent/GridBox.vue";
import GlassMimicry1 from "./components/GlassMimicry1.vue";
import GlassMimicry2 from "./components/GlassMimicry2.vue";
import MixBlendMode from "./components/MixBlendMode.vue";
import SwitchingText from "./components/SwitchingText.vue";
import Typed1 from "./components/Typed1.vue";
import Typed2 from "./components/Typed2.vue";
import AutoEllipsisText from "./components/AutoEllipsisText.vue";
import TextWrap from "./components/TextWrap.vue";
import BgFusion from "./components/BgFusion.vue";
import MyLogo from "./components/MyLogo.vue";
import ShearAngle from "./components/ShearAngle.vue";
import AnnulusLoading from "./components/AnnulusLoading.vue";
import Honeycomb from "./components/Honeycomb.vue";
import PizzaPie from "./components/PizzaPie.vue";
import AnnulusProgressBar from "./components/AnnulusProgressBar.vue";
import AudioLoading from "./components/AudioLoading.vue";
import FilterCSS from "./components/FilterCSS.vue";
import SudokuImageAnimation from "./components/SudokuImageAnimation.vue";
import WaterDropLogin from "./components/WaterDropLogin.vue";
import TextShadow from "./components/TextShadow.vue";
import HorseRaceLamp from "./components/HorseRaceLamp.vue";
import HarmonyLogo from "./components/HarmonyLogo.vue";
import Preserve3D from "./components/Preserve3D.vue";
import RotateAndBgFixed from "./components/RotateAndBgFixed.vue";
import HexagonalMesh from "./components/HexagonalMesh.vue";
// import HexagonalRadar from './components/HexagonalRadar.vue';
import HoverEnlargement from "./components/HoverEnlargement.vue";
import ActivityCountDown from "./components/ActivityCountDown.vue";
import Ribbon from "./components/Ribbon.vue";

const gridboxList = [
  { element: GlassMimicry1 },
  { element: GlassMimicry2 },
  { element: MixBlendMode },
  { element: SwitchingText },
  { element: Typed1 },
  { element: Typed2 },
  { element: AutoEllipsisText },
  { element: TextWrap },
  { element: BgFusion },
  { element: MyLogo },
  { element: ShearAngle },
  { element: AnnulusLoading },
  { element: Honeycomb },
  { element: PizzaPie },
  { element: AnnulusProgressBar },
  { element: AudioLoading },
  { element: FilterCSS },
  { element: SudokuImageAnimation },
  { element: WaterDropLogin },
  { element: TextShadow },
  { element: HorseRaceLamp },
  { element: HarmonyLogo },
  { element: Preserve3D },
  { element: RotateAndBgFixed },
  { element: HexagonalMesh },
  // { element: HexagonalRadar },
  { element: HoverEnlargement },
  { element: ActivityCountDown },
  { element: Ribbon },
];

useScrollToTop();
</script>

<template>
  <div fwsc>
    <div flex flex-1 ml-8px mr-2px my-8px min-w-700px max-w-1400px overflow-hidden bdr-rd-10px bdr-w-3px bdr-s-solid
      bdr-c="#35a2fd26" bg-linear-gradient="to-right,#04182c,#000c17,#04182c" v-for="(item, index) in gridboxList"
      :key="index">
      <component :is="item.element"> </component>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
