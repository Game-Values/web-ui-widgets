import type { ApiConfig } from "$schema/api"

import { merge } from "lodash-es"

import { API_URL } from "$config"
import { getSessionHeaders, onClient } from "$lib/helpers"
import { useCache } from "$model"
import { Api, HttpClient } from "$schema/api"

function createApi(config?: ApiConfig): Api<unknown>["api"] {
    let defaultConfig: ApiConfig = {
        baseApiParams: {
            credentials: "include",
            format: "json",
        },
        baseUrl: API_URL,
    }

    onClient((): void => {
        Object.assign(defaultConfig.baseApiParams!, {
            headers: Object.fromEntries(getSessionHeaders().entries()),
        })
    })

    let { api }: Api<unknown> = new Api<unknown>(
        new HttpClient(merge(defaultConfig, config)),
    )

    return api
}

export function useApi(config?: ApiConfig): Api<unknown>["api"] {
    let { getCache } = (
        useCache("api", (): Api<unknown>["api"] => createApi(config))
    )

    return getCache() as Api<unknown>["api"]
}
