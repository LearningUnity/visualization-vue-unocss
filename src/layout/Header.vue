<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useGlobalContext } from 'hooks/useGlobalContext';
import type { GlobalContext } from 'hooks/useGlobalContext';
const { t, locale } = useI18n();
const globalContext = useGlobalContext() as Ref<GlobalContext>;
const containerRef = ref<HTMLDivElement>();

const langTips = ref(false);
const onchangeLanguage = () => {
  if (locale.value === "zh-cn") {
    locale.value = "en-us";
    localStorage.setItem("language", "en-us");
  } else {
    locale.value = "zh-cn";
    localStorage.setItem("language", "zh-cn");
  }
};

onMounted(() => {
  if (containerRef.value) {
    const { height } = containerRef.value.getBoundingClientRect();
    globalContext.value?.setHeadHeight(height);
  }
})
</script>

<template>
  <div w-full>
    <div por frsc w-full h-60px bgc="#001529" c="#fff" ref="containerRef">
      <!-- logo文字 -->
      <div ml-16px fs-24px fw-600 bg-gradient-to-r from="#d628fe" to="#35a2fd" bg-clip-text c-transparent font-Poppins>
        {{ t("common.logoName") }}
        <span fs-15px opacity-70 c="red">----TODO: 实时加载需要的模块, 非一次性全部加载</span>
      </div>
      <!-- 切换语言按钮 -->
      <div poa r-10px ref="tips" @mouseover="langTips = true" @mouseleave="langTips = false">
        <div fccc w-42px h-42px cursor-pointer hover-bgc="argb(0,0,0,0.6)" @click="onchangeLanguage">
          <svg-icon v-if="locale === 'zh-cn'" name="Chinese" width="20px" height="20px" stroke="#ffffff" />
          <svg-icon v-else name="English" width="20px" height="20px" stroke="#ffffff" />
        </div>
        <!-- 切换语言 tips -->
        <div v-if="langTips" poa t-56px r-0 p-10px border-rd-10px bgc="#000">
          <div poa rotate-135 r-13px t--5px w-10px h-10px bgc="#000"></div>
          <p whitespace-nowrap>{{ t("common.LanguageSwitch") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>