import type { IGame } from "$schema/api"
import type { IPagePromise } from "$types"

export type IGamesListPageData = IPagePromise<IGame[]>

export type IGameDetailsPageData = IPagePromise<IGame>
