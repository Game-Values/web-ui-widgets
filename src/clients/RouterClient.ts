import type { FacadeAbstract } from "~/abstract"
import type { Callable, Nullable, Route } from "~/types"
import type {
    LocationQuery,
    LocationQueryValue,
    RouteLocationNormalized,
    RouteMeta,
    RouteParams,
    Router,
} from "vue-router"

import { helpers } from "@typed-router"

import { RouteLayout, RouteName } from "~/enums"

export class RouterClient {
    public readonly routeNames: Record<keyof typeof RouteName, RouteName> = (
        useReduce(RouteName, (
            result: Record<keyof typeof RouteName, RouteName>,
            val: RouteName,
            key: keyof typeof RouteName,
        ): Record<keyof typeof RouteName, RouteName> => useSet(result, key, val), {})
    )

    @Memoize()
    private get _routeFacades(): Record<keyof typeof RouteName, FacadeAbstract> {
        let {
            gameFacade,
            mainFacade,
            buyFacade,
            saleFacade,
            userFacade,
        } = useFacades()

        return {
            [this.routeNames.PRIVATE_GAME_ITEM_BUY]: buyFacade,
            [this.routeNames.PRIVATE_GAME_ITEM_SELL]: saleFacade,
            [this.routeNames.PRIVATE_GAME_ITEM_SELL_EDIT]: saleFacade,

            // [this.routeNames.ACCOUNT]: null,
            // [this.routeNames.ACCOUNT_SALE]: saleFacade,
            // [this.routeNames.ACCOUNT_SALE_EDIT]: saleFacade,
            // [this.routeNames.ACCOUNT_SETTINGS]: null,
            [this.routeNames.PUBLIC_GAME]: gameFacade,
            // [this.routeNames.GAME_ITEM]: null,
            // [this.routeNames.GAME_ITEM_ORDER]: orderFacade,
            [this.routeNames.PUBLIC_MAIN]: mainFacade,
            // [this.routeNames.USER]: userFacade,
        }
    }

    @Memoize()
    private get _routeLayouts(): Record<keyof typeof RouteName, RouteLayout> {
        return {
            [this.routeNames.PUBLIC_GAME]: RouteLayout.GAME,
        }
    }

    private get _routeParams(): Record<keyof typeof RouteName, RouteParams> {
        return {
            [this.routeNames.PRIVATE_GAME_ITEM_BUY]: (
                usePick(this.route.params, [
                    "gameId",
                    "itemId",
                    "itemType",
                ])
            ),
            [this.routeNames.PRIVATE_GAME_ITEM_SELL_EDIT]: (
                usePick(this.route.params, [
                    "itemId",
                ])
            ),
            [this.routeNames.PUBLIC_GAME]: (
                usePick(this.route.params, [
                    "gameId",
                    "itemType",
                ])
            ),
        } as Record<RouteName, RouteParams>
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
        return helpers.route(
            useMerge({
                name: routeName,
                params: this.getRouteParams(routeName),
            }, routeOptions),
        )
    }

    public getRouteFacade<T = FacadeAbstract>(routeName: RouteName): Nullable<T> {
        return useGet(this._routeFacades, routeName, null)
    }

    public getRouteLayout(routeName: RouteName): RouteLayout {
        return useGet(this._routeLayouts, routeName, RouteLayout.DEFAULT)
    }

    public getRouteMeta<T = any>(routeMeta: keyof RouteMeta): Nullable<T> {
        return useGet(this.route.meta, routeMeta, null) as Nullable<T>
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

    public isRouteNameEqual(routeName: RouteName): boolean {
        return isEqual(routeName, this.route.name)
    }

    public async routeMiddleware(
        middleware: (
            next: (to: RouteLocationNormalized, cb: Callable<Promise<void>>) => Promise<void>,
        ) => Promise<void>,
    ): Promise<void> {
        await middleware(
            async (to: RouteLocationNormalized, cb: Callable<Promise<void>>): Promise<void> => {
                Object.defineProperty(this, "route", {
                    configurable: true,
                    get: (): Route => to,
                })

                await cb()

                Object.defineProperty(this, "route", {
                    configurable: true,
                    get: (): Route => useRoute(),
                })
            },
        )
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
