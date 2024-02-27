import type { IOrderInDB } from "$schema/api"
import type { IOrderPurchaseDetailsPageData } from "~/pages/order"

import { useApi } from "$api"

export async function load({ fetch, params, parent }): Promise<IOrderPurchaseDetailsPageData> {
    await parent()

    let { readOrderApiV1OrderOrderIdGet } = useApi({ customFetch: fetch })

    let orderPromise: Promise<IOrderInDB> = readOrderApiV1OrderOrderIdGet(params.orderId)

    return {
        pagePromise: Promise.all([orderPromise]),
    }
}
