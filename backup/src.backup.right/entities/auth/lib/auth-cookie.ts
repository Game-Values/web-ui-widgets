import type { ICookieAttributes, IToken } from "~/shared/lib"

import { HttpCookie, removeCookies, setCookies } from "$lib"

export function removeAuthCookies(): void {
    removeCookies([
        {
            name: HttpCookie.ACCESS_TOKEN,
        },
        {
            name: HttpCookie.CHAT_TOKEN,
        },
        {
            name: HttpCookie.CHAT_UID,
        },
        {
            name: HttpCookie.REFRESH_TOKEN,
        },
        {
            name: HttpCookie.TOKEN_TYPE,
        },
    ])
}

/**
 * all cookies expired 7 days
 */
export function setAuthCookies(authToken: IToken): void {
    let cookies: ICookieAttributes[] = [
        {
            expires: 7, // 7 days
            name: HttpCookie.ACCESS_TOKEN,
            value: authToken.access_token,
        },
        {
            expires: 7, // 7 days
            name: HttpCookie.TOKEN_TYPE,
            value: authToken.token_type,
        },
    ]

    if (authToken.chat_token)
        cookies.push({
            expires: 7, // 7 days
            name: HttpCookie.CHAT_TOKEN,
            value: authToken.chat_token,
        })

    if (authToken.chat_uid)
        cookies.push({
            expires: 7, // 7 days
            name: HttpCookie.CHAT_UID,
            value: authToken.chat_uid,
        })

    if (authToken.refresh_token)
        cookies.push({
            expires: 7, // 7 days
            name: HttpCookie.REFRESH_TOKEN,
            value: authToken.refresh_token,
        })

    setCookies(cookies)
}
