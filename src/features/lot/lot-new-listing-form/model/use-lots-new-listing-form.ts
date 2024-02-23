import type { IItem, IItemCreate } from "$schema/api"
import type { IForm } from "$types"

import { createForm } from "felte"
import { get } from "svelte/store"

import { useApi } from "$api"
import { goto } from "$app/navigation"
import { useRoute } from "$model"

export function useLotsNewListingForm(): IForm<IItemCreate> {
    let { createItemApiV1ItemsItemPost } = useApi()

    return createForm<IItemCreate>({
        initialValues: { attributes: Object.create(null) },
        onSubmit: createItemApiV1ItemsItemPost,
        onSuccess: (lot: IItem): Promise<void> => {
            let { route } = useRoute("/g/[gameId]", { gameId: lot.gid, gameSection: lot.attributes.type })

            return goto(get(route))
        },
    })
}
