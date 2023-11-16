<script lang="ts" setup>
import type { TitleProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<(
    TitleProps & {
        color?: string
        size?: string
    }
)>()

defineSlots<{
    default: () => VNode
}>()

let omitted
</script>

<template>
<v-title
    v-bind="useOmit($props, 'color', 'size')"
    :style="{
        color,
        fontSize: size,
    }"
>
    <slot />
</v-title>
</template>

<style lang="scss">
@forward "vexip-ui/style/typography" with (
    $title: (
        font-size-level-1: $font-size-level-1,
        font-size-level-2: $font-size-level-2,
        font-size-level-3: $font-size-level-3,
        font-size-level-4: $font-size-level-4,
        font-size-level-5: $font-size-level-5,
        font-size-level-6: $font-size-level-6,
        font-weight: 700,
        font-weight-thin: 600,
    ),
);
</style>

<style lang="sass" scoped>
.vxp-title-vars
    --vxp-title-color: inherit

.vxp-title
    @apply m-0
    @apply leading-normal
</style>
