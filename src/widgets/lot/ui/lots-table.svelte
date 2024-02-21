<script lang="ts">
import type { IGameDetailsPageContext } from "~/pages/game"

import { useFacets } from "~/entities/facets"
import { LotsTableRow, useLots } from "~/entities/lot"

import { useContext } from "$model"
import { LazyPromise } from "$ui/actions"
import { Empty } from "$ui/data"

let { context } = useContext<IGameDetailsPageContext>()
let { searchLots } = useLots()

$: useFacetsPromise = (
    useFacets(
        searchLots($context.game.id!, { type: $context.gameSectionActive }),
    )
)
</script>

<div class="gap-y-4 flex flex-col">
    <table class="table table-xs table-zebra">
        <thead>
            <tr>
                <th style:width="12rem">
                    Seller
                </th>

                <th>
                    Item Name
                </th>

                <th style:width="8rem">
                    Available
                </th>

                <th style:width="8rem">
                    Price
                </th>
            </tr>
        </thead>

        <tbody>
            <LazyPromise
                promise={useFacetsPromise}
                let:value={facets}
            >
                {#each facets.results as lot (lot.id)}
                    <LotsTableRow {lot} />
                {/each}
            </LazyPromise>
        </tbody>
    </table>

    <LazyPromise
        promise={useFacetsPromise}
        let:value={facets}
    >
        <svelte:fragment slot="loading">
            <progress class="progress progress-primary w-full" />
        </svelte:fragment>

        {#if !facets.results.length}
            <Empty />
        {/if}
    </LazyPromise>
</div>
