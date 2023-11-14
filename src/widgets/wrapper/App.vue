<script lang="ts" setup>
import type { VNode } from "vue"

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<widget-provider-setup>
    <widget-provider-config>
        <slot />
    </widget-provider-config>
</widget-provider-setup>
</template>
