<script setup lang="ts">

import { CSSProperties } from "@vue/runtime-dom"

interface Slide {
  verticalImage: string
  horizontalImage: string
}

const props = defineProps<Slide>()

const style = computed(() =>
  ({
    "--slide-vertical-image-url": `url(${props.verticalImage})`,
    "--slide-horizontal-image-url": `url(${props.horizontalImage})`
  } as CSSProperties))

</script>

<template>
  <div class="slide-container" :style="style">
    <div class="flex flex-col md:justify-center">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.slide-container {
  display: grid;
  gap: 1rem;
  grid-template-areas: "data image";
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  padding: 69px 34px;
    height:350px;

  border: 1px solid #FFFFFF1F;
  border-radius: 16px;

  background-color: #202020;
  background-image: var(--slide-horizontal-image-url);
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height:530px;
    grid-template-areas: "data" "image";
    background-image: var(--slide-vertical-image-url);
  }
}
</style>
