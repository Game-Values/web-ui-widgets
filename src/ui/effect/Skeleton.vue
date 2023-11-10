<script lang="ts" setup>
import type { SkeletonProps } from "vexip-ui"

type Props = SkeletonProps

withDefaults(defineProps<Props>(), useUiProps<SkeletonProps>())
</script>

<template>
<v-skeleton v-bind="$props" />
</template>
