<script lang="ts">
import { formatPrice } from "$lib/utils"
</script>

<p class="flex flex-col">
    <span class="text-secondary">
        Your balance:
    </span>

    <b class="text-2xl">
        {formatPrice(17_240)}
    </b>
</p>
