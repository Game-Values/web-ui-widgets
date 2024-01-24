import type { GenerateApiParamsFromSpecLiteral } from "swagger-typescript-api"
import type { Plugin } from "vite"

import { resolve } from "node:path"

import { generateApi } from "swagger-typescript-api"

export async function viteOpenapi(): Promise<Plugin> {
    let openapiJSON = (
        await fetch(import.meta.env.VITE_OPENAPI_URL)
            .then((res: Response) => res.json())
    )

    let openapiOptions: GenerateApiParamsFromSpecLiteral = {
        addReadonly: true,
        enumNamesAsValues: true,
        extractEnums: true,
        extractRequestBody: true,
        extractRequestParams: true,
        extractResponseBody: true,
        extractResponseError: true,
        generateClient: true,
        generateResponses: true,
        generateRouteTypes: true,
        generateUnionEnums: true,
        modular: true,
        output: resolve("src/shared/api"),
        patch: true,
        singleHttpClient: true,
        sortRoutes: true,
        sortTypes: true,
        typePrefix: "I",
        unwrapResponseData: true,
        spec: openapiJSON,
    }

    return {
        name: 'vite-plugin-swagger-typescript-api',
        enforce: 'pre',
        apply: 'serve',
        buildStart: async (): Promise<void> => {
            await generateApi(openapiOptions)
        },
    }
}
