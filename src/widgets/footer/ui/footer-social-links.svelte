<script lang="ts">
import { footerSocialLinks } from "~/widgets/footer"

import { FabButton } from "$ui/common"
</script>

<div class="flex gap-x-4">
    {#each footerSocialLinks as footerSocialLink, i (i)}
        <FabButton
            color="secondary"
            href={footerSocialLink.url}
            mini
            target="_blank"
        >
            <svelte:component
                this={footerSocialLink.Icon}
                height="40"
                width="40"
            />
        </FabButton>
    {/each}
</div>
