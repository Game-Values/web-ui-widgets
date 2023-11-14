<script lang="ts" setup>
import type { CellProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<CellProps>()

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-cell v-bind="$props">
    <slot />
</v-cell>
</template>

<style lang="scss">
@forward "vexip-ui/style/cell";
</style>
