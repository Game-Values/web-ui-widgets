<script lang="ts">
import type { Room, RoomMember } from "matrix-js-sdk"

import { useRoute, useSession } from "$model"
import { Avatar } from "$ui/data"

import IconArrowFatUp from "virtual:icons/common/arrow-fat-up"
import IconHandUp from "virtual:icons/common/hand-up"

interface $$Props {
    room: Room
}

let room: Room

let { route: messagesRoute, routeActive: messagesRouteActive } = useRoute("/messages/[roomId]", { roomId: room.roomId })
let { user } = useSession()

$: directMember = (
    room
        .getMembers()
        .find((roomMember: RoomMember) => roomMember.userId !== $user.chat_id)!
)

export {
    room,
}
</script>

<a
    class="gap-x-3 flex"
    class:active={$messagesRouteActive}
    href={$messagesRoute}
>
    <Avatar
        class="w-16"
        username={directMember.name}
    />

    <div class="gap-y-1 flex flex-col">
        <small class="gap-x-2 flex items-center">
            <b>
                {directMember.name}
            </b>

            <span class="gap-x-0.5 inline-flex items-center text-positive-light">
                <i class="icon">
                    <IconHandUp />
                </i>

                <small>
                    0%
                </small>
            </span>

            <span class="gap-x-0.5 inline-flex items-center text-accent">
                <i class="icon">
                    <IconArrowFatUp />
                </i>

                <small>
                    1
                </small>
            </span>
        </small>

        <span class="text-secondary text-xs">
            Unread Message Text
        </span>
    </div>
</a>
