import type { IOrderInDB } from "$schema/api"
import type { IPagePromise } from "$types"

export type IUserPurchaseDetailsPageContext = {
    order: IOrderInDB
}

export type IUserPurchaseDetailsPageData = IPagePromise<IOrderInDB>

export type IUserPurchasesListPageData = IPagePromise<IOrderInDB[]>
