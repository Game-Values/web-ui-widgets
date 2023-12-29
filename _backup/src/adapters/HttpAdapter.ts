import type { ApiConfig } from "#schema/http-client"
import type { CookieClient } from "~/clients"

import { HttpClient } from "#schema/http-client"

import { HttpHeader, HttpToken } from "~/enums"

export class HttpAdapter extends HttpClient {
    public constructor(
        private _cookieClient: CookieClient,
    ) {
        let apiConfig: ApiConfig = {
            baseApiParams: {
                format: "json",
            },
            baseUrl: useRuntimeConfig().public.apiURL,
        }

        if (_cookieClient.accessToken) {
            let tokenType: HttpToken = (
                useUpperFirst(_cookieClient.tokenType || HttpToken.BEARER) as HttpToken
            )

            apiConfig.baseApiParams!.headers = {
                [HttpHeader.AUTHORIZATION]: `${tokenType} ${_cookieClient.accessToken}`,
            }
        }

        super(apiConfig)
    }
}
