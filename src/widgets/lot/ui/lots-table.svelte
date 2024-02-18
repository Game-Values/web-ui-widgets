<script lang="ts">
import type { IGame } from "$schema/api"
import type { IGameSections } from "~/entities/game"

import { useFacets } from "~/entities/facets"
import { LotsTableRow, useLots } from "~/entities/lot"

import { useRoute } from "$model"
import { LazyPromise } from "$ui/actions"

interface $$Props {
    game: IGame
    gameSections: IGameSections
}

let game: IGame

let gameSections: IGameSections

let { lotsSearching, searchLots } = useLots()
let { routeParams } = useRoute()

$: useFacetsPromise = useFacets(
    searchLots(game.id!, {
        type: $routeParams.gameSection || Object.keys(gameSections)[0],
    }),
)

export {
    game,
    gameSections,
}
</script>

<div class="relative">
    {#if $lotsSearching}
        <progress
            class="
                progress progress-primary
                absolute top-10 left-0
                w-full
            "
        />
    {/if}

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
</div>
