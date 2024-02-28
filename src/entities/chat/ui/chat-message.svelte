<script lang="ts">
import type { MatrixEvent } from "matrix-js-sdk"

import { timeAgo } from "$lib/utils"
import { Avatar } from "$ui/data"

interface $$Props {
    event: MatrixEvent
}

let event: MatrixEvent

$: content = event.getContent()

$: sender = event.sender?.name || event.getSender()

$: time = timeAgo(event.getDate()!)

export {
    event,
}
</script>

<li class="chat chat-start">
    <div class="chat-image avatar">
        <Avatar
            class="w-8"
            username={sender}
        />
    </div>

    <header class="chat-header">
        <b>
            {sender}
        </b>

        <time class="text-secondary">
            <small>
                {time}
            </small>
        </time>
    </header>

    <div class="chat-bubble chat-bubble-secondary break-words">
        {content.body}
    </div>
</li>
