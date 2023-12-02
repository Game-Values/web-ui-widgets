import type { RouterConfig } from "@nuxt/schema"
import type { RouteName } from "~/enums"
import type { RouteRecordRaw, RouterHistory } from "vue-router"

import { createMemoryHistory, createWebHistory } from "vue-router"

const [PRIVATE_PREFIX, PUBLIC_PREFIX]: string[] = ["private", "public"]

export default <RouterConfig> {
    history: (baseURL: string): RouterHistory => (
        isClient()
            ? createWebHistory(baseURL)
            : createMemoryHistory(baseURL)
    ),
    routes: function mapRoutes(routes: readonly RouteRecordRaw[]): RouteRecordRaw[] {
        return routes.map((route: RouteRecordRaw): RouteRecordRaw => {
            let isPrivate: boolean = (route.name as RouteName).startsWith(PRIVATE_PREFIX)
            let routePrefix: string = isPrivate ? PRIVATE_PREFIX : PUBLIC_PREFIX
            let routePath: string = route.path.replace(`/${routePrefix}`, "")
            let routeChildren: RouteRecordRaw[] = route.children?.length ? mapRoutes(route.children) : []

            return useMerge(route, {
                children: routeChildren,
                meta: {
                    auth: isPrivate,
                },
                path: routePath,
            })
        })
    },
}
