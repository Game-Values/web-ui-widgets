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
        <widget-app-header />
    </template>

    <template #default>
        <entity-game-preview />

        <slot />
    </template>

    <template #footer>
        <widget-app-footer />
    </template>
</v-layout>
</template>
