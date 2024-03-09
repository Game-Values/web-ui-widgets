<script lang="ts">
import Button from "@smui/button"

import { headerLinks } from "~/widgets/header"
</script>

<div class="flex justify-center gap-x-4">
    {#each headerLinks as headerLink (headerLink.url)}
        <Button
            class="text-normal font-bold button-default button-link"
            href={headerLink.url}
        >
            {headerLink.label}
        </Button>
    {/each}
</div>
