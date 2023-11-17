<script lang="ts" setup>
import type { BadgeProps } from "vexip-ui"

defineProps<BadgeProps>()

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-badge v-bind="$props">
    <slot />
</v-badge>
</template>

<style lang="scss">
@forward "vexip-ui/style/badge" with (
    $badge: (
        dot-size: theme("width.dot"),
    ),
);
</style>
