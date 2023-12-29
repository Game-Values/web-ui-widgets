<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()
</script>

<template>
<v-card>
    <slot />
</v-card>
</template>

<style lang="sass" scoped>
.vxp-card-vars
    --vxp-card-bg-color: theme("colors.white-02")
    --vxp-card-b-color: theme("colors.white-02")

:deep(.vxp-card__content)
    @apply px-13 py-9
    @apply text-white-9

:deep(.vxp-blockquote)
    @apply ms-12

:deep(.vxp-ol),
:deep(.vxp-ul)
    @apply ms-15

:deep(dl)
    dd
        @apply ms-15

        > .vxp-ol,
        > .vxp-ul
            @apply ms-0

:deep(ol)
    dd,
    ol
        @apply ms-9\!
</style>
