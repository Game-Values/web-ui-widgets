import type { IRouteParams, IRouteUrl } from "$types"
import type { Readable } from "svelte/store"

import { isObject, isString } from "lodash-es"
import { derived, get } from "svelte/store"

import { page } from "$app/stores"
import { route } from "$schema/routes"

type IUseRoute = {
    route: Readable<string>
    routeActive: Readable<boolean>
    routeParams: Readable<IRouteParams>
}

export function useRoute(params?: IRouteParams): IUseRoute
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

            return route(routeUrl, routeParams)
        }),

        routeActive: derived(page, ($page: App.Page): boolean => (
            get(use.route) === $page.url.pathname),
        ),

        routeParams: derived(page, ($page: App.Page): IRouteParams => $page.params),
    }

    return use
}
