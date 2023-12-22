import type { FacetQuery } from "~/types"

import { Facet } from "~/enums"

export function useFacetQuery(facetQuery?: Partial<FacetQuery>): FacetQuery {
    let { routerClient } = useClients()

    let _facetQuery: FacetQuery = useReduce(useEntries(Facet), (result: FacetQuery, [, facet]: [string, Facet]): FacetQuery => (
        useAssign(result, {
            [facet]: routerClient.getRouteQuery(facet),
        })
    ), {})

    return cleanObject(
        useMerge(_facetQuery, facetQuery),
    )
}
