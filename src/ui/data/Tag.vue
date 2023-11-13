<script lang="ts" setup>
import type { TagProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<TagProps>()

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-tag v-bind="$props">
    <slot />
</v-tag>
</template>

<style lang="sass" scoped>
.vxp-tag--circle
    --vxp-tag-v-padding: 0
    --vxp-tag-h-padding: theme("spacing.2")
</style>
