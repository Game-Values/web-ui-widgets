<script lang="ts">
import { policyLinks } from "~/entities/layout"

import { Button } from "$ui/common"
</script>

<div class="flex gap-2">
    {#each policyLinks as policyLink (policyLink.url)}
        <Button
            class="text-sm font-normal opacity-60"
            color="secondary"
            href={policyLink.url}
            variant="text"
        >
            {policyLink.label}
        </Button>
    {/each}
</div>
