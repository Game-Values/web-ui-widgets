<script lang="ts">
import Button from "@smui/button"

import { headerLinks } from "~/entities/header"
</script>

{#each headerLinks as headerLink}
    <Button
        class="text-normal font-bold button-link"
        href={headerLink.url}
    >
        {headerLink.label}
    </Button>
{/each}
