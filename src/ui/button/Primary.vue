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
    type="primary"
>
    <slot />
</ui-base-button>
</template>
