<script lang="ts" setup>
import type { InputProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<InputProps>()

defineSlots<{
    default: () => VNode
    suffix: () => VNode
}>()
</script>

<template>
<v-input v-bind="$props">
    <slot />

    <template
        v-if="$slots.suffix"
        #suffix
    >
        <slot name="suffix" />
    </template>
</v-input>
</template>

<style lang="scss">
@forward "vexip-ui/style/input" with (
    $input: (
        v-padding: theme("spacing.4"),
        h-padding: theme("spacing.7"),
        height: theme("height.input"),
        bg-color: theme("colors.secondary"),
        b-color: theme("colors.secondary"),
        radius: theme("spacing.2"),
        icon-color: rgba($color-white, 0.6),
    ),
);
</style>
