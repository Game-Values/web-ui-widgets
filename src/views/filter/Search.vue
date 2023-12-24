<script lang="ts" setup>
defineProps<{
    value: number | string
}>()

defineEmits<{
    (e: "change", modelValue: string): void
}>()

let { t } = useI18n({
    useScope: "local",
})
</script>

<template>
<v-input
    :placeholder="t('Search by description')"
    :value="value"
    clearable
    @input="$emit('change', $event)"
>
    <template #suffix>
        <ui-icon
            heroicons="magnifying-glass"
            size="18"
        />
    </template>
</v-input>
</template>

<i18n lang="yaml">
de:
    Search by description: Suche nach Beschreibung
en:
    Search by description: Search by description
</i18n>
