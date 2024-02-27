import type { IGame, IItem } from "$schema/api"
import type { IPagePromise } from "$types"
import type { ILotsFilter } from "~/entities/lot"

export type ILotCreatePageContext = {
    game?: IGame
    games: IGame[]
    gameSections: string[]
    lotsFilters: ILotsFilter[]
    step: 1 | 2 | 3
}

export type ILotCreatePageData = IPagePromise<IGame[]>

export type ILotsListPageData = IPagePromise<IItem[]>
