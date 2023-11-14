<script lang="ts" setup>
import type { RowProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<RowProps>()

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-row
    v-bind="$props"
    :style="`
        --vxp-row-h-gap: ${pxToRem(isArray(gap) ? useFirst(gap) : gap)};
        --vxp-row-v-gap: ${pxToRem(isArray(gap) ? useLast(gap) : gap)};
    `"
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
