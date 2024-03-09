import type { CookieClient } from "~/clients"
import type { ICreateClientOpts } from "matrix-js-sdk"

import { MatrixClient, Method } from "matrix-js-sdk"

import { HttpHeader } from "~/enums"

export class ChatClient extends MatrixClient {
    public constructor(
        private _cookieClient: CookieClient,
    ) {
        let createOptions: ICreateClientOpts = {
            accessToken: (
                isAuthenticated()
                    ? _cookieClient.chatToken
                    : useRuntimeConfig().public.matrixChatGuestToken
            ),
            baseUrl: useRuntimeConfig().public.matrixURL,
            userId: (
                isAuthenticated()
                    ? _cookieClient.chatUid
                    : `@${useRuntimeConfig().public.matrixChatGuestName}:${useRuntimeConfig().public.matrixChatName}`
            ),
        }

        super(createOptions)
    }

    public async syncClient(): Promise<any> {
        return await this.http.request(Method.Get, "/sync", {}, undefined, {
            headers: {
                [HttpHeader.AUTHORIZATION]: `Bearer ${this._cookieClient.chatToken}`,
            },
        })
    }
}
