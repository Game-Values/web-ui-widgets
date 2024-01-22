<script lang="ts">
import Button from "@smui/button"
import { createEventDispatcher } from "svelte"

import { openAuthSignupModal } from "~/entities/auth"

let dispatch = createEventDispatcher<{
    click: Event
}>()

function handleClick(e: Event): void {
    dispatch("click", e)
    openAuthSignupModal()
}
</script>

<Button
    class="text-normal text-nowrap font-bold"
    variant="text"
    on:click={e => handleClick(e)}
>
    Sign up
</Button>
