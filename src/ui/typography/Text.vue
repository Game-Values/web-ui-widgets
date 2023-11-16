<script lang="ts" setup>
import type { TextProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<(
    TextProps & {
        color?: string
        size?: string
    }
)>()

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-text
    v-bind="useOmit($props, 'color', 'size')"
    :style="{
        color,
        fontSize: size,
    }"
>
    <slot />
</v-text>
</template>

<style lang="scss">
@forward "vexip-ui/style/typography" with (
    $text: (
        color: inherit,
    ),
);
</style>
