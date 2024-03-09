import type { MaybePromise } from "@sveltejs/kit"
import type { IFacets, IFacetsCount } from "~/entities/facets"

type IUseFacets<T> = {
    facets: IFacetsCount
    results: T
}

function createUseFacets<T>(facets: IFacets<T>): IUseFacets<T> {
    return {
        facets: facets.facet_counts,

        results: facets.results,
    }
}

export function useFacets<T>(facetsPromise: Promise<IFacets<T>>): Promise<IUseFacets<T>>
export function useFacets<T>(facets: IFacets<T>): IUseFacets<T>
export function useFacets<T>(facetsOrPromise: IFacets<T> | Promise<IFacets<T>>): MaybePromise<IUseFacets<T>> {
    if (facetsOrPromise instanceof Promise)
        return facetsOrPromise.then((facets: IFacets<T>): IUseFacets<T> => createUseFacets<T>(facets))

    return createUseFacets<T>(facetsOrPromise)
}
