import type { ApiConfig } from "$api"

import { merge } from "lodash-es"

import { Api, HttpClient } from "$api"
import { browser } from "$app/environment"
import { useEnv } from "$config/env"
import { cache } from "$lib/helpers"

function createApi(config?: ApiConfig): Api<unknown>["api"] {
    let defaultConfig: ApiConfig = {
        baseApiParams: {
            credentials: "include",
            format: "json",
        },
        baseUrl: useEnv().API_URL,
    }

    let { api }: Api<unknown> = new Api<unknown>(
        new HttpClient(
            merge(defaultConfig, config),
        ),
    )

    return api
}

export function useApi(config?: ApiConfig): Api<unknown>["api"] {
    if (browser) {
        if (!cache.has("api"))
            cache.set("api", createApi(config))

        return cache.get("api") as Api<unknown>["api"]
    }

    return createApi(config)
}
