import type { DefineStore } from "~/types"
import type { IPublicRoomsChunkRoom, MatrixEvent } from "matrix-js-sdk"

import { ChatEvents, ChatRooms } from "~/dto"
import { createCollection, createStore } from "~/factories"

export namespace ChatStore {
    export type Id = "chatStore"

    export type State = {
        chatEventsRaw: MatrixEvent[]
        chatRoomsRaw: IPublicRoomsChunkRoom[]
    }

    export type Getters = {
        chatRoomEvents: () => ChatEvents
        chatRooms: () => ChatRooms
    }

    export type Actions = {
        addChatEventRaw: (chatEventRaw: MatrixEvent) => void
        setChatRoomsRaw: (chatRoomsRaw: IPublicRoomsChunkRoom[]) => void
    }

    export type Store = DefineStore<Id, State, Getters, Actions>
}

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
