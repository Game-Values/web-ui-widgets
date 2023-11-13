<script lang="ts" setup>
// import { TIMEOUT_DEBOUNCE } from "~/consts"
import type { VNode } from "vue"

defineSlots<{
    default: () => VNode
}>()

// let layoutRef = ref()

// let mutationCallback = useDebounceFn((): Promise<void> => (
//     useNextTick((): void => layoutRef.value.scroll.refresh())
// ), TIMEOUT_DEBOUNCE)

// useMutationObserver(layoutRef, mutationCallback, { childList: true, subtree: true })
// useResizeObserver(layoutRef, mutationCallback)
</script>

<template>
<ui-base-layout>
    <slot />

    <template #logo>
        <ui-base-link :to="useMainRoute().fullPath">
            <ui-base-icon
                custom="logo"
                height="40"
                width="158"
            />
        </ui-base-link>
    </template>
</ui-base-layout>
</template>
