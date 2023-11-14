<script lang="ts" setup>
import type { Color } from "~/types"
import type { IconProps } from "vexip-ui"
import type { VNode } from "vue"

withDefaults(defineProps<IconProps & {
    color?: Color
    custom?: string
    height?: number | string
    width?: number | string
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
        fontSize: pxToRem(size),
        height: height ? pxToRem(height) : 'var(--vpx-icon-height)',
        width: width ? pxToRem(width) : 'var(--vpx-icon-width)',
    }"
>
    <slot>
        <i
            v-if="custom"
            :class="`i-custom:${custom}`"
        />
    </slot>
</v-icon>
</template>

<style lang="scss">
@forward "vexip-ui/style/icon";
</style>

<style lang="sass" scoped>
.vxp-icon
    --vpx-icon-width: 1em
    --vpx-icon-height: 1em

    @apply [&>*]:(w-inherit h-inherit)
</style>
