import type { GenerateApiParamsFromSpecLiteral } from "swagger-typescript-api"
import type { Spec } from "swagger-schema-official"

import { resolve } from "node:path"

import { generateApi } from "swagger-typescript-api"

export async function openapi(): Promise<void> {
    let openapiJSON: Spec = (
        await fetch(import.meta.env.VITE_OPENAPI_URL)
            .then((res: Response): Promise<Spec> => res.json() as Promise<Spec>)
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
        name: "openapi.ts",
        output: resolve("src/shared/api"),
        patch: true,
        singleHttpClient: true,
        sortRoutes: true,
        sortTypes: true,
        typePrefix: "I",
        unwrapResponseData: true,
        spec: openapiJSON,
    }

    await generateApi(openapiOptions)
}
