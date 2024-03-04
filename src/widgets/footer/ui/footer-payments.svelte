<script lang="ts">
import { footerPayments } from "~/widgets/footer"

import { EnhancedImage } from "$ui/data"
</script>

<ul class="gap-x-8 flex">
    {#each footerPayments as footerPayment (footerPayment)}
        <li>
            <EnhancedImage
                --height="2.5rem"
                alt={footerPayment}
                size="xs"
                src="images/common/{footerPayment}.png"
            />
        </li>
    {/each}
</ul>
