import type { FacetedSearchApiV1ItemsSearchGameIdPostDataRaw, ItemRaw } from "#schema/data-contracts"
import type { DefineStore, FacetQuery, FacetResult } from "~/types"

import { Facets, Items } from "~/dto"
import { createCollection, createModel, createStore } from "~/factories"

export namespace FacetsStore {
    export type Id = "facetsStore"

    export type State = {
        facetsQuery: FacetQuery
        facetsRaw: FacetedSearchApiV1ItemsSearchGameIdPostDataRaw
        searchRaw: FacetResult<ItemRaw[]>
    }

    export type Getters = {
        facets: () => Facets
        getFacetsCount: () => (facet: string) => number
        searchResults: () => Items
    }

    export type Actions = {
        setFacetsQuery: (facetQuery: FacetQuery) => void
        setFacetsRaw: (facetsRaw: FacetedSearchApiV1ItemsSearchGameIdPostDataRaw) => void
        setSearchRaw: (searchRaw: FacetResult<ItemRaw[]>) => void
        updateFacetsQuery: (facetQuery: FacetQuery) => void
    }

    export type Store = DefineStore<Id, State, Getters, Actions>
}

export let useFacetsStore: (storeId?: string) => FacetsStore.Store = createStore<
    FacetsStore.Id,
    FacetsStore.State,
    FacetsStore.Getters,
    FacetsStore.Actions
>("facetsStore", {
    actions: {
        setFacetsQuery(facetsQuery: FacetQuery): void {
            this.facetsQuery = facetsQuery
        },

        setFacetsRaw(facetsRaw: FacetedSearchApiV1ItemsSearchGameIdPostDataRaw): void {
            this.facetsRaw = facetsRaw
        },

        setSearchRaw(searchRaw: FacetResult<ItemRaw[]>): void {
            this.searchRaw = searchRaw
        },

        updateFacetsQuery(facetsQuery: FacetQuery): void {
            useMerge(this.facetsQuery, facetsQuery)
            useForEach(this.facetsQuery, (val: string, key: string): void => {
                if (val === "[]")
                    this.facetsQuery = useOmit(this.facetsQuery, key)
            })
        },
    },

    getters: {
        facets(): Facets {
            return createModel(Facets, this.facetsRaw)
        },

        getFacetsCount(): (facet: string) => number {
            return (facet: string): number => (
                useGet(this.facets, facet, 0)
            )
        },

        searchResults(): Items {
            return createCollection(Items, this.searchRaw.results)
        },
    },

    state: (): FacetsStore.State => ({
        facetsQuery: {},
        facetsRaw: {},
        searchRaw: {
            facet_counts: {},
            results: [],
        },
    }),
})
