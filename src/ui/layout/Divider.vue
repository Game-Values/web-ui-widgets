<script lang="ts" setup>
import type { DividerProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<DividerProps>()

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-divider v-bind="$props">
    <slot />
</v-divider>
</template>

<style lang="scss">
@forward "vexip-ui/style/divider" with (
    $divider: (
        text-color: inherit,
        text-size-primary: inherit,
    ),
);
</style>
