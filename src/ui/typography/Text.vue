<script lang="ts" setup>
import type { TextProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<TextProps>()

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-text
    v-bind="$props"
>
    <slot />
</v-text>
</template>
