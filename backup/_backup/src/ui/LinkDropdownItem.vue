<script lang="ts" setup>
import type { Route, ScopedProps } from "~/types"
import type { DropdownItemProps } from "vexip-chat-send-hub-message-form"
import type { VNode } from "vue"

defineProps<DropdownItemProps & {
    href?: string
    to?: Route
}>()

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()
</script>

<template>
<v-dropdown-item v-bind="useOmit($props, ['href', 'to'])">
    <ui-link v-bind="usePick($props, ['href', 'to'])">
        <slot />
    </ui-link>
</v-dropdown-item>
</template>

<style lang="sass" scoped>
.vxp-dropdown__item
    @apply p-0

.vxp-linker
    @apply px-10 py-5
    @apply fit
    @apply hover:(text-info)
</style>
