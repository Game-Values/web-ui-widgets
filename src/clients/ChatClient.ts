import type { CookieClient, StoreClient } from "~/clients"
import type { ICreateClientOpts } from "matrix-js-sdk"

import { MatrixClient } from "matrix-js-sdk"

export class ChatClient extends MatrixClient {
    public constructor(
        private _cookieClient: CookieClient,
        private _storeClient: StoreClient,
    ) {
        let createOptions: ICreateClientOpts = {
            baseUrl: useRuntimeConfig().public.matrixURL,
        }

        if (isAuthenticated())
            useAssign(createOptions, {
                accessToken: _cookieClient.chatToken,
                userId: _storeClient.userMeStore.user.chatId,
            })

        super(createOptions)
    }
}
