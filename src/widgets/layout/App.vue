<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()
</script>

<template>
<v-layout>
    <template #header>
        <widget-layout-app-header />
    </template>

    <template #default>
        <slot />
    </template>

    <template #footer>
        <widget-layout-app-footer />
    </template>
</v-layout>
</template>

<style lang="sass" scoped>
.vxp-layout
    @apply screen
</style>
