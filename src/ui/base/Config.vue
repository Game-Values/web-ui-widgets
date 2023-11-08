<script lang="ts" setup>
import type { ConfigProviderProps } from "vexip-ui"

type Props = ConfigProviderProps

interface Slots {
    default: () => any
}

defineProps<Props>()

defineSlots<Slots>()
</script>

<template>
<v-config-provider v-bind="$props">
    <slot />
</v-config-provider>
</template>
