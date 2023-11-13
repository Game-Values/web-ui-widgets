<script lang="ts" setup>
import type { CardProps } from "vexip-ui"
import type { VNode } from "vue"

withDefaults(defineProps<CardProps>(), {
    shadow: "never",
})

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-card v-bind="$props">
    <slot />
</v-card>
</template>

<style lang="sass" scoped>
.vxp-card-vars
    --vxp-card-body-h-padding: 0
    --vxp-card-body-v-padding: 0
    --vxp-card-bg-color: transparent
    --vxp-card-b-color: transparent
</style>
