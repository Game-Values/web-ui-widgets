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
        v-gap: theme("spacing.2"),
        h-gap: theme("spacing.4"),
    ),
);
</style>
