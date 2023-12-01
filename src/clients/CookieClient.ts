import { parse } from "cookie-es"

import { HttpCookie, HttpHeader, HttpToken } from "~/enums"

export class CookieClient {
    public get accessToken(): string | undefined {
        if (isServer())
            return useGet(this.parsedCookie, HttpCookie.ACCESS_TOKEN)
        else
            return getRef(useCookie(HttpCookie.ACCESS_TOKEN))
    }

    public set accessToken(val: null | string) {
        setRef(useCookie(HttpCookie.ACCESS_TOKEN), val)
    }

    public get parsedCookie(): Record<HttpCookie, any> {
        return parse(this.requestCookie)
    }

    public get refreshToken(): string | undefined {
        if (isServer())
            return useGet(this.parsedCookie, HttpCookie.REFRESH_TOKEN)
        else
            return getRef(useCookie(HttpCookie.REFRESH_TOKEN))
    }

    public set refreshToken(val: null | string) {
        setRef(useCookie(HttpCookie.REFRESH_TOKEN), val)
    }

    public get requestCookie(): string {
        return useGet(useRequestHeaders([HttpHeader.COOKIE]), HttpHeader.COOKIE, "")
    }

    public get tokenType(): HttpToken | undefined {
        if (isServer())
            return useGet(this.parsedCookie, HttpCookie.TOKEN_TYPE)
        else
            return getRef(useCookie(HttpCookie.TOKEN_TYPE))
    }

    public set tokenType(val: null | string) {
        setRef(useCookie(HttpCookie.TOKEN_TYPE), val)
    }
}