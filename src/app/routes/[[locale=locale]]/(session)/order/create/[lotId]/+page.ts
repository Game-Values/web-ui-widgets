import type { IGame, IItem } from "$schema/api"
import type { IOrderCreatePageData } from "~/pages/order"

import { useApi } from "$api"

export async function load({ fetch, params, parent }): Promise<IOrderCreatePageData> {
    await parent()

    let { readGameApiV1GamesGameIdGet, readItemApiV1ItemsItemsItemIdGet } = useApi({ customFetch: fetch })

    let itemPromise: Promise<IItem> = readItemApiV1ItemsItemsItemIdGet(params.lotId)
    let gamePromise: Promise<IGame> = (
        itemPromise.then((item: IItem): Promise<IGame> => readGameApiV1GamesGameIdGet(item.gid!))
    )

    return {
        pagePromise: Promise.all([itemPromise, gamePromise]),
    }
}
