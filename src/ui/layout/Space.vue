<script lang="ts" setup>
import type { SpaceProps } from "vexip-ui"

type Props = SpaceProps

interface Slots {
    default: () => any
}

withDefaults(defineProps<Props>(), useUiProps<SpaceProps>())

defineSlots<Slots>()
</script>

<template>
<v-space v-bind="$props">
    <slot />
</v-space>
</template>

<style lang="sass" scoped>
.vxp-space
    @apply w-full
</style>
