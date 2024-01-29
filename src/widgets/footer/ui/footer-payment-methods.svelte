<script lang="ts">
import { footerPaymentMethods } from "~/widgets/footer"

import { Button } from "$ui/common"
</script>

<div class="flex gap-x-7">
    {#each footerPaymentMethods as footerPaymentMethod, i (i)}
        <Button
            color="secondary"
            variant="text"
        >
            <svelte:component
                this={footerPaymentMethod.Icon}
                height="40"
                width="100%"
            />
        </Button>
    {/each}
</div>
