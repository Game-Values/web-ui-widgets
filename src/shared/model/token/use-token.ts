import type { RequestEvent } from "@sveltejs/kit"
import type Cookies from "js-cookie"

import Cookie from "js-cookie"

import { browser } from "$app/environment"
import { Token } from "$lib/enums"

type ITokenProperty = {
    get(): string | undefined
    set(val: string): string | undefined
}

type ITokenProperties = Record<Token, ITokenProperty>

type IUseToken = {
    cleanup(): void
    get(key: Token): string | undefined
    getAll(): Record<Token, string>
    has(key: Token): boolean
    set(key: Token, val: string): void
    setAll(tokens: Record<Token, string>): void
}

function createTokenProperty(token: Token, cookie: Cookies.CookiesStatic): ITokenProperty {
    return {
        get: (): string | undefined => cookie.get(token),
        set: (val: string): string | undefined => (
            cookie.set(token, val, {
                expires: new Date(new Date().setDate(new Date().getDate() + 7)), // 7 days
                path: "/",
            })
        ),
    }
}

/**
 * @throwable
 */
export function useToken(event?: RequestEvent): IUseToken {
    let cookie = (
        browser
            ? Cookie
            : event?.cookies
    )

    if (!cookie)
        throw Error("Cookies is undefined")

    let tokenProperties: ITokenProperties = (
        Object.values(Token)
            .reduce((result: ITokenProperties, token: Token): ITokenProperties => (
                Object.assign(result, {
                    [token]: createTokenProperty(token, cookie as Cookies.CookiesStatic),
                })
            ), Object.create(null))
    )

    let token = Object.defineProperties(Object.create(null), tokenProperties)

    return {
        cleanup: (): void => {
            let removeToken = (
                browser
                    ? (cookie as Cookies.CookiesStatic).remove
                    : (cookie as RequestEvent["cookies"]).delete
            )

            Object.values(Token).forEach((val: Token): void => (
                removeToken(val, {
                    path: "/",
                })
            ))
        },

        get: (key: Token): string | undefined => token[key],

        getAll: (): Record<Token, string> => ({ ...token }),

        has: (key: Token): boolean => key in token,

        set: (key: Token, val: string): void => { token[key] = val },

        setAll: (tokens: Record<Token, string>) => (
            Object.entries(tokens).forEach(([key, val]: string[]): void => {
                token[key] = val
            })
        ),
    }
}
