import type { IGame } from "$schema/api"
import type { IPagePromise } from "$types"

export type ILotNewListingPageData = IPagePromise<IGame | undefined>
