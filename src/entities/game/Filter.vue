<script lang="ts" setup>
import type { Facet } from "~/enums"
import type { AsyncComponent } from "~/types"
import type { Component } from "vue"

import { DEBOUNCE_TIMEOUT } from "~/consts"
import { FilterType } from "~/enums"

let props = defineProps<{
    facet: Facet
    filter: FilterType
    items: string[] // todo (?) mb {<key>:<val>}[]
}>()

let { routerClient } = useClients()

let filterViews = computed((): Record<FilterType, AsyncComponent> => (
    {
        [FilterType.CHECKBOX]: defineAsyncComponent((): Promise<Component> => import("~/views/filter/Checkbox.vue")),
        [FilterType.RADIO]: defineAsyncComponent((): Promise<Component> => import("~/views/filter/Radio.vue")),
    }
))

let filterView = computed((): AsyncComponent => (
    useGet(
        getRef(filterViews),
        getRef(props.filter),
    )
))

let handleFilter = useDebounce((facet: Facet, val: number | string): void => {
    navigateTo(
        {
            query: useFacetQuery({
                [facet]: val,
            }),
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
    :facet="facet"
    :items="items"
    :value="routerClient.getRouteQuery(facet)"
    @change="handleFilter"
/>
</template>
