import type { IItem } from "$schema/api"
import type { IOrderSalesListPageData } from "~/pages/order"

export function load({ locals }): IOrderSalesListPageData {
    let ordersPromise: Promise<IItem[]> = locals.api.readAllItemsApiV1ItemsAllGet({
        owner: locals.session.user!.id,
        page: 0,
    })

    return {
        pagePromise: Promise.all([ordersPromise]),
    }
}
