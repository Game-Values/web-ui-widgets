import type { RequestEvent } from "@sveltejs/kit"
import type Cookies from "js-cookie"

import Cookie from "js-cookie"
import { upperFirst } from "lodash-es"

import { browser } from "$app/environment"
import { HttpHeader, Token } from "$lib"

type IToken = {
    cleanupTokens(): void
    getHeaders(): HeadersInit
    getToken(key: Token): string | undefined
    getTokens(): Record<Token, string>
    setToken(key: Token, val: string): void
    setTokens(tokens: Record<Token, string>): void
}

type ITokenProperty = {
    get(): string | undefined
    set(val: string): string | undefined
}

type ITokenProperties = Record<Token, ITokenProperty>

function createTokenProperty(token: Token, cookie: Cookies.CookiesStatic): ITokenProperty {
    return {
        get: (): string | undefined => (
            cookie.get(token)
        ),
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
export function useToken(event?: RequestEvent): IToken {
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
        cleanupTokens: (): void => {
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

        getHeaders: (): HeadersInit => {
            let headers: HeadersInit = {}
            if (token[Token.ACCESS] && token[Token.TYPE])
                headers[HttpHeader.AUTHORIZATION] = (
                    `${upperFirst(token[Token.TYPE])} ${token[Token.ACCESS]}`
                )

            return headers
        },

        getToken: (key: Token): string | undefined => token[key],

        getTokens: (): Record<Token, string> => ({ ...token }),

        setToken: (key: Token, val: string): void => { token[key] = val },

        setTokens: (tokens: Record<Token, string>) => (
            Object.entries(tokens).forEach(([key, val]: string[]): void => {
                token[key] = val
            })
        ),
    }
}
