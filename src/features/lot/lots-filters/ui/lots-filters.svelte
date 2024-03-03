<script lang="ts">
import type { IGameDetailsPageContext } from "~/pages/game"

import { fetchLotsFilters } from "~/entities/lot"
import { LotsFilter } from "~/features/lot"

import { useContext } from "$model"
import { LazyPromise } from "$ui/actions"
import { Empty } from "$ui/data"

let { context } = useContext<IGameDetailsPageContext>()

// todo: added sections for all games and rm ternary
$: lotsFiltersPromise = (
    $context.gameSectionActive
        ? fetchLotsFilters($context.game, $context.gameSectionActive)
        : Promise.resolve([])
)
</script>

<div
    class="
        card card-normal
        sticky top-4
        bg-white/[0.02]
    "
>
    <div class="card-body gap-y-8 group">
        <h5 class="card-title">
            Filters
        </h5>

        <LazyPromise
            promise={lotsFiltersPromise}
            let:value={lotsFilters}
        >
            {#if lotsFilters.length}
                {#each lotsFilters as lotsFilter (lotsFilter.name)}
                    <LotsFilter {lotsFilter}/>
                {/each}
            {:else}
                <Empty />
            {/if}
        </LazyPromise>
    </div>
</div>
