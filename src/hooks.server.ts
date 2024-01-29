import { pick, upperFirst } from "lodash-es"

import { useApi } from "$api"
import { HttpHeader, Token } from "$lib/enums"
import { useToken } from "$model/token"

export async function handle({ event, resolve }): Promise<Response> {
    let token = useToken(event)
    let hasAccessToken: boolean = token.has(Token.ACCESS) && token.has(Token.TYPE)

    if (hasAccessToken)
        event.request.headers.set(
            HttpHeader.AUTHORIZATION,
            `${upperFirst(token.get(Token.TYPE))} ${token.get(Token.ACCESS)}`,
        )

    event.locals = {
        api: useApi({
            baseApiParams: {
                headers: pick(Object.fromEntries(event.request.headers), [
                    HttpHeader.AUTHORIZATION,
                    HttpHeader.COOKIE,
                ]),
            },
        }),
        session: {
            user: undefined,
        },
    }

    if (hasAccessToken)
        try {
            event.locals.session.user = await event.locals.api.readUserApiV1UsersGet()
        } catch (e) {
            token.cleanup()
        }

    return resolve(event)
}
