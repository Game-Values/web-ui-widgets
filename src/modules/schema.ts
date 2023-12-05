import { rm } from "node:fs/promises"
import { join } from "node:path"
import { cwd, env } from "node:process"

import { defineNuxtModule } from "@nuxt/kit"
import { generateApi, generateTemplates } from "swagger-typescript-api"

export default defineNuxtModule({
    meta: {
        configKey: "schema",
        name: "schema",
    },

    setup: async (): Promise<void> => {
        let __schema: string = join(cwd(), "schema")
        let __templates: string = join(__schema, "templates")

        if (!env.OPENAPI_URL)
            throw Error("<process.env.OPENAPI_URL> is not defined")

        await rm(__schema, {
            force: true,
            recursive: true,
        })

        await generateTemplates({
            modular: true,
            output: __templates,
        })

        await generateApi({
            enumNamesAsValues: true,
            extractEnums: true,
            extractRequestBody: true,
            extractRequestParams: true,
            extractResponseBody: true,
            extractResponseError: true,
            generateClient: true,
            generateResponses: true,
            generateRouteTypes: true,
            hooks: {
                onFormatTypeName: (typeName: string): string => typeName + "Raw",
            },
            modular: true,
            output: __schema,
            patch: true,
            singleHttpClient: true,
            sortTypes: true,
            templates: __templates,
            unwrapResponseData: true,
            url: env.OPENAPI_URL,
        })
    },
})
