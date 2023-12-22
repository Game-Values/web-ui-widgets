<script lang="ts" setup>
import type { FacetQuery } from "~/types"

import { DEBOUNCE_TIMEOUT } from "~/consts"
import { Facet } from "~/enums"

let { t } = useI18n({
    useScope: "local",
})

let { routerClient } = useClients()
let { facetController, itemController } = useControllers()

let handleSearch = useDebounce((search: string): void => {
    let facetQuery: FacetQuery = useFacetQuery({
        [Facet.DESCRIPTION]: search,
    })

    if (isEmpty(facetQuery))
        itemController.fetchItems({
            gid: routerClient.getRouteParam("gameId"),
        })
    else
        facetController.search(
            useFacetQuery({
                [Facet.DESCRIPTION]: search,
            }),
        )
}, DEBOUNCE_TIMEOUT)
</script>

<template>
<v-input
    :placeholder="t('Search by description')"
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
