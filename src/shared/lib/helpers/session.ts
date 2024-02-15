import type { IHeaders } from "$types"
import type { RequestEvent } from "@sveltejs/kit"

import { upperFirst } from "lodash-es"

import { useCookies } from "$model"

export function getSessionHeaders(requestEvent?: RequestEvent): IHeaders {
    let { getCookie } = useCookies(requestEvent?.cookies)

    let headers: IHeaders = new Headers()

    let accessToken: string | undefined = getCookie("access_token")
    let tokenType: string | undefined = getCookie("token_type")

    if (accessToken && tokenType)
        headers.set("authorization", `${upperFirst(tokenType)} ${accessToken}`)

    return headers
}
