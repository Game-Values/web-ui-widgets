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
>
    <slot />
</ui-base-button>
</template>

<style lang="sass" scoped>
.vxp-button
    @apply bg-secondary border-secondary
    @apply text-white
</style>
