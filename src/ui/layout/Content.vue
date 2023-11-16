<script lang="ts" setup>
import type { VNode } from "vue"

withDefaults(defineProps<{
    tag?: keyof HTMLElementTagNameMap
}>(), {
    tag: "div",
})

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<component
    :is="tag"
    class="
        content
        px-8
        py-6
        fit
    "
>
    <slot />
</component>
</template>
