import type { IGame } from "$schema/api"
import type { IPagePromise } from "$types"
import type { IGameSections } from "~/entities/game"

export type IGamesListPageContext = {
    games: IGame[]
}

export type IGameDetailsPageContext = {
    game: IGame
    gameSectionActive: string
    gameSections: IGameSections
}

export type IGamesListPageData = IPagePromise<IGame[]>

export type IGameDetailsPageData = IPagePromise<IGame, IGameSections>
