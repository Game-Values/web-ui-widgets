<script lang="ts" setup>
import type { Facet } from "~/enums"
import type { Arrayable, AsyncComponent, FacetQuery } from "~/types"
import type { Component } from "vue"

import { DEBOUNCE_TIMEOUT } from "~/consts"
import { FilterType } from "~/enums"

let props = withDefaults(defineProps<{
    facet: Facet | Facet[]
    filter: FilterType
    items?: string[] // todo (?) mb {<key>:<val>}[]
}>(), {
    items: (): string[] => [],
})

let { routerClient } = useClients()

let filterViews = computed((): Record<FilterType, AsyncComponent> => (
    {
        [FilterType.CHECKBOX]: defineAsyncComponent((): Promise<Component> => import("~/views/filter/Checkbox.vue")),
        [FilterType.RADIO]: defineAsyncComponent((): Promise<Component> => import("~/views/filter/Radio.vue")),
        [FilterType.SEARCH]: defineAsyncComponent((): Promise<Component> => import("~/views/filter/Search.vue")),
        [FilterType.SLIDER]: defineAsyncComponent((): Promise<Component> => import("~/views/filter/Slider.vue")),
    }
))

let filterView = computed((): AsyncComponent => (
    useGet(
        getRef(filterViews),
        getRef(props.filter),
    )
))

let handleFilter = useDebounce(async (val: Arrayable<number | string>): Promise<void> => {
    let facetQuery: FacetQuery = {}

    if (isArray(props.facet))
        useForEach(props.facet, (facet: Facet, i: number): FacetQuery => (
            useSet(facetQuery, facet, useGet(val, i))
        ))
    else
        useSet(facetQuery, props.facet, val)

    await navigateTo(
        {
            query: useFacetQuery(facetQuery),
        },
        {
            replace: true,
        },
    )
}, DEBOUNCE_TIMEOUT)
</script>

<template>
<component
    :is="filterView"
    :value="(
        isArray(facet)
            ? useMap(facet, (facetItem: Facet) => routerClient.getRouteQuery(facetItem))
            : routerClient.getRouteQuery(facet)
    )"
    :items="items"
    @change="handleFilter"
/>
</template>
