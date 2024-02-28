<script lang="ts">
import { ChatBubble, ChatMessage, getRoomEvents, useChat } from "~/entities/chat"

import { Collapse } from "$ui/data"

let { hubRoom } = useChat()

$: roomEvents = getRoomEvents($hubRoom, "m.room.message")
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
    </ChatBubble>
</Collapse>
