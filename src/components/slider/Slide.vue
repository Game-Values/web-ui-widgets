<script setup lang="ts">
import type { CSSProperties } from "@vue/runtime-dom"

interface Slide {
    horizontalImage: string
    verticalImage: string
}

const props = defineProps<Slide>()

const style = computed(() =>
    ({
        "--slide-horizontal-image-url": `url(${props.horizontalImage})`,
        "--slide-vertical-image-url": `url(${props.verticalImage})`,
    } as CSSProperties))

const twClasses = `
grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4
py-2 px-4 md:px-8
bg-center bg-cover bg-gray-800
rounded-2xl border border-white/10
h-[530px] md:h-[350px]
`
</script>

<template>
<div :class="twClasses" :style="style" class="slide-container">
    <div class="flex flex-col md:justify-center">
        <slot/>
    </div>
</div>
</template>

<style scoped>
.slide-container {
  background-image: var(--slide-horizontal-image-url);

  @media (max-width: 768px) {
    background-image: var(--slide-vertical-image-url);
  }
}
</style>
