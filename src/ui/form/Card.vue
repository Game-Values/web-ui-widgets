<script lang="ts" setup>
import type { CardProps } from "vexip-ui"

type Props = CardProps

interface Slots {
    default: () => any
}

withDefaults(defineProps<Props>(), (
    useUiProps<CardProps>({
        shadow: "never",
    })
))

defineSlots<Slots>()
</script>

<template>
<v-card v-bind="$props">
    <slot />
</v-card>
</template>

<style lang="sass" scoped>
.vxp-card-vars
    --vxp-card-body-h-padding: 0
    --vxp-card-body-v-padding: 0
    --vxp-card-bg-color: transparent
    --vxp-card-b-color: transparent
</style>
