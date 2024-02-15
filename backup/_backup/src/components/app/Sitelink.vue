<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

withDefaults(defineProps<{
    label?: string
    url?: string
}>(), {
    label: "lot-values.com",
    url: "https://game-values.com/",
})

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()
</script>

<template>
<ui-link
    :href="url"
    target="_blank"
    type="primary"
>
    <slot>
        {{ label }}
    </slot>
</ui-link>
</template>
