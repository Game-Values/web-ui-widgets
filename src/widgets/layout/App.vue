<script lang="ts" setup>
import type { VNode } from "vue"

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<ui-base-layout>
    <template #header>
        <widget-layout-app-header />
    </template>

    <template #main>
        <widget-layout-app-main>
            <!-- <slot /> -->
        </widget-layout-app-main>
    </template>

    <template #footer>
        <widget-layout-app-footer />
    </template>
</ui-base-layout>
</template>
