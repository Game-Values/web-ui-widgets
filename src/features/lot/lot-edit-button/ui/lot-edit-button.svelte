<script lang="ts">
import type { IGame, IItem } from "$schema/api"
import type { ILotsListPageContext } from "~/pages/lot"

import { useContext } from "$model"
import { ShowModalButton } from "$ui/actions"

interface $$Props {
    class?: string
    game: IGame
    lot: IItem
}

interface $$Slots {
    default: NonNullable<unknown>
}

let className: string = ""

let game: IGame

let lot: IItem

// let { context, updateContext } = useContext<ILotsListPageContext>()

function update(updatedLot: IItem): void { // todo: emit
//     if (!$context.gamesLots || !$context.lots)
//         return
//
//     let gamesLots: IItem[] = $context.lots.map((contextLot: IItem): IItem => (
//         contextLot.id === updatedLot.id
//             ? updatedLot
//             : contextLot
//     ))
//
//     $context.gamesLots.set(game, gamesLots)
//     updateContext({ gamesLots: $context.gamesLots })
}

export {
    className as class,
    game,
    lot,
}
</script>

<ShowModalButton
    class={className}
    modal="edit-lot"
    modalState={{ game, lot, update }}
    tooltip="Edit"
>
    <slot />
</ShowModalButton>
