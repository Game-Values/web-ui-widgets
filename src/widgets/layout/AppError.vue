<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

import { INTERNAL_SERVER_ERROR } from "http-status"

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()

let errorCode = computed((): number => useGet(getRef(useError()), "statusCode", INTERNAL_SERVER_ERROR))
</script>

<template>
<widget-layout-app>
    <ui-image
        :src="`/images/${errorCode}.png`"
        class="fixed top-0 left-0"
        height="var(--vxp-layout-view-height)"
    />

    <slot />
</widget-layout-app>
</template>

<style lang="sass" scoped>
:deep(.vxp-layout__section)
    @apply h-screen
    @apply grid grid-rows-[auto_1fr_auto]

    > footer
        @apply bg-transparent
        @apply backdrop-blur-150
</style>
