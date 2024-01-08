import type { FacadeAbstract } from "~/abstract"
import type { ChatClient, RouterClient, StoreClient } from "~/clients"
import type { ChatController, OrderController, UserController } from "~/controllers"

import { OrderStep } from "~/enums"

export class OrderFacade implements FacadeAbstract {
    public constructor(
        private _chatClient: ChatClient,
        private _routerClient: RouterClient,
        private _storeClient: StoreClient,
        private _orderController: OrderController,
        private _userController: UserController,
    ) {}

    public async bootstrap(): Promise<void> {
        this._storeClient.orderStore.$reset()
        this._storeClient.orderStore.setOrderStep(OrderStep.CONFIRM_ORDER)

        await Promise.all([
            this._orderController.fetchOrder(this._routerClient.getRouteParam("orderId")),
        ])

        if (isClient()) {
            await this._userController.fetchUser(this._storeClient.orderStore.order.owner_id)
            return

            let asyncFilter = async (arr, predicate) => {
                const results = await Promise.all(arr.map(predicate));
                return arr.filter((_v, index) => results[index]);
            }

            let getDirectRoomId = async (user_id: string) => {
                console.log(await this._chatClient.getJoinedRooms())

                const { joined_rooms: rooms } = await this._chatClient.getJoinedRooms()
                const invitedDMRooms = await asyncFilter(rooms, async room => {
                    let { joined } = await this._chatClient.getJoinedRoomMembers(room)

                    console.log(joined)
                    return
                    if (members.length > 2) return false;

                    return members[1].type === 'm.room.member' && members[1].membership === 'join' && members[1].sender === await ElementClient.getUserId()
                        && members[0].type === 'm.room.member' && members[0].membership === 'join' && members[0].sender === user_id && members[0].previousContent.is_direct;
                });

                return

                return invitedDMRooms.length > 0 ? invitedDMRooms[0] : await this._chatClient.createRoom({
                    preset: "trusted_private_chat",
                    invite: [user_id],
                    is_direct: true
                });
            }

            console.log(
                window.chat = this._chatClient,
                await getDirectRoomId("@test_1:chat.game-values.com")
            )
        }
    }
}
