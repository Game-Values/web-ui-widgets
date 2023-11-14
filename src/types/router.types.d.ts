import type { Locale, RouteName } from "~/enums"

import "vue-router"

declare module "vue-router" {
    interface RouteMeta {
        auth: boolean
        layout: string
    }

    interface RouteParams {
        locale: Locale
        slug: string
    }

    interface RouteRecordRaw {
        name: RouteName
    }
}
