import type { GenerateApiParamsFromSpecLiteral } from "swagger-typescript-api"
import type { Spec } from "swagger-schema-official"

import { generateApi } from "swagger-typescript-api"

import svelteConfig from "@/svelte.config"
import { OPENAPI_URL } from "$config"

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
    output: svelteConfig.kit!.alias!.$schema,
    patch: true,
    singleHttpClient: true,
    sortRoutes: true,
    sortTypes: true,
    typePrefix: "I",
    unwrapResponseData: true,
    spec: (
        await fetch(OPENAPI_URL)
            .then((res: Response): Promise<Spec> => res.json() as Promise<Spec>)
    ) satisfies Spec,
} satisfies GenerateApiParamsFromSpecLiteral)
