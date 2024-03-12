<script lang="ts">
import { ChatDirectMessage } from "~/widgets/chat"

import { useRoute } from "$model"

import IconBot from "virtual:icons/common/bot"

let { routeParams } = useRoute()
</script>

{#if $routeParams.roomId}
    <ChatDirectMessage />
{:else}
    <div
        class="
            gap-y-10
            w-full h-full
            flex flex-col items-center justify-center
            text-secondary
        "
    >
        <i class="icon text-[10rem]">
            <IconBot />
        </i>

        <p>
            Select who you would like to message
        </p>
    </div>
{/if}
