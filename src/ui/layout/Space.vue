<script lang="ts" setup>
import type { SpaceProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<SpaceProps>()

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-space v-bind="$props">
    <slot />
</v-space>
</template>

<style lang="scss">
@forward "vexip-ui/style/space" with (
    $space: (
        v-gap: theme("spacing.3"),
        h-gap: theme("spacing.3"),
    ),
);
</style>

<style lang="sass" scoped>
.vxp-space
    &--large
        --vxp-space-v-gap: theme("spacing.7")
        --vxp-space-h-gap: theme("spacing.7")

    &--small
        --vxp-space-v-gap: theme("spacing.1"),
        --vxp-space-h-gap: theme("spacing.1"),
</style>
