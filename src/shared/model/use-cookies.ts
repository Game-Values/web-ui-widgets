import type { IValueOfEnum } from "$types"
import type { Cookies } from "@sveltejs/kit"

import cookie from "js-cookie"

import { HttpCookie } from "$lib/enums"

type IUseCookies = {
    deleteCookie(key: IValueOfEnum<HttpCookie>): void
    deleteCookies(): void
    getCookie(key: IValueOfEnum<HttpCookie>): string | undefined
    setCookie(key: IValueOfEnum<HttpCookie>, val: string): void
}

export function useCookies(requestCookies?: Cookies): IUseCookies {
    let cookies: Cookies = (requestCookies || cookie) as Cookies

    let deleteCookie: (key: IValueOfEnum<HttpCookie>) => void = (
        (key: IValueOfEnum<HttpCookie>): void => (
            (requestCookies?.delete || cookie.remove)(key, {
                expires: new Date(new Date().setDate(new Date().getDate() + 7)), // 7 days
                path: "/",
            })
        )
    )

    return {
        deleteCookie,

        deleteCookies: (): void => (
            Object
                .values<IValueOfEnum<HttpCookie>>(HttpCookie)
                .forEach(deleteCookie)
        ),

        getCookie: (key: IValueOfEnum<HttpCookie>): string | undefined => cookies.get(key),

        setCookie: (key: IValueOfEnum<HttpCookie>, val: string): void => (
            cookies.set(key, val, {
                expires: new Date(new Date().setDate(new Date().getDate() + 7)), // 7 days
                path: "/",
            })
        ),
    }
}
