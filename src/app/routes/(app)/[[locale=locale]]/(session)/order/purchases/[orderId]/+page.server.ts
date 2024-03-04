import type { IOrderInDB } from "$schema/api"
import type { IOrderPurchaseDetailsPageData } from "~/pages/order"

export async function load({ locals, params }): Promise<IOrderPurchaseDetailsPageData> {
    let orderPromise: Promise<IOrderInDB> = locals.api.readOrderApiV1OrderOrderIdGet(params.orderId)

    return {
        pagePromise: Promise.all([orderPromise]),
    }
}
