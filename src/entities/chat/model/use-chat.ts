import type { ICallable } from "$types"
import type { ISendEventResponse, MatrixClient, MatrixEvent, Room } from "matrix-js-sdk"
import type { Readable, Writable } from "svelte/store"

import { MsgType } from "matrix-js-sdk"
import { onDestroy, onMount } from "svelte"
import { derived, writable } from "svelte/store"

import { createChat, getHubRoom, subscribeRoomEvents, syncChat } from "~/entities/chat"

type IChat = {
    hubRoom: Room | undefined
}

type IUseChat = {
    hubRoom: Readable<Room | undefined>
    running: Readable<boolean>
    sendMessage(roomId: string, message: string): Promise<ISendEventResponse>
    subscribeEvents(
        roomId: string,
        callback: (event: MatrixEvent, room: Room) => void,
    ): ICallable<MatrixClient | undefined>
}

let chat: Writable<IChat> = writable<IChat>(Object.create(null))

export function useChat(): IUseChat {
    let chatClient: MatrixClient

    onMount(async (): Promise<void> => {
        chatClient = createChat()

        await chatClient.startClient({ initialSyncLimit: 30 })
        await syncChat(chatClient)

        chat.set({ hubRoom: getHubRoom(chatClient) })
    })

    onDestroy((): void => {
        chatClient.removeAllListeners()
        chatClient.stopClient()

        chat.set({ hubRoom: undefined })
    })

    return {
        hubRoom: derived(chat, ($chat: IChat): Room => $chat.hubRoom!),

        running: derived(chat, ($chat: IChat): boolean => Boolean($chat.hubRoom)),

        sendMessage: (roomId: string, message: string): Promise<ISendEventResponse> => (
            chatClient.sendMessage(roomId, { body: message, msgtype: MsgType.Text })
        ),

        subscribeEvents: (
            roomId: string,
            callback: (event: MatrixEvent, room: Room) => void,
        ): ICallable<MatrixClient> => subscribeRoomEvents(chatClient, roomId, callback),
    }
}
