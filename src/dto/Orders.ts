import type { OrderInDBRaw } from "#schema/data-contracts"
import type { OrdersTable } from "~/types"

import { CollectionAbstract } from "~/abstract"
import { Order } from "~/dto/Order"

export class Orders extends CollectionAbstract<Order, OrderInDBRaw> {
    protected get __Model(): typeof Order {
        return Order
    }

    public get tableData(): OrdersTable[] {
        return useMap<Order, OrdersTable>(this, (order: Order): OrdersTable => {
            let deepKeys: string[] = useMap(useKeys(order.attributes), (
                (key: string): string => `attributes.${key}`
            ))

            return assignDeepKeysAsCamelCase(order, ...deepKeys)
        })
    }
}
