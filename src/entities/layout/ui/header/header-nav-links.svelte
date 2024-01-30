<script lang="ts">
import { navLinks } from "~/entities/layout"

import { Button } from "$ui/common"
</script>

<div class="flex justify-center gap-x-4">
    {#each navLinks as navLink (navLink.label)}
        <Button
            color="secondary"
            href={navLink.url}
            variant="text"
        >
            {navLink.label}
        </Button>
    {/each}
</div>
