<script lang="ts">
import Button from "@smui/button"

import { openAuthLoginModal } from "~/entities/auth"

import { withForwardEvent } from "$lib"
</script>

<Button
    class="text-normal text-nowrap font-bold"
    variant="text"
    on:click={withForwardEvent(openAuthLoginModal)}
>
    Log In
</Button>
