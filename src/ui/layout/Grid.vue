<script lang="ts" setup>
import type { GridProps } from "vexip-ui"

type Props = GridProps

interface Slots {
    default: () => any
}

withDefaults(defineProps<Props>(), (
    useUiProps<GridProps>({
        gap: Array(2).fill(
            remToPx(useThemeSpace(6), false),
        ),
    })
))

defineSlots<Slots>()
</script>

<template>
<v-grid v-bind="$props">
    <slot />
</v-grid>
</template>

<style lang="sass" scoped>
.vxp-grid
    @apply fit
</style>
