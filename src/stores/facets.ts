import type { FacetedSearchApiV1ItemsSearchGameIdPostDataRaw, ItemRaw } from "#schema/data-contracts"
import type { DefineStore, FacetResult } from "~/types"

import { Facets, Items } from "~/dto"
import { createCollection, createModel, createStore } from "~/factories"

export namespace FacetsStore {
    export type Id = "facetsStore"

    export type State = {
        facetsRaw: FacetedSearchApiV1ItemsSearchGameIdPostDataRaw
        searchRaw: FacetResult<ItemRaw[]>
    }

    export type Getters = {
        facets: () => Facets
        searchResults: () => Items
    }

    export type Actions = {
        setFacetsRaw: (facetsRaw: FacetedSearchApiV1ItemsSearchGameIdPostDataRaw) => void
        setSearchRaw: (searchRaw: FacetResult<ItemRaw[]>) => void
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
        setFacetsRaw(facetsRaw: FacetedSearchApiV1ItemsSearchGameIdPostDataRaw): void {
            this.facetsRaw = facetsRaw
        },

        setSearchRaw(searchRaw: FacetResult<ItemRaw[]>): void {
            this.searchRaw = searchRaw
        },
    },

    getters: {
        facets(): Facets {
            return createModel(Facets, this.facetsRaw)
        },

        searchResults(): Items {
            return createCollection(Items, this.searchRaw.results)
        },
    },

    state: (): FacetsStore.State => ({
        facetsRaw: {},
        searchRaw: {
            facet_counts: {},
            results: [],
        },
    }),
})
