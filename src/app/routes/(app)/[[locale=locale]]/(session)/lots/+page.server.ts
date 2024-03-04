import type { IItem } from "$schema/api"
import type { ILotsListPageData } from "~/pages/lot"

export async function load({ locals }): Promise<ILotsListPageData> {
    let lotsPromise: Promise<IItem[]> = (
        locals.api.readAllItemsApiV1ItemsAllGet({ owner: locals.session.user!.id })
    )

    return {
        pagePromise: Promise.all([lotsPromise]),
    }
}
