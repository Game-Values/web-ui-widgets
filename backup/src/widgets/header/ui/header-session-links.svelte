<script lang="ts">
import IconButton from "@smui/button"

import { headerUserLinks } from "~/widgets/header"
</script>

<div class="flex gap-x-4">
    {#each headerUserLinks as headerUserLink (headerUserLink.url)}
        <IconButton
            class="button-default button-link"
            href={headerUserLink.url}
        >
            <svelte:component this={headerUserLink.Icon} />
        </IconButton>
    {/each}
</div>
