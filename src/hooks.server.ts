import { useApi } from "$api"
import { Token } from "$lib"
import { useToken } from "$model"

export async function handle({ event, resolve }): Promise<Response> {
    let { cleanupTokens, getHeaders, getToken } = useToken(event)

    event.locals = {
        api: useApi({
            baseApiParams: {
                headers: getHeaders(),
            },
        }),
        session: Object.create(null),
    }

    if (getToken(Token.ACCESS) && getToken(Token.TYPE))
        try {
            event.locals.session.user = await event.locals.api.readUserApiV1UsersGet()
        } catch {
            cleanupTokens()
        }

    return resolve(event)
}
