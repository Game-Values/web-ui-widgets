import type { DefineStore } from "~/types"
import type { IJoinedRoom, IPublicRoomsChunkRoom, MatrixEvent } from "matrix-js-sdk"

import { ChatEvents, ChatRooms } from "~/dto"
import { createCollection, createStore } from "~/factories"

export namespace ChatStore {
    export type Id = "chatStore"

    export type State = {
        chatEventsRaw: MatrixEvent[]
        chatJoinedRoomsIds: string[]
        chatRoomsRaw: IPublicRoomsChunkRoom[]
        chatSyncState: any
    }

    export type Getters = {
        chatJoinedRooms: () => Record<string, IJoinedRoom>
        chatRoomEvents: () => ChatEvents
        chatRooms: () => ChatRooms
    }

    export type Actions = {
        addChatEventRaw: (chatEventRaw: MatrixEvent) => void
        setChatJoinedRoomsIds: (chatRoomsIds: string[]) => void
        setChatRoomsRaw: (chatRoomsRaw: IPublicRoomsChunkRoom[]) => void
        setChatSyncState: (chatSyncState: any) => void
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

        setChatJoinedRoomsIds(chatJoinedRoomsIds: string[]): void {
            this.chatJoinedRoomsIds = chatJoinedRoomsIds
        },

        setChatRoomsRaw(chatRoomsRaw: IPublicRoomsChunkRoom[]): void {
            this.chatRoomsRaw = chatRoomsRaw
        },

        setChatSyncState(chatSyncState: any): void {
            this.chatSyncState = chatSyncState
        },
    },

    getters: {
        chatJoinedRooms(): Record<string, IJoinedRoom> {
            let chatJoinedRooms: Record<string, IJoinedRoom> = useGet(this.chatSyncState, "rooms.join", {})

            return useReduce(chatJoinedRooms, (result: Record<string, IJoinedRoom>, val: IJoinedRoom, key: string): Record<string, IJoinedRoom> => {
                if (this.chatJoinedRoomsIds.includes(key))
                    useAssign(result, {
                        [key.replace(`:${useRuntimeConfig().public.matrixChatName}`, "")]: val,
                    })

                return result
            }, {})
        },

        chatRoomEvents(): ChatEvents {
            return createCollection(ChatEvents, this.chatEventsRaw)
        },

        chatRooms(): ChatRooms {
            return createCollection(ChatRooms, this.chatRoomsRaw)
        },
    },

    state: (): ChatStore.State => ({
        chatEventsRaw: [],
        chatJoinedRoomsIds: [],
        chatRoomsRaw: [],
        chatSyncState: {},
    }),
})
