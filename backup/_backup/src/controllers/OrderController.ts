import type { StoreClient } from "#build/clients"
import type { CreateOrderApiV1OrderPostDataRaw, OrderCreateRaw } from "#schema/data-contracts"
import type { ApiAdapter } from "~/adapters"

export class OrderController {
    public constructor(
        private _apiAdapter: ApiAdapter,
        private _storeClient: StoreClient,
    ) {}

    public async createOrder(payload: OrderCreateRaw): Promise<void> {
        let orderRaw: CreateOrderApiV1OrderPostDataRaw = await this._apiAdapter.createOrderApiV1OrderPost(payload)
        console.log(orderRaw)
    }
}
