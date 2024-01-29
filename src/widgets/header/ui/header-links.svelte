<script lang="ts">
import { headerLinks } from "~/widgets/header"

import { Button } from "$ui/common"
</script>

<div class="flex justify-center gap-x-4">
    {#each headerLinks as headerLink (headerLink.url)}
        <Button
            color="secondary"
            href={headerLink.url}
            variant="text"
        >
            {headerLink.label}
        </Button>
    {/each}
</div>
