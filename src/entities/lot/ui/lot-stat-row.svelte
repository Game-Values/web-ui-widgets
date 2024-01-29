<script lang="ts">
import type { ILotStat } from "~/entities/lot"

export let lotStat: ILotStat
</script>

<div
    class="
        p-2
        flex items-center gap-x-4
        rounded-xl
        backdrop-blur-3xl
    "
>
    <svelte:component
        this={lotStat.icon}
        class="text-3xl text-primary leading-0"
    />

    <div class="flex flex-col">
        <b>
            {lotStat.count}
        </b>

        <small>
            {lotStat.label}
        </small>
    </div>
</div>
