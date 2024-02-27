import type { IOrderInDB } from "$schema/api"
import type { IOrderSalesListPageData } from "~/pages/order"

export function load(): IOrderSalesListPageData {
    let ordersPromise: Promise<IOrderInDB[]> = Promise.resolve([])

    return {
        pagePromise: Promise.all([ordersPromise]),
    }
}
