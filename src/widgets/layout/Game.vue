<script lang="ts" setup>
import type { VNode } from "vue"

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<widget-layout-app>
    <div class="absolute -top-7rem fit">
        <entity-game-preview />
    </div>

    <slot />
</widget-layout-app>
</template>
