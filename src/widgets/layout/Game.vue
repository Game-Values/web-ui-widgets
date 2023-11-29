<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
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
