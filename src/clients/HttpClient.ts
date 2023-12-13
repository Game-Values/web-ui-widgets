import type { FullRequestParams } from "#schema/http-client"
import type { HttpAdapter } from "~/adapters"
import type { Lazy } from "~/types"
import type { AsyncData } from "nuxt/dist/app"
import type { FetchError } from "ofetch"

import { default as hash } from "hash-sum"
import { Notice } from "vexip-ui"

import { HttpStatus } from "~/enums"

export class HttpClient {
    public constructor(
        private _httpAdapter: HttpAdapter,
    ) {}

    private _resolveRequestParams(requestParams: FullRequestParams): FullRequestParams {
        if (isObject(requestParams.body))
            requestParams.body = cleanObject(requestParams.body)

        return requestParams
    }

    public async request<T, E extends FetchError>(requestParams: FullRequestParams): Promise<{
        data: AsyncData<T, E>,
        error: AsyncData<T, E>,
    }> {
        let key: string = hash(requestParams)
        let request: Lazy<T> = (
            (): Promise<T> => this._httpAdapter.request<T, E>(
                this._resolveRequestParams(requestParams),
            )
        )

        // todo: vue-query with progress
        let { data, error }: AsyncData<T, E> = await useAsyncData<T, E>(key, request)
        let response: {
            data: T,
            error: E,
        } = {
            data: getRef(data),
            error: getRef(error),
        }

        if (response.error) {
            let errorMessage: object | string = useGet(response.error.cause, "error", (
                response.error.stack ||
                response.error.message
            ))

            Notice.error({
                background: true,
                content: JSON.stringify(errorMessage, null, 4),
                title: (response.error.statusCode || HttpStatus.INTERNAL_SERVER_ERROR).toString(),
            })

            return Promise.reject(response)
        }

        return Promise.resolve(response)
    }
}
