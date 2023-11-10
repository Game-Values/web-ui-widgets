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
.vxp-button-vars
    --vxp-button-height: auto
    --vxp-button-radius: #{$space-2}
    --vxp-button-v-padding: #{$space-3_5}
    --vxp-button-h-padding: #{$space-7}

.vxp-button
    @apply text-level-5 font-semibold

.vxp-button--circle
    --vxp-button-v-padding: 0
    --vxp-button-h-padding: 0

    @apply w-8 h-8
</style>
