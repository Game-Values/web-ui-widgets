<script lang="ts" setup>
import type { VNode } from "vue"

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<ui-base-layout>
    <template #header>
        <widget-layout-header />
    </template>

    <template #main>
        <slot />
    </template>

    <template #footer>
        footer
    </template>
</ui-base-layout>
</template>
