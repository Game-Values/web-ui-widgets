<script lang="ts" setup>
import type { TableProps } from "vexip-ui"
import type { VNode } from "vue"

withDefaults(defineProps<TableProps>(), {
    highlight: true,
    noCascaded: true,
})

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-table v-bind="$props">
    <slot />
</v-table>
</template>

<style lang="sass" scoped>
.vxp-table
    @apply border-grey-extra-dark
    @apply rounded-5

    :deep(.vxp-table__head)
        @apply text-level-4 font-semibold

        .vxp-table__row
            @apply h-7.5rem\!
</style>

