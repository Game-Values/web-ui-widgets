<script lang="ts" setup>
import type { Color } from "~/types"
import type { IconProps } from "vexip-ui"

interface Props extends IconProps {
    color?: Color
    height?: string
    name: string
    width?: string
}

interface Slots {
    default: () => any
}

withDefaults(defineProps<Props>(), (
    useUiProps<IconProps>({
        color: "currentColor",
        size: "16",
    })
))

defineSlots<Slots>()
</script>

<template>
<v-icon
    v-bind="$props"
    :style="{
        color: color && useThemeColor(color),
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
    :deep(> g),
    :deep(> g > i)
        @apply w-inherit h-inherit
</style>
