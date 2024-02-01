<script lang="ts">
import Chip from "@smui/chips"

import { forwardEvent } from "$lib/helpers"

export let chip: any
</script>

<Chip
    {chip}
    on:click={forwardEvent()}
>
    <slot />
</Chip>
