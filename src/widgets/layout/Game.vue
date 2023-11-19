<script lang="ts" setup>
import type { VNode } from "vue"

defineSlots<{
    default: () => VNode
}>()

let breakpoint = useBreakpoint()

let gamePreviewOffset = computed(() => useTheme(`height.header-${getRef(breakpoint)}`))
</script>

<template>
<widget-layout-app>
    <entity-game-preview
        :style="{
            top: `-${gamePreviewOffset}`,
        }"
        background-position="center 30%"
        class="absolute fit"
    />

    <div
        :style="{
            marginTop: gamePreviewOffset,
        }"
    >
        <slot />
    </div>
</widget-layout-app>
</template>
