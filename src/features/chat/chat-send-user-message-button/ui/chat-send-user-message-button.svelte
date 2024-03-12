<script lang="ts">
import type { IUser } from "$schema/api"
import type { Room } from "matrix-js-sdk"

import { useChatDirect } from "~/entities/chat"

// import { goto } from "$app/navigation"
import { useRoute } from "$model"

interface $$Props {
    class?: string
    user: IUser
}

let className: string = ""

let user: IUser

let { startDirect } = useChatDirect()

let roomCreating: boolean = false

async function startChatWithUser(): Promise<void> {
    roomCreating = true

    let { roomId }: Room = await startDirect(user.chat_id!)
    let { getRoute } = useRoute("/messages/[roomId]", { roomId })

    // todo: goto with update direct rooms
    window.location.assign(getRoute())
    // await goto(getRoute())

    roomCreating = true
}

export {
    className as class,
    user,
}
</script>

<button
    class="btn btn-secondary {className}"
    on:click={startChatWithUser}
>
    {#if roomCreating}
        <!-- todo: loading button component -->
        <span class="loading loading-ring" />
    {/if}

    Send Message
</button>
