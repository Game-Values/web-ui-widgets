<script lang="ts" setup>
import type { TagProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<TagProps>()

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-tag v-bind="$props">
    <slot />
</v-tag>
</template>

<style lang="scss">
@forward "vexip-ui/style/tag" with (
    $tag: (
        v-padding: theme("spacing.2"),
        h-padding: theme("spacing.2"),
        bg-color: transparent,
    ),
);
</style>

<style lang="sass" scoped>
.vxp-tag
    &--circle
        --vxp-tag-radius: theme("spacing.10")

    &--small
        @apply text-sm

        &.vxp-tag--circle
            --vxp-tag-v-padding: theme("spacing.1")
            --vxp-tag-h-padding: theme("spacing.1")
</style>
