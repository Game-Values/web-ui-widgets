import type { ICallable } from "$types"
import type { MatrixClient, MatrixEvent, Room } from "matrix-js-sdk"

import { ClientEvent, createClient, EventType, SyncState } from "matrix-js-sdk"

import { MATRIX_GUEST_ID, MATRIX_GUEST_TOKEN, MATRIX_URL } from "$config"
import { useCookies } from "$model"

export async function createChatClient(): Promise<MatrixClient> {
    let { getCookie } = useCookies()

    let chatClient: MatrixClient = createClient({
        accessToken: getCookie("chat_token") || MATRIX_GUEST_TOKEN,
        baseUrl: MATRIX_URL,
        userId: getCookie("chat_uid") || MATRIX_GUEST_ID,
    })

    await chatClient.startClient({ initialSyncLimit: 30 })
    await syncChat(chatClient)

    return chatClient
}

export function getRoomMessageEvents(chatRoom: Room): MatrixEvent[] {
    return (
        chatRoom
            .getLiveTimeline()
            .getEvents()
            .filter((event: MatrixEvent): boolean => event.getType() === EventType.RoomMessage)
    )
}

export async function syncChat(chatClient: MatrixClient): Promise<void> {
    let resolve: ICallable
    let sync: (state: SyncState) => void = (
        (state: SyncState): void => {
            if (state !== SyncState.Syncing)
                return

            chatClient.off(ClientEvent.Sync, sync)
            resolve()
        }
    )

    chatClient.on(ClientEvent.Sync, sync)

    return new Promise((_resolve: ICallable): void => { resolve = _resolve })
}
