<script lang="ts" setup>
import type { Color } from "~/types"
import type { IconProps } from "vexip-ui"
import type { ComputedRef } from "vue"

interface Props extends IconProps {
    color?: Color
}

interface Slots {
    default: () => any
}

withDefaults(defineProps<Props>(), (
    useUiProps<IconProps>({
        size: "16",
    })
))

defineSlots<Slots>()
</script>

<template>
<v-icon
    v-bind="$props"
    :style="{
        color: (
            color
                ? useThemeColor(color)
                : 'currentColor'
        ),
        fontSize: (
            size &&
            pxToRem(size)
        ),
    }"
>
    <slot />
</v-icon>
</template>

<style lang="sass" scoped>
.vxp-icon
    :deep(> g),
    :deep(> g > i)
        @apply w-inherit h-inherit
</style>
