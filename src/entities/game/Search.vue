<script lang="ts" setup>
import { DEBOUNCE_TIMEOUT } from "~/consts"
import { Facet } from "~/enums"

let { t } = useI18n({
    useScope: "local",
})

let { routerClient } = useClients()

let handleSearch = useDebounce((search: string): void => {
    navigateTo(
        {
            query: useFacetQuery({
                [Facet.DESCRIPTION]: search,
            }),
        },
        {
            replace: true,
        },
    )
}, DEBOUNCE_TIMEOUT)
</script>

<template>
<v-input
    :placeholder="t('Search by description')"
    :value="routerClient.getRouteQuery('description')"
    clearable
    @input="handleSearch($event)"
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
