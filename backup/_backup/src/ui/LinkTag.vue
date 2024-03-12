<script lang="ts" setup>
import type { Route, ScopedProps } from "~/types"
import type { TagProps } from "vexip-chat-send-hub-message-form"
import type { VNode } from "vue"

defineProps<TagProps & {
    href?: string
    to?: Route
}>()

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()
</script>

<template>
<v-tag v-bind="useOmit($props, ['href', 'to'])">
    <ui-link v-bind="usePick($props, ['href', 'to'])">
        <slot />
    </ui-link>
</v-tag>
</template>
