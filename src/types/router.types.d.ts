import type { Locale, RouteName } from "~/enums"

import "vue-router"

declare module "vue-router" {
    interface RouteMeta {
        auth: boolean
        layout: string
    }

    interface RouteParams {
        locale: Locale
    }

    interface RouteRecordRaw {
        name: RouteName
    }
}
