<script lang="ts" setup>
// import { TIMEOUT_DEBOUNCE } from "~/consts"

interface Slots {
    // footer: () => any
    // header: () => any
    default: () => any
}

defineSlots<Slots>()

// let layoutRef = ref()

// let mutationCallback = useDebounceFn((): Promise<void> => (
//     useNextTick((): void => layoutRef.value.scroll.refresh())
// ), TIMEOUT_DEBOUNCE)

// useMutationObserver(layoutRef, mutationCallback, { childList: true, subtree: true })
// useResizeObserver(layoutRef, mutationCallback)
</script>

<template>
<ui-layout-app>
    <template #main>
        <slot />
    </template>
</ui-layout-app>
</template>
