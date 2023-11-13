<script lang="ts" setup>
import type { Color } from "~/types"
import type { IconProps } from "vexip-ui"
import type { VNode } from "vue"

withDefaults(defineProps<IconProps & {
    color?: Color
    height?: string
    name: string
    width?: string
}>(), {
    size: "16",
})

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-icon
    v-bind="$props"
    :style="{
        color: color ? useThemeColor(color) : 'currentColor',
        fontSize: size && pxToRem(size),
        height: height ? pxToRem(height) : '100%',
        width: width ? pxToRem(width) : '100%',
    }"
>
    <i :class="`i-${name}`" />
</v-icon>
</template>

<style lang="sass" scoped>
.vxp-icon
    @apply [&>*]:(w-inherit h-inherit)
</style>
