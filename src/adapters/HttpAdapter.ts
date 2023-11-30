import type { FullRequestParams } from "#schema/http-client"
import type { QueryFunction, QueryKey, UseQueryReturnType } from "@tanstack/vue-query"
import type { CookieClient } from "~/clients"
import type { AsyncData } from "nuxt/dist/app"
import type { FetchContext } from "ofetch"

import { HttpClient } from "#schema/http-client"
import { default as hash } from "hash-sum"

import { HttpHeader, HttpToken } from "~/enums"

export class HttpAdapter extends HttpClient {
    public constructor(
        private _cookieClient: CookieClient,
    ) {
        super()
    }

    private async _queryFetch<T = any, E = any>(queryKey: QueryKey, queryFn: QueryFunction): UseQueryReturnType<T, E> {
        // return (
        //     useQueryClient().getQueryState(queryKey) ||
        //     useQuery(queryKey, queryFn).suspense()
        // )

        // let queryState: QueryState = useQueryClient().getQueryState(queryKey)

        // if (!queryState)
        //     queryState = await useQuery(queryKey, queryFn).suspense()

        return (
            useQueryClient().getQueryState(queryKey) ||
            useQuery(queryKey, queryFn).suspense()
        )
    }

    private get _requestParams(): Partial<FullRequestParams> & { baseURL: string } {
        let requestParams: Partial<FullRequestParams> & { baseURL: string } = {
            baseURL: useRuntimeConfig().public.apiURL,
            credentials: "include",
            headers: {
                [HttpHeader.ACCEPT]: "application/json",
                [HttpHeader.CONTENT_TYPE]: "application/x-www-form-urlencoded",
            },
        }

        if (this._cookieClient.accessToken) {
            let tokenType: HttpToken = (
                useUpperFirst(this._cookieClient.tokenType || HttpToken.BEARER) as HttpToken
            )

            useSet(requestParams.headers!, HttpHeader.AUTHORIZATION, `${tokenType} ${this._cookieClient.accessToken}`)
        }

        return requestParams
    }

    // todo:
    public async fetch<T, E>(requestParams: FullRequestParams): Promise<AsyncData<T, E>> {
        if (isClient()) {
            console.log(new URLSearchParams(this.toQueryString(requestParams.body)))
        }

        let queryFn: () => Promise<AsyncData<T, E>> = (
            (): Promise<AsyncData<T, E>> => useFetch<T, E>(requestParams.path, {
                key: hash(requestParams),
                onRequest: (context: FetchContext): void => {
                    useMerge(context.options, this.mergeRequestParams(this._requestParams, requestParams))

                    if (requestParams.body)
                        context.options.body = new URLSearchParams(
                            this.toQueryString(requestParams.body),
                        )
                },
            })
        )

        // if (isClient() && isSetup())
        //     return this._queryFetch([hash(requestParams)], queryFn)

        return queryFn()
    }
}
