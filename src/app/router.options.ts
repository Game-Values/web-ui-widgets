import type { RouterConfig } from "@nuxt/schema"
import type { RouteRecordRaw, RouterHistory } from "vue-router"

import { createMemoryHistory, createWebHistory } from "vue-router"

import { Layout } from "~/enums"

const PRIVATE_PREFIX: string = "private"
const PUBLIC_PREFIX: string = "public"

function mapRoutes(routes: readonly RouteRecordRaw[]): RouteRecordRaw[] {
    return routes.map((route: RouteRecordRaw): RouteRecordRaw => {
        let isPrivate: boolean = route.name.startsWith(PRIVATE_PREFIX)
        let routePrefix: string = isPrivate ? PRIVATE_PREFIX : PUBLIC_PREFIX

        let routeName: string = (route.name as string).replace(`${routePrefix}-`, "")
        let routePath: string = route.path.replace(`/${routePrefix}`, "")
        let routeChildren: RouteRecordRaw[] = route.children?.length ? mapRoutes(route.children) : []

        return useMerge(route, {
            name: routeName,
            path: routePath,
            children: routeChildren,
            meta: {
                auth: isPrivate,
            },
        })
    })
}

export default <RouterConfig> {
    history: (baseURL: string): RouterHistory => (
        isClient()
            ? createWebHistory(baseURL)
            : createMemoryHistory(baseURL)
    ),
    routes: mapRoutes,
}
