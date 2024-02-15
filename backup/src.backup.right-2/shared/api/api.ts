import type { ApiConfig } from "~/shared/model"

import { merge } from "lodash-es"

import { API_URL } from "~/shared/config"
import { Api, HttpClient, useSessionToken } from "~/shared/model"

import { browser } from "$app/environment"

let apiConfig: ApiConfig = {
    baseApiParams: {
        credentials: "include",
        format: "json",
    },
    baseUrl: API_URL,
}

if (browser)
    apiConfig.baseApiParams!.headers = useSessionToken().getRequestHeaders()

export let api: Api<unknown>["api"] = createApi(apiConfig)

export function createApi(config: ApiConfig): Api<unknown>["api"] {
    return new Api(
        new HttpClient(
            merge(apiConfig, config),
        ),
    ).api
}
