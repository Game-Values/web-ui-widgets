<script lang="ts">
import Button from "@smui/button"

import { openAuthModal } from "~/entities/auth"
</script>

<Button
    class="text-normal text-nowrap font-bold"
    variant="text"
    on:click={() => openAuthModal()}
>
    Log In
</Button>
