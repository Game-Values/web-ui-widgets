<script lang="ts" setup>
import type { LayoutProps } from "vexip-ui"

import { TIMEOUT_DEBOUNCE } from "~/consts"

type Props = LayoutProps

interface Slots {
    footer: () => any
    header: () => any
    main: () => any
}

withDefaults(defineProps<Props>(), (
    useUiProps<LayoutProps>({
        footer: true,
        noAside: true,
    })
))

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
        <!-- h-[var(--vxp-layout-header-height)] -->
        <ui-layout-content class="flex-center h-[var(--vxp-layout-header-height)]">
            <slot name="header" />
        </ui-layout-content>
    </template>

    <template #main>
        <!-- class="max-h-[calc(100vh-var(--vxp-layout-header-height))]" -->
        <ui-layout-content>
            <slot name="main" />
        </ui-layout-content>
    </template>

    <template #footer>
        <ui-layout-content class="flex-center h-[var(--vxp-layout-footer-height)]">
            <slot name="footer" />
        </ui-layout-content>
    </template>
</v-layout>
</template>

<style lang="sass" scoped>
.vxp-layout-vars
    @include lg
        --vxp-layout-header-height: #{$layout-header-height-lg}
        --vxp-layout-footer-height: #{$layout-footer-height-lg}

    @include md
        --vxp-layout-header-height: #{$layout-header-height-md}
        --vxp-layout-footer-height: #{$layout-footer-height-md}

    @include sm
        --vxp-layout-header-height: #{$layout-header-height-sm}
        --vxp-layout-footer-height: #{$layout-footer-height-sm}

    @include xs
        --vxp-layout-header-height: #{$layout-header-height-xs}
        --vxp-layout-footer-height: #{$layout-footer-height-xs}

// :deep(.vxp-layout__scrollbar)
//     @apply top-0
</style>
