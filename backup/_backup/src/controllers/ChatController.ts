import type { ChatClient, StoreClient } from "~/clients"
import type { Nullable } from "~/types"
import type { MatrixEvent, Room, RoomMember } from "matrix-js-sdk"

import { EventType, MsgType, Preset, RoomEvent, RoomMemberEvent } from "matrix-js-sdk"
import {ICreateRoomOpts} from "matrix-js-sdk/src/@types/requests";

export class ChatController {
    public constructor(
        private _chatClient: ChatClient,
        private _storeClient: StoreClient,
    ) {}

    private async _fetchChatRooms(): Promise<void> {
        let { chunk } = await this._chatClient.publicRooms()
        this._storeClient.chatStore.setChatRoomsRaw(chunk)
    }

    private async _fetchJoinedChatRoomsIds(): Promise<void> {
        let { joined_rooms: chatJoinedRoomsIds } = await this._chatClient.getJoinedRooms()

        let roomsIds: string[] = await Promise.all(
            chatJoinedRoomsIds.map((roomId: string): Promise<string> => (
                new Promise((resolve:  (roomId: string) => void): void => {
                    this._chatClient.getJoinedRoomMembers(roomId).then(({ joined }): void => (
                        resolve(
                            useKeys(joined).includes(this._storeClient.userMeStore.user.chat_id)
                                ? roomId
                                : "",
                        )
                    ))
                })
            )),
        )

        this._storeClient.chatStore.setChatJoinedRoomsIds(useFilter(roomsIds, Boolean))
    }

    private async _roomMembershipHandler(event: MatrixEvent, member: RoomMember): Promise<void> {
        if (
            member.membership === "invite" &&
            member.userId === this._storeClient.userMeStore.user.chat_id
        )
            await this._chatClient.joinRoom(member.roomId)
    }

    private _roomTimelineHandler(event: MatrixEvent): void {
        if (event.getType() === EventType.RoomMessage)
            this._storeClient.chatStore.addChatEventRaw(event)
    }

    private async _subscribeChat(): Promise<void> {
        this._chatClient.removeAllListeners()
        this._chatClient.on(RoomMemberEvent.Membership, useBind(this._roomMembershipHandler, this))
        this._chatClient.on(RoomEvent.Timeline, useBind(this._roomTimelineHandler, this))
    }

    private async _syncChat(): Promise<void> {
        let chatState = await this._chatClient.syncClient()
        this._storeClient.chatStore.setChatSyncState(chatState)
    }

    public async createDirectRoom(roomName: string, directMember: string, roomOptions?: ICreateRoomOpts): Promise<void> {
        let res: { room_id: string }
        try {
            res = await this._chatClient.createRoom(
                useMerge({
                    invite: [
                        directMember,
                    ],
                    is_direct: true,
                    name: roomName,
                    preset: Preset.TrustedPrivateChat,
                    room_alias_name: roomName,
                }, roomOptions),
            )
        } catch {
            res = await this._chatClient.getRoomIdForAlias(`#${roomName}:${useRuntimeConfig().public.matrixChatName}`)
        }

        await this._chatClient.joinRoom(res.room_id)
            .then(useBind(this._storeClient.chatStore.addChatDirectRoom, this))
    }

    public async sendRoomMessage(roomId: string, message: string): Promise<void> {
        await this._chatClient.sendEvent(roomId, EventType.RoomMessage, {
            body: message,
            msgtype: MsgType.Text,
        })
    }

    public async startChat(): Promise<void> {
        let promises: Promise<void>[] = [
            this._fetchChatRooms(),
            this._fetchJoinedChatRoomsIds(),
            this._subscribeChat(),
        ]

        if (isAuthenticated())
            promises.push(
                this._syncChat(),
            )

        await Promise.all(promises)
        await this._chatClient.startClient({
            initialSyncLimit: 10,
            pollTimeout: 60000,
            threadSupport: true,
        })
    }
}
