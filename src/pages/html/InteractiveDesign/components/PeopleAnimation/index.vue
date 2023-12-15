<script setup lang="ts">
import Animation from "./Animation.vue";
</script>

<template>
  <div por w-full>
    <!-- src\pages\html\InteractiveDesign\components\PeopleAnimation\index.vue -->
    <div poa t-20px w-full text-center z-10 c="#fff">
      <p>通过js控制人img,球img,礼物img移动</p>
    </div>
    <div class="container">
      <Animation />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>