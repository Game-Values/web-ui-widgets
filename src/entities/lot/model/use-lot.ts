import type { IItem, IMsg } from "$schema/api"

import { useApi } from "$api"

type IUseLot = {
    deleteLot(): Promise<IMsg>
}

export function useLot(lot: IItem): IUseLot {
    let { deleteItemApiV1ItemsItemItemIdDelete } = useApi()

    return {
        deleteLot: (): Promise<IMsg> => deleteItemApiV1ItemsItemItemIdDelete(lot.id!),
    }
}
