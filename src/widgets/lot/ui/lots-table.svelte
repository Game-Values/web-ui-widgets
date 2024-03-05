<script lang="ts">
import type { IItem } from "$schema/api"
import type { IFacets } from "~/entities/facets"
import type { IGameDetailsPageContext } from "~/pages/game"

import { useFacets } from "~/entities/facets"
import { LotsTableRow, useLots } from "~/entities/lot"
import { LotEditButton } from "~/features/lot"

import { useContext, useQuery, useRoute, useSession } from "$model"
import { LazyQuery } from "$ui/actions"
import { Empty } from "$ui/data"

let { context } = useContext<IGameDetailsPageContext>()
let { searchLots } = useLots()
let { user } = useSession()

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
                    <LotsTableRow {lot}>
                        <svelte:fragment slot="editLotButton">
                            {#if lot.owner_id === $user.id}
                                <LotEditButton
                                    class="link link-hover"
                                    game={$context.game}
                                    {lot}
                                >
                                    <b class="line-clamp-2">
                                        {lot.name}
                                    </b>
                                </LotEditButton>
                            {:else}
                                <a
                                    class="link link-hover"
                                    href={useRoute("/order/create/[lotId]", { lotId: lot.id }).getRoute()}
                                >
                                    <b class="line-clamp-2">
                                        {lot.name}
                                    </b>
                                </a>
                            {/if}
                        </svelte:fragment>
                    </LotsTableRow>
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
