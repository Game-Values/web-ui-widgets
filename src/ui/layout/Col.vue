<script lang="ts" setup>
import type { ColumnProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<ColumnProps>()

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-column v-bind="$props">
    <slot />
</v-column>
</template>

<style lang="scss">
@forward "vexip-ui/style/column" with (
    $column: (
        display: flex,
    ),
);
</style>
