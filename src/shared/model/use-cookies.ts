import type { IValueOfEnum } from "$types"
import type { Cookies } from "@sveltejs/kit"

import { getCookie, removeCookie, setCookie } from "tiny-cookie"

import { HttpCookie } from "$lib/enums"

type IUseCookies = {
    deleteCookie(key: IValueOfEnum<HttpCookie>): void
    deleteCookies(): void
    getCookie(key: IValueOfEnum<HttpCookie>): string | undefined
    setCookie(key: IValueOfEnum<HttpCookie>, val: string): void
}

export function useCookies(requestCookies?: Cookies): IUseCookies {
    let use: IUseCookies = {
        deleteCookie: (key: IValueOfEnum<HttpCookie>): void => (
            (requestCookies?.delete || removeCookie)(key, { path: "/" })
        ),

        deleteCookies: (): void => (
            Object
                .values<IValueOfEnum<HttpCookie>>(HttpCookie)
                .forEach(use.deleteCookie)
        ),

        getCookie: (key: IValueOfEnum<HttpCookie>): string | undefined => (
            (requestCookies?.get || getCookie)(key) || undefined
        ),

        setCookie: (key: IValueOfEnum<HttpCookie>, val: string): void => (
            (requestCookies?.set || setCookie)(key, val, {
                expires: new Date(new Date().setDate(new Date().getDate() + 7)), // 7 days
                path: "/",
            })
        ),
    }

    return use
}
