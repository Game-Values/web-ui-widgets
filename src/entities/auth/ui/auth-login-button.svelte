<script lang="ts">
import Button from "@smui/button"
import { createEventDispatcher } from "svelte"

import { openAuthLoginModal } from "~/entities/auth"

let dispatch = createEventDispatcher<{
    click: Event
}>()

function handleClick(e: Event): void {
    dispatch("click", e)
    openAuthLoginModal()
}
</script>

<Button
    class="text-normal text-nowrap font-bold"
    variant="text"
    on:click={e => handleClick(e)}
>
    Log In
</Button>
