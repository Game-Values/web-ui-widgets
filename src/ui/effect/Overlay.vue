<script lang="ts" setup>
import type { VNode } from "vue"

defineProps<{
    height?: number | string
    overlayClass?: string
    width?: number | string
}>()

defineSlots<{
    default: () => VNode
    overlay: () => VNode
}>()
</script>

<template>
<div
    :style="{
        height: height ? pxToRem(height) : '100%',
        width: width ? pxToRem(width) : '100%',
    }"
    class="relative"
>
    <slot />

    <div
        v-bind="$attrs"
        :class="['overlay fit', overlayClass]"
    >
        <slot name="overlay" />
    </div>
</div>
</template>
