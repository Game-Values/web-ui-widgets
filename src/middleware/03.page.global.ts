import type { FacadeAbstract } from "~/abstract"
import type { RouteLayout, RouteName } from "~/enums"
import type { Nullable } from "~/types"
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router"

export default defineNuxtRouteMiddleware(async (to: RouteLocationNormalized): Promise<void> => {
    let { routerClient } = useClients()

    await routerClient.routeMiddleware((next: NavigationGuardNext): Promise<void> => (
        next(to, async (): Promise<void> => {
            let routeFacade: Nullable<FacadeAbstract> = (
                routerClient.getRouteFacade(routerClient.route.name as RouteName)
            )
            if (routeFacade) {
                await routeFacade.dispose()
                await routeFacade.bootstrap()
            }

            let routeLayout: RouteLayout = routerClient.getRouteLayout(routerClient.route.name as RouteName)
            if (routeLayout)
                useAssign(routerClient.route.meta, {
                    layout: routeLayout,
                })
        })
    ))
})
