<script lang="ts">
import { LotStatRow, useLotsStats } from "~/entities/lot"

let { lotsStats } = useLotsStats()
</script>

<div class="flex flex-col gap-y-6">
    {#each lotsStats as lotStat (lotStat.label)}
        <LotStatRow {lotStat} />
    {/each}
</div>
