import type { GenerateApiParamsFromSpecLiteral } from "swagger-typescript-api"
import type { Spec } from "swagger-schema-official"

import { resolve } from "node:path"
import { env } from "node:process"

import { generateApi } from "swagger-typescript-api"

await generateApi({
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
    name: "api.ts",
    output: resolve("src", "shared", "schema"),
    patch: true,
    singleHttpClient: true,
    sortRoutes: true,
    sortTypes: true,
    typePrefix: "I",
    unwrapResponseData: true,
    spec: (
        await fetch(env.VITE_OPENAPI_URL)
            .then((res: Response): Promise<Spec> => res.json() as Promise<Spec>)
    ) satisfies Spec,
} satisfies GenerateApiParamsFromSpecLiteral)
