<script lang="ts" setup>
import type { SpaceProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<SpaceProps>()

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-space v-bind="$props">
    <slot />
</v-space>
</template>

<style lang="sass" scoped>
.vxp-space
    @apply w-full
</style>
