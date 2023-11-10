<script lang="ts" setup>
interface Props {
    height?: number | string
    uncolored?: boolean
    width?: number | string
}

let props = withDefaults(defineProps<Props>(), {
    height: 40,
    width: 158,
})

let iconClass = computed((): string => (
    props.uncolored
        ? "i-custom-logo-uncolored"
        : "i-custom-logo"
))
</script>

<template>
<ui-base-icon
    :style="{
        height: pxToRem(height),
        width: pxToRem(width),
    }"
>
    <i :class="iconClass" />
</ui-base-icon>
</template>
