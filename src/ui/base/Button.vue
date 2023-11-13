<script lang="ts" setup>
import type { ButtonProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<ButtonProps>()

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-button v-bind="$props">
    <slot />
</v-button>
</template>

<style lang="sass" scoped>
.vxp-button-vars
    --vxp-button-height: theme("height.button")
    --vxp-button-radius: theme("spacing.3")
    --vxp-button-v-padding: theme("spacing.6")
    --vxp-button-h-padding: theme("spacing.10")

.vxp-button
    @apply text-level-5 font-semibold

.vxp-button--circle
    --vxp-button-v-padding: 0
    --vxp-button-h-padding: 0

    @apply w-8 h-8
</style>
