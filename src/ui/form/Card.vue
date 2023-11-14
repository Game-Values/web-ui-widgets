<script lang="ts" setup>
import type { CardProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<CardProps>()

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-card v-bind="$props">
    <slot />
</v-card>
</template>

<style lang="scss">
@forward "vexip-ui/style/card" with (
    $card: (
        border: 0,
        shadow: none,
        bg-color: transparent,
        b-color: transparent,
        body-v-padding: 0,
        body-h-padding: 0,
    ),
);
</style>
