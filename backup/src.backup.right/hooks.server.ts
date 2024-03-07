import type { IUser } from "~/shared/lib"

import { upperFirst } from "lodash-es"

import { api } from "~/shared/api"

import { HttpCookie, HttpHeader } from "$lib"

// todo: fetch user
export async function handle({ event, resolve }): Promise<Response> {
    let accessToken: string | undefined = event.cookies.get(HttpCookie.ACCESS_TOKEN)
    let tokenType: string | undefined = event.cookies.get(HttpCookie.TOKEN_TYPE)

    if (accessToken && tokenType)
        event.locals.user = await api.readUserApiV1UsersGet({
            headers: {
                [HttpHeader.AUTHORIZATION]: `${upperFirst(tokenType)} ${accessToken}`,
            },
        })

    // event.locals.authToken = {
    //     access_token: event.cookies.get(HttpCookie.ACCESS_TOKEN) || "",
    //     chat_token: event.cookies.get(HttpCookie.CHAT_TOKEN) || "",
    //     chat_uid: event.cookies.get(HttpCookie.CHAT_UID) || "",
    //     refresh_token: event.cookies.get(HttpCookie.REFRESH_TOKEN) || "",
    //     token_type: event.cookies.get(HttpCookie.TOKEN_TYPE) || "",
    // }

    return resolve(event)
}
