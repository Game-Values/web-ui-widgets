<script lang="ts" setup>
import type { Color } from "~/types"
import type { IconProps } from "vexip-ui"

interface Props extends IconProps {
    color?: Color
    size?: string
}

withDefaults(defineProps<Props>(), useUiProps<IconProps>())
</script>

<template>
<ui-base-icon v-bind="$props">
    <i class="i-heroicons-outline-heart" />
</ui-base-icon>
</template>
