import type { ICallable, INullable } from "$types"
import type { MaybePromise } from "@sveltejs/kit"
import type {
    EmittedEvents,
    EventEmitterEvents,
    ICreateRoomOpts,
    ISendEventResponse,
    MatrixClient,
    MatrixEvent,
    Room,
    RoomMember,
} from "matrix-js-sdk"
import type { Readable, Writable } from "svelte/store"

import { MsgType } from "matrix-js-sdk"
import { derived, get, writable } from "svelte/store"

import { createChatClient } from "~/entities/chat"

import { onClient, onServer } from "$lib/helpers"

type IChatMessageFn = (roomId: string, message: string) => Promise<INullable<ISendEventResponse>>

type IChatState = {
    chatClient: INullable<MatrixClient>
}

type IUseChat = {
    chatRooms: Readable<Room[]>
    createRoom(options: ICreateRoomOpts): Promise<Room>
    sendMessage: IChatMessageFn
    startChat(): Promise<void>
    stopChat(): Promise<void>
    subscribeChat(
        eventType: EmittedEvents | EventEmitterEvents,
        callback: (event: MatrixEvent, ...rest: any[]) => void,
    ): ICallable<INullable<MatrixClient>>
    whenChatReady(callback: (chatClient: MatrixClient) => MaybePromise<void>): void
}

let chatState: Writable<IChatState> = writable<IChatState>({
    chatClient: null,
})

let chatCallbacksQueue: ICallable[] = []

export function useChat(): IUseChat {
    let use: IUseChat = {
        chatRooms: derived(chatState, ($chatState: IChatState): Room[] => $chatState.chatClient?.getRooms() || []),

        createRoom: (options: ICreateRoomOpts): Promise<Room> => (
            new Promise((resolve, reject): void => (
                use.whenChatReady(async (chatClient: MatrixClient): Promise<void> => {
                    let { room_id } = await chatClient.createRoom(options)

                    let room: INullable<Room> = chatClient.getRoom(room_id)
                    if (room)
                        resolve(room)
                    else
                        reject(Error("todo: room isn't created"))
                })
            ))
        ),

        sendMessage: async (roomId: string, message: string): Promise<INullable<ISendEventResponse>> => {
            let { chatClient } = get<IChatState>(chatState)

            let room: INullable<Room> = chatClient?.getRoom(roomId) || null
            if (!room)
                return Promise.resolve(null)

            let joined: boolean = Boolean(
                room
                    .getJoinedMembers()
                    .find((roomMember: RoomMember): boolean => roomMember.userId === chatClient!.getUserId()),
            )

            if (!joined)
                await chatClient!.joinRoom(room.roomId)

            return chatClient!.sendMessage(roomId, { body: message, msgtype: MsgType.Text })
        },

        startChat: async (): Promise<void> => (
            new Promise((resolve: ICallable): void => {
                onClient(async (): Promise<void> => {
                    let chatClient: MatrixClient = await createChatClient()

                    chatState.set({ chatClient })
                    chatCallbacksQueue.forEach(
                        (callback: (chatClient: MatrixClient) => MaybePromise<void>) => (
                            callback(chatClient)
                        ),
                    )

                    chatCallbacksQueue = []
                    resolve()
                })

                onServer(resolve)
            })
        ),

        stopChat: async (): Promise<void> => {
            let { chatClient } = get<IChatState>(chatState)

            chatClient?.removeAllListeners()
            chatClient?.stopClient()

            chatState.set({ chatClient: null })
        },

        subscribeChat: (
            eventType: EmittedEvents | EventEmitterEvents,
            callback: (event: MatrixEvent, ...rest: any[]) => void,
        ): ICallable<INullable<MatrixClient>> => {
            let { chatClient } = get<IChatState>(chatState)

            chatClient?.on(eventType, callback)

            return (
                (): INullable<MatrixClient> => (
                    chatClient?.off(eventType, callback) || null
                )
            )
        },

        whenChatReady: (callback: (chatClient: MatrixClient) => MaybePromise<void>): void => {
            onClient(() => {
                let { chatClient } = get<IChatState>(chatState)

                if (chatClient?.clientRunning)
                    callback(chatClient)
                else
                    chatCallbacksQueue.push(callback)
            })
        },
    }

    return use
}
