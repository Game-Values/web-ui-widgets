<script lang="ts">
import type { IGame, IItem } from "$schema/api"
import type { ILotsListPageContext } from "~/pages/lot"

import { useGame } from "~/entities/game"
import { UserLotTableRow } from "~/entities/user"
import { LotDeleteButton, LotEditButton } from "~/features/lot"
import { UserLotsTable } from "~/widgets/user"

import { useContext } from "$model"
import { Collapse, EnhancedImage } from "$ui/data"

interface $$Props {
    game: IGame
    lots: IItem[]
}

let game: IGame

let lots: IItem[]

let { context, updateContext } = useContext<ILotsListPageContext>()
let { gameIcon } = useGame(game)

function whenLotDeleted(deletedLot: IItem): void {
    let gamesLots: IItem[] = lots.filter((lot: IItem): boolean => lot !== deletedLot)

    if (gamesLots.length)
        $context.gamesLots.set(game, gamesLots)
    else
        $context.gamesLots.delete(game)

    updateContext({ gamesLots: $context.gamesLots })
}

export {
    game,
    lots,
}
</script>

<Collapse
    contentClass="mt-4 p-0"
    titleClass="p-2 h-24 bg-white/[0.02] text-lg"
>
    <svelte:fragment slot="title">
        <div class="gap-x-4 flex items-center">
            <EnhancedImage
                --height="5rem"
                --width="5rem"
                class="glass p-1 rounded-xl"
                src={gameIcon}
            />

            <p class="inline-flex flex-col">
                <span>
                    {game.name}
                </span>

                <small class="font-normal">
                    {lots.length} lots
                </small>
            </p>
        </div>
    </svelte:fragment>

    <UserLotsTable
        {lots}
        let:lot
    >
        <UserLotTableRow {lot}>
            <svelte:fragment slot="deleteLot">
                <LotDeleteButton
                    {lot}
                    on:click={() => whenLotDeleted(lot)}
                />
            </svelte:fragment>

            <svelte:fragment slot="editLot">
                <LotEditButton
                    {game}
                    {lot}
                />
            </svelte:fragment>
        </UserLotTableRow>
    </UserLotsTable>
</Collapse>
