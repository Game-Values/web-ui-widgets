import type { IOrderInDB } from "$schema/api"
import type { IPagePromise } from "$types"

export type IUserPurchasesListPageData = IPagePromise<IOrderInDB[]>
