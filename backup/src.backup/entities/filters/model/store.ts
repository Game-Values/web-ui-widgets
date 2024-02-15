import type { TFilters } from "~/entities/filters"
import type { Readable, Writable } from "svelte/store"

import { merge } from "lodash-es"
import { derived, get, writable } from "svelte/store"

import { cleanObject } from "~/shared/lib"

let filtersRaw: Writable<TFilters> = writable(Object.create(null))

export let filters: Readable<TFilters> = derived(filtersRaw, (
    ($filtersRaw: TFilters) => cleanObject($filtersRaw)
))

export function updateFilters(updatedFilters: TFilters): TFilters {
    filtersRaw.set(
        merge(
            get(filtersRaw),
            updatedFilters,
        ),
    )

    return get(filtersRaw)
}
