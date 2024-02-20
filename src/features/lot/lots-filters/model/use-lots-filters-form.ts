import type { IForm } from "$types"

import { createForm } from "felte"

export function useLotsFiltersForm(): IForm<unknown> {
    return createForm<unknown>()
}
