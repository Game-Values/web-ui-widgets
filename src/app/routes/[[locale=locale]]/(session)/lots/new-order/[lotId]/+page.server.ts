import type { IGame, IItem } from "$schema/api"
import type { ILotNewOrderPageData } from "~/pages/lot"

export function load({ locals, params }): ILotNewOrderPageData {
    let itemPromise: Promise<IItem> = locals.api.readItemApiV1ItemsItemsItemIdGet(params.lotId)
    let gamePromise: Promise<IGame> = (
        itemPromise.then((item: IItem): Promise<IGame> => (
            locals.api.readGameApiV1GamesGameIdGet(item.gid!)
        ))
    )

    return {
        pagePromise: Promise.all([itemPromise, gamePromise]),
    }
}
