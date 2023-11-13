<script lang="ts" setup>
import type { ColumnProps } from "vexip-ui"
import type { VNode } from "vue"

withDefaults(defineProps<ColumnProps>(), {
    useFlex: true,
})

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-column v-bind="$props">
    <slot />
</v-column>
</template>
