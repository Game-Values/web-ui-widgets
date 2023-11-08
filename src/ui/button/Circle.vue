<script lang="ts" setup>
import type { ButtonProps } from "vexip-ui"

type Props = ButtonProps

interface Slots {
    default: () => any
}

withDefaults(defineProps<Props>(), useUiProps<ButtonProps>())

defineSlots<Slots>()
</script>

<template>
<ui-base-button
    v-bind="$props"
    circle
>
    <slot />
</ui-base-button>
</template>

<style lang="sass" scoped>
.vxp-button--circle
    @apply p-0
    @apply w-8 h-8
</style>
