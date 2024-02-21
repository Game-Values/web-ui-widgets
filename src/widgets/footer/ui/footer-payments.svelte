<script lang="ts">
import { EnhancedImage } from "$ui/data"

let payments: string[] = [
    "visa",
    "mastercard",
    "binance",
    "paypal",
    "webmoney",
]
</script>

<ul class="gap-x-8 flex">
    {#each payments as payment (payment)}
        <li>
            <EnhancedImage
                --height="2.5rem"
                alt={payment}
                size="xs"
                src="images/common/{payment}.png"
            />
        </li>
    {/each}
</ul>
