import type { FacadeAbstract } from "~/abstract"
import type { RouterClient, StoreClient } from "~/clients"
import type { OrderController } from "~/controllers"

import { OrderStep } from "~/enums"

export class OrderFacade implements FacadeAbstract {
    public constructor(
        private _routerClient: RouterClient,
        private _storeClient: StoreClient,
        private _orderController: OrderController,
    ) {}

    public async bootstrap(): Promise<void> {
        this._storeClient.orderStore.$reset()
        this._storeClient.orderStore.setOrderStep(OrderStep.CONFIRM_ORDER)

        await Promise.all([
            this._orderController.fetchOrder(this._routerClient.getRouteParam("orderId")),
        ])
    }
}
