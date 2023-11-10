<script lang="ts" setup>
import type { RowProps } from "vexip-ui"

type Props = RowProps

interface Slots {
    default: () => any
}

withDefaults(defineProps<Props>(), (
    useUiProps<RowProps>({
        gap: [
            remToPx(useGet(useRuntimeConfig().public.theme.spacing, "6"), false),
            remToPx(useGet(useRuntimeConfig().public.theme.spacing, "6"), false),
        ],
    })
))

defineSlots<Slots>()
</script>

<template>
<v-row v-bind="$props">
    <slot/>
</v-row>
</template>
