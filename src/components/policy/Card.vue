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
    @apply ms-14

:deep(.vxp-ol),
:deep(.vxp-ul)
    @apply ms-12

:deep(dl)
    dd
        @apply ms-12

        > .vxp-ol,
        > .vxp-ul
            @apply ms-0
</style>
