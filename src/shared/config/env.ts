import type { IKeyOf } from "$types"

const API_URL: string = getEnv("VITE_API_URL")

const OPENAPI_URL: string = getEnv("VITE_OPENAPI_URL")

const CANONICAL_URL: string = getEnv("VITE_CANONICAL_URL")

/**
 * @throwable
 */
function getEnv(key: IKeyOf<ImportMetaEnv>): string {
    let envVar: string | undefined = import.meta.env[key]
    if (!envVar)
        throw Error(`Env variable <${key}> is required`)

    return envVar
}

export {
    API_URL,
    CANONICAL_URL,
    OPENAPI_URL,
}
