import type { ICallable, INullable } from "$types"
import type { ISendEventResponse, MatrixEvent, Room } from "matrix-js-sdk"
import type { Readable, Writable } from "svelte/store"

import { EventType, RoomEvent } from "matrix-js-sdk"
import { onDestroy } from "svelte"
import { derived, get, writable } from "svelte/store"

import { getRoomMessageEvents, useChat } from "~/entities/chat"

import { MATRIX_HUB_ROOM_ID } from "$config"

type IChatHub = {
    hubMessageEvents: MatrixEvent[]
}

type IUseChatHub = {
    hubMessageEvents: Readable<MatrixEvent[]>
    hubRoom: Readable<INullable<Room>>
    sendHubMessage(message: string): Promise<INullable<ISendEventResponse>>
}

let chatHub: Writable<IChatHub> = writable<IChatHub>({
    hubMessageEvents: [],
})

export function useChatHub(): IUseChatHub {
    let { chatRooms, sendMessage, subscribeChat, whenChatReady } = useChat()

    let use: IUseChatHub = {
        hubMessageEvents: derived(chatHub, ($chatHub: IChatHub): MatrixEvent[] => $chatHub.hubMessageEvents),

        hubRoom: derived(chatRooms, ($chatRooms: Room[]): INullable<Room> => {
            let hubRoom: Room | undefined = $chatRooms.find((chatRoom: Room): boolean => (
                chatRoom.roomId === MATRIX_HUB_ROOM_ID
            ))

            return hubRoom || null
        }),

        sendHubMessage: (message: string): Promise<INullable<ISendEventResponse>> => {
            return sendMessage(MATRIX_HUB_ROOM_ID, message)
        },
    }

    let unsubscribeHubEvents: ICallable | undefined

    whenChatReady((): void => {
        let hubRoom: Room = get(use.hubRoom)!

        chatHub.set({ hubMessageEvents: getRoomMessageEvents(hubRoom) })

        unsubscribeHubEvents = subscribeChat(RoomEvent.Timeline, (
            (event: MatrixEvent, room: Room | undefined): void => {
                if (room?.roomId === MATRIX_HUB_ROOM_ID && event.getType() === EventType.RoomMessage)
                    chatHub.set({ hubMessageEvents: [...get(chatHub).hubMessageEvents, event] })
            }
        ))
    })

    onDestroy((): void => {
        chatHub.set({ hubMessageEvents: [] })
        unsubscribeHubEvents?.()
    })

    return use
}
