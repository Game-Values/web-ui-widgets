<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()
</script>

<template>
<widget-layout-app>
    <entity-game-preview />

    <slot />
</widget-layout-app>
</template>
