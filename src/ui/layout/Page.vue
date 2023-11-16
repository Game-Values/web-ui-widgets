<script lang="ts" setup>
import type { VNode } from "vue"

withDefaults(defineProps<{
    tag?: keyof HTMLElementTagNameMap
}>(), {
    tag: "section",
})

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<component
    :is="tag"
    class="
        [&>*]:(lg:(py-18))
        [&>*]:(md:(py-14))
        [&>*]:(sm:(py-10))
        [&>*]:(xs:(py-6))
    "
>
    <slot />
</component>
</template>
