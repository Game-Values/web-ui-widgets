import type { Route } from "~/types"
import type { LocationQuery, LocationQueryValue, RouteParams, Router } from "vue-router"

import { RouteName } from "~/enums"

export class RouterClient {
    public readonly routeNames: Record<keyof typeof RouteName, RouteName> = {
        ACCOUNT: RouteName.ACCOUNT,
        ACCOUNT_SALE: RouteName.ACCOUNT_SALE,
        ACCOUNT_SETTINGS: RouteName.ACCOUNT_SETTINGS,
        GAME: RouteName.GAME,
        GAME_ITEM_ORDER: RouteName.ACCOUNT_SALE,
        MAIN: RouteName.MAIN,
        USER: RouteName.USER,
    }

    private get _routeParams(): Record<RouteName, RouteParams> {
        return {
            [this.routeNames.ACCOUNT]: {},
            [this.routeNames.ACCOUNT_SALE]: {},
            [this.routeNames.ACCOUNT_SETTINGS]: {},
            [this.routeNames.GAME]: {
                gameId: this.route.params.gameId,
            },
            [this.routeNames.GAME_ITEM_ORDER]: {
                orderId: this.route.params.orderId,
            },
            [this.routeNames.MAIN]: {},
            [this.routeNames.USER]: {},
        }
    }

    public getRoute(
        routeName: RouteName,
        routeOptions?: Partial<
            Pick<Route, (
                "params" |
                "query"
            )>
        >,
    ): Route {
        return useLocaleRoute()(
            useMerge({
                name: routeName,
                params: this.getRouteParams(routeName),
            }, routeOptions),
        )
    }

    public getRouteParam<T = string | string[]>(routeParam: keyof RouteParams): T {
        return useGet(this.route.params, routeParam, "") as T
    }

    public getRouteParams(routeName: RouteName): RouteParams {
        return useGet(this._routeParams, routeName, {})
    }

    public getRouteQuery<T = LocationQueryValue | LocationQueryValue[]>(routeQuery: keyof LocationQuery): T {
        return useGet(this.route.query, routeQuery, "") as T
    }

    @Memoize((route: Route): string => route.fullPath)
    public get route(): Route {
        return useRoute()
    }

    @Memoize()
    public get router(): Router {
        return useRouter()
    }
}
