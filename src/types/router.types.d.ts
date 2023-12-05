import type { RoutesNamesList, TypedRouteFromName } from "@typed-router"
import type { ItemType, Locale, PaymentType, RouteLayout, RouteName } from "~/enums"
import type { ComputedRef, MaybeRef } from "vue"
import type { RouteLocation } from "vue-router"

import "vue-router"

export type Route = (
    RouteLocation &
    TypedRouteFromName<RoutesNamesList>
)

declare module "vue-router" {
    export interface LocationQuery {
        // todo: (?)
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
