<script lang="ts">
import { lotsStats, LotStats } from "~/entities/lot"
</script>

<div class="flex flex-col gap-y-6">
    {#each lotsStats as lotStats (lotStats.label)}
        <LotStats {lotStats} />
    {/each}
</div>
