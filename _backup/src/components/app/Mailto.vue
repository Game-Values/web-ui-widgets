<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

withDefaults(defineProps<{
    email?: string
}>(), {
    email: "hello@game-values.com",
})

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()
</script>

<template>
<ui-link
    :href="`mailto:${email}`"
    type="primary"
>
    <slot>
        {{ email }}
    </slot>
</ui-link>
</template>
