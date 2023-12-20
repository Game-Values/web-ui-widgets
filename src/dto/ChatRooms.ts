import type { IPublicRoomsChunkRoom } from "matrix-js-sdk"

import { CollectionAbstract } from "~/abstract"
import { ChatRoom } from "~/dto/ChatRoom"

export class ChatRooms extends CollectionAbstract<ChatRoom, IPublicRoomsChunkRoom> {
    protected get __Model(): typeof ChatRoom {
        return ChatRoom
    }

    public get mainRoom(): ChatRoom {
        return this.getById(useRuntimeConfig().public.matrixMainRoomId)!
    }
}
