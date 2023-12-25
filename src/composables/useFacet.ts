import type { FacetQuery } from "~/types"

import { Facet, GameSubsection } from "~/enums"

export function useFacetQuery(facetQuery?: Partial<FacetQuery>): FacetQuery {
    let { routerClient } = useClients()

    let entries: [string, Facet & GameSubsection][] = (
        useEntries({ ...Facet, ...GameSubsection }) as [string, Facet & GameSubsection][]
    )

    let _facetQuery: FacetQuery = useReduce(entries, (result: FacetQuery, [, facet]: [string, Facet]): FacetQuery => (
        useAssign(result, {
            [facet]: routerClient.getRouteQuery(facet),
        })
    ), {})

    return cleanObject(
        useMerge(_facetQuery, facetQuery),
    )
}
