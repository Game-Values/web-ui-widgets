import type { IGame } from "$schema/api"
import type { IPagePromise } from "$types"

export type ILotNewListingPageContext = {
    step: 1 | 2 | 3
}

export type ILotNewListingPageData = IPagePromise<IGame[]>
