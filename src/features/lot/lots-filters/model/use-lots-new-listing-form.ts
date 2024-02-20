import type { IItem } from "$schema/api"
import type { IForm } from "$types"

import { createForm } from "felte"

export function useLotsNewListingForm(): IForm<IItem> {
    return createForm<IItem>({
        onSubmit: () => {},
        onSuccess: () => {},
    })
}
