import type { ChatStore } from "~/types"
import type { IPublicRoomsChunkRoom, MatrixEvent } from "matrix-js-sdk"

import { ChatEvents, ChatRooms } from "~/dto"
import { createCollection, createStore } from "~/factories"

export let useChatStore: (storeId?: string) => ChatStore.Store = createStore<
    ChatStore.Id,
    ChatStore.State,
    ChatStore.Getters,
    ChatStore.Actions
>("chatStore", {
    actions: {
        addChatEventRaw(chatEventRaw: MatrixEvent): void {
            this.chatEventsRaw.push(chatEventRaw)
        },

        setChatRoomsRaw(chatRoomsRaw: IPublicRoomsChunkRoom[]): void {
            this.chatRoomsRaw = chatRoomsRaw
        },
    },

    getters: {
        chatRoomEvents(): ChatEvents {
            return createCollection(ChatEvents, this.chatEventsRaw)
        },

        chatRooms(): ChatRooms {
            return createCollection(ChatRooms, this.chatRoomsRaw)
        },
    },

    state: (): ChatStore.State => ({
        chatEventsRaw: [],
        chatRoomsRaw: [],
    }),
})
