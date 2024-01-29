<script lang="ts">
import { socialLinks } from "~/entities/layout"

import { FabButton } from "$ui/common"
</script>

<div class="flex gap-x-4">
    {#each socialLinks as socialLink, i (i)}
        <FabButton
            color="secondary"
            href={socialLink.url}
            mini
            target="_blank"
        >
            <svelte:component
                this={socialLink.Icon}
                height="40"
                width="40"
            />
        </FabButton>
    {/each}
</div>
