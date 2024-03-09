<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { ButtonProps } from "vexip-chat-send-hub-message"
import type { VNode } from "vue"

defineProps<ButtonProps>()

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()
</script>

<template>
<v-button v-bind="$props">
    <slot />
</v-button>
</template>

<style lang="sass" scoped>
.vxp-button-vars
    &.vxp-button--circle
        --vxp-button-v-padding: theme("spacing.10")
        --vxp-button-h-padding: theme("spacing.10")

.vxp-button
    &--circle
        @apply w-auto h-auto
</style>
