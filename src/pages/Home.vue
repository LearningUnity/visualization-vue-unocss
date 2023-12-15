<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import type { Ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Header from '@/layout/Header.vue';
import Menus from '@/layout/Menus.vue';
import { useGlobalContext } from 'hooks/useGlobalContext';
import type { GlobalContext } from 'hooks/useGlobalContext';

const defaultPageUrl = "/html/visualDesign"; // 默认首页

const contentRef = ref<HTMLDivElement>();
const router = useRouter();
const route = useRoute();
const globalContext = useGlobalContext() as Ref<GlobalContext>;

const onScroll = () => {
  globalContext.value?.setScrollTop(contentRef.value?.scrollTop);
};

watch(() => route.path, () => {
  const { path } = route;
  if (!path || path === "/") {
    router.push(defaultPageUrl);
  }
})

onMounted(() => {
  if (contentRef.value) {
    globalContext.value?.setScrollContentRef(contentRef.value as HTMLDivElement);
  }
})

onUnmounted(() => {
  globalContext.value?.setScrollContentRef(null);
})

</script>

<template>
  <div wh-screen>
    <!-- 标题栏 -->
    <Header />
    <div frs w-full :style="{ height: 'calc(100% - 60px)' }">      
      <!-- 左侧菜单栏 -->
      <Menus />
      <!-- 右侧内容区 -->
      <div ref="contentRef" min-w-900px flex-grow-1 max-h-full min-h-full overflow-x-hidden overflow-y-auto sb-w-8px sbt-w-8px sbt-rd-4px
        sb-bgc="#44444430" sbt-bgc="#99999930" bg-gradient-to-135deg from="#224141" to="#162a2a" @scroll="onScroll">
        <router-view />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>