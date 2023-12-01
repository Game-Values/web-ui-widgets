<script inherit-attrs="false" lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()

// todo: (?)
</script>

<template>
<v-text
    :color="useTheme('colors.white')"
    class="opacity-60"
>
    <slot />
</v-text>
</template>
