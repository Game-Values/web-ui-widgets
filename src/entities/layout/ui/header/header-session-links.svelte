<script lang="ts">
import { sessionLinks } from "~/entities/layout"

import { IconButton } from "$ui/common"
</script>

<div class="flex justify-center">
    {#each sessionLinks as sessionLink (sessionLink.url)}
        <IconButton
            color="secondary"
            href={sessionLink.url}
        >
            <svelte:component this={sessionLink.Icon} />
        </IconButton>
    {/each}
</div>
