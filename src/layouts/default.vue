<script lang="ts" setup>
import type { VNode } from "vue"

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<widget-layout-app>
    <slot />
</widget-layout-app>
</template>
