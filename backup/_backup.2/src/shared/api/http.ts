import { HttpClient } from "@/schema/http-client"
import { HttpFormat, HttpHeader, cleanObject } from "~/shared/lib"

export let http: HttpClient = new HttpClient({
    baseApiParams: {
        format: HttpFormat.JSON,
        headers: cleanObject({
            [HttpHeader.AUTHORIZATION]: "",
        }),
    },
    baseUrl: import.meta.env.VITE_API_URL,
})
