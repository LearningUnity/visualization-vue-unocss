<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import EllipsisText from 'components/EllipsisText.vue';

const { t } = useI18n();
const langTips = ref(false);
const text = computed(() => t("page.htmlVision.visualDesign.displaysCustomRows"));
const text2 = computed(() => t("page.htmlVision.visualDesign.displaysCustomRows2"));

const textOver = ref<boolean>(false);
const onTextOverChange = (isOver: boolean) => {
  textOver.value = isOver;
};
</script>

<template>
  <div w-full>
    <!-- src\pages\html\VisualDesign\components\AutoEllipsisText.vue -->
    <div fccc w-full h-360px p-10px bg-linear-gradient="to-right,#04182c, #000c17, #04182c">
      
      <div por w-full fs-24px>
        <p break-all overflow-dot @mouseover="langTips = true" @mouseleave="langTips = false">{{ text }}</p>
        <div v-if="langTips" poaxc b-50px p-4px w-300px border-rd-10px fs-12px lh-22px z-100 bgc="#000">
          <div poaxc b--2px rotate-135 w-10px h-10px z--1 bgc="#000"></div>
          <p>{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}</p>
        </div>
      </div>
      <EllipsisText :text="text2.repeat(4)" :customStyle="{ fontSize: '24px', width: '100%', marginTop: '40px' }" />
      <EllipsisText :text="text2.repeat(8)" :lineNum="2"
        :customStyle="{ fontSize: '16px', width: '100%', marginTop: '40px' }" buttonText="More" :buttonTextSize="16" />
    </div>
  </div>
</template>

<style scoped lang="scss">
// .container {
//   width: 100%;
//   height: 360px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 10px;
//   background-image: linear-gradient(to right, #04182c, #000c17, #04182c);
// }
</style>
