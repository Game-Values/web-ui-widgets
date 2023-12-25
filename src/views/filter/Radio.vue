<script lang="ts" setup>
defineProps<{
    buckets: string[]
    value: string
}>()

defineEmits<{
    (e: "change", modelValue: string): void
}>()
</script>

<template>
<v-radio-group
    :value="value"
    vertical
    @change="$emit('change', $event)"
>
    <v-radio
        v-for="bucket in buckets"
        :key="bucket"
        :label="bucket"
        :value="bucket"
    />
</v-radio-group>
</template>
