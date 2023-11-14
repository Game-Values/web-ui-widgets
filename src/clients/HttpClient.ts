import { HttpClient as _HttpClient } from "#schema/http-client"

export class HttpClient extends _HttpClient {
    public baseUrl: string = useRuntimeConfig().public.apiURL
}
