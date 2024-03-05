import type { IItem, IItemCreate, IItemUpdate } from "$schema/api"
import type { IForm } from "$types"
import type { ILotFormAction } from "~/features/lot"

import { merge } from "lodash-es"

import { useApi } from "$api"
import { goto } from "$app/navigation"
import { useEventDispatcher, useForm, useRoute } from "$model"

export function useLotForm(action: ILotFormAction, lot?: IItem): IForm<IItemCreate, IItem> {
    let { createItemApiV1ItemsItemPost, updateItemApiV1ItemsItemItemIdPut } = useApi()
    let { dispatchEvent: dispatchSubmitEvent } = useEventDispatcher<IItem>("submit")

    return useForm<IItemCreate, IItem>({
        initialValues: merge({ attributes: Object.create(null) }, lot),

        onSubmit: (data: IItemCreate | IItemUpdate): Promise<IItem> => {
            if (action === "create")
                return createItemApiV1ItemsItemPost(data as IItemCreate)

            return updateItemApiV1ItemsItemItemIdPut(lot!.id!, merge(lot, data) as IItemUpdate)
        },

        onSuccess: async (res: IItem): Promise<void> => {
            let { getRoute } = useRoute("/g/[gameId]", { gameId: res.gid, gameSection: res.attributes.type })

            if (action === "create")
                await goto(getRoute())

            await dispatchSubmitEvent(res)
        },
    })
}
