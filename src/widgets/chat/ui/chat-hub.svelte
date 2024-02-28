<script lang="ts">
import type { ICallable } from "$types"
import type { MatrixEvent } from "matrix-js-sdk"

import { onDestroy } from "svelte"

import { AuthOnly } from "~/entities/auth"
import { ChatBubble, ChatMessage, ChatMessageSkeleton, getRoomEvents, useChat } from "~/entities/chat"
import { ChatSendHubMessage } from "~/features/chat"

import { ShowModalButton } from "$ui/actions"
import { Collapse } from "$ui/data"

let { hubRoom, sendMessage, subscribeEvents } = useChat()

let unsubscribeEvents: ICallable | undefined
let roomEvents: MatrixEvent[] = []

$: if ($hubRoom && !unsubscribeEvents) {
    roomEvents = getRoomEvents($hubRoom, "m.room.message")
    unsubscribeEvents = subscribeEvents($hubRoom.roomId, (event: MatrixEvent): void => {
        roomEvents = [...roomEvents, event]
    })
}

onDestroy((): void => unsubscribeEvents?.())
</script>

<Collapse
    class="sticky top-4"
    contentClass="p-0"
    opened
    title="Chat room"
    titleClass="px-6 py-10 bg-primary text-2xl shadow-[0_0.375rem_3.25rem_0_rgba(61,152,255,0.40)]"
>
    <ChatBubble class="max-h-[calc(100dvh-(4rem+5rem+1rem*2))]">
        {#each roomEvents as roomEvent (roomEvent.getId())}
            <ChatMessage event={roomEvent} />
        {/each}

        <svelte:fragment slot="skeleton">
            {#if !$hubRoom}
                <ChatMessageSkeleton length={10} />
            {/if}
        </svelte:fragment>

        <svelte:fragment slot="sendMessage">
            {#if $hubRoom}
                <AuthOnly>
                    <ChatSendHubMessage on:message={e => sendMessage($hubRoom.roomId, e.detail)} />

                    <svelte:fragment slot="fallback">
                        <div
                            class="
                                p-4 gap-x-2
                                flex justify-center
                                bg-white/[0.12]
                                rounded-lg
                            "
                        >
                            <ShowModalButton
                                class="link link-primary"
                                modal="auth"
                            >
                                Log in
                            </ShowModalButton>

                            <span>
                                or
                            </span>

                            <ShowModalButton
                                class="link link-primary"
                                modal="registration"
                            >
                                Sign up
                            </ShowModalButton>
                        </div>
                    </svelte:fragment>
                </AuthOnly>
            {/if}
        </svelte:fragment>
    </ChatBubble>
</Collapse>
