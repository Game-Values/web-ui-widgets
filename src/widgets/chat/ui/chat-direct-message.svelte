<script lang="ts">
import type { ICallable } from "$types"
import type { MatrixEvent, Room } from "matrix-js-sdk"

import { debounce } from "lodash-es"
import { EventType, RoomEvent } from "matrix-js-sdk"
import { onDestroy, tick } from "svelte"

import { ChatBubble, ChatMessage, getRoomMessageEvents, useChat, useChatDirect } from "~/entities/chat"
import { ChatSendMessageForm } from "~/features/chat"

import { useRoute, useWatch } from "$model"

let { directRooms } = useChatDirect()
let { sendMessage, subscribeChat, whenChatReady } = useChat()
let { routeParams } = useRoute()

let unsubscribeDirectEvents: ICallable | undefined

let directRoom: Room | undefined

let directRoomMessageEvents: MatrixEvent[] = []

let update: ICallable = debounce(async (): Promise<void> => {
    await tick()

    directRoom = $directRooms.find((room: Room): boolean => room.roomId === $routeParams.roomId)
    directRoomMessageEvents = directRoom ? getRoomMessageEvents(directRoom) : []

    if (directRoom)
        unsubscribeDirectEvents = subscribeChat(RoomEvent.Timeline, (
            (event: MatrixEvent, room: Room | undefined): void => {
                if (room?.roomId === $routeParams.roomId && event.getType() === EventType.RoomMessage)
                    directRoomMessageEvents = [...directRoomMessageEvents, event]
            }
        ))
})

useWatch(routeParams, (): void => {
    unsubscribeDirectEvents?.()
    whenChatReady(update)
})

onDestroy((): void => unsubscribeDirectEvents?.())
</script>

{#if directRoom}
    <ChatBubble>
        {#each directRoomMessageEvents as directRoomMessageEvent (directRoomMessageEvent.getId())}
            <ChatMessage
                class={directRoom.myUserId === directRoomMessageEvent.getSender() ? "chat-end" : "chat-start"}
                event={directRoomMessageEvent}
            />
        {/each}

        <svelte:fragment slot="sendMessage">
            <ChatSendMessageForm on:message={e => sendMessage($routeParams.roomId, e.detail)} />
        </svelte:fragment>
    </ChatBubble>
{/if}
