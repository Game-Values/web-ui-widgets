import type { Facet } from "~/entities/facets"
import type { GameSection } from "~/entities/game"

export type TFilters = {
    [Facet.TYPE]: GameSection
}
