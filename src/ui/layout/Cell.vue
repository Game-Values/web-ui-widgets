<script lang="ts" setup>
import type { CellProps } from "vexip-ui"

type Props = CellProps

interface Slots {
    default: () => any
}

withDefaults(defineProps<Props>(), useUiProps<CellProps>())

defineSlots<Slots>()
</script>

<template>
<v-cell v-bind="$props">
    <slot />
</v-cell>
</template>
