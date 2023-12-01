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
        <lazy-client-only>
            <entity-game-preview />
        </lazy-client-only>
    </div>

    <slot />
</widget-layout-app>
</template>
