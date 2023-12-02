import type { ItemType, Layout, Locale, PaymentType, RouteName } from "~/enums"
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
    interface LocationQuery {
        gameId: string
        itemType: ItemType
    }

    interface RouteMeta {
        auth: boolean
        layout: Layout
    }

    interface RouteParams {
        gameId: string
        itemType: ItemType
        locale: Locale
        orderId: number
        paymentType: PaymentType
        userId: string
    }

    interface RouteRecordRaw {
        name: RouteName
    }
}
