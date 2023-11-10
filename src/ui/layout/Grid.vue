<script lang="ts" setup>
import type { GridProps } from "vexip-ui"

type Props = GridProps

interface Slots {
    default: () => any
}

withDefaults(defineProps<Props>(), (
    useUiProps<GridProps>({
        gap: [
            remToPx(useGet(useRuntimeConfig().public.theme.spacing, "6"), false),
            remToPx(useGet(useRuntimeConfig().public.theme.spacing, "6"), false),
        ],
    })
))

defineSlots<Slots>()
</script>

<template>
<v-grid v-bind="$props">
    <slot />
</v-grid>
</template>
