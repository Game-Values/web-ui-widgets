<script lang="ts">
import { AuthOnly } from "~/entities/auth"
import { ChatBubble, ChatMessage, ChatMessageSkeleton, useChatHub } from "~/entities/chat"
import { ChatSendMessageForm } from "~/features/chat"

import { ShowModalButton } from "$ui/actions"
import { Collapse } from "$ui/data"

let { hubMessageEvents, hubRoom, sendHubMessage } = useChatHub()
</script>

<Collapse
    class="sticky top-4"
    contentClass="p-0"
    opened
    title={$hubRoom?.name}
    titleClass="px-6 py-10 bg-primary text-2xl shadow-[0_0.375rem_3.25rem_0_rgba(61,152,255,0.40)]"
>
    <ChatBubble class="h-[calc(100dvh-(4rem+5rem+1rem*2))]">
        {#each $hubMessageEvents as hubMessageEvent (hubMessageEvent.getId())}
            <ChatMessage
                class="chat-start"
                event={hubMessageEvent}
            />
        {/each}

        <svelte:fragment slot="skeleton">
            {#if !$hubRoom}
                <ChatMessageSkeleton length={10} />
            {/if}
        </svelte:fragment>

        <svelte:fragment slot="sendMessage">
            {#if $hubRoom}
                <AuthOnly>
                    <ChatSendMessageForm on:message={e => sendHubMessage(e.detail)} />

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
