<script lang="ts" setup>
import type { TextProps } from "vexip-ui"

type Props = TextProps

interface Slots {
    default: () => any
}

withDefaults(defineProps<Props>(), useUiProps<TextProps>())

defineSlots<Slots>()
</script>

<template>
<v-text
    v-bind="$props"
>
    <slot />
</v-text>
</template>

<style lang="sass" scoped>
// .vxp-text
//     @apply prose
</style>
