<script lang="ts" setup>
import type { ValueOfArray } from "~/types"
import type { IconProps } from "vexip-ui"
import type { VNode } from "vue"

import { HEROICONS } from "~/consts"

defineProps<(
    IconProps & {
        custom?: string
        height?: number | string
        heroicons?: ValueOfArray<typeof HEROICONS>
        solid?: boolean
        width?: number | string
    }
)>()

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-icon
    v-bind="(
        useOmit($props, [
            'custom',
            'heroicons',
            'icon',
            'solid',
        ])
    )"
    :style="{
        color: color ? useTheme(`colors.${color}`) : 'currentColor',
        fontSize: size ? pxToRem(size) : 'inherit',
        height: height ? pxToRem(height) : 'var(--vpx-icon-height)',
        width: width ? pxToRem(width) : 'var(--vpx-icon-width)',
    }"
>
    <i
        v-if="heroicons"
        :class="`i-heroicons:${heroicons}${solid ? '-solid' : ''}`"
    />

    <i
        v-else
        :class="`i-custom:${custom}`"
    />
</v-icon>
</template>

<style lang="sass" scoped>
.vxp-icon
    --vpx-icon-width: 1em
    --vpx-icon-height: 1em

    @apply [&>*]:(w-inherit h-inherit)
</style>
