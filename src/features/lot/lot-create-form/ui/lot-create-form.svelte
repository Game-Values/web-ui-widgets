<script lang="ts">
import type { IItemCreate } from "$schema/api"
import type { ILotsFilter } from "~/entities/lot"
import type { ILotCreatePageContext } from "~/pages/lot"

import { merge } from "lodash-es"
import { onMount, tick } from "svelte"

import { fetchGameSections, findGameById } from "~/entities/game"
import { fetchLotsFilters, LotCreateFormFinance, LotCreateFormMain, LotCreateProduct } from "~/entities/lot"
import { useLotCreateForm } from "~/features/lot"

import { useContext, useEventDispatcher, useRoute, useWatch } from "$model"
import { Accordion } from "$ui/data"

interface $$Events {
    update: CustomEvent<IItemCreate>
}

let { context, updateContext } = useContext<ILotCreatePageContext>({ gameSections: [], lotsFilters: [] })
let { dispatchEvent: dispatchUpdateEvent } = useEventDispatcher<IItemCreate>("update")
let { data, form, setData } = useLotCreateForm()
let { routeQuery } = useRoute()

useWatch(data, dispatchUpdateEvent)

onMount((): void => {
    tick().then((): void => update())
})

function update(updatedData?: Partial<IItemCreate>): void {
    let resultData: Partial<IItemCreate> = merge({
        attributes: { type: $routeQuery.gameSection },
        gid: $routeQuery.gameId,
    }, updatedData)

    updateContext({ game: findGameById($context.games, (resultData.gid || $context.games[0].id)!) })
    if (!$context.game)
        return

    setData("gid", $context.game.id!)
    setData("gname", $context.game.name)

    fetchGameSections($context.game)
        .then((gameSections: string[]) => {
            updateContext({ gameSections })
            setData("attributes.type", resultData.attributes!.type || $context.gameSections[0])

            if ($data.attributes.type)
                fetchLotsFilters($context.game!, $data.attributes.type)
                    .then((lotsFilters: ILotsFilter[]) => updateContext({ lotsFilters }))
            else
                updateContext({ lotsFilters: [] })
        })
}
</script>

<form
    class="form"
    use:form
>
    <Accordion
        contentClass={
            [
                "px-1 py-2",
                "flex flex-col gap-y-4",
                "after:w-full after:h-px after:block after:bg-[rgba(135,135,135,0.10)]",
            ].join(" ")
        }
    >
        <LotCreateFormMain
            data={$data}
            on:update={e => {
                update(e.detail)
                updateContext({ step: 1 })
            }}
        />

        <LotCreateProduct
            data={$data}
            on:update={() => updateContext({ step: 2 })}
        />

        <LotCreateFormFinance
            data={$data}
            on:update={() => updateContext({ step: 3 })}
        />
    </Accordion>

    <div class="form-control">
        <button
            class="btn btn-ring ml-auto w-full max-w-72"
            type="submit"
        >
            Sell
        </button>
    </div>
</form>
