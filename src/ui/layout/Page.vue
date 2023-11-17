<script lang="ts" setup>
import type { VNode } from "vue"

withDefaults(defineProps<{
    tag?: keyof HTMLElementTagNameMap
}>(), {
    tag: "section",
})

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<ui-layout-content :is="tag">
    <slot />
</ui-layout-content>
</template>

<style lang="sass" scoped>
.content
    :deep(> *)
        @screen lg
            @apply py-18

        @screen lt-lg
            @apply py-14

        @screen lt-md
            @apply py-10

        @screen lt-sm
            @apply py-6

        + *
            @apply pt-0

    :deep(> .vxp-row)
        @screen lg
            --vxp-row-v-gap: theme("spacing.18")

        @screen lt-lg
            --vxp-row-v-gap: theme("spacing.14")

        @screen lt-md
            --vxp-row-v-gap: theme("spacing.10")

        @screen lt-sm
            --vxp-row-v-gap: theme("spacing.6")
</style>
