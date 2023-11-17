<script lang="ts" setup>
import type { BreadcrumbProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<BreadcrumbProps>()

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-breadcrumb v-bind="$props">
    <slot />
</v-breadcrumb>
</template>

<style lang="scss">
@forward "vexip-ui/style/breadcrumb" with (
    $breadcrumb: (

    ),
);
</style>
