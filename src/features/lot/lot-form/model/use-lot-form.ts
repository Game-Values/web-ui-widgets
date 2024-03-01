import type { IItem, IItemCreate, IItemUpdate } from "$schema/api"
import type { IForm } from "$types"
import type { ILotFormAction } from "~/features/lot"

import { createForm } from "felte"
import { merge } from "lodash-es"
import { get } from "svelte/store"

import { useApi } from "$api"
import { goto } from "$app/navigation"
import { useEventDispatcher, useRoute } from "$model"

export function useLotForm(action: ILotFormAction, lot?: IItem): IForm<IItemCreate> {
    let { createItemApiV1ItemsItemPost, updateItemApiV1ItemsItemItemIdPut } = useApi()
    let { dispatchEvent: dispatchSubmitEvent } = useEventDispatcher<IItem>("submit")

    return createForm<IItemCreate>({
        initialValues: merge({
            attributes: Object.create(null),
        }, lot),

        onSubmit: (data: IItemCreate | IItemUpdate): Promise<IItem> => {
            if (action === "create")
                return createItemApiV1ItemsItemPost(data as IItemCreate)

            return updateItemApiV1ItemsItemItemIdPut(lot!.id!, merge(lot, data) as IItemUpdate)
        },

        onSuccess: async (res: IItem): Promise<void> => {
            let { route } = useRoute("/g/[gameId]", { gameId: res.gid, gameSection: res.attributes.type })

            if (action === "create")
                await goto(get(route))

            await dispatchSubmitEvent(res)
        },
    })
}
