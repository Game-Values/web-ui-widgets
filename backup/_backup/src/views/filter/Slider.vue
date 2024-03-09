<script lang="ts" setup>
defineProps<{
    max: number
    min: number
    value: number[]
}>()

defineEmits<{
    (e: "change", modelValue: number[]): void
}>()
</script>

<template>
<v-slider
    :value="[
        useFirst(value) || min,
        useLast(value) || max,
    ]"
    :max="max"
    :min="min"
    range
    @change="$emit('change', $event)"
    @input="$emit('change', $event)"
>
    <template #suffix>
        <ui-icon
            heroicons="magnifying-glass"
            size="18"
        />
    </template>
</v-slider>
</template>

<i18n lang="yaml">
de:
    Search by description: Suche nach Beschreibung
en:
    Search by description: Search by description
</i18n>
