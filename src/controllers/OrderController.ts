import type { StoreClient } from "#build/clients"
import type { OrderService } from "~/services"

export class OrderController {
    public constructor(
        private _orderService: OrderService,
        private _storeClient: StoreClient,
    ) {}
}
