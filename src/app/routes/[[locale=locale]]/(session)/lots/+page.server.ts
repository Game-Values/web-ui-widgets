import type { IItem } from "$schema/api"
import type { ILotsListPageData } from "~/pages/lot"

export function load({ locals }): ILotsListPageData {
    let lotsPromise: Promise<IItem[]> = locals.api.readAllItemsApiV1ItemsAllGet({
        owner: locals.session.user!.id,
        page: 0,
    })

    return {
        pagePromise: Promise.all([lotsPromise]),
    }
}
