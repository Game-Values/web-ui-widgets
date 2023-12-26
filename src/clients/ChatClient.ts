import type { CookieClient, StoreClient } from "~/clients"
import type { ICreateClientOpts, IPublicRoomsChunkRoom } from "matrix-js-sdk"

import { MatrixClient } from "matrix-js-sdk"

export class ChatClient extends MatrixClient {
    public constructor(
        private _cookieClient: CookieClient,
        private _storeClient: StoreClient,
    ) {
        let createOptions: ICreateClientOpts = {
            accessToken: (
                isAuthenticated() && _cookieClient.chatToken
                    ? _cookieClient.chatToken
                    : useRuntimeConfig().public.matrixChatGuestToken
            ),
            baseUrl: useRuntimeConfig().public.matrixURL,
            userId: (
                isAuthenticated() && _cookieClient.chatToken
                    ? _storeClient.userMeStore.user.chatId
                    : `@${useRuntimeConfig().public.matrixChatGuestName}:${useRuntimeConfig().public.matrixChatName}`
            ),
        }

        super(createOptions)
    }
}
