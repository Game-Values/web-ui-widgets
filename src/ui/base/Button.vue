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
<v-button v-bind="$props">
    <slot />
</v-button>
</template>

<style lang="sass" scoped>
.vxp-button
    @apply px-7 py-3.5
    @apply h-auto
</style>
