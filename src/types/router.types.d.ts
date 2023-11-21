import type { Layout, Locale, OrderType, PaymentType, RouteName } from "~/enums"
import type { Route as _Route } from "vue-i18n-routing"
import type { RouteLocation } from "vue-router"

import "vue-router"

export type Route = (
    _Route |
    (
        RouteLocation & {
            href: string
        }
    ) |
    undefined
)

declare module "vue-router" {
    interface RouteMeta {
        auth: boolean
        layout: Layout
    }

    interface RouteParams {
        gameSlug: string
        locale: Locale
        orderId: number
        orderType: OrderType
        paymentType: PaymentType
    }

    interface RouteRecordRaw {
        name: RouteName
    }
}
