<script lang="ts" setup>
import type { ButtonProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<ButtonProps>()

defineSlots<{
    default: () => VNode
    icon: () => VNode
}>()
</script>

<template>
<v-button
    v-bind="$props"
>
    <template
        v-if="$slots.default"
        #default
    >
        <slot />
    </template>
</v-button>
</template>

<style lang="scss">
@forward "vexip-ui/style/button" with (
    $button: (
        v-padding: theme("spacing.6"),
        h-padding: theme("spacing.10"),
        height: theme("height.button"),
        radius: theme("spacing.3"),
        font-size: $font-size-level-5,
        icon-span: 0,
    ),
);
</style>

<style lang="sass" scoped>
.vxp-button
    @apply font-semibold

.vxp-button--circle
    --vxp-button-v-padding: 0
    --vxp-button-h-padding: 0

    @apply w-8 h-8 p-4

    // &.vxp-button--loading
    //     @apply before:(bg-transparent)
</style>
