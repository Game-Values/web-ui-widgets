<script lang="ts">
import { headerUserLinks } from "~/widgets/header"

import { IconButton } from "$ui/common"
</script>

<div class="flex justify-center">
    {#each headerUserLinks as headerUserLink (headerUserLink.url)}
        <IconButton
            color="secondary"
            href={headerUserLink.url}
        >
            <svelte:component this={headerUserLink.Icon} />
        </IconButton>
    {/each}
</div>
