<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

withDefaults(defineProps<{
    tag?: keyof HTMLElementTagNameMap
}>(), {
    tag: "main",
})

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()
</script>

<template>
<ui-content :tag="tag">
    <slot />
</ui-content>
</template>

<style lang="sass" scoped>
.content
    :deep(> *)
        @screen at-lg
            @apply my-18

        @screen at-md
            @apply my-14

        @screen at-sm
            @apply my-10

        @screen at-xs
            @apply my-6

        @apply [&+*]:(mt-0)

        @apply first:mt-10

        + *
            @apply pt-0

    :deep(> .vxp-row)
        @screen at-lg
            --vxp-row-v-gap: theme("spacing.18")

        @screen at-md
            --vxp-row-v-gap: theme("spacing.14")

        @screen at-sm
            --vxp-row-v-gap: theme("spacing.10")

        @screen at-xs
            --vxp-row-v-gap: theme("spacing.6")
</style>
