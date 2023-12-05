import type { RouteName } from "~/enums"
import type { Callable } from "~/types"
import type { RouteLocationNormalized } from "vue-router"

export default defineNuxtRouteMiddleware(async (to: RouteLocationNormalized): Promise<void> => {
    let { routerClient } = useClients()

    await routerClient.routeMiddleware(
        async (next: (to: RouteLocationNormalized, cb: Callable<Promise<void>>) => Promise<void>): Promise<void> => (
            next(to, async (): Promise<void> => {
                let routeName: RouteName = routerClient.route.name as RouteName
                await routerClient.getRouteFacade(routeName)?.bootstrap()
                useSet(routerClient.route.meta, "layout", routerClient.getRouteLayout(routeName))
            })
        ),
    )
})
