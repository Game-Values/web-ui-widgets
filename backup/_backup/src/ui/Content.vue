<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

withDefaults(defineProps<{
    tag?: keyof HTMLElementTagNameMap
}>(), {
    tag: "section",
})

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()
</script>

<template>
<component
    :is="tag"
    class="content"
>
    <slot />
</component>
</template>

<style lang="sass" scoped>
.content
    @apply px-8 py-6

    .content
        @apply p-0

        :deep(> *)
            @apply first:mt-0
</style>
