import type { IHeaders } from "$types"
import type { MaybePromise, RequestEvent, ResolveOptions } from "@sveltejs/kit"

import { useApi } from "$api"
import { Currency, Locale, Theme } from "$lib/enums"
import { getSessionHeaders } from "$lib/helpers"
import { useSession } from "$model"

export async function handle({ event, resolve }: {
    event: RequestEvent,
    resolve: (requestEvent: RequestEvent, options?: ResolveOptions) => MaybePromise<Response>
}): Promise<Response> {
    let { logout } = useSession(event)

    let headers: IHeaders = getSessionHeaders(event)

    event.locals = {
        api: useApi({
            baseApiParams: {
                headers: Object.fromEntries(headers.entries()),
            },
        }),
        session: {
            currency: Currency.EUR,
            locale: Locale.EN,
        },
    }

    if (headers.has("authorization"))
        try {
            event.locals.session.user = await event.locals.api.readUserApiV1UsersGet()
        } catch {
            logout()
        }

    return resolve(event, {
        transformPageChunk: ({ html }: { html: string }): string => (
            html
                .replace("%sveltekit.lang%", Locale.EN)
                .replace("%sveltekit.theme%", Theme.DARK)
        ),
    })
}
