import type { CreatePaymentApiV1FundsCreatePaymentPostDataRaw, OrderCreateRaw, OrderInDBRaw, PaymentNewRaw, PaymentResponseRaw } from "#schema/data-contracts"
import type { ApiAdapter } from "~/adapters"
import type { RouterClient, StoreClient } from "~/clients"
import type { ChatController, UserController } from "~/controllers"

export class OrderController {
    public constructor(
        private _apiAdapter: ApiAdapter,
        private _routerClient: RouterClient,
        private _storeClient: StoreClient,
        private _chatController: ChatController,
        private _userController: UserController,
    ) {}

    public async createChatRoom(): Promise<void> {
        await this._userController.fetchUser(this._routerClient.getRouteParam("userId"))
        await this._chatController.createDirectRoom(this._storeClient.orderStore.order.id, this._storeClient.userStore.user.chat_id)
    }

    // funds
    public async createOrder(payload: OrderCreateRaw): Promise<void> {
        let orderRaw: OrderInDBRaw = await this._apiAdapter.createOrderApiV1OrderPost(payload)
        this._storeClient.orderStore.setOrderRaw(orderRaw)
    }

    // todo: mv (?)
    public async createPayment(payload: PaymentNewRaw): Promise<void> {
        let { redirectUrl }: PaymentResponseRaw = (
            await this._apiAdapter.createPaymentApiV1FundsCreatePaymentPost(payload)
        ) as PaymentResponseRaw

        await navigateTo(redirectUrl, {
            external: true,
        })
    }

    public async fetchMeOrders(): Promise<void> {
        let ordersRaw: OrderInDBRaw[] =  await this._apiAdapter.readOrdersByOwnerApiV1OrderUserUserIdGet({
            owner_id: this._storeClient.userMeStore.user.id,
            userId: this._storeClient.userMeStore.user.id,
        })
        this._storeClient.userMeStore.setUserOrdersRaw(ordersRaw)
    }

    public async fetchOrder(orderId: string): Promise<void> {
        let orderRaw: OrderInDBRaw = await this._apiAdapter.readOrderApiV1OrderOrderIdGet(orderId)
        this._storeClient.orderStore.setOrderRaw(orderRaw)
    }
}
