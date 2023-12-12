<script lang="ts" setup>
import type { Route, ScopedProps } from "~/types"
import type { ButtonProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<ButtonProps & {
    href?: string
    to?: Route
}>()

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()
</script>

<template>
<v-button v-bind="useOmit($props, ['href', 'to'])">
    <ui-link v-bind="usePick($props, ['href', 'to'])">
        <slot />
    </ui-link>
</v-button>
</template>

<style lang="sass" scoped>
.vxp-button
    @apply p-0
    @apply h-auto

.vxp-linker
    @apply px-[var(--vxp-button-h-padding)] py-[var(--vxp-button-v-padding)]
    @apply w-full h-[var(--vxp-button-height)]
    @apply justify-center
    @apply text-inherit font-size-inherit
</style>
