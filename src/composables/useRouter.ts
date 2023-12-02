import type { Route } from "~/types"
import type { LocationQuery, RouteParams } from "vue-router"

import { ItemType, RouteName } from "~/enums"

export function useAccountRoute(): Route {
    return useLocaleRoute()({
        name: RouteName.ACCOUNT,
    })
}

export function useMainRoute(): Route {
    return useLocaleRoute()({
        name: RouteName.MAIN,
    })
}

export function useGameRoute(gameId: string): Route {
    return useLocaleRoute()({
        name: RouteName.GAME,
        params: {
            gameId,
        },
    })
}

export function useOrderRoute(): Route {
    return useLocaleRoute()({
        name: RouteName.GAME_ITEM_ORDER,
        params: {
            itemType: ItemType.GOLD, // todo
            orderId: 1,
        },
    })
}

export function useSaleRoute(query?: LocationQuery): Route {
    return useLocaleRoute()({
        name: RouteName.ACCOUNT_SALE,
        query,
    })
}

export function useSettingsRoute(): Route {
    return useLocaleRoute()({
        name: RouteName.ACCOUNT_SETTINGS,
    })
}

export function useUserRoute(userId: string): Route {
    return useLocaleRoute()({
        name: RouteName.USER,
        params: {
            userId,
        },
    })
}
