<script lang="ts">
import Button from "@smui/button"

import { footerPolicyLinks } from "~/widgets/footer"
</script>

<div class="flex gap-2">
    {#each footerPolicyLinks as footerPolicyLink (footerPolicyLink.url)}
        <Button
            class="text-sm font-normal button-link"
            color="secondary"
            href={footerPolicyLink.url}
            variant="text"
        >
            {footerPolicyLink.label}
        </Button>
    {/each}
</div>
