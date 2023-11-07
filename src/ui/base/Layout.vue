<script lang="ts" setup>
import type { LayoutProps } from "vexip-ui"

import { TIMEOUT_DEBOUNCE } from "~/consts"

type Props = LayoutProps

interface Slots {
    footer: () => any
    header: () => any
    main: () => any
}

withDefaults(defineProps<Props>(), {
    noAside: true,
})

defineSlots<Slots>()

let layoutRef = ref()

let mutationCallback = useDebounceFn((): Promise<void> => (
    useNextTick((): void => layoutRef.value.scroll.refresh())
), TIMEOUT_DEBOUNCE)

useMutationObserver(layoutRef, mutationCallback, { childList: true, subtree: true })
useResizeObserver(layoutRef, mutationCallback)
</script>

<template>
<v-layout
    v-bind="$props"
    ref="layoutRef"
>
    <template #header>
        <slot name="header" />
    </template>

    <template #main>
        <slot name="main" />
    </template>

    <template #footer>
        <slot name="footer" />
    </template>
</v-layout>
</template>

<style lang="sass" scoped>
.vxp-layout-vars
    --vxp-layout-header-height: 70px

:deep(.vxp-layout__main)
    @apply max-h-[calc(100vh-var(--vxp-layout-header-height))]

:deep(.vxp-layout__scrollbar)
    @apply top-0
</style>
