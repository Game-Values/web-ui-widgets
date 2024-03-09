<script lang="ts">
import type { IGame, IItem, IItemCreate } from "$schema/api"
import type { ILotsFilter } from "~/entities/lot"
import type { ILotFormAction } from "~/features/lot"
import type { ILotCreatePageContext } from "~/pages/lot"

import { merge } from "lodash-es"
import { onMount, tick } from "svelte"

import { fetchGameSections, findGameById, useGames } from "~/entities/game"
import { fetchLotsFilters, LotFormFinance, LotFormMain, LotFormProduct } from "~/entities/lot"
import { useLotForm } from "~/features/lot"

import { useContext, useEventDispatcher, useRoute, useWatch } from "$model"
import { LazyPromise } from "$ui/actions"
import { Accordion } from "$ui/data"

interface $$Props {
    action: ILotFormAction
    game?: IGame
    lot?: IItem
}

interface $$Events {
    submit: CustomEvent<IItem>
    update: CustomEvent<IItem>
}

let action: ILotFormAction

let game: IGame | undefined = undefined

let lot: IItem | undefined = undefined

let { context, updateContext } = useContext<ILotCreatePageContext>({ gameSections: [], lotsFilters: [] })
let { dispatchEvent: dispatchUpdateEvent } = useEventDispatcher<IItemCreate>("update")
let { fetchGames } = useGames()
let { data, form, setData } = useLotForm(action, lot)
let { routeQuery } = useRoute()

let gamesPromise: Promise<IGame[] | void> = (
    $context.games?.length
        ? Promise.resolve($context.games)
        : fetchGames().then((games: IGame[]): void => updateContext({ games }))
)

useWatch(data, dispatchUpdateEvent)

onMount(async (): Promise<void> => {
    await tick()
    await update()
})

async function update(updatedData?: Partial<IItemCreate>): Promise<void> {
    await gamesPromise

    let resultData: Partial<IItemCreate> = merge({
        attributes: { type: $routeQuery.gameSection || lot?.attributes.type },
        gid: $routeQuery.gameId || game?.id,
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

export {
    action,
    game,
    lot,
}
</script>

<LazyPromise promise={gamesPromise}>
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
            <LotFormMain
                data={$data}
                on:update={e => {
                    update(e.detail)
                    updateContext({ step: 1 })
                }}
            />

            <LotFormProduct
                data={$data}
                on:update={() => updateContext({ step: 2 })}
            />

            <LotFormFinance
                data={$data}
                on:update={() => updateContext({ step: 3 })}
            />
        </Accordion>

        <div class="form-control">
            <button
                class="btn btn-ring ml-auto w-full max-w-72"
                type="submit"
            >
                {action === "create" ? "Sell" : "Save"}
            </button>
        </div>
    </form>
</LazyPromise>
