<script lang="ts">
import type { IItem } from "$schema/api"
import type { IFacets } from "~/entities/facets"
import type { IGameDetailsPageContext } from "~/pages/game"

import { useFacets } from "~/entities/facets"
import { LotsTableRow, useLots } from "~/entities/lot"

import { useContext, useQuery } from "$model"
import { LazyQuery } from "$ui/actions"
import { Empty } from "$ui/data"

let { context } = useContext<IGameDetailsPageContext>()
let { searchLots } = useLots()

$: facetsQuery = (
    useQuery<IFacets<IItem[]>>(searchLots, $context.game.id, { type: $context.gameSectionActive }).query
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

                <th style:width="10rem">
                    Available
                </th>

                <th style:width="10rem">
                    Price
                </th>
            </tr>
        </thead>

        <tbody>
            <LazyQuery
                query={facetsQuery}
                let:data={facets}
            >
                {#each useFacets(facets).results as lot (lot.id)}
                    <LotsTableRow {lot} />
                {/each}
            </LazyQuery>
        </tbody>
    </table>

    <LazyQuery
        query={facetsQuery}
        let:data={facets}
    >
        <svelte:fragment slot="loading">
            <progress class="progress progress-primary w-full" />
        </svelte:fragment>

        {#if !useFacets(facets).results.length}
            <Empty />
        {/if}
    </LazyQuery>
</div>
