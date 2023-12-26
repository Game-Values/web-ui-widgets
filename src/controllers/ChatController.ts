import type { ChatClient, StoreClient } from "~/clients"
import type { MatrixEvent } from "matrix-js-sdk"

import { EventType, MsgType, RoomEvent } from "matrix-js-sdk"

export class ChatController {
    public constructor(
        private _chatClient: ChatClient,
        private _storeClient: StoreClient,
    ) {}

    private _roomTimelineHandler(event: MatrixEvent): void {
        switch (event.getType()) {
            case EventType.RoomMessage:
                this._storeClient.chatStore.addChatEventRaw(event)
                break

            default:
                break
        }
    }

    public async fetchChatRooms(): Promise<void> {
        let { chunk } = await this._chatClient.publicRooms()
        this._storeClient.chatStore.setChatRoomsRaw(chunk)
    }

    public async sendRoomMessage(roomId: string, message: string): Promise<void> {
        await this._chatClient.sendEvent(roomId, EventType.RoomMessage, {
            body: message,
            msgtype: MsgType.Text,
        })
    }

    public async subscribeChat(): Promise<void> {
        this._chatClient.on(RoomEvent.Timeline, this._roomTimelineHandler)
    }
}
