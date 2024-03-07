import type { RequestEvent } from "@sveltejs/kit"
import type { ITokenModel } from "~/shared/lib"
import type Cookies from "js-cookie"

import Cookie from "js-cookie"
import { get, set, upperFirst } from "lodash-es"

import { browser } from "$app/environment"
import { HttpHeader, Token } from "$lib"

export function useTokenModel(requestEvent?: RequestEvent): ITokenModel {
    let cookie: Cookies.CookiesStatic = (
        browser
            ? Cookie
            : requestEvent!.cookies
    ) as Cookies.CookiesStatic

    let token = Object.defineProperties(Object.create(null), {
        [Token.ACCESS_TOKEN]: {
            get: (): string | undefined => (
                cookie.get(Token.ACCESS_TOKEN)
            ),
            set: (val: string): void => {
                cookie.set(Token.ACCESS_TOKEN, val)
            },
        },

        [Token.CHAT_TOKEN]: {
            get: (): string | undefined => (
                cookie.get(Token.CHAT_TOKEN)
            ),
            set: (val: string): void => {
                cookie.set(Token.CHAT_TOKEN, val)
            },
        },

        [Token.CHAT_UID_TOKEN]: {
            get: (): string | undefined => (
                cookie.get(Token.CHAT_UID_TOKEN)
            ),
            set: (val: string): void => {
                cookie.set(Token.CHAT_UID_TOKEN, val)
            },
        },

        [Token.REFRESH_TOKEN]: {
            get: (): string | undefined => (
                cookie.get(Token.REFRESH_TOKEN)
            ),
            set: (val: string): void => {
                cookie.set(Token.REFRESH_TOKEN, val)
            },
        },

        [Token.TOKEN_TYPE]: {
            get: (): string | undefined => (
                cookie.get(Token.TOKEN_TYPE)
            ),
            set: (val: string): void => {
                cookie.set(Token.TOKEN_TYPE, val)
            },
        },
    })

    return {
        get: (key: Token) => get(token, key),

        getAll: () => ({ ...token }),

        getRequestHeaders: () => {
            let headers: Headers = new Headers()
            if (get(token, Token.ACCESS_TOKEN) && get(token, Token.TOKEN_TYPE))
                headers.set(HttpHeader.AUTHORIZATION, `${upperFirst(get(token, Token.TOKEN_TYPE))} ${get(token, Token.ACCESS_TOKEN)}`)

            return headers
        },

        set: (key: Token, val: string) => set(token, key, val),

        setAll: (tokens: Record<Token, string>) => (
            Object.entries(tokens).forEach(([key, val]) => {
                set(token, key, val)
            })
        ),
    }
}
