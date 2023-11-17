<script lang="ts" setup>
import type { VNode } from "vue"

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<widget-layout-game>
    <slot />
</widget-layout-game>
</template>
