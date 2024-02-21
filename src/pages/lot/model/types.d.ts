import type { IGame } from "$schema/api"
import type { IPagePromise } from "$types"
import type { ILotsFilter } from "~/entities/lot"

export type ILotNewListingPageContext = {
    game?: IGame
    games: IGame[]
    gameSections: string[]
    lotsFilters: ILotsFilter[]
    step: 1 | 2 | 3
}

export type ILotNewListingPageData = IPagePromise<IGame[]>
