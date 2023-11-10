<script lang="ts" setup>
import type { ColumnProps } from "vexip-ui"

type Props = ColumnProps

interface Slots {
    default: () => any
}

withDefaults(defineProps<Props>(), (
    useUiProps<ColumnProps>({
        useFlex: true,
    })
))

defineSlots<Slots>()
</script>

<template>
<v-column v-bind="$props">
    <slot />
</v-column>
</template>
