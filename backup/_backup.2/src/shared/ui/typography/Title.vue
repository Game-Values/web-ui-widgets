<script lang="ts" setup>
defineProps<{
    level: number | string
}>()
</script>

<template>
<component
    :is="`h${level}`"
    :class="`text-h${level}`"
>
    <slot />
</component>
</template>
