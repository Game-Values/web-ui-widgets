import type { IUser } from "$schema/api"
import type { IHeaders } from "$types"
import type { RequestEvent } from "@sveltejs/kit"

import { isString, upperFirst } from "lodash-es"

import { useCookies, useSession } from "$model"

export function getSessionHeaders(requestEvent?: RequestEvent): IHeaders {
    let { getCookie } = useCookies(requestEvent?.cookies)

    let headers: IHeaders = new Headers()

    let accessToken: string | undefined = getCookie("access_token")
    let tokenType: string | undefined = getCookie("token_type")

    if (accessToken && tokenType)
        headers.set("authorization", `${upperFirst(tokenType)} ${accessToken}`)

    return headers
}

export function isSessionUser(userOrUserId: IUser | string): boolean {
    let { getSession } = useSession()

    let userId: string = isString(userOrUserId) ? userOrUserId : userOrUserId.id!

    return userId === getSession().user?.id
}
