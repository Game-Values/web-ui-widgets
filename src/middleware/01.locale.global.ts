import type { Locale } from "~/enums"
import type { RouteLocationNormalized } from "vue-router"

import { getLocale } from "~~/common/utils"

import { DEFAULT_LOCALE, LOCALES } from "~/consts"
import { RouteName } from "~/enums"

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized): void => {
    let locale: Locale = useGet<Locale>(to.params, "locale")

    if (locale && LOCALES.includes(locale))
        return

    return navigateTo({
        name: RouteName.MAIN,
        params: {
            locale: (
                LOCALES.includes(getLocale())
                    ? getLocale()
                    : DEFAULT_LOCALE
            ),
        },
    })
})
