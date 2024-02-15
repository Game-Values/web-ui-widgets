import type { IHeaders } from "$types"

import { useApi } from "$api"
import { getSessionHeaders } from "$lib/helpers"
import { useSession } from "$model"

export async function handle({ event, resolve }): Promise<Response> {
    let { logout } = useSession()

    let headers: IHeaders = getSessionHeaders(event)

    event.locals = {
        api: useApi({
            baseApiParams: {
                headers: headers.toJSON(),
            },
        }),
        session: Object.create(null),
    }

    if (headers.has("authorization"))
        try {
            event.locals.session.user = await event.locals.api.readUserApiV1UsersGet()
        } catch {
            logout()
        }

    return resolve(event)
}
