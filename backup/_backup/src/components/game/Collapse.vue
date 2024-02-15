<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()
</script>

<template>
<v-collapse>
    <slot />
</v-collapse>
</template>

<style lang="sass" scoped>
:deep(.vxp-collapse-vars)
    --vxp-collapse-content-h-padding: 0
    --vxp-collapse-radius: theme("spacing.7")

:deep(.vxp-collapse__header)
    @apply p-2
    @apply rounded-7
</style>
