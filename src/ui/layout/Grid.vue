<script lang="ts" setup>
import type { GridProps } from "vexip-ui"
import type { VNode } from "vue"

withDefaults(defineProps<GridProps>(), {
    gap: remToNumber(useTheme("spacing.9")),
})

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-grid v-bind="$props">
    <slot />
</v-grid>
</template>

<style lang="scss">
@forward "vexip-ui/style/grid";
</style>

<style lang="sass" scoped>
.vxp-grid
    @apply fit
</style>
