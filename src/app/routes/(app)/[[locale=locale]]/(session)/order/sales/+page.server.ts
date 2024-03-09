import type { IOrderInDB } from "$schema/api"
import type { IOrderSalesListPageData } from "~/pages/order"

export async function load(): Promise<IOrderSalesListPageData> {
    let ordersPromise: Promise<IOrderInDB[]> = Promise.resolve([])

    return {
        pagePromise: Promise.all([ordersPromise]),
    }
}
