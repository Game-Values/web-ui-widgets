import type { IOrderInDB } from "$schema/api"
import type { IUserPurchasesListPageData } from "~/pages/user"

export function load({ locals }): IUserPurchasesListPageData {
    let ordersPromise: Promise<IOrderInDB[]> = locals.api.readOrdersByOwnerApiV1OrderUserUserIdGet({
        owner_id: locals.session.user!.id!,
        userId: locals.session.user!.id!,
    })

    return {
        pagePromise: Promise.all([ordersPromise]),
    }
}
