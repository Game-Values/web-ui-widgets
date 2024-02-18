import type { IItem } from "$schema/api"
import type { IFacets } from "~/entities/facets"
import type { ILotsFilters } from "~/entities/lot"
import type { Readable, Writable } from "svelte/store"

import { derived, writable } from "svelte/store"

import { useApi } from "$api"

type IUseLots = {
    lotsSearching: Readable<boolean>
    searchLots(gameId: string, payload: ILotsFilters): Promise<IFacets<IItem[]>>
}

export function useLots(): IUseLots {
    let { facetedSearchApiV1ItemsSearchGameIdPost } = useApi()

    let lotsSearching: Writable<boolean> = writable(false)

    return {
        lotsSearching: derived(lotsSearching, (
            ($lotsSearching: boolean): boolean => $lotsSearching
        )),

        searchLots: (gameId: string, payload: ILotsFilters): Promise<IFacets<IItem[]>> => {
            lotsSearching.set(true)

            let searchLotsPromise: Promise<IFacets<IItem[]>> = (
                facetedSearchApiV1ItemsSearchGameIdPost(gameId, payload)
            ) as Promise<IFacets<IItem[]>>

            return searchLotsPromise.finally((): void => lotsSearching.set(false))
        },
    }
}
