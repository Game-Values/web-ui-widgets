import type { IOrderInDB } from "$schema/api"
import type { IOrderPurchasesListPageData } from "~/pages/order"

import { useApi } from "$api"
import { useSession } from "$model"

export async function load({ fetch, parent }): Promise<IOrderPurchasesListPageData> {
    await parent()

    let { readOrdersByOwnerApiV1OrderUserUserIdGet } = useApi({ customFetch: fetch })
    let { getSession } = useSession()

    let { user } = getSession()

    let ordersPromise: Promise<IOrderInDB[]> = (
        readOrdersByOwnerApiV1OrderUserUserIdGet({ owner_id: user!.id!, userId: user!.id! })
    )

    return {
        pagePromise: Promise.all([ordersPromise]),
    }
}
