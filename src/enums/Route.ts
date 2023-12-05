import { routesNames } from "@typed-router"

export enum RouteLayout {
    DEFAULT = "default",
    ERROR = "error",
    GAME = "game",
}

export enum RouteName {
    PRIVATE_ACCOUNT = routesNames.privateLocaleAccount.localeAccountIndexSales,
    PRIVATE_ACCOUNT_BALANCE = routesNames.privateLocaleAccount.localeAccountIndexBalance,
    PRIVATE_ACCOUNT_ITEMS = routesNames.privateLocaleAccount.localeAccountIndexItems,
    PRIVATE_ACCOUNT_PURCHASES = routesNames.privateLocaleAccount.localeAccountIndexPurchases,
    PRIVATE_ACCOUNT_SALES = routesNames.privateLocaleAccount.localeAccountIndexSales,
    PRIVATE_ACCOUNT_SETTINGS = routesNames.privateLocaleAccount.localeAccountIndexSettings,

    PRIVATE_GAME_ITEM_BUY = routesNames.privateLocaleGGameIdItemTypeItemIdBuy,
    PRIVATE_GAME_ITEM_SELL = routesNames.privateLocaleGGameIdItemTypeSell,
    PRIVATE_GAME_ITEM_SELL_EDIT = routesNames.privateLocaleGGameIdItemTypeItemIdEdit,

    PUBLIC_GAME = routesNames.publicLocaleGGameIdItemType,

    PUBLIC_MAIN = routesNames.publicLocale,

    PUBLIC_USER = routesNames.publicLocaleUUserId.localeUUserIdIndexStorefront,
    PUBLIC_USER_REVIEWS = routesNames.publicLocaleUUserId.localeUUserIdIndexReviews,
    PUBLIC_USER_STOREFRONT = routesNames.publicLocaleUUserId.localeUUserIdIndexStorefront,
}
