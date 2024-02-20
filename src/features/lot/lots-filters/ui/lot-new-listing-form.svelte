<script lang="ts">
import type { IGame, IItemCreate } from "$schema/api"
import type { ILotsFilter } from "~/entities/lot"

import { merge } from "lodash-es"
import { onMount, tick } from "svelte"

import { fetchGameSections, findGameById } from "~/entities/game"
import { fetchLotsFilters, LotNewListingFormFinance, LotNewListingFormMain, LotNewListingFormProduct } from "~/entities/lot"
import { useLotsNewListingForm } from "~/features/lot"

import { useEventDispatcher, useRoute, useWatch } from "$model"

interface $$Props {
    games: IGame[]
}

interface $$Events {
    update: CustomEvent<IItemCreate>
}

let games: IGame[] = []

let { dispatchEvent: dispatchUpdateEvent } = useEventDispatcher<IItemCreate>("update")
let { data, form, setData } = useLotsNewListingForm()
let { routeQuery } = useRoute()

let lostFilters: ILotsFilter[] = []

let gameSections: string[] = []

let selectedGame: IGame | undefined

useWatch(data, dispatchUpdateEvent)

onMount((): void => {
    tick().then((): void => update())
})

function update(updatedData?: Partial<IItemCreate>): void {
    let resultData: Partial<IItemCreate> = merge({
        attributes: { type: $routeQuery.gameSection },
        gid: $routeQuery.gameId,
    }, updatedData)

    selectedGame = findGameById(games, (resultData.gid || games[0].id)!)
    if (!selectedGame)
        return

    setData("gid", selectedGame.id!)
    setData("gname", selectedGame.name)

    fetchGameSections(selectedGame)
        .then((gameSectionsRaw: string[]) => {
            gameSections = gameSectionsRaw
            setData("attributes.type", resultData.attributes!.type || gameSections[0])

            if ($data.attributes.type)
                fetchLotsFilters(selectedGame!, $data.attributes.type)
                    .then((lostFiltersRaw: ILotsFilter[]) => lostFilters = lostFiltersRaw)
            else
                lostFilters = []
        })
}

export {
    games,
}
</script>

<form
    class="form"
    use:form
>
    <LotNewListingFormMain
        formData={$data}
        {gameSections}
        {games}
        on:update={e => update(e.detail)}
    />

    {#if lostFilters.length}
        <LotNewListingFormProduct
            formData={$data}
            {lostFilters}
        />
    {/if}

    <LotNewListingFormFinance
        formData={$data}
    />

    <div class="form-control">
        <button
            class="btn btn-ring ml-auto w-full max-w-72"
            type="submit"
        >
            Sell
        </button>
    </div>
</form>
