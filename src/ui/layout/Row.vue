<script lang="ts" setup>
import type { RowProps } from "vexip-ui"
import type { VNode } from "vue"

withDefaults(defineProps<RowProps>(), {
    gap: Array(2).fill(
        remToNumber(
            useThemeSpace(9),
        ),
    ),
})

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-row v-bind="$props">
    <slot/>
</v-row>
</template>
