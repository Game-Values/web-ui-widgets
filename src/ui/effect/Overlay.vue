<script lang="ts" setup>
interface Props {
    height?: number | string
    overlayClass?: string
    width?: number | string
}

interface Slots {
    default: () => any
    overlay: () => any
}

defineProps<Props>()

defineSlots<Slots>()
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
