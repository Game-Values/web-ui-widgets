import type { ItemType, Locale, PaymentType, RouteLayout, RouteName } from "~/enums"
import type { ComputedRef, MaybeRef } from "vue"
import type { Route as _Route } from "vue-i18n-routing"
import type { RouteLocation } from "vue-router"

import "vue-router"

export type Route = (
    _Route &
    RouteLocation &
    {
        href: string
    }
)

declare module "vue-router" {
    export interface LocationQuery {
        gameId: string
        itemType: ItemType
    }

    export interface RouteMeta {
        auth: boolean
        layout: (
            ComputedRef<RouteLayout> |
            MaybeRef<RouteLayout>
        )
    }

    export interface RouteParams {
        gameId: string
        itemId: string
        itemType: ItemType
        locale: Locale
        paymentType: PaymentType
        userId: string
    }

    export interface RouteRecordRaw {
        name: RouteName
    }
}
