<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const text = computed(() => t("page.htmlVision.visualDesign.thisIsText"));
</script>

<template>
  <div w-full>
    <!-- src\pages\html\VisualDesign\components\TextWrap.vue -->
    <div class="container" w-full h-360px px-6px py-10px fs-16px bg-linear-gradient="to-right,#04182c, #000c17, #04182c">
      <div h-44px overflow-hidden>{{ text.repeat(40) }}</div>
      <div class="poly" float-left />
      <div class="poly" float-right />
        <!-- break-all 将单词强制断行 -->
      <span break-all>{{ text.repeat(180) }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  // width: 100%;
  // height: 360px;
  // background-image: linear-gradient(to right, #04182c, #000c17, #04182c);
  // padding: 6px 10px;
  // font-size: 16px;

  --poly-from: polygon(50% 0%,
      60% 40%,
      100% 50%,
      60% 60%,
      50% 100%,
      40% 60%,
      0% 50%,
      40% 40%);
  --poly-to: polygon(50% 30%,
      100% 0%,
      70% 50%,
      100% 100%,
      50% 70%,
      0% 100%,
      30% 50%,
      0% 0%);

  // .topText {
  //   height: 44px;
  //   overflow: hidden;
  // }

  .poly {
    width: 260px;
    height: 260px;
    background-image: repeating-linear-gradient(blue, orange 50px);
    clip-path: var(var(--poly-from));
    animation: poly 3s ease-in-out infinite alternate;
  }

  // .leftFloat {
  //   float: left;
  // }

  // .rightFloat {
  //   float: right;
  // }

  // span {
  //   word-break: break-all;
  // }

  @keyframes poly {
    from {
      clip-path: var(--poly-from);
      shape-outside: var(--poly-from);
    }

    to {
      clip-path: var(--poly-to);
      shape-outside: var(--poly-to);
    }
  }
}
</style>
