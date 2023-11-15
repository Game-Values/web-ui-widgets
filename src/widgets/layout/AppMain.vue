<script lang="ts" setup>
import type { VNode } from "vue"

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<ui-layout-content>
    <slot />
</ui-layout-content>
</template>
