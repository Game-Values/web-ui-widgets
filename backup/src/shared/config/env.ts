import { get } from "lodash-es"

/**
 * @throwable
 */
function env(key: keyof ImportMetaEnv): string {
    let envVar: string = get(import.meta.env, key, "")
    if (!envVar)
        throw Error(`Env variable <${key}> is required`)

    return envVar
}

export const API_URL: string = env("VITE_API_URL")
