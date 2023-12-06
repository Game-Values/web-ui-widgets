import type { TypedLocaleRoute, TypedRoute, TypedRouter } from "@typed-router"
import type { Facades } from "~/helpers"
import type { Nullable, Route } from "~/types"
import type { RouteMeta, RouteParams } from "vue-router"

import { helpers } from "@typed-router"

import { RouteName } from "~/enums"

export class RouterClient {
    private get _routeParams(): Record<keyof typeof RouteName, RouteParams> {
        return {
            [this.routeNames.PRIVATE_GAME_ITEM_BUY]: {
                gameId: this.getRouteParam("gameId"),
                itemId: this.getRouteParam("itemId"),
                itemType: this.getRouteParam("itemType"),
            },
            [this.routeNames.PRIVATE_GAME_ITEM_SELL_EDIT]: {
                itemId: this.getRouteParam("itemId"),
            },
            [this.routeNames.PUBLIC_GAME]: {
                gameId: this.getRouteParam("gameId"),
                itemType: this.getRouteParam("itemType"),
            },
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
        let resolvedRoute: TypedRoute = this.router.resolve(
            useLocaleRoute()(
                useMerge({
                    name: routeName,
                    params: this.getRouteParams(routeName),
                }, routeOptions),
            ),
        )

        return helpers.route(
            useMerge(resolvedRoute, {
                meta: {
                    active: resolvedRoute.fullPath === this.route.fullPath,
                },
            }),
        )
    }

    public getRouteMeta<T = null>(routeMeta: keyof RouteMeta, defaultMeta: Nullable<T> = null): T {
        return useGet(this.route.meta, routeMeta, defaultMeta)
    }

    public getRouteParam<T = string | string[]>(routeParam: keyof RouteParams): T {
        return useGet(this.route.params, routeParam, "") as T
    }

    public getRouteParams(routeName: RouteName): RouteParams {
        return useGet(this._routeParams, routeName, {})
    }

    public isRouteNameEqual(routeName: RouteName): boolean {
        return isEqual(routeName, this.route.name)
    }

    @Memoize((route: Route): string => route.fullPath)
    public get route(): Route {
        return useRoute()
    }

    @Memoize()
    public get routeFacades(): Facades {
        return useFacades()
    }

    @Memoize()
    public get routeNames(): Record<keyof typeof RouteName, RouteName> {
        return useReduce(RouteName, (
            result: Record<keyof typeof RouteName, RouteName>,
            val: RouteName,
            key: keyof typeof RouteName,
        ): Record<keyof typeof RouteName, RouteName> => useSet(result, key, val), {})
    }

    @Memoize()
    public get router(): TypedRouter {
        return useRouter()
    }
}
