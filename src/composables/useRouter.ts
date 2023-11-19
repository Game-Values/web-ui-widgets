import type { Route } from "~/types"

import { OrderType, RouteName } from "~/enums"

export function useMainRoute(): Route {
    return useLocaleRoute()({
        name: RouteName.MAIN,
    })
}

export function useGameRoute(gameSlug: string): Route {
    return useLocaleRoute()({
        name: RouteName.GAME,
        params: {
            gameSlug,
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
