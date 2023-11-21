<script lang="ts" setup>
import type { VNode } from "vue"

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<widget-layout-app>
    <entity-game-preview
        background-position="center 30%"
        class="absolute -top-7rem fit"
    />

    <slot />
</widget-layout-app>
</template>
