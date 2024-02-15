<script lang="ts">
import IconButton from "@smui/button"

import { footerSocialLinks } from "~/widgets/footer"
</script>

<div class="flex gap-x-4">
    {#each footerSocialLinks as footerSocialLink (footerSocialLink.url)}
        <IconButton
            class="button-default button-link"
            href={footerSocialLink.url}
            target="_blank"
            title={footerSocialLink.title}
        >
            <svelte:component
                this={footerSocialLink.Icon}
                height="40"
                width="40"
            />
        </IconButton>
    {/each}
</div>
