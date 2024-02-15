import type {
    FacetedSearchApiV1ItemsSearchPostDataRaw,
    FacetedSearchApiV1ItemsSearchPostPayloadRaw,
} from "#schema/data-contracts"
import type { Facet, Item } from "~/enums"

export interface FacetQuery extends FacetedSearchApiV1ItemsSearchPostPayloadRaw {
    [key: Facet]: (
        Item |
        string
    )
}

export interface FacetResult<T> {
    facet_counts: FacetedSearchApiV1ItemsSearchPostDataRaw
    results: T
}
