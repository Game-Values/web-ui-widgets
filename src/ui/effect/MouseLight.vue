<script lang="ts" setup>
import type { UseMouseInElementReturn } from "@vueuse/core"
import type { Nullable } from "~/types"
import type { VNode } from "vue"

import { useCurrentElement, useMouseInElement, useRafFn } from "@vueuse/core"

defineProps<{
    height?: number | string
    overlayClass?: string
    width?: number | string
}>()

defineSlots<{
    default: () => VNode
}>()

let rootRef: Nullable<HTMLDivElement>

let mouseState: Ref<Nullable<UseMouseInElementReturn>> = ref(null)

onMounted((): void => {
    rootRef = getRef(useCurrentElement<HTMLDivElement>())
})

function whenMouseEnter(): void {
    setRef(mouseState, (
        useMouseInElement(getRef(rootRef), {
            handleOutside: false,
            resetOnTouchEnds: true,
            initialValue: getRef(rootRef)?.getBoundingClientRect(),
        })
    ))
}

function whenMouseLeave(): void {
    setRef(mouseState, null)
}
</script>

<template>
<div
    class="relative"
    @mouseenter="whenMouseEnter"
    @mouseleave="whenMouseLeave"
>
    <slot />

    <span
        v-if="mouseState"
        :style="{
            top: `${mouseState.elementY}px`,
            left: `${mouseState.elementX}px`,
        }"
    />
</div>
</template>

<style lang="sass" scoped>
:deep(span)
    @apply absolute
    @apply h-5 w-5
    @apply rounded-full
    @apply -translate-1/2
    @apply pointer-events-none

    background: radial-gradient(rgba($color-grey-light, 0.1) 70%, transparent)
    box-shadow: 0 0 3.5rem 1.5rem rgba($color-white, 0.1)
</style>
