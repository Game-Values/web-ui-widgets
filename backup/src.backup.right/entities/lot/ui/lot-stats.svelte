<script lang="ts">
import type { ILotStats } from "~/entities/lot"

export let lotStats: ILotStats
</script>

<div
    class="
        p-2
        flex items-center gap-x-4
        rounded-xl
        backdrop-blur-3xl
    "
>
    <div class="text-3xl text-primary">
        <svelte:component this={lotStats.icon} />
    </div>

    <div class="flex flex-col">
        <b>
            {lotStats.count}
        </b>

        <small>
            {lotStats.label}
        </small>
    </div>
</div>
