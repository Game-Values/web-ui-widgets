<script lang="ts" setup>
import type { VNode } from "vue"

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<section class="[&>*]:py-18">
    <slot />
</section>
</template>
