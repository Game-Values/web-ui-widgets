<script lang="ts">
import type { IGame, IItem } from "$schema/api"
import type { ILotsListPageContext } from "~/pages/lot"

import { useContext } from "$model"
import { ShowModalButton } from "$ui/actions"

import IconPencil from "virtual:icons/common/pencil"

interface $$Props {
    game: IGame
    lot: IItem
}

let game: IGame

let lot: IItem

let { context, updateContext } = useContext<ILotsListPageContext>()

function update(updatedLot: IItem): void {
    let gamesLots: IItem[] = $context.lots.map((contextLot: IItem): IItem => (
        contextLot.id === updatedLot.id
            ? updatedLot
            : contextLot
    ))

    $context.gamesLots.set(game, gamesLots)
    updateContext({ gamesLots: $context.gamesLots })
}

export {
    game,
    lot,
}
</script>

<ShowModalButton
    class="btn btn-circle btn-ghost btn-sm"
    modal="edit-lot"
    modalState={{ game, lot, update }}
    tooltip="Edit"
>
    <i class="icon text-white/[0.12]">
        <small>
            <IconPencil />
        </small>
    </i>
</ShowModalButton>
