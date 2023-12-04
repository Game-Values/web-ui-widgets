import type { FacadeAbstract } from "~/abstract"
import type { Callable, Nullable, Route } from "~/types"
import type {
    LocationQuery,
    LocationQueryValue,
    NavigationGuardNext,
    RouteLocationNormalized,
    RouteMeta,
    RouteParams,
    Router,
} from "vue-router"

import { RouteLayout, RouteName } from "~/enums"

export class RouterClient {
    private _next: Nullable<RouteLocationNormalized>

    private _to: Nullable<RouteLocationNormalized>

    public readonly routeNames: Record<keyof typeof RouteName, RouteName> = {
        ACCOUNT: RouteName.ACCOUNT,
        ACCOUNT_SALE: RouteName.ACCOUNT_SALE,
        ACCOUNT_SALE_EDIT: RouteName.ACCOUNT_SALE_EDIT,
        ACCOUNT_SETTINGS: RouteName.ACCOUNT_SETTINGS,
        GAME: RouteName.GAME,
        GAME_ITEM: RouteName.GAME_ITEM,
        GAME_ITEM_ORDER: RouteName.GAME_ITEM_ORDER,
        MAIN: RouteName.MAIN,
        USER: RouteName.USER,
    }

    @Memoize()
    private get _routeFacades(): Record<RouteName, Nullable<FacadeAbstract>> {
        let {
            gameFacade,
            mainFacade,
            orderFacade,
            saleFacade,
            userFacade,
        } = useFacades()

        return {
            [this.routeNames.ACCOUNT]: null,
            [this.routeNames.ACCOUNT_SALE]: saleFacade,
            [this.routeNames.ACCOUNT_SALE_EDIT]: saleFacade,
            [this.routeNames.ACCOUNT_SETTINGS]: null,
            [this.routeNames.GAME]: gameFacade,
            [this.routeNames.GAME_ITEM]: null,
            [this.routeNames.GAME_ITEM_ORDER]: orderFacade,
            [this.routeNames.MAIN]: mainFacade,
            [this.routeNames.USER]: userFacade,
        } as Record<RouteName, Nullable<FacadeAbstract>>
    }

    @Memoize()
    private get _routeLayouts(): Record<RouteName, RouteLayout> {
        return {
            [this.routeNames.ACCOUNT]: RouteLayout.DEFAULT,
            [this.routeNames.ACCOUNT_SALE]: RouteLayout.DEFAULT,
            [this.routeNames.ACCOUNT_SALE_EDIT]: RouteLayout.DEFAULT,
            [this.routeNames.ACCOUNT_SETTINGS]: RouteLayout.DEFAULT,
            [this.routeNames.GAME]: RouteLayout.GAME,
            [this.routeNames.GAME_ITEM]: RouteLayout.GAME,
            [this.routeNames.GAME_ITEM_ORDER]: RouteLayout.GAME,
            [this.routeNames.MAIN]: RouteLayout.DEFAULT,
            [this.routeNames.USER]: RouteLayout.DEFAULT,
        } as Record<RouteName, RouteLayout>
    }

    private get _routeParams(): Record<RouteName, RouteParams> {
        return {
            [this.routeNames.ACCOUNT]: {},
            [this.routeNames.ACCOUNT_SALE]: {},
            [this.routeNames.ACCOUNT_SALE_EDIT]: {
                itemId: this.route.params.itemId,
            },
            [this.routeNames.ACCOUNT_SETTINGS]: {},
            [this.routeNames.GAME]: {
                gameId: this.route.params.gameId,
            },
            [this.routeNames.GAME_ITEM]: {
                gameId: this.route.params.gameId,
                itemType: this.route.params.itemType,
            },
            [this.routeNames.GAME_ITEM_ORDER]: {
                gameId: this.route.params.gameId,
                itemId: this.route.params.itemId,
                itemType: this.route.params.itemType,
            },
            [this.routeNames.MAIN]: {},
            [this.routeNames.USER]: {},
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
        return useLocaleRoute()(
            useMerge({
                name: routeName,
                params: this.getRouteParams(routeName),
            }, routeOptions),
        ) as Route
    }

    public getRouteFacade<T = FacadeAbstract>(routeName: RouteName): Nullable<T> {
        return useGet(this._routeFacades, routeName, null) as Nullable<T>
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

    public async routeMiddleware(routeMiddleware: (next: NavigationGuardNext) => Promise<void>): Promise<void> {
        await routeMiddleware(
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
