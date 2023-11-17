<script lang="ts" setup>
import type { TableBaseColumn, TableColumnProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<TableColumnProps>()

defineSlots<{
    default: (scopedProps: TableBaseColumn["renderer"]) => VNode
}>()
</script>

<template>
<v-table-column v-bind="$props">
    <template #default="scopedProps">
        <slot v-bind="scopedProps">
            {{ useGet(scopedProps.row, scopedProps.column.key) }}
        </slot>
    </template>
</v-table-column>
</template>

<style lang="scss">
@forward "vexip-ui/style/table-column";
</style>

<style lang="sass" scoped>
.vxp-table
    @apply border-grey-extra-dark
    @apply rounded-5

    :deep(.vxp-table__head)
        @apply text-level-4 font-semibold

    :deep(.vxp-table__content)
        @apply py-5
</style>

