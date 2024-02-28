import type { MatrixClient, Room } from "matrix-js-sdk"
import type { Readable, Writable } from "svelte/store"

import { onDestroy, onMount } from "svelte"
import { derived, writable } from "svelte/store"

import { createChat, getHubRoom, syncChat } from "~/entities/chat"

type IChat = {
    hubRoom: null | Room
}

type IUseChat = {
    hubRoom: Readable<Room>
    running: Readable<boolean>
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

    onDestroy((): void => chatClient.stopClient())

    return {
        hubRoom: derived(chat, ($chat: IChat): Room => $chat.hubRoom!),

        running: derived(chat, ($chat: IChat): boolean => Boolean($chat.hubRoom)),
    }
}
