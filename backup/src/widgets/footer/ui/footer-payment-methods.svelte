<script lang="ts">
import IconButton from "@smui/button"

import { footerPaymentMethods } from "~/widgets/footer"
</script>

<div class="flex gap-x-7">
    {#each footerPaymentMethods as footerPaymentMethod (footerPaymentMethod.title)}
        <IconButton
            class="button-default button-link"
            title={footerPaymentMethod.title}
        >
            <svelte:component
                this={footerPaymentMethod.Icon}
                height="40"
                width="100%"
            />
        </IconButton>
    {/each}
</div>
