<script lang="ts">
import { ChatDirectUser, useChatDirect } from "~/entities/chat"

let { directRooms } = useChatDirect()
</script>

<ul class="menu menu-lg">
    <li class="menu-title">
        <h3 class="text-primary">
            Messages {$directRooms.length}
        </h3>
    </li>

    {#each $directRooms as directRoom (directRoom.roomId)}
        <li class="border border-solid border-white/[0.02]">
            <ChatDirectUser room={directRoom} />
        </li>
    {/each}
</ul>

<style>
.menu {
    --rounded-btn: 0;

    @apply p-0 gap-y-0;
    @apply w-full;
}

.menu .menu-title {
    @apply py-6;
    @apply bg-base-300;
}
</style>
