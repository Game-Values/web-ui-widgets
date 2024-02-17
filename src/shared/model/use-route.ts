import type { IRouteParams, IRouteUrl } from "$types"
import type { Readable } from "svelte/store"

import { derived, get } from "svelte/store"

import { page } from "$app/stores"
import { route } from "$schema/routes"

type IUseRoute = {
    route: Readable<string>
    routeActive: Readable<boolean>
}

export function useRoute(url?: IRouteUrl, params?: IRouteParams): IUseRoute {
    let use: IUseRoute = {
        route: derived(page, ($page: App.Page): string => (
            route(url || $page.route.id as IRouteUrl, params || $page.params)
        )),

        routeActive: derived(page, ($page: App.Page): boolean => (
            get(use.route) === $page.url.pathname),
        ),
    }

    return use
}
