import type { CookieClient } from "~/clients"
import type { ICreateClientOpts } from "matrix-js-sdk"

import { MatrixClient } from "matrix-js-sdk"

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
}
