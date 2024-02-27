import type { IGame, IItem, IOrderInDB } from "$schema/api"
import type { IPagePromise } from "$types"

export type IOrderCreatePageData = IPagePromise<IItem, IGame>

export type IOrderPurchasesListPageData = IPagePromise<IOrderInDB[]>

export type IOrderPurchaseDetailsPageData = IPagePromise<IOrderInDB>

export type IOrderSalesListPageData = IPagePromise<IOrderInDB[]>
