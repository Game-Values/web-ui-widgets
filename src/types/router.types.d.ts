import type { RoutesNamesList, TypedRouteFromName } from "@typed-router"
import type { GameSection, Locale, PaymentType, RouteLayout, RouteName } from "~/enums"
import type { SeoRaw } from "~/types"
import type { ComputedRef, MaybeRef } from "vue"
import type { RouteLocation } from "vue-router"

import "vue-router"

export type Route = (
    RouteLocation &
    TypedRouteFromName<RoutesNamesList>
)

declare module "vue-router" {
    interface _RouteLocationBase {
        name: RouteName
    }

    export interface LocationQuery {
        count: string
        description: string
        price: string
        price_from: string
        price_till: string
        roomId: string
        server: string
        type: GameSection

        // todo: rm
        order_id: string
        owner_id: string
    }

    export interface RouteMeta {
        active: boolean
        auth: boolean
        layout: (
            ComputedRef<RouteLayout> |
            MaybeRef<RouteLayout>
        )
        seo: SeoRaw
    }

    export interface RouteParams {
        gameId: string
        gameSection: GameSection
        itemId: string
        locale: Locale
        orderId: string
        paymentType: PaymentType
        roomId: string
        userId: string
    }
}
