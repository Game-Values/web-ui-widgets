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
        v-padding: 0,
        h-padding: theme("spacing.2"),
        small-font-size: $font-size-sm,
    ),
);
</style>

<style lang="sass" scoped>
.vxp-tag
    @apply font-semibold

    &--small
        @apply text-sm

        &.vxp-tag--circle
            --vxp-tag-h-padding: theme("spacing.1")
</style>
