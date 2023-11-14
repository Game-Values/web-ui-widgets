<script lang="ts" setup>
import type { VNode } from "vue"

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<div class="content">
    <slot />
</div>
</template>
