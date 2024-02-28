import type { ICallable, IValueOfEnum } from "$types"
import type { MatrixClient, MatrixEvent, Room } from "matrix-js-sdk"

import { ClientEvent, createClient, EventType, RoomEvent, SyncState } from "matrix-js-sdk"

import { MATRIX_GUEST_ID, MATRIX_GUEST_TOKEN, MATRIX_HUB_ROOM_ID, MATRIX_URL } from "$config"
import { useCookies } from "$model"

export function createChat(): MatrixClient {
    let { getCookie } = useCookies()

    return createClient({
        accessToken: getCookie("chat_token") || MATRIX_GUEST_TOKEN,
        baseUrl: MATRIX_URL,
        userId: getCookie("chat_uid") || MATRIX_GUEST_ID,
    })
}

export function getHubRoom(chatClient: MatrixClient): Room {
    return chatClient.getRoom(MATRIX_HUB_ROOM_ID)!
}

export function getRoomEvents(room: null | Room, eventType?: IValueOfEnum<EventType>): MatrixEvent[] {
    let events: MatrixEvent[] = room?.getLiveTimeline().getEvents() || []

    if (eventType)
        return events.filter((event: MatrixEvent): boolean => event.getType() === eventType)

    return events
}

export function subscribeRoomEvents(
    chatClient: MatrixClient,
    roomId: string,
    callback: (event: MatrixEvent, room: Room) => void,
): ICallable<MatrixClient> {
    let subscriber = (event: MatrixEvent, room: Room | undefined): void => {
        if (room?.roomId === roomId && event.getType() === EventType.RoomMessage)
            callback(event, room)
    }

    chatClient.on(RoomEvent.Timeline, subscriber)

    return (): MatrixClient => chatClient.off(RoomEvent.Timeline, subscriber)
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
