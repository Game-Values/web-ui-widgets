<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

defineProps<{
    height?: number | string
    overlayClass?: string
    width?: number | string
}>()

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
    overlay: (scopedProps: ScopedProps) => VNode
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
    <slot v-if="$slots.default" />

    <div
        v-if="$slots.overlay"
        :class="['overlay fit', overlayClass]"
    >
        <slot name="overlay" />
    </div>
</div>
</template>
