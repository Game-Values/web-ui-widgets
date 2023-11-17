<script lang="ts" setup>
import type { BreadcrumbItemProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<BreadcrumbItemProps>()

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-breadcrumb-item v-bind="$props">
    <slot />
</v-breadcrumb-item>
</template>

<style lang="scss">
@forward "vexip-ui/style/breadcrumb-item";
</style>
