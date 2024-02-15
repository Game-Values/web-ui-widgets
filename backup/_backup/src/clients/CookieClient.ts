import type { Nullable, Undefinable } from "~/types"

import { parse } from "cookie-es"

import { HttpCookie, HttpHeader, HttpToken } from "~/enums"

export class CookieClient {
    public get accessToken(): Undefinable<string> {
        if (isServer())
            return useGet(this.parsedCookie, HttpCookie.ACCESS_TOKEN)
        else
            return getRef(useCookie(HttpCookie.ACCESS_TOKEN))
    }

    public set accessToken(accessToken: Nullable<string>) {
        setRef(useCookie(HttpCookie.ACCESS_TOKEN), accessToken)
    }

    public get chatToken(): Undefinable<string> {
        if (isServer())
            return useGet(this.parsedCookie, HttpCookie.CHAT_TOKEN)
        else
            return getRef(useCookie(HttpCookie.CHAT_TOKEN))
    }

    public set chatToken(chatToken: Nullable<string>) {
        setRef(useCookie(HttpCookie.CHAT_TOKEN), chatToken)
    }

    public get chatUid(): Undefinable<string> {
        if (isServer())
            return useGet(this.parsedCookie, HttpCookie.CHAT_UID)
        else
            return getRef(useCookie(HttpCookie.CHAT_UID))
    }

    public set chatUid(chatUid: Nullable<string>) {
        setRef(useCookie(HttpCookie.CHAT_UID), chatUid)
    }

    public get parsedCookie(): Record<HttpCookie, any> {
        return parse(this.requestCookie)
    }

    public get refreshToken(): Undefinable<string> {
        if (isServer())
            return useGet(this.parsedCookie, HttpCookie.REFRESH_TOKEN)
        else
            return getRef(useCookie(HttpCookie.REFRESH_TOKEN))
    }

    public set refreshToken(refreshToken: Nullable<string>) {
        setRef(useCookie(HttpCookie.REFRESH_TOKEN), refreshToken)
    }

    public get requestCookie(): string {
        return useGet(useRequestHeaders([HttpHeader.COOKIE]), HttpHeader.COOKIE, "")
    }

    public get tokenType(): HttpToken {
        if (isServer())
            return useGet(this.parsedCookie, HttpCookie.TOKEN_TYPE)
        else
            return getRef(useCookie(HttpCookie.TOKEN_TYPE))
    }

    public set tokenType(tokenType: Nullable<string>) {
        setRef(useCookie(HttpCookie.TOKEN_TYPE), tokenType)
    }
}
