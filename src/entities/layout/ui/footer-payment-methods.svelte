<script lang="ts">
import { paymentMethods } from "~/entities/layout"

import { Button } from "$ui/common"
</script>

<div class="flex gap-x-7">
    {#each paymentMethods as paymentMethod, i (i)}
        <Button
            color="secondary"
            variant="text"
        >
            <svelte:component
                this={paymentMethod.Icon}
                height="40"
                width="100%"
            />
        </Button>
    {/each}
</div>
