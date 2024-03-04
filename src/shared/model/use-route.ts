import type { IRouteMeta, IRouteParams, IRouteQuery, IRouteUrl } from "$types"
import type { Readable } from "svelte/store"

import { isObject, isString } from "lodash-es"
import { derived, get } from "svelte/store"

import { page } from "$app/stores"
import { ROUTE_META } from "$lib/consts"
import { route } from "$schema/routes"

type IUseRoute = {
    getRoute(): string
    route: Readable<string>
    routeActive: Readable<boolean>
    routeMeta: Readable<IRouteMeta>
    routeParams: Readable<IRouteParams>
    routeQuery: Readable<IRouteQuery>
    routeRequiredAuth: Readable<boolean>
}

export function useRoute(urlOrParams?: IRouteParams | IRouteUrl, params?: IRouteParams): IUseRoute {
    let resolveRouteUrl: ($page: App.Page) => IRouteUrl = ($page: App.Page): IRouteUrl => (
        isString(urlOrParams)
            ? urlOrParams
            : $page.route.id!
                .replace(/\/\[\[.+?]]/g, "") // replace optional params from id like <[[optional_param=optional_param_value]]>
                .replace(/\((.*?)\//g, "") // replace all groups https://kit.svelte.dev/docs/advanced-routing#advanced-layouts-group
    ) as IRouteUrl

    let use: IUseRoute = {
        getRoute: (): string => get(use.route),

        route: derived(page, ($page: App.Page): string => {
            let routeParams: IRouteParams = (
                isObject(urlOrParams)
                    ? { ...get(use.routeParams), ...urlOrParams }
                    : (params || get(use.routeParams))
            )

            // @ts-expect-error routeUrl & routeParams are correct
            return route(resolveRouteUrl($page), routeParams)
        }),

        routeActive: derived(page, ($page: App.Page): boolean => (
            $page.url.pathname.startsWith(get(use.route))
        )),

        routeMeta: derived(page, ($page: App.Page): IRouteMeta => (
            ROUTE_META[resolveRouteUrl($page)] || Object.create(null)
        )),

        routeParams: derived(page, ($page: App.Page): IRouteParams => $page.params),

        routeQuery: derived(page, ($page: App.Page): IRouteParams => Object.fromEntries($page.url.searchParams)),

        routeRequiredAuth: derived(page, ($page: App.Page): boolean => $page.route.id!.includes("(session)")),
    }

    return use
}
