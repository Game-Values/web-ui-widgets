import type { IGame } from "$schema/api"
import type { ILazyModuleSrc } from "$types"
import type { ILotsFilter, ILotsFilterBucket } from "~/entities/lot"

import { kebabCase } from "lodash-es"

import { lazyModule } from "$lib/helpers"

export function fetchLotsFilters(game: IGame, gameSection: string): Promise<ILotsFilter[]> {
    let alias: ILazyModuleSrc = `~/entities/lot/data/filters/${kebabCase(game.name)}/${kebabCase(gameSection)}.ts`

    return lazyModule<ILotsFilter[]>(alias)
}

export function findLotsFiltersDeep(lotsFilter: ILotsFilter, lotsFilterBucket: string): ILotsFilter[] {
    let targetBucket: ILotsFilterBucket | undefined = (
        (lotsFilter.buckets || [])
            .find((bucket: ILotsFilterBucket): boolean => bucket.value === lotsFilterBucket)
    )

    return targetBucket?.children || []
}
