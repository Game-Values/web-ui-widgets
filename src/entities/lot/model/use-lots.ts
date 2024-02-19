import type { IItem } from "$schema/api"
import type { IFacets } from "~/entities/facets"
import type { ILotsFiltersPayload } from "~/entities/lot"

import { useApi } from "$api"

type IUseLots = {
    searchLots(gameId: string, payload: ILotsFiltersPayload): Promise<IFacets<IItem[]>>
}

export function useLots(): IUseLots {
    let { facetedSearchApiV1ItemsSearchGameIdPost } = useApi()

    return {
        searchLots: (gameId: string, payload: ILotsFiltersPayload): Promise<IFacets<IItem[]>> => (
            facetedSearchApiV1ItemsSearchGameIdPost(gameId, payload)
        ) as Promise<IFacets<IItem[]>>,
    }
}
