import type { FacadeAbstract } from "~/abstract"
import type { OrderController } from "~/controllers"

export class OrderFacade implements FacadeAbstract {
    public constructor(
        private _orderController: OrderController,
    ) {}

    public async bootstrap(): Promise<void> {
        // todo
    }
}
