import type { StoreClient } from "#build/clients"
import type { OrderCreateRaw, OrderInDBRaw } from "#schema/data-contracts"
import type { ApiAdapter } from "~/adapters"

export class OrderController {
    public constructor(
        private _apiAdapter: ApiAdapter,
        private _storeClient: StoreClient,
    ) {}

    public async createOrder(payload: OrderCreateRaw): Promise<void> {
        let orderRaw: OrderInDBRaw = await this._apiAdapter.createOrderApiV1OrderPost(payload)
        this._storeClient.orderStore.setOrderRaw(orderRaw)
    }

    public async fetchOrder(orderId: string): Promise<void> {
        let orderRaw: OrderInDBRaw = await this._apiAdapter.readOrderApiV1OrderOrderIdGet(orderId)
        this._storeClient.orderStore.setOrderRaw(orderRaw)
    }
}
