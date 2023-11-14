<script lang="ts" setup>
import type { RowProps } from "vexip-ui"
import type { VNode } from "vue"

withDefaults(defineProps<RowProps>(), {
    gap: remToNumber(useThemeSpace(9)),
})

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-row
    v-bind="$props"
>
    <slot/>
</v-row>
</template>

<style lang="scss">
@forward "vexip-ui/style/row" with (
    $row: (
        v-gap: theme("spacing.9"),
        h-gap: theme("spacing.9"),
        column-display: flex,
    ),
);
</style>
