<script lang="ts" setup>
defineProps<{
    buckets: string[]
}>()
</script>

<template>
<v-select :options="buckets" />
</template>
