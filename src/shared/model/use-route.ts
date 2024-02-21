import type { IRouteParams, IRouteQuery, IRouteUrl } from "$types"
import type { Readable } from "svelte/store"

import { isObject, isString } from "lodash-es"
import { derived, get } from "svelte/store"

import { page } from "$app/stores"
import { route } from "$schema/routes"

type IUseRoute = {
    route: Readable<string>
    routeActive: Readable<boolean>
    routeParams: Readable<IRouteParams>
    routeQuery: Readable<IRouteQuery>
    routeRequiredAuth: Readable<boolean>
}

export function useRoute(urlOrParams?: IRouteParams | IRouteUrl, params?: IRouteParams): IUseRoute {
    let use: IUseRoute = {
        route: derived(page, ($page: App.Page): string => {
            let routeParams: IRouteParams = (
                isObject(urlOrParams)
                    ? { ...get(use.routeParams), ...urlOrParams }
                    : (params || get(use.routeParams))
            )

            let routeUrl: IRouteUrl = (
                isString(urlOrParams)
                    ? urlOrParams
                    : $page.route.id!.replace(/\/\[\[.+?]]/g, "") // replace optional params from id like <[[optional_param=optional_param_value]]>
            ) as IRouteUrl

            // @ts-expect-error routeParams is correct
            return route(routeUrl, routeParams)
        }),

        routeActive: derived(page, ($page: App.Page): boolean => (
            get(use.route) === $page.url.pathname),
        ),

        routeParams: derived(page, ($page: App.Page): IRouteParams => $page.params),

        routeQuery: derived(page, ($page: App.Page): IRouteParams => Object.fromEntries($page.url.searchParams)),

        routeRequiredAuth: derived(page, ($page: App.Page): boolean => $page.route.id!.includes("(session)")),
    }

    return use
}
