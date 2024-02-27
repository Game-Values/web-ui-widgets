import type { IUser } from "$schema/api"
import type { IHeaders } from "$types"
import type { PrerenderOption, TrailingSlash } from "@sveltejs/kit"
import type { IDefaultLayoutData } from "~/layouts"

import { useApi } from "$api"
import { Currency, Locale } from "$lib/enums"
import { getSessionHeaders } from "$lib/helpers"
import { useSession } from "$model"

export let prerender: PrerenderOption = "auto"

export let ssr: boolean = false

export let trailingSlash: TrailingSlash = "always"

export async function load({ fetch }): Promise<IDefaultLayoutData> {
    let { readUserApiV1UsersGet } = useApi({ customFetch: fetch })
    let { getSession, logout, setSession, updateSession } = useSession()

    setSession({ currency: Currency.EUR, locale: Locale.EN })

    let headers: IHeaders = getSessionHeaders()
    if (headers.has("authorization"))
        try {
            let user: IUser = await readUserApiV1UsersGet()
            updateSession({ user })
        } catch {
            logout()
        }

    return {
        session: getSession(),
    }
}
