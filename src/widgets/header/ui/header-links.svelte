<script lang="ts">
import Button from "@smui/button"

import { headerLinks } from "~/widgets/header"
</script>

<div class="flex justify-center gap-x-4">
    {#each headerLinks as headerLink (headerLink.label)}
        <Button
            class="text-normal font-bold button-link"
            href={headerLink.url}
        >
            {headerLink.label}
        </Button>
    {/each}
</div>
