<script lang="ts">
import type { IGameDetailsPageContext } from "~/pages/game"

import { fetchLotsFilters } from "~/entities/lot"

import { useContext } from "$model"
import { LazyComponent, LazyPromise } from "$ui/actions"
import { Empty } from "$ui/data"

let { context } = useContext<IGameDetailsPageContext>()

$: lotsFiltersPromise = fetchLotsFilters($context.game, $context.gameSectionActive)
</script>

<div
    class="
        card card-normal
        sticky top-4
        bg-white/[0.02]
    "
>
    <div class="card-body gap-y-4">
        <h5 class="card-title">
            Filters
        </h5>

        <LazyPromise
            promise={lotsFiltersPromise}
            let:value={lotsFilters}
        >
            {#if lotsFilters.length}
                {#each lotsFilters as lotsFilter (lotsFilter.name)}
                    <LazyComponent
                        props={{ lotsFilter }}
                        src="~/entities/lot/ui/lots-filter-{lotsFilter.type}.svelte"
                    />
                {/each}
            {:else}
                <Empty />
            {/if}
        </LazyPromise>
    </div>
</div>
