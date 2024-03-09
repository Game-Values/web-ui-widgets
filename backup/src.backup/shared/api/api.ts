import { Api, HttpClient } from "~/shared/api/schema"
import { HttpFormat, HttpHeader } from "~/shared/lib"
import { cleanObject } from "~/shared/lib"

export let api: Api<never>["api"] = new Api(
    new HttpClient({
        baseApiParams: {
            format: HttpFormat.JSON,
            headers: cleanObject({
                [HttpHeader.AUTHORIZATION]: "",
            }),
        },
        baseUrl: import.meta.env.VITE_API_URL,
    })
).api
