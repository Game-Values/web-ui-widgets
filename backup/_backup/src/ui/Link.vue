<script lang="ts" setup>
import type { Route, ScopedProps } from "~/types"
import type { LinkerProps } from "vexip-chat-send-hub-message"
import type { VNode } from "vue"

// todo: (?)

defineProps<Omit<LinkerProps, "to"> & {
    href?: string
    to?: Route
}>()

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()
</script>

<template>
<nuxt-link
    v-if="to"
    v-bind="$props"
    class="vxp-linker vxp-linker-vars"
>
    <slot />
</nuxt-link>

<v-linker
    v-else
    v-bind="$props"
    :to="href || 'javascript:void(0)'"
>
    <slot />
</v-linker>
</template>
