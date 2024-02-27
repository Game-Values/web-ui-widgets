import type { IOrderInDB } from "$schema/api"
import type { IOrderPurchasesListPageData } from "~/pages/order"

export function load({ locals }): IOrderPurchasesListPageData {
    let ordersPromise: Promise<IOrderInDB[]> = locals.api.readOrdersByOwnerApiV1OrderUserUserIdGet({
        owner_id: locals.session.user!.id!,
        userId: locals.session.user!.id!,
    })

    return {
        pagePromise: Promise.all([ordersPromise]),
    }
}
