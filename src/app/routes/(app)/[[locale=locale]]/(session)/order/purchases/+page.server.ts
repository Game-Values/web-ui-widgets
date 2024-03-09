import type { IOrderInDB, IUser } from "$schema/api"
import type { IOrderPurchasesListPageData } from "~/pages/order"

export async function load({ locals }): Promise<IOrderPurchasesListPageData> {
    let user: IUser = locals.session.user as IUser
    let ordersPromise: Promise<IOrderInDB[]> = (
        locals.api.readOrdersByOwnerApiV1OrderUserUserIdGet({ owner_id: user.id!, userId: user.id! })
    )

    return {
        pagePromise: Promise.all([ordersPromise]),
    }
}
