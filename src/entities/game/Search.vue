<script lang="ts" setup>
// todo: from api

let { t } = useI18n({
    useScope: "local",
})
</script>

<template>
<ui-form-input
    :placeholder="t('Search by description')"
    clearable
>
    <template #suffix>
        <ui-base-icon size="18">
            <i class="i-heroicons:magnifying-glass" />
        </ui-base-icon>
    </template>
</ui-form-input>
</template>

<i18n lang="yaml">
de:
    Search by description: Suche nach Beschreibung
en:
    Search by description: Search by description
</i18n>
