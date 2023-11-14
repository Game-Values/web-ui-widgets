<script lang="ts" setup>
import type { TitleProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<TitleProps>()

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-title
    v-bind="$props"
    :thin="[5, 6].includes(level!)"
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
        color: inherit,
    ),
);
</style>

<style lang="sass" scoped>
.vxp-title
    @apply m-0
    @apply leading-normal
</style>
