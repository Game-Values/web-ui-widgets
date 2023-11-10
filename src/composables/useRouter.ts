import type { Route } from "vue-router"

import { RouteName } from "~/enums"

export function useMainRoute(): Route {
    return useLocaleRoute()({
        name: RouteName.MAIN,
    })
}
