import type { IItem } from "$schema/api"
import type { ILotsListPageData } from "~/pages/lot"

export async function load({ locals, params }): Promise<ILotsListPageData> {
    let lotsPromise: Promise<IItem[]> = (
        locals.api.readAllItemsApiV1ItemsAllGet({ owner: params.userId })
    )

    return {
        pagePromise: Promise.all([lotsPromise]),
    }
}
