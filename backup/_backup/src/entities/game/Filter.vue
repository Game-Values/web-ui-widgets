<script lang="ts" setup>
import type { GameSubsection } from "~/dto"
import type { Arrayable, AsyncComponent, FacetQuery } from "~/types"
import type { Component } from "vue"

import { DEBOUNCE_TIMEOUT } from "~/enums"
import { Facet, FilterType } from "~/enums"

let props = defineProps<{
    facet: Facet
    subsection: GameSubsection
}>()

let { routerClient } = useClients()
let { facetController } = useControllers()

let filterFacet = computed((): Facet => (
    props.facet ||
    props.subsection.name
))

let filterViews = computed((): Record<FilterType, AsyncComponent> => (
    {
        [FilterType.CHECKBOX]: defineAsyncComponent((): Promise<Component> => import("~/views/filter/Checkbox.vue")),
        [FilterType.FROM_TO]: defineAsyncComponent((): Promise<Component> => import("~/views/filter/FromTo.vue")),
        [FilterType.RADIO]: defineAsyncComponent((): Promise<Component> => import("~/views/filter/Radio.vue")),
        [FilterType.SEARCH]: defineAsyncComponent((): Promise<Component> => import("~/views/filter/Search.vue")),
        [FilterType.SELECT]: defineAsyncComponent((): Promise<Component> => import("~/views/filter/Select.vue")),
    }
))

let filterView = computed((): AsyncComponent => (
    useGet(
        getRef(filterViews),
        getRef(props.subsection.type),
    )
))

let handleFilter = useDebounce(async (val: Arrayable<number | string>): Promise<void> => {
    let facetQuery: FacetQuery = {
        [getRef(filterFacet)]: JSON.stringify(val),
    }

    await navigateTo({
        query: useFacetQuery(facetQuery),
        replace: true,
    })

    await facetController.searchFacets(routerClient.getRouteParam("gameId"), (
        useFacetQuery({
            [Facet.TYPE]: routerClient.getRouteParam("gameSection"),
        })
    ))
}, DEBOUNCE_TIMEOUT)
</script>

<template>
<component
    v-bind="subsection"
    :is="filterView"
    :value="(
        routerClient.getRouteQuery(filterFacet) &&
        JSON.parse(routerClient.getRouteQuery(filterFacet))
    )"
    @change="handleFilter"
/>
</template>
