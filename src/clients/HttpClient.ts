import { HttpClient as Http } from "#schema/http-client"

export class HttpClient extends Http {
    public baseUrl: string = useRuntimeConfig().public.apiURL
}
