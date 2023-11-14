import type { Locale } from "~/enums"
import type { RouteLocationNormalized } from "vue-router"

import { getLocale } from "~~/common/utils"

import { DEFAULT_LOCALE, LOCALES } from "~/consts"
import { RouteName } from "~/enums"

function isStaticPath(path: string): boolean {
    return /^\/~\/assets/.test(path)
}

function hasLocale(locale: Locale): boolean {
    return Boolean(locale) && LOCALES.includes(locale)
}

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized): void => {
    // if (
    //     isStaticPath(to.fullPath) ||
    //     hasLocale(useGet<Locale>(to.params, "locale"))
    // )
    //     return

    // useNuxtApp()

    // return navigateTo({
    //     name: RouteName.MAIN,
    //     params: {
    //         locale: (
    //             LOCALES.includes(getLocale())
    //                 ? getLocale()
    //                 : DEFAULT_LOCALE
    //         ),
    //     },
    // })
})
