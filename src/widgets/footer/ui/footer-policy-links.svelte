<script lang="ts">
import { footerPolicyLinks } from "~/widgets/footer"

import { Button } from "$ui/common"
</script>

<div class="flex gap-2">
    {#each footerPolicyLinks as footerPolicyLink (footerPolicyLink.url)}
        <Button
            class="text-sm font-normal opacity-60"
            color="secondary"
            href={footerPolicyLink.url}
            variant="text"
        >
            {footerPolicyLink.label}
        </Button>
    {/each}
</div>
