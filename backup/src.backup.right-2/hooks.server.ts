import type { ITokenModel } from "~/shared/lib"

import { createApi } from "~/shared/api"
import { Token } from "~/shared/lib"
import { useTokenModel } from "~/shared/lib"

export async function handle({ event, resolve }): Promise<Response> {
    let tokenModel: ITokenModel = useTokenModel(event)

    event.locals = {
        api: createApi({
            baseApiParams: {
                headers: tokenModel.getRequestHeaders(),
            },
        }),
        session: Object.create(null),
    }

    // todo: api in session_model like useSessionModel().api/request (?)
    if (tokenModel.get(Token.ACCESS_TOKEN) && tokenModel.get(Token.TOKEN_TYPE))
        event.locals.session.user = await event.locals.api.readUserApiV1UsersGet()

    return resolve(event)
}
