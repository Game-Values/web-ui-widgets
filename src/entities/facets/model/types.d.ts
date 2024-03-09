import type { IGameSections } from "~/entities/game"

export type IFacets<T> = {
    facet_counts: IFacetsCount
    results: T
}

export type IFacetsCount = {
    type: IGameSections
}
