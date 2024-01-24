import { API_URL } from "~/shared/config"
import { Api, HttpClient } from "~/shared/model"

import { cleanObject, HttpHeader } from "$lib"

export let { api }: Api<never> = new Api(
    new HttpClient({
        baseApiParams: {
            credentials: "include",
            format: "json",
        },
        baseUrl: API_URL,
        customFetch: (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams),
    }),
)
