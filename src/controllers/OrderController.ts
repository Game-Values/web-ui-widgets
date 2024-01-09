import type { OrderCreateRaw, OrderInDBRaw, PaymentErrorRaw, PaymentNewRaw, PaymentResponseRaw } from "#schema/data-contracts"
import type { ApiAdapter } from "~/adapters"
import type { ChatClient, StoreClient } from "~/clients"
import type { UserController } from "~/controllers"
import type { MatrixEvent, Room, RoomMember } from "matrix-js-sdk"

import { EventType, Preset, RoomEvent, RoomMemberEvent } from "matrix-js-sdk"

export class OrderController {
    public constructor(
        private _apiAdapter: ApiAdapter,
        private _chatClient: ChatClient,
        private _storeClient: StoreClient,
        private _userController: UserController,
    ) {}

    public async createChatRoom(): Promise<void> {
        this._chatClient.on(RoomEvent.Timeline, async (event: MatrixEvent): Promise<void> => {
            if (
                event.getType() === EventType.RoomName &&
                event.getContent().name === this._storeClient.orderStore.order.id
            ) {
                console.log(123)

                // let room: Room = await this._chatClient.joinRoom(event.getRoomId() || this._storeClient.orderStore.order.id)
                // console.log(room)
            }
        })

        this._chatClient.on(RoomMemberEvent.Membership, async (event: MatrixEvent, member: RoomMember): Promise<void> => {
            if (
                ["invite", "join"].includes(member.membership!) &&
                member.userId === this._storeClient.userMeStore.user.chat_id
            )
                await this._chatClient.joinRoom(member.roomId)

            return

            if (
                ["invite", "join"].includes(member.membership!) &&
                member.userId === this._storeClient.userMeStore.user.chat_id
            ) {
                console.log(member)
                this._chatClient.joinRoom(member.roomId).then(function () {
                    console.log("Auto-joined %s", member.roomId)
                })
            }
        })

        if (useRoute().query.order_id) {
            await this.fetchOrder(useRoute().query.order_id)
            console.log(this._storeClient.orderStore.order)
        }

        return

        if (this._storeClient.orderStore.order.owner_id) {
            console.log("this._storeClient.orderStore.order", this._storeClient.orderStore.order)
            console.log("this._storeClient.userMeStore.user", this._storeClient.userMeStore.user)

            await this._userController.fetchUser(this._storeClient.orderStore.order.owner_id)

            console.log(this._storeClient)

            return
            await this._chatClient.createRoom({
                invite: [
                    this._storeClient.userStore.user.chat_id,
                ],
                is_direct: true,
                name: this._storeClient.orderStore.order.id,
                preset: Preset.TrustedPrivateChat,
                room_alias_name: this._storeClient.orderStore.order.id,
            })
        } else {
            // await this._chatClient.joinRoom("!f74ZVrlNgN3632Zo:chat.game-values.com")
        }
    }

    // funds
    public async createOrder(payload: OrderCreateRaw): Promise<void> {
        let orderRaw: OrderInDBRaw = await this._apiAdapter.createOrderApiV1OrderPost(payload)
        this._storeClient.orderStore.setOrderRaw(orderRaw)
    }

    // todo: mv (?)
    public async createPayment(payload: PaymentNewRaw): Promise<void> {
        let res: PaymentErrorRaw | PaymentResponseRaw = (
            await this._apiAdapter.createPaymentApiV1FundsCreatePaymentPost(payload)
        )

        // todo: (?)
        return
        if ((res as PaymentResponseRaw).redirectUrl)
            navigateTo((res as PaymentResponseRaw).redirectUrl, {
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
