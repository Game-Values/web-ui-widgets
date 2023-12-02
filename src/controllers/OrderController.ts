import type { StoreClient } from "#build/clients"
import type { ItemService, OrderService } from "~/services"

export class OrderController {
    public constructor(
        private _itemService: ItemService,
        private _orderService: OrderService,
        private _storeClient: StoreClient,
    ) {}

    // public async fetchOrderItem(itemId: string): Promise<void> {
    //
    // }
}
