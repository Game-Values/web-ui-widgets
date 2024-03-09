import type { IItemRaw } from "~/shared/api"
import type { TFilters } from "~/entities/filters"
import type { TLotsSearch } from "~/entities/lot"
import type { Readable, Writable } from "svelte/store"

import { derived, get, writable } from "svelte/store"

import { api } from "~/shared/api"

export let lotsSearch: Writable<TLotsSearch> = writable(Object.create(null))

export let lots: Readable<IItemRaw[]> = derived(lotsSearch, ($lotsSearch: TLotsSearch) => $lotsSearch.results)

export let isLotsSearching: Writable<boolean> = writable(false)

export async function searchLots(gameId: string, filters: TFilters): Promise<TLotsSearch> {
    isLotsSearching.set(true)

    let lotsSearchRaw: TLotsSearch = await api.facetedSearchApiV1ItemsSearchGameIdPost(gameId, filters) as TLotsSearch

    lotsSearch.set(lotsSearchRaw)
    isLotsSearching.set(false)

    return get<TLotsSearch>(lotsSearch)
}
