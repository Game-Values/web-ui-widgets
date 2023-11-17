<script lang="ts" setup>
import type { SkeletonProps } from "vexip-ui"

defineProps<SkeletonProps>()
</script>

<template>
<v-skeleton v-bind="$props" />
</template>

<style lang="scss">
@forward "vexip-ui/style/skeleton" with (
    $skeleton: (

    ),
);
</style>
