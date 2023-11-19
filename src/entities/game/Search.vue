<script lang="ts" setup>
// todo: from api

let { t } = useI18n({
    useScope: "local",
})
</script>

<template>
<v-input
    :placeholder="t('Search by description')"
    clearable
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
