import type { IOrderInDB } from "$schema/api"
import type { IUserPurchaseDetailsPageData } from "~/pages/user"

export function load({ locals, params }): IUserPurchaseDetailsPageData {
    let orderPromise: Promise<IOrderInDB> = locals.api.readOrderApiV1OrderOrderIdGet(params.orderId)

    return {
        pagePromise: Promise.all([orderPromise]),
    }
}
