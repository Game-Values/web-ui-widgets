<script lang="ts" setup>
defineProps<{
    buckets: string[]
    value: string[]
}>()

defineEmits<{
    (e: "change", modelValue: string): void
}>()
</script>

<template>
<v-checkbox-group
    :value="value"
    vertical
    @change="$emit('change', $event)"
>
    <v-checkbox
        v-for="bucket in buckets"
        :key="bucket"
        :label="bucket"
        :value="bucket"
    />
</v-checkbox-group>
</template>
