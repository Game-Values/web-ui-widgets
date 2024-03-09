import type {
    IFacetedSearchApiV1ItemsSearchGameIdPostDataRaw,
    IFacetedSearchApiV1ItemsSearchGameIdPostPayloadRaw,
} from "~/shared/api"
import type { Facet } from "~/entities/facets"
import type { GameSection } from "~/entities/game"

export type TFacetsQuery = IFacetedSearchApiV1ItemsSearchGameIdPostPayloadRaw & {
    [Facet.TYPE]: GameSection
}

export interface IFacets extends IFacetedSearchApiV1ItemsSearchGameIdPostDataRaw {
    // todo
}

export interface IFacetsResult<T> {
    facet_counts: IFacets
    results: T
}
