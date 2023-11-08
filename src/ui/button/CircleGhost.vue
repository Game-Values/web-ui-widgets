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
<ui-button-circle
    v-bind="$props"
    ghost
>
    <slot />
</ui-button-circle>
</template>
