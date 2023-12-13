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

        // if (isAuthenticated())
        //     useAssign(createOptions, {
        //         accessToken: _cookieClient.accessToken,
        //         refreshToken: _cookieClient.accessToken,
        //         userId: `@${_storeClient.userMeStore.user.id}:matrix.org`,
        //     })

        super(createOptions)
    }
}
