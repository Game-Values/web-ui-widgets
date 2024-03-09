import type { IGame, IItem } from "$schema/api"

export type IEditLotModalState = {
    game: IGame
    lot: IItem
    update(lot: IItem): void
}
