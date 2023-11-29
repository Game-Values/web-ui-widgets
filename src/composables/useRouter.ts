import type { Route } from "~/types"

import { OrderType, RouteName } from "~/enums"

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
        name: RouteName.ORDER,
        params: {
            orderId: 1,
            orderType: OrderType.GOLD,
        },
    })
}
