<script lang="ts">
import type { IGame } from "$schema/api"
import type { IGameSections } from "~/entities/game"

import { fetchLotsFilters } from "~/entities/lot"

import { useRoute } from "$model"
import { LazyComponent, LazyPromise } from "$ui/actions"

import IconInformationCircle from "virtual:icons/heroicons/information-circle"

interface $$Props {
    class?: string
    game: IGame
    gameSections: IGameSections
}

let className: string = ""

let game: IGame

let gameSections: IGameSections

let { routeParams } = useRoute()

$: gameSectionActive = $routeParams.gameSection || Object.keys(gameSections)[0]

$: lotsFiltersPromise = fetchLotsFilters(game, gameSectionActive)

export {
    className as class,
    game,
    gameSections,
}
</script>

<div class="card card-normal bg-white/[0.02] {className}">
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
                <div
                    class="alert text-secondary"
                    role="alert"
                >
                    <IconInformationCircle />

                    <span>
                        No data
                    </span>
                </div>
            {/if}
        </LazyPromise>
    </div>
</div>
