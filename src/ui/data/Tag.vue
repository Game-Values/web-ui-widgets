<script lang="ts" setup>
import type { TagProps } from "vexip-ui"

type Props = TagProps

interface Slots {
    default: () => any
}

withDefaults(defineProps<Props>(), useUiProps<TagProps>())

defineSlots<Slots>()
</script>

<template>
<v-tag v-bind="$props">
    <slot />
</v-tag>
</template>
