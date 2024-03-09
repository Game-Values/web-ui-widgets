import type { IFacets, TFacetsQuery } from "~/entities/facets"
import type { Writable } from "svelte/store"

import { get, writable } from "svelte/store"

import { api } from "~/shared/api"

export let facets: Writable<IFacets> = writable(Object.create(null))

export let facetsQuery: Writable<TFacetsQuery> = writable(Object.create(null))

export async function fetchFacets(gameId: string): Promise<IFacets> {
    let facetsRaw: IFacets = await api.getAvailableFacetsApiV1ItemsFacetsGameIdGet(gameId)
    facets.set(facetsRaw)

    return get<IFacets>(facets)
}

